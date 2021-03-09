const getLowestSum = require('./getSum');

test('should get the two lowest numbers and sum them', () => {
    expect(getLowestSum([2,5,3,4,8,9])).toEqual(5);
});
