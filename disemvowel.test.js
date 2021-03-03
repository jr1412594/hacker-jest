const disemvowel = require('./disemvowel');

test('removes the vowels in a string and returns the string', () => {
    expect(disemvowel('This website is for losers LOL!')).toBe('Ths wbst s fr lsrs LL!')
})

test('removes the vowels in a string and returns the string', () => {
    expect(disemvowel('What the hell is wrong with you')).toBe('Wht th hll s wrng wth y')
})