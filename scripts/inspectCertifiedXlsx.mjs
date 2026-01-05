import xlsx from 'xlsx';

const wb = xlsx.readFile('public/Certified.xlsx', { cellDates: false });
console.log('sheets:', wb.SheetNames);

const sheetName = wb.SheetNames[0];
const ws = wb.Sheets[sheetName];

const rows = xlsx.utils.sheet_to_json(ws, { header: 1, raw: false, defval: '' });
console.log('sheet:', sheetName, 'rows:', rows.length);

const previewCount = Math.min(20, rows.length);
for (let i = 0; i < previewCount; i++) {
  const row = rows[i];
  const trimmed = row.map((v) => String(v ?? '').trim());
  const nonEmpty = trimmed.filter(Boolean).length;
  if (nonEmpty === 0) continue;
  console.log(`row[${i}]`, trimmed.slice(0, 25));
}

// Find header-like rows
const findRowIndex = (predicate) => {
  for (let i = 0; i < rows.length; i++) {
    const r = rows[i].map((v) => String(v ?? '').trim());
    if (predicate(r)) return i;
  }
  return -1;
};

const headerRowIdx = findRowIndex((r) => r.some((v) => /^state$/i.test(v)) && r.some((v) => /^district$/i.test(v)));
console.log('headerRowIdx:', headerRowIdx);

const subHeaderRowIdx = findRowIndex((r) => {
  let sc = 0;
  let st = 0;
  let ews = 0;
  let total = 0;
  for (const v of r) {
    if (/^sc$/i.test(v)) sc++;
    else if (/^st$/i.test(v)) st++;
    else if (/^ews$/i.test(v)) ews++;
    else if (/^total$/i.test(v)) total++;
  }
  return sc >= 3 && st >= 3 && ews >= 3 && total >= 3;
});
console.log('subHeaderRowIdx:', subHeaderRowIdx);

const femaleHeaderIdx = findRowIndex((r) => r.some((v) => /^female$/i.test(v)));
console.log('femaleHeaderRowIdx:', femaleHeaderIdx);
