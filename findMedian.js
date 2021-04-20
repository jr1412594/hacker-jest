var findMedianSortedArrays = function(nums1, nums2) {
    let joinedArray =  nums1.concat(nums2).sort((a,b) => a - b);
    let left = 0;
    let right = 0;
    let count = joinedArray.length;
    let result = 0
  
    if(count % 2 !== 0){
      for(let i in joinedArray){
        right = count - left - 1
        if(right === left){
          return joinedArray[i];
          left++;
        } else {
          result = joinedArray[i+1] 
        }
      }
    }
      return result


      ///will this be the one to change some stuff
  }