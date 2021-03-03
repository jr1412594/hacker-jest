// Objective: create a function that will count the number of vowels in a string


function getCount(str) {
    let vowelsCount = str.split('').filter(elem => elem === 'a' || elem === 'e' || elem === 'i' || elem === 'o' || elem === 'u')
    return vowelsCount.length;
}

module.exports = getCount;