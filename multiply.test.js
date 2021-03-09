const multiply = require('./multiply');

test('should multiply 5 times 5 to equal 25', () => {
    expect(multiply(5, 5)).toEqual(25);
});
test('should multiply 2 times 5 to equal 10', () => {
    expect(multiply(2, 5)).toEqual(10);
});
// test('should multiply 1 times 5 to equal 5', () => {
//     expect(multiply(1, 5)).toEqual(10);
// });
