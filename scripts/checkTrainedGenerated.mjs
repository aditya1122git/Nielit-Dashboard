import { enrollmentData } from '../src/data/enrollmentData.js';

const isFemale = (r) => String(r.category ?? '').toLowerCase() === 'female';

const trained = enrollmentData.filter((r) => r.status === 'Trained');
const trainedTotal = trained.filter((r) => !isFemale(r)).reduce((s, r) => s + Number(r.student_count || 0), 0);
const trainedFemale = trained.filter((r) => isFemale(r)).reduce((s, r) => s + Number(r.student_count || 0), 0);

console.log({ trainedRecords: trained.length, trainedTotal, trainedFemale });
