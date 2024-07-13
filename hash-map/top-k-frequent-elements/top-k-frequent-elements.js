/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * time complexity: O(n), space: On
 */
var topKFrequent = function(nums, k) {
    const count = new Map();

    for(const num of nums){
        count.set(num, (count.get(num) || 0) + 1);
    }
    const buckets = [];
    for(const [n, c] of count){
        buckets[c] = (buckets[c] || new Set()).add(n);
    }

    const result = [];
    for(let i = buckets.length - 1; i >= 0; i--){
        if(buckets[i]){
            result.push(...buckets[i]);
        }
        if(result.length === k) break;
    }
    return result;
};
