
import getDate from './getDate';

it('should correctly format the time', () => {
  const date = getDate(1112926137200);
  expect(date).toBe('April 8, 2005');
});