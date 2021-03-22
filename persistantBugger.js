function persistence(num) {
    num = String(num);
    let reducer = (acc, curr) => acc * curr;
    let count = 0;

    while(num.length > 1){
        count++;
        num = num.split('').map(Number).reduce(reducer).toString()
    }
    return count
}