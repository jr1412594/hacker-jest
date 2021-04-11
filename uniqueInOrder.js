var uniqueInOrder=function(iterable){
    let finalArray = []
    for(let i = 0; i < iterable.length; i++){
      iterable[i] !== iterable[i+1] ? finalArray.push(iterable[i]) : false
    }
    return finalArray
  }