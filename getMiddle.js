//objective, wright a function that brings back the middle characters of a string.
// if number of characters in a string is even return the two middle characters,
//if number of characters in string is odd, return only the middle character.
//if string is one letter, return that letter

function getMiddle(s){
    let count = s.length;
    if(count === 1) {
        return s;
    } else if (count %2 === 0){
        return s.slice((count/2)-1,-(count/2)+1);
    } else {
        return s.slice(Math.floor((count/2)),-Math.floor((count/2)));
    }
}

module.exports = getMiddle