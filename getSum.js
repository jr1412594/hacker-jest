function getLowestSum(numbers){
    return numbers.sort((a,b) => a - b).slice(0,2).reduce((acc, value) => acc + value)
}

module.exports = getLowestSum;