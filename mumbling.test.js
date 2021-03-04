const accum = require('./mumbling');

test('takes a string and repeates the letter in lowercase based on the index', () => {
    expect(accum('abcd')).toBe('A-Bb-Ccc-Dddd');
});