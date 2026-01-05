import { enrollmentData } from '../src/data/enrollmentData.js';

const isFemale = (r) => String(r.category ?? '').toLowerCase() === 'female';

const registered = enrollmentData.filter((r) => r.status === 'Registered');
const registeredTotal = registered.filter((r) => !isFemale(r)).reduce((s, r) => s + Number(r.student_count || 0), 0);
const registeredFemale = registered.filter((r) => isFemale(r)).reduce((s, r) => s + Number(r.student_count || 0), 0);

console.log({ registeredRecords: registered.length, registeredTotal, registeredFemale });
