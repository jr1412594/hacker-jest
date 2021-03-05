// Simple, given a string of words, return the length of the shortest word(s).

function findShort(s){
    let sArray = s.split(' ');
    let length = sArray.map(word => {
        return word.length
    })
    return length.sort((a,b) => b-a)[length.length-1]
}

module.exports = findShort;