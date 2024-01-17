export function sum(a: number, b: number): number {
  return a + b;
}

if (process.argv.includes('err')) {
  setTimeout(() => {
    throw new Error('source maps must work');
  }, 100);
}
