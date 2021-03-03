function disemvowel(str) {
    const regex = /[aeiou]/gi;
    return str.replace(regex,'')
}

module.exports = disemvowel;