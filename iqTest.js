// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)



function iqTest(numbers){
    let numbersArray = numbers.split(' ');
    let evenArray = [];
    let oddArray = [];
    
    for(let i = 0; i < numbersArray.length; i++){
      if(numbersArray[i] % 2 === 0){
        evenArray.push(numbersArray[i])
      } else {
        oddArray.push(numbersArray[i])
      }
    }
    return evenArray.length === 1 ? numbersArray.indexOf(evenArray[0])+1 : numbersArray.indexOf(oddArray[0])+1
  }