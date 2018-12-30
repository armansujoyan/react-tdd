import { max_number } from './index';

describe('maxNumber', () => {
  describe('given an empty array', () => {
    it('returns 0', () => {
      expect(max_number([])).toEqual(0);
    });
  });

  describe('given array of number', () => {
    it('returns max number', () => {
      expect(max_number([1,2,3])).toEqual(3);
    })
  })
});
