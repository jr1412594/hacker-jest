// var countBits = function(n) {
//     let bit = n.toString(2).split('');
//     return bit.filter((i) => i === '1').length
//     }

//refactored
var countBits = function(n) {
    return n.toString(2).split('').filter(x => x === '1').length;
};