import { capitalizeFirstLetter } from './helper';

describe('Helper', () => {
  it('capitalizeFirstLetter works correctly', () => {
    expect(capitalizeFirstLetter('hello world')).toBe('Hello world');
  });
});
