import { readFileSync } from 'node:fs';

const total: { [key: string]: { pct: number } } = JSON.parse(readFileSync('./coverage/coverage-summary.json', { encoding: 'utf8' })).total;

const n = Object.values(total).filter(i => typeof i.pct === 'number').map(i => i.pct);
const average = (a: number[]) => a.reduce((a, b) => a + b) / a.length;
console.log(`TOTAL COVERAGE: ${average(n).toFixed(2)}%`);
