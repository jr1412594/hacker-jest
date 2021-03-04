function isSquare(n){
    if(Math.sqrt(n) % 1 === 0){
        return true
    } else {
        return false
    }
}

module.exports = isSquare