const getCount = require('./getVowelCount');

test("gets the count of vowels 'a,e,i,o,u' in a string", () => {
    expect(getCount('aaa')).toBe(3);
});
test("gets the count of vowels 'a,e,i,o,u' in a string", () => {
    expect(getCount('ebi')).toBe(2);
});
test("gets the count of vowels 'a,e,i,o,u' in a string", () => {
    expect(getCount('o')).toBe(1);
});
test("gets the count of vowels 'a,e,i,o,u' in a string", () => {
    expect(getCount('uberuai')).toBe(5);
});