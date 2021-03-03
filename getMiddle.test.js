const getMiddle = require('./getMiddle');

test('gets the middle two characters in the string if length is even', () => {
    expect(getMiddle('miso')).toBe('is');
});

test('gets the middle character in a string if length is odd', () => {
    expect(getMiddle('pierodi')).toBe('r');
});