export function sum(a: number, b: number): number {
  return a + b;
}

if (process.argv.includes('err')) {
  setTimeout(() => {
    throw new Error('source maps must work');
  }, 100);
}


if (process.argv.includes('http')) {
  setInterval(() => {
    console.log('sample req handled');
  }, 1000);
} else if (process.argv.includes('cli')) {
  setTimeout(() => {
    console.log('sample cli app run handled');
  }, 100);
}
