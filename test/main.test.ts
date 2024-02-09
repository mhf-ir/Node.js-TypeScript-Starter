import { expect, it, describe } from 'vitest';

import { sum } from '../src/app.js';

describe('sum', () => {
  it('sum', () => {
    expect(sum(1, 2)).toBe(3)
  });
});
