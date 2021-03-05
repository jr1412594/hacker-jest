const findShort = require('./shortestWord');

test('finds the length of the shortest word in a string', () => {
    expect(findShort('bitcoin take over the world maybe who knows perhaps')).toBe(3);
});
test('finds the length of the shortest word in a string', () => {
    expect(findShort('turns out random test cases are easier than writing out basic ones')).toBe(3);
});