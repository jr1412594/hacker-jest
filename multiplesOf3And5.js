function solution(number){
    let multipleSum = [];
    let reducer = (acc, cur) => acc + cur;
    
    for(i = 0; i < number; i++){
        if (i % 3 === 0 || i % 5 === 0){
            multipleSum.push(i)
        }
    }
    return multipleSum.reduce(reducer,0)
}