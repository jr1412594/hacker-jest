const sum = require('./sum');
const greeting = require('./greeting');
const getGrade = require('./getGrade');
const rectagle = require('./rectangleObject');
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

test('sets grade based on score 26', () => {
    expect(getGrade(26)).toBe('A');
});

test('sets grade based on score of 10 to be E',() => {
    expect(getGrade(10)).toBe('E');
});

test('return rectagle object', () => {
    expect(rectagle(4,5)).toEqual({'area': 20, 'length': 4, "perimeter": 18, 'width': 5});
});