// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  **/
 const twoSum = function(nums, target) {
    for(let i=0; i < nums.length; i++){
        let requiredNumber = target - nums[i]
        for(let j = i+1; j < nums.length; j++){
            if(nums[j] === requiredNumber){
                return [[i], [j]]
            }
        }
    }
};