const highAndLow = require('./highestAndLowest');

test('brings back the highest and lowest numbers in a string', () => {
    expect(highAndLow('1 2 3 4 5')).toBe('5 1');
});
test('brings back the highest and lowest numbers in a string', () => {
    expect(highAndLow('1 2 -3 4 5')).toBe('5 -3');
});
test('brings back the highest and lowest numbers in a string', () => {
    expect(highAndLow('1 9 3 4 -5')).toBe('9 -5');
});
test('brings back the highest and lowest numbers in a string', () => {
    expect(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")).toBe('542 -214');
});