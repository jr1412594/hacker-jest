function findOutlier(integers){
    let test1 = integers.find(e => e % 2 !== 0)
    let test2 = integers.find(e => e % 2 === 0)
    return  integers.filter(e => e % 2 === 0).length > 1 ? test1 : test2
}