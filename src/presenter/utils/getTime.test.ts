
import getTime from './getTime';

it('should correctly format the time', () => {
  const date = getTime(1112926137200);
  expect(date).toBe('3:08 AM');
});