const lengthOfLongestSubstring = function(s){
    let count = {};
    s = s.split('')
   for(let i in s){
     s[i] !== count[i] ? count[i] = s[i] : false
   }
  return count
  }
  console.log(lengthOfLongestSubstring(s))