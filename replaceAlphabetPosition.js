function alphabetPosition(text) {
    text = text.replace(/[&\/\\#@,|+-=_()[$~%^.;'":*?!<>{}1234567890]/g ,'').toLowerCase().split("");
    text = text.filter(e => e !== '')
    
    let alphaStr = {
      "a": 1,
      "b": 2,
      "c": 3,
      "d": 4,
      "e": 5,
      "f": 6,
      "g": 7,
      "h": 8,
      "i": 9,
      "j": 10,
      "k": 11,
      "l": 12,
      "m": 13,
      "n": 14,
      "o": 15,
      "p": 16,
      "q": 17,
      "r": 18,
      "s": 19,
      "t": 20,
      "u": 21,
      "v": 22,
      "w": 23,
      "x": 24,
      "y": 25,
      "z": 26,
    }
    let indexString = []
    for(let i in text){
      if(text[i] === " " || text[i] === "]"){
        i++
      } else {
        indexString.push(alphaStr[text[i]])
        
      }
    }
    return text === '' ? '' : indexString.join(' ')
  }