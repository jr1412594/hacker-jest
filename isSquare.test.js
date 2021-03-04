const isSquare = require('./isSquare');

test('returns true if number is square and false if number is not a square', () => {
    expect(isSquare(-1)).toBe(false);
});

test('returns true if number is square and false if number is not a square', () => {
    expect(isSquare(0)).toBe(true);
});

test('returns true if number is square and false if number is not a square', () => {
    expect(isSquare(3)).toBe(false);
});

test('returns true if number is square and false if number is not a square', () => {
    expect(isSquare(25)).toBe(true);
});

test('returns true if number is square and false if number is not a square', () => {
    expect(isSquare(26)).toBe(false);
});