const rectangle = require('./rectangleObject');

test('returns rectangle object based on A and B peramiters', () => {
    expect(rectangle(5,4)).toEqual({length: 5, width: 4, perimeter: 18, area: 20});
});
test('returns rectangle object based on A and B peramiters', () => {
    expect(rectangle(2,3)).toEqual({length: 2, width: 3, perimeter: 10, area: 6});
});
test('returns rectangle object based on A and B peramiters', () => {
    expect(rectangle(1,4)).toEqual({length: 1, width: 4, perimeter: 10, area: 4});
});