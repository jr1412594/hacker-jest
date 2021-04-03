function findOutlier(integers){
    let oddArray = [];
    let evenArray = [];
    for(let i in integers){
        integers[i] % 2 === 0 ? evenArray.push(integers[i]) : oddArray.push(integers[i])
    }
    return evenArray.length > oddArray.length ? oddArray[0] : evenArray[0]
}