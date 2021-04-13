const lengthOfLongestSubstring = function(s){
    let count = {};
    s = s.split('')
   for(let i in s){
     s[i] !== count[i] ? count[i] = s[i] : false
   }
  return count
  }
  console.log(lengthOfLongestSubstring(s))

  let s = "pwwkew";
// let s = "au";
// let s = "cdd";

const lengthOfLongestSubstring = function(s){
  let subStr = "";
  let start = 0;
  let end = 0;
  let max = 0
  
    while(end < s.length){
      if(!subStr.includes(s[end])){
        subStr += s[end];
        max = Math.max(subStr.length, max)
      } else {
        subStr = subStr.slice(start, end);
        end++
      }
    }
  return subStr
}
// console.log(s.slice(2))
console.log(lengthOfLongestSubstring(s))