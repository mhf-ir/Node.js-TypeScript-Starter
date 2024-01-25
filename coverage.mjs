import { readFileSync } from 'node:fs';

const { log } = console;

const n = Object.values(JSON.parse(readFileSync('./coverage/coverage-summary.json', { encoding: 'utf8' })).total).filter(i => typeof i.pct === 'number').map(i => i.pct);

const average = (a) => a.reduce((a, b) => a + b) / a.length;

log(`TOTAL COVERAGE: ${average(n).toFixed(2)}%`);
