import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      all: true,
      provider: 'v8',
      include: ['src/**/*'],
      reporter: ['text', 'json', 'html', 'lcov', 'clover', 'json-summary', 'text-summary'],
    },
  },
});
