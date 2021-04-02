function digital_root(n) {
    if(n < 10){
        return n
    } 
    n = String(n).split('').reduce((acc, curr) => +acc + +curr, 0);
    return digital_root(n)
}
//refactor