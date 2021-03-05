const XO = require('./exesAndOhs');

test('checks if string contains the same amount of x and o,', () => {
    expect(XO('xo')).toBe(true)
})