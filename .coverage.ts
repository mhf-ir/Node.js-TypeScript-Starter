import { readFileSync, existsSync } from 'node:fs';

const { log } = console;

const coverageFile = './coverage/coverage-summary.json';

if (!existsSync(coverageFile)) {
  log(`TOTAL COVERAGE: 0.0%`);
  process.exit(1);
}

const total: { [key: string]: { pct: number } } = JSON.parse(readFileSync(coverageFile, { encoding: 'utf8' })).total;

const n = Object.values(total)
  .filter((i) => typeof i.pct === 'number')
  .map((i) => i.pct);

const average = (a: number[]): string => (a.reduce((a, b): number => a + b) / a.length).toFixed(2);

log(`TOTAL COVERAGE: ${average(n)}%`);
