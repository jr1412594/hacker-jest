const squareDigits = require('./squareEveryDigit');

test('expect this to square every digit and join them', () => {
    expect(squareDigits(9119)).toEqual(811181);
});

test('expect this to square every digit and join them', () => {
    expect(squareDigits(7474)).toEqual(49164916);
});

test('expect this to square every digit and join them', () => {
    expect(squareDigits(8386)).toEqual(6496436);
});