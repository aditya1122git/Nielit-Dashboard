import xlsx from 'xlsx';

const wb = xlsx.readFile('public/Registered.xlsx', { cellDates: false });
console.log('sheets:', wb.SheetNames);

const sheetName = wb.SheetNames[0];
const ws = wb.Sheets[sheetName];

const rows = xlsx.utils.sheet_to_json(ws, { header: 1, raw: false, defval: '' });
console.log('sheet:', sheetName, 'rows:', rows.length);

const previewCount = Math.min(25, rows.length);
for (let i = 0; i < previewCount; i++) {
  const row = rows[i];
  const trimmed = row.map((v) => String(v ?? '').trim());
  const nonEmpty = trimmed.filter(Boolean).length;
  if (nonEmpty === 0) continue;
  console.log(`row[${i}]`, trimmed.slice(0, 25));
}

const headerRow = (rows[0] || []).map((v) => String(v ?? '').trim());
const subHeaderRow = (rows[1] || []).map((v) => String(v ?? '').trim());

const findCol = (regex) => headerRow.findIndex((v) => regex.test(v));
console.log('centreCol', findCol(/centre/i));
console.log('stateCol', findCol(/^state$/i));
console.log('districtCol', findCol(/^district$/i));
console.log('trainingOrgCol', findCol(/training/i));
console.log('femaleCol', findCol(/^female$/i));

let blocks = 0;
for (let col = 0; col < subHeaderRow.length - 3; col++) {
  const sub = String(subHeaderRow[col] ?? '').trim();
  const name = String(headerRow[col] ?? '').trim();
  if (!name) continue;
  if (!/^sc$/i.test(sub)) continue;
  const st = String(subHeaderRow[col + 1] ?? '').trim();
  const ews = String(subHeaderRow[col + 2] ?? '').trim();
  const total = String(subHeaderRow[col + 3] ?? '').trim();
  if (!/^st$/i.test(st) || !/^ews$/i.test(ews) || !/^total$/i.test(total)) continue;
  blocks++;
}
console.log('detected course blocks:', blocks);
