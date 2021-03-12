let array = [6,3,7,4,5,1000]
const solution = () => {
 let sum
 let leftSum = 0;
 let rightSum = 0;
  if(!array || array.length === 0 ){
    return -1;
  }
  else{
    sum = array.reduce((a,b) => a + b, 0);
  }
  for(let i in array) {
    rightSum = sum - leftSum - array[i];
    if(leftSum === rightSum) { return i }
    leftSum += array[i];
  }
  return -1;
}
console.log(solution(array))