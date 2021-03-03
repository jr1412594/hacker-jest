const sum = require('./sum');
const greeting = require('./greeting');
const { expect } = require('@jest/globals');


test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('adds 10 + 10 to equal 20', () => {
    expect(sum(10, 10)).toBe(20);
});

test('prints Welcome to 10 Days of JavaScript!"', () => {
    expect(greeting('Welcome to 10 days of JavaScript!')).toBe('Welcome to 10 days of JavaScript!');
});


