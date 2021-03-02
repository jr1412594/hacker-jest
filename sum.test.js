const sum = require('./sum');
const greeting = require('./greeting');

test('adds 1 + 2 to equeal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('prints Welcome to 10 Days of JavaScript!"', () => {
    expect(greeting('Welcome to 10 days of JavaScript!')).toBe('Welcome to 10 days of JavaScript!');
});