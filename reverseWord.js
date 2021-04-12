function reverseWords(str) {
    let strArray = str.split(' ');
    let newArray = []
    for(let i = 0; i < strArray.length; i++){
      newArray.push(strArray[i].split('').reverse().join(''))
    }
    return newArray.join(' ')
  }