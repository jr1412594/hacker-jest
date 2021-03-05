// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    let strArray = str.toUpperCase().split('')
    let oCount = strArray.filter(e => e === 'O');
    let xCount = strArray.filter(e => e ==='X');
    return xCount.length === oCount.length ? true : false
}

module.exports = XO;