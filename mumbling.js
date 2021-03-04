function accum(s) {
    let newArray = [];

    for(i = 0; i < s.length; i++){
        newArray.push(s[i].toUpperCase()+s[i].repeat([i]).toLowerCase());
    }
        return newArray.join('-');
}

module.exports = accum;