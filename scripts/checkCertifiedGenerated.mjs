import { enrollmentData } from '../src/data/enrollmentData.js';

const isFemale = (r) => String(r.category ?? '').toLowerCase() === 'female';

const certified = enrollmentData.filter((r) => r.status === 'Certified');
const certifiedTotal = certified.filter((r) => !isFemale(r)).reduce((s, r) => s + Number(r.student_count || 0), 0);
const certifiedFemale = certified.filter((r) => isFemale(r)).reduce((s, r) => s + Number(r.student_count || 0), 0);

console.log({ certifiedRecords: certified.length, certifiedTotal, certifiedFemale });
