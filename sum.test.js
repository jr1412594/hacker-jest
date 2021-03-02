const sum = require('./sum');
const greeting = require('./greeting');
const getGrade = require('./getGrade');
const { expect } = require('@jest/globals');


test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('adds 10 + 5 to equal 15', () => {
    expect(sum(10, 5)).toBe(15);
});

test('prints Welcome to 10 Days of JavaScript!"', () => {
    expect(greeting('Welcome to 10 days of JavaScript!')).toBe('Welcome to 10 days of JavaScript!');
});

test('sets grade based on score 26', () => {
    expect(getGrade(26)).toBe('A');
});

test('sets grade based on score of 10 to be E',() => {
    expect(getGrade(10)).toBe('E');
});