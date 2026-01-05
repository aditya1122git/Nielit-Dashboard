import { readFileSync } from 'fs';
import Papa from 'papaparse';

const toNumber = (value) => {
  if (value === null || value === undefined) return 0;
  const cleaned = String(value).replace(/,/g, '').trim();
  if (!cleaned) return 0;
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : 0;
};

const safeText = (value) => (value === null || value === undefined ? '' : String(value)).trim();

const csvText = readFileSync('public/Certified.csv', 'utf8');
const parsed = Papa.parse(csvText, {
  header: true,
  skipEmptyLines: true,
  dynamicTyping: false,
});

const data = Array.isArray(parsed.data) ? parsed.data : [];

let sumTotal = 0;
let sumFemale = 0;
let sumSC = 0;
let sumST = 0;
let sumEWS = 0;

const byCentre = new Map();

for (const row of data) {
  if (!row) continue;

  const state = safeText(row.State);
  const district = safeText(row.District);
  const centre = safeText(row.Centre);
  const course = safeText(row.Course);

  if (!state || !district || !centre || !course) continue;

  const total = toNumber(row.Total);
  const female = toNumber(row.Female);
  const sc = toNumber(row.SC);
  const st = toNumber(row.ST);
  const ews = toNumber(row.EWS);

  sumTotal += total;
  sumFemale += female;
  sumSC += sc;
  sumST += st;
  sumEWS += ews;

  const prev = byCentre.get(centre) ?? { total: 0, female: 0 };
  prev.total += total;
  prev.female += female;
  byCentre.set(centre, prev);
}

console.log('Certified.csv rows:', data.length);
console.log('Certified.csv parseErrors:', (parsed.errors || []).length);
console.log({ sumTotal, sumFemale, sumSC, sumST, sumEWS });

console.log('By Centre:');
for (const [centre, v] of [...byCentre.entries()].sort((a, b) => b[1].total - a[1].total)) {
  console.log(`- ${centre}: total=${v.total}, female=${v.female}`);
}
