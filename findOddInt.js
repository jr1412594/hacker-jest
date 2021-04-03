function findOdd(A) {
    let result = 0;
    let sortA = A.sort((a,b) => a - b);
    for(let i = 0; i < sortA.length; i++){
        for(let j = 0; j < sortA.length; j++){
            if(sortA[i] === sortA[j]){
            result++
            }
        }
        if(result % 2 !== 0){
            return sortA[i]
        }
    }
}

