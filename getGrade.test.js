const getGrade = require('./getGrade');

test('check for second test suite', () => {
    expect(getGrade(26)).toBe('A')
})
test('check for second test suite', () => {
    expect(getGrade(25)).toBe('B')
})
test('check for second test suite', () => {
    expect(getGrade(19)).toBe('C')
})
test('check for second test suite', () => {
    expect(getGrade(15)).toBe('D')
})
test('check for second test suite', () => {
    expect(getGrade(10)).toBe('E')
})
test('check for second test suite', () => {
    expect(getGrade(5)).toBe('F')
})