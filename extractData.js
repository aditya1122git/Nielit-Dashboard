/**
 * Script to extract and normalize data from NIELIT Excel file
 * Run with: node extractData.js
 */

import pkg from 'xlsx';
const { readFile, utils } = pkg;
import Papa from 'papaparse';
import { writeFileSync } from 'fs';
import { existsSync, readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Excel fallback file (only loaded if CSVs are not available)
const excelFilePath = join(__dirname, 'public', 'SDUY MPR November 2025  revised 09-12-2025.xlsx');

// Phases used in the dashboard (CSV files expected in /public as <Phase>.csv)
const phasesToProcess = ['Registered', 'Undergoing', 'Trained', 'Certified'];

// When phases are provided as an Excel sheet, Female is an overall field (not per-course).
// We represent it as a dedicated Female-only row with an empty course.

const toInt = (value) => {
  if (value === null || value === undefined) return 0;
  if (typeof value === 'number') return Number.isFinite(value) ? value : 0;
  const cleaned = String(value).replace(/,/g, '').trim();
  if (!cleaned) return 0;
  const parsed = parseInt(cleaned, 10);
  return Number.isFinite(parsed) ? parsed : 0;
};

const normalizeText = (value) => {
  const text = (value ?? '')
    .toString()
    .replace(/^\uFEFF/, '')
    .replace(/\s+/g, ' ')
    .trim();
  return text;
};

const canonicalCentreName = (value) => {
  const centre = normalizeText(value);
  if (!centre) return '';

  // User-facing convention: show these centres with NIELIT prefix.
  // Also fixes common spelling variant.
  const stripped = centre.replace(/^NIELIT\s+/i, '').trim();
  const lower = stripped.toLowerCase();
  const map = new Map([
    ['bhubaneswar', 'Bhubaneswar'],
    ['bubhaneswar', 'Bhubaneswar'],
    ['ranchi', 'Ranchi'],
    ['kolkata', 'Kolkata'],
    ['patna', 'Patna'],
  ]);

  const base = map.get(lower);
  if (!base) return centre;
  return `NIELIT ${base}`;
};

const isPhaseValue = (value) => phasesToProcess.includes(normalizeText(value));

const parsePhaseXlsxRows = (xlsxPath) => {
  const workbook = readFile(xlsxPath, { cellDates: false });
  const sheetName = workbook.SheetNames?.[0];
  if (!sheetName) return [];
  const sheet = workbook.Sheets[sheetName];
  if (!sheet) return [];

  const rows = utils.sheet_to_json(sheet, { header: 1, raw: false, defval: '' });
  if (!Array.isArray(rows) || rows.length < 3) return [];

  const headerRow = rows[0].map((v) => normalizeText(v));
  const subHeaderRow = rows[1].map((v) => normalizeText(v));

  const findCol = (regex) => headerRow.findIndex((v) => regex.test(v));
  const centreCol = findCol(/centre/i);
  const stateCol = findCol(/^state$/i);
  const districtCol = findCol(/^district$/i);
  const trainingOrgCol = findCol(/training/i);
  const femaleCol = findCol(/^female$/i);

  if (centreCol < 0 || stateCol < 0 || districtCol < 0 || femaleCol < 0) return [];

  const courseBlocks = [];
  for (let col = femaleCol + 1; col < subHeaderRow.length; col++) {
    const sub = subHeaderRow[col];
    const courseName = headerRow[col];
    if (!courseName) continue;

    // Expect SC/ST/EWS/Total blocks for each course
    if (!/^sc$/i.test(sub)) continue;
    const st = normalizeText(subHeaderRow[col + 1]);
    const ews = normalizeText(subHeaderRow[col + 2]);
    const total = normalizeText(subHeaderRow[col + 3]);
    if (!/^st$/i.test(st) || !/^ews$/i.test(ews) || !/^total$/i.test(total)) continue;

    courseBlocks.push({
      name: courseName,
      startCol: col,
    });
    col += 3;
  }

  const resultRows = [];
  let currentCentre = '';
  let currentState = '';
  let currentDistrict = '';

  for (let i = 2; i < rows.length; i++) {
    const row = rows[i];
    if (!Array.isArray(row)) continue;

    const centreCell = normalizeText(row[centreCol]);
    if (centreCell) currentCentre = centreCell;
    const stateCell = normalizeText(row[stateCol]);
    if (stateCell) currentState = stateCell;
    const districtCell = normalizeText(row[districtCol]);
    if (districtCell) currentDistrict = districtCell;
    const trainingOrgCell = trainingOrgCol >= 0 ? normalizeText(row[trainingOrgCol]) : '';

    if (!currentCentre || !currentState || !currentDistrict) continue;

    // Skip subtotal rows
    if (normalizeText(trainingOrgCell).toLowerCase() === 'total') continue;
    if (normalizeText(currentDistrict).toLowerCase() === 'total') continue;

    const femaleCount = toInt(row[femaleCol]);
    if (femaleCount > 0) {
      resultRows.push({
        State: currentState,
        District: currentDistrict,
        Centre: currentCentre,
        TrainingOrg: trainingOrgCell,
        Course: '',
        SC: 0,
        ST: 0,
        EWS: 0,
        Total: 0,
        Female: femaleCount,
      });
    }

    for (const block of courseBlocks) {
      const sc = toInt(row[block.startCol]);
      const st = toInt(row[block.startCol + 1]);
      const ews = toInt(row[block.startCol + 2]);
      const total = toInt(row[block.startCol + 3]) || Math.max(0, sc + st + ews);

      if (total <= 0 && sc <= 0 && st <= 0 && ews <= 0) continue;

      resultRows.push({
        State: currentState,
        District: currentDistrict,
        Centre: currentCentre,
        TrainingOrg: trainingOrgCell,
        Course: block.name,
        SC: sc,
        ST: st,
        EWS: ews,
        Total: total,
        Female: 0,
      });
    }
  }

  return resultRows;
};

const writePhaseCsvFromXlsxRows = (rows, outputPath, phaseCategory) => {
  const map = new Map();

  for (const row of rows) {
    const state = normalizeText(row.State);
    const district = normalizeText(row.District);
    const centre = canonicalCentreName(row.Centre);
    const course = normalizeText(row.Course);
    const sc = toInt(row.SC);
    const st = toInt(row.ST);
    const ews = toInt(row.EWS);
    const total = toInt(row.Total);
    const female = toInt(row.Female);

    if (!state || !district || !centre) continue;
    if (!course && female <= 0) continue;
    if (sc <= 0 && st <= 0 && ews <= 0 && total <= 0 && female <= 0) continue;

    const key = [state, district, centre, course].join('||');
    const existing = map.get(key);
    if (existing) {
      existing.SC += sc;
      existing.ST += st;
      existing.EWS += ews;
      existing.Total += total;
      existing.Female += female;
    } else {
      map.set(key, {
        State: state,
        District: district,
        Centre: centre,
        Category: phaseCategory,
        Course: course,
        SC: sc,
        ST: st,
        EWS: ews,
        Total: total,
        Female: female,
      });
    }
  }

  const outRows = Array.from(map.values()).sort((a, b) => {
    const centreCmp = String(a.Centre).localeCompare(String(b.Centre));
    if (centreCmp !== 0) return centreCmp;
    const stateCmp = String(a.State).localeCompare(String(b.State));
    if (stateCmp !== 0) return stateCmp;
    const districtCmp = String(a.District).localeCompare(String(b.District));
    if (districtCmp !== 0) return districtCmp;
    return String(a.Course).localeCompare(String(b.Course));
  });

  const csv = Papa.unparse(outRows, {
    header: true,
    columns: ['State', 'District', 'Centre', 'Category', 'Course', 'SC', 'ST', 'EWS', 'Total', 'Female'],
    skipEmptyLines: true,
  });

  writeFileSync(outputPath, csv, 'utf8');
};

const tryReadCsvData = () => {
  const csvPaths = phasesToProcess
    .map(phase => {
      const path = join(__dirname, 'public', `${phase}.csv`);
      return existsSync(path) ? { phase, path } : null;
    })
    .filter(Boolean);

  const certifiedXlsxPath = join(__dirname, 'public', 'Certified.xlsx');
  const hasCertifiedXlsx = existsSync(certifiedXlsxPath);

  const trainedXlsxPath = join(__dirname, 'public', 'Trained.xlsx');
  const hasTrainedXlsx = existsSync(trainedXlsxPath);

  const registeredXlsxPath = join(__dirname, 'public', 'Registered.xlsx');
  const hasRegisteredXlsx = existsSync(registeredXlsxPath);

  if (csvPaths.length === 0 && !hasCertifiedXlsx && !hasTrainedXlsx && !hasRegisteredXlsx) {
    return { usedCsv: false, normalizedData: [] };
  }

  const normalizedData = [];
  const missing = phasesToProcess.filter(phase => {
    if (phase === 'Certified' && hasCertifiedXlsx) return false;
    if (phase === 'Trained' && hasTrainedXlsx) return false;
    if (phase === 'Registered' && hasRegisteredXlsx) return false;
    return !csvPaths.some(p => p.phase === phase);
  });
  if (missing.length) {
    console.warn(`CSV not found for: ${missing.join(', ')} (expected in /public as <Phase>.csv)`);
  }

  // Prefer Certified.xlsx if present (authoritative source)
  if (hasCertifiedXlsx) {
    const certifiedRows = parsePhaseXlsxRows(certifiedXlsxPath);

    // Keep Certified.csv in sync for convenience/sharing.
    try {
      const certifiedCsvOutPath = join(__dirname, 'public', 'Certified.csv');
      writePhaseCsvFromXlsxRows(certifiedRows, certifiedCsvOutPath, 'Certified');
    } catch (e) {
      console.warn(`Failed to regenerate Certified.csv from Certified.xlsx: ${e?.message || e}`);
    }

    for (const row of certifiedRows) {
      const state = normalizeText(row.State ?? row.state);
      const district = normalizeText(row.District ?? row.district);
      const centre = canonicalCentreName(row.Centre ?? row.centre);
      const course = normalizeText(row.Course ?? row.course);
      const status = 'Certified';

      const scCount = toInt(row.SC ?? row.sc);
      const stCount = toInt(row.ST ?? row.st);
      const ewsCount = toInt(row.EWS ?? row.ews);
      const totalCount = toInt(row.Total ?? row.total);
      const femaleCount = toInt(row.Female ?? row.female);
      const genCount = Math.max(0, totalCount - scCount - stCount - ewsCount);

      if (!centre || !state || !district) continue;
      if (!course && femaleCount <= 0) continue;
      if (totalCount <= 0 && femaleCount <= 0) continue;

      const trainingOrg = normalizeText(row.TrainingOrg ?? row.training_org ?? row['Training Org'] ?? '') || 'Total';

      if (genCount > 0) {
        normalizedData.push({
          centre,
          state,
          district,
          training_org: trainingOrg,
          course,
          category: 'GEN',
          status,
          student_count: genCount,
        });
      }
      if (scCount > 0) {
        normalizedData.push({
          centre,
          state,
          district,
          training_org: trainingOrg,
          course,
          category: 'SC',
          status,
          student_count: scCount,
        });
      }
      if (stCount > 0) {
        normalizedData.push({
          centre,
          state,
          district,
          training_org: trainingOrg,
          course,
          category: 'ST',
          status,
          student_count: stCount,
        });
      }
      if (ewsCount > 0) {
        normalizedData.push({
          centre,
          state,
          district,
          training_org: trainingOrg,
          course,
          category: 'EWS',
          status,
          student_count: ewsCount,
        });
      }
      if (femaleCount > 0) {
        normalizedData.push({
          centre,
          state,
          district,
          training_org: trainingOrg,
          course,
          category: 'Female',
          status,
          student_count: femaleCount,
        });
      }
    }
  }

  // Prefer Trained.xlsx if present (authoritative source)
  if (hasTrainedXlsx) {
    const trainedRows = parsePhaseXlsxRows(trainedXlsxPath);

    // Keep Trained.csv in sync for convenience/sharing.
    try {
      const trainedCsvOutPath = join(__dirname, 'public', 'Trained.csv');
      writePhaseCsvFromXlsxRows(trainedRows, trainedCsvOutPath, 'Trained');
    } catch (e) {
      console.warn(`Failed to regenerate Trained.csv from Trained.xlsx: ${e?.message || e}`);
    }

    for (const row of trainedRows) {
      const state = normalizeText(row.State ?? row.state);
      const district = normalizeText(row.District ?? row.district);
      const centre = canonicalCentreName(row.Centre ?? row.centre);
      const course = normalizeText(row.Course ?? row.course);
      const status = 'Trained';

      const scCount = toInt(row.SC ?? row.sc);
      const stCount = toInt(row.ST ?? row.st);
      const ewsCount = toInt(row.EWS ?? row.ews);
      const totalCount = toInt(row.Total ?? row.total);
      const femaleCount = toInt(row.Female ?? row.female);
      const genCount = Math.max(0, totalCount - scCount - stCount - ewsCount);

      if (!centre || !state || !district) continue;
      if (!course && femaleCount <= 0) continue;
      if (totalCount <= 0 && femaleCount <= 0) continue;

      const trainingOrg = normalizeText(row.TrainingOrg ?? row.training_org ?? row['Training Org'] ?? '') || 'Total';

      if (genCount > 0) {
        normalizedData.push({
          centre,
          state,
          district,
          training_org: trainingOrg,
          course,
          category: 'GEN',
          status,
          student_count: genCount,
        });
      }
      if (scCount > 0) {
        normalizedData.push({
          centre,
          state,
          district,
          training_org: trainingOrg,
          course,
          category: 'SC',
          status,
          student_count: scCount,
        });
      }
      if (stCount > 0) {
        normalizedData.push({
          centre,
          state,
          district,
          training_org: trainingOrg,
          course,
          category: 'ST',
          status,
          student_count: stCount,
        });
      }
      if (ewsCount > 0) {
        normalizedData.push({
          centre,
          state,
          district,
          training_org: trainingOrg,
          course,
          category: 'EWS',
          status,
          student_count: ewsCount,
        });
      }
      if (femaleCount > 0) {
        normalizedData.push({
          centre,
          state,
          district,
          training_org: trainingOrg,
          course,
          category: 'Female',
          status,
          student_count: femaleCount,
        });
      }
    }
  }

  // Prefer Registered.xlsx if present (authoritative source)
  if (hasRegisteredXlsx) {
    const registeredRows = parsePhaseXlsxRows(registeredXlsxPath);

    // Keep Registered.csv in sync for convenience/sharing.
    try {
      const registeredCsvOutPath = join(__dirname, 'public', 'Registered.csv');
      writePhaseCsvFromXlsxRows(registeredRows, registeredCsvOutPath, 'Registered');
    } catch (e) {
      console.warn(`Failed to regenerate Registered.csv from Registered.xlsx: ${e?.message || e}`);
    }

    for (const row of registeredRows) {
      const state = normalizeText(row.State ?? row.state);
      const district = normalizeText(row.District ?? row.district);
      const centre = canonicalCentreName(row.Centre ?? row.centre);
      const course = normalizeText(row.Course ?? row.course);
      const status = 'Registered';

      const scCount = toInt(row.SC ?? row.sc);
      const stCount = toInt(row.ST ?? row.st);
      const ewsCount = toInt(row.EWS ?? row.ews);
      const totalCount = toInt(row.Total ?? row.total);
      const femaleCount = toInt(row.Female ?? row.female);
      const genCount = Math.max(0, totalCount - scCount - stCount - ewsCount);

      if (!centre || !state || !district) continue;
      if (!course && femaleCount <= 0) continue;
      if (totalCount <= 0 && femaleCount <= 0) continue;

      const trainingOrg = normalizeText(row.TrainingOrg ?? row.training_org ?? row['Training Org'] ?? '') || 'Total';

      if (genCount > 0) {
        normalizedData.push({
          centre,
          state,
          district,
          training_org: trainingOrg,
          course,
          category: 'GEN',
          status,
          student_count: genCount,
        });
      }
      if (scCount > 0) {
        normalizedData.push({
          centre,
          state,
          district,
          training_org: trainingOrg,
          course,
          category: 'SC',
          status,
          student_count: scCount,
        });
      }
      if (stCount > 0) {
        normalizedData.push({
          centre,
          state,
          district,
          training_org: trainingOrg,
          course,
          category: 'ST',
          status,
          student_count: stCount,
        });
      }
      if (ewsCount > 0) {
        normalizedData.push({
          centre,
          state,
          district,
          training_org: trainingOrg,
          course,
          category: 'EWS',
          status,
          student_count: ewsCount,
        });
      }
      if (femaleCount > 0) {
        normalizedData.push({
          centre,
          state,
          district,
          training_org: trainingOrg,
          course,
          category: 'Female',
          status,
          student_count: femaleCount,
        });
      }
    }
  }

  for (const { phase, path } of csvPaths) {
    if (phase === 'Certified' && hasCertifiedXlsx) {
      // Skip Certified.csv when Certified.xlsx is present.
      continue;
    }

    if (phase === 'Trained' && hasTrainedXlsx) {
      // Skip Trained.csv when Trained.xlsx is present.
      continue;
    }

    if (phase === 'Registered' && hasRegisteredXlsx) {
      // Skip Registered.csv when Registered.xlsx is present.
      continue;
    }
    const csvText = readFileSync(path, 'utf8');
    const parsed = Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true,
      dynamicTyping: false,
    });

    if (parsed.errors?.length) {
      console.warn(`CSV parse warnings for ${phase}.csv:`);
      parsed.errors.slice(0, 5).forEach(e => console.warn(`- ${e.message}`));
    }

    for (const row of parsed.data || []) {
      const state = normalizeText(row.State ?? row.state);
      const district = normalizeText(row.District ?? row.district);
      const centre = canonicalCentreName(row.Centre ?? row.centre);
      const course = normalizeText(row.Course ?? row.course);

      // Force status from filename to avoid accidental mixing/repeats
      const status = phase;

      const scCount = toInt(row.SC ?? row.sc);
      const stCount = toInt(row.ST ?? row.st);
      const ewsCount = toInt(row.EWS ?? row.ews);
      const totalCount = toInt(row.Total ?? row.total);
      const femaleCount = toInt(row.Female ?? row.female);
      const genCount = Math.max(0, totalCount - scCount - stCount - ewsCount);

      if (!centre || !state || !district) continue;
      if (!course && femaleCount <= 0) continue;
      if (totalCount <= 0 && femaleCount <= 0) continue;

      const trainingOrg = normalizeText(row.TrainingOrg ?? row.training_org ?? row['Training Org'] ?? '') || 'Total';

      if (genCount > 0) {
        normalizedData.push({
          centre,
          state,
          district,
          training_org: trainingOrg,
          course,
          category: 'GEN',
          status,
          student_count: genCount,
        });
      }
      if (scCount > 0) {
        normalizedData.push({
          centre,
          state,
          district,
          training_org: trainingOrg,
          course,
          category: 'SC',
          status,
          student_count: scCount,
        });
      }
      if (stCount > 0) {
        normalizedData.push({
          centre,
          state,
          district,
          training_org: trainingOrg,
          course,
          category: 'ST',
          status,
          student_count: stCount,
        });
      }
      if (ewsCount > 0) {
        normalizedData.push({
          centre,
          state,
          district,
          training_org: trainingOrg,
          course,
          category: 'EWS',
          status,
          student_count: ewsCount,
        });
      }

      // Optional: Female count as its own filterable category (orthogonal to GEN/SC/ST/EWS)
      if (femaleCount > 0) {
        normalizedData.push({
          centre,
          state,
          district,
          training_org: trainingOrg,
          course,
          category: 'Female',
          status,
          student_count: femaleCount,
        });
      }
    }
  }

  return { usedCsv: true, normalizedData };
};

const dedupeAndSum = (rows) => {
  const map = new Map();

  for (const raw of rows) {
    const centre = canonicalCentreName(raw.centre);
    const state = normalizeText(raw.state);
    const district = normalizeText(raw.district);
    const trainingOrg = normalizeText(raw.training_org ?? raw.trainingOrg ?? 'Total') || 'Total';
    const course = normalizeText(raw.course);
    const rawCategory = normalizeText(raw.category);
    const upperCategory = rawCategory.toUpperCase();
    const category = ['GEN', 'SC', 'ST', 'EWS'].includes(upperCategory) ? upperCategory : rawCategory;
    const status = normalizeText(raw.status);
    const studentCount = toInt(raw.student_count);

    const categoryLower = String(category ?? '').toLowerCase();

    if (!centre || !state || !district || !category || !status) continue;
    if (!course && categoryLower !== 'female') continue;
    if (studentCount <= 0) continue;

    const key = [status, centre, state, district, trainingOrg, course, category].join('||');
    const existing = map.get(key);
    if (existing) {
      existing.student_count += studentCount;
    } else {
      map.set(key, {
        centre,
        state,
        district,
        training_org: trainingOrg,
        course,
        category,
        status,
        student_count: studentCount,
      });
    }
  }

  return Array.from(map.values());
};

// Course column structure (starting from column 10, index 10)
// Each course has 4 columns: SC, ST, EWS, Total
const courseStructure = [
  { name: 'Product Assembly Assistant', startCol: 10 },
  { name: 'O Level (IT)', startCol: 14 },
  { name: 'BCC', startCol: 18 },
  { name: 'CCC', startCol: 22 },
  { name: 'CCC Plus', startCol: 26 },
  { name: 'ECC', startCol: 30 },
  { name: 'Handicraft Design', startCol: 34 },
  { name: 'Digital Marketing', startCol: 38 },
  { name: 'Domestic Data Entry Operator', startCol: 42 },
  { name: 'Programming and Software Dev', startCol: 46 },
  { name: 'IT Essentials', startCol: 50 },
  { name: 'Tally With GST', startCol: 54 },
  { name: 'AWS Cloud Foundation', startCol: 58 },
  { name: 'AI Foundation', startCol: 62 },
];

const csvResult = tryReadCsvData();
let normalizedData = csvResult.normalizedData;

if (!csvResult.usedCsv) {
  console.log('No phase CSV files found in /public; falling back to Excel extraction.');

  if (!existsSync(excelFilePath)) {
    throw new Error(`Excel fallback file not found at: ${excelFilePath}`);
  }

  const workbook = readFile(excelFilePath);

  for (const sheetName of phasesToProcess) {
    const sheet = workbook.Sheets[sheetName];
    if (!sheet) {
      console.warn(`Sheet not found: ${sheetName}`);
      continue;
    }

    const jsonData = utils.sheet_to_json(sheet, { header: 1, defval: '' });

    let currentCentre = '';
    let currentState = '';
    let currentDistrict = '';

    // Start from row 2 (skip headers)
    for (let i = 2; i < jsonData.length; i++) {
      const row = jsonData[i];

      // Skip empty rows
      if (!row || row.length === 0) continue;

      // Check if this row has a serial number (new centre block starts)
      const serialNo = row[0];
      const centreName = row[1];
      const stateName = row[2];
      const districtName = row[3];
      const trainingOrg = row[4];

      // Update centre/state if available
      if (serialNo && typeof serialNo === 'number') {
        currentCentre = centreName || currentCentre;
        currentState = stateName || currentState;
      }

      // Update district if available
      if (districtName && districtName.toString().trim()) {
        currentDistrict = districtName;
      }

      // Skip "Total" rows and rows without training org data
      const trainingOrgText = (trainingOrg ?? '').toString().trim();
      if (!trainingOrgText) continue;
      if (trainingOrgText.toLowerCase() === 'total') continue;

      // Skip if we don't have centre info
      if (!currentCentre) continue;

      // Extract course-wise data
      courseStructure.forEach(course => {
        const scCount = toInt(row[course.startCol]);
        const stCount = toInt(row[course.startCol + 1]);
        const ewsCount = toInt(row[course.startCol + 2]);
        const totalCount = toInt(row[course.startCol + 3]);

        // Calculate GEN (General) as Total - SC - ST - EWS
        const genCount = Math.max(0, totalCount - scCount - stCount - ewsCount);

        // Only add if there's any enrollment
        if (totalCount > 0) {
          if (genCount > 0) {
            normalizedData.push({
              centre: normalizeText(currentCentre),
              state: normalizeText(currentState),
              district: normalizeText(currentDistrict),
              training_org: trainingOrgText,
              course: course.name,
              category: 'GEN',
              status: sheetName,
              student_count: genCount
            });
          }
          if (scCount > 0) {
            normalizedData.push({
              centre: normalizeText(currentCentre),
              state: normalizeText(currentState),
              district: normalizeText(currentDistrict),
              training_org: trainingOrgText,
              course: course.name,
              category: 'SC',
              status: sheetName,
              student_count: scCount
            });
          }
          if (stCount > 0) {
            normalizedData.push({
              centre: normalizeText(currentCentre),
              state: normalizeText(currentState),
              district: normalizeText(currentDistrict),
              training_org: trainingOrgText,
              course: course.name,
              category: 'ST',
              status: sheetName,
              student_count: stCount
            });
          }
          if (ewsCount > 0) {
            normalizedData.push({
              centre: normalizeText(currentCentre),
              state: normalizeText(currentState),
              district: normalizeText(currentDistrict),
              training_org: trainingOrgText,
              course: course.name,
              category: 'EWS',
              status: sheetName,
              student_count: ewsCount
            });
          }
        }
      });
    }
  }
}

// Final cleanup: normalize + de-duplicate (prevents accidental repeated rows)
normalizedData = dedupeAndSum(normalizedData);

// Generate summary stats
const totalStudents = normalizedData.reduce((sum, d) => sum + toInt(d.student_count), 0);
const uniqueCentres = [...new Set(normalizedData.map(d => d.centre))];
const uniqueCourses = [...new Set(normalizedData.map(d => d.course))];
const uniqueStates = [...new Set(normalizedData.map(d => d.state))];
const uniqueDistricts = [...new Set(normalizedData.map(d => d.district))];
const uniqueStatuses = [...new Set(normalizedData.map(d => d.status))];

console.log('\n=== DATA EXTRACTION SUMMARY ===');
console.log(`Total Records: ${normalizedData.length}`);
console.log(`Total Students: ${totalStudents}`);
console.log(`Centres: ${uniqueCentres.length}`);
console.log(`States: ${uniqueStates.length}`);
console.log(`Districts: ${uniqueDistricts.length}`);
console.log(`Courses: ${uniqueCourses.length}`);
console.log(`Statuses: ${uniqueStatuses.length}`);
console.log(`\nStatuses: ${uniqueStatuses.join(', ')}`);
console.log('\nCentres:', uniqueCentres.join(', '));
console.log('\nCourses:', uniqueCourses.join(', '));

// Write to JavaScript file for import
const jsContent = `/**
 * NIELIT SDUY Student Enrollment Data
 * Auto-generated from: phase CSV files (preferred) or SDUY MPR November 2025 revised 09-12-2025.xlsx (fallback)
 * Generated on: ${new Date().toISOString()}
 * 
 * DATA CLEANING LOGIC:
 * ====================
 * 1. Source phases: ${phasesToProcess.join(', ')}
 * 2. Multi-row headers: Row 0-1 contain headers with merged cells
 * 3. Course columns: Each course has 4 sub-columns (SC, ST, EWS, Total)
 * 4. GEN category calculated as: Total - SC - ST - EWS
 * 5. Status field added to track which sheet the data came from
 * 5. Hierarchical structure: Centre > State > District > Training Org
 * 6. Empty rows and "Total" summary rows are excluded
 * 7. Only records with student_count > 0 are included
 */

export const enrollmentData = ${JSON.stringify(normalizedData, null, 2)};

// Helper functions
export const getUniqueCentres = () => [...new Set(enrollmentData.map(d => d.centre))];
export const getUniqueCourses = () => [...new Set(enrollmentData.map(d => d.course))];
export const getUniqueCategories = () => [...new Set(enrollmentData.map(d => d.category))];
export const getUniqueStates = () => [...new Set(enrollmentData.map(d => d.state))];
export const getUniqueDistricts = () => [...new Set(enrollmentData.map(d => d.district))];
export const getUniqueTrainingOrgs = () => [...new Set(enrollmentData.map(d => d.training_org))];
export const getUniqueStatuses = () => [...new Set(enrollmentData.map(d => d.status))];
`;

const outputPath = join(__dirname, 'src', 'data', 'enrollmentData.js');
writeFileSync(outputPath, jsContent, 'utf8');
console.log(`\nData written to: ${outputPath}`);
