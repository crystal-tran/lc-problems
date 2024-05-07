/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    const sumMap = new Map();
    let maxLen = 0;
    let sum = 0;
    
    for(let i = 0; i < nums.length; i++){
        sum += (nums[i] === 1 ? 1 : -1);
        
        if(sum === 0){
            maxLen = i + 1;
        } else if(sumMap.has(sum)){
            maxLen = Math.max(maxLen, i - sumMap.get(sum));
        } else {
            sumMap.set(sum, i);
        }
    }
    
    return maxLen
};