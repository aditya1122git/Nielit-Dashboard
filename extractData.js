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

// Only these 3 phases are used in the dashboard
const phasesToProcess = ['Registered', 'Undergoing', 'Trained'];

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

const isPhaseValue = (value) => phasesToProcess.includes(normalizeText(value));

const tryReadCsvData = () => {
  const csvPaths = phasesToProcess
    .map(phase => {
      const path = join(__dirname, 'public', `${phase}.csv`);
      return existsSync(path) ? { phase, path } : null;
    })
    .filter(Boolean);

  if (csvPaths.length === 0) {
    return { usedCsv: false, normalizedData: [] };
  }

  const normalizedData = [];
  const missing = phasesToProcess.filter(phase => !csvPaths.some(p => p.phase === phase));
  if (missing.length) {
    console.warn(`CSV not found for: ${missing.join(', ')} (expected in /public as <Phase>.csv)`);
  }

  for (const { phase, path } of csvPaths) {
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
      const centre = normalizeText(row.Centre ?? row.centre);
      const course = normalizeText(row.Course ?? row.course);

      // Force status from filename to avoid accidental mixing/repeats
      const status = phase;

      const scCount = toInt(row.SC ?? row.sc);
      const stCount = toInt(row.ST ?? row.st);
      const ewsCount = toInt(row.EWS ?? row.ews);
      const totalCount = toInt(row.Total ?? row.total);
      const genCount = Math.max(0, totalCount - scCount - stCount - ewsCount);

      if (!centre || !state || !district || !course) continue;
      if (totalCount <= 0) continue;

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
    }
  }

  return { usedCsv: true, normalizedData };
};

const dedupeAndSum = (rows) => {
  const map = new Map();

  for (const raw of rows) {
    const centre = normalizeText(raw.centre);
    const state = normalizeText(raw.state);
    const district = normalizeText(raw.district);
    const trainingOrg = normalizeText(raw.training_org ?? raw.trainingOrg ?? 'Total') || 'Total';
    const course = normalizeText(raw.course);
    const category = normalizeText(raw.category).toUpperCase();
    const status = normalizeText(raw.status);
    const studentCount = toInt(raw.student_count);

    if (!centre || !state || !district || !course || !category || !status) continue;
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
