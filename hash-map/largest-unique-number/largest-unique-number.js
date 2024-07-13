/**
 * @param {number[]} nums
 * @return {number}
 */
var largestUniqueNumber = function(nums) {
    let singleNums = new Map();
    
    for(let num of nums){
        singleNums.set(num, (singleNums.get(num) || 0) + 1)
    }
    
    const max = []
    for(let [key,value] of singleNums){
        if(value === 1){
            max.push(key)
        }
    }
    
    if(max.length === 0) return -1;
    return Math.max(...max)
    
};
