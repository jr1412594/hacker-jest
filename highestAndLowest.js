// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
    let lowest = [];
    let highest = [];
    let numArray = numbers.split(' ').sort((a,b) => b-a);

    lowest.push(numArray[numArray.length-1]);
    highest.push(numArray[0]);
    return highest.concat(lowest).join(' ').toString()

};

module.exports = highAndLow;