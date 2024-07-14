# 128. Longest Consecutive Sequence

## Solved
**Difficulty:** Medium

## Topics
- Arrays
- Hash Tables

## Companies
- [List companies here if known, or remove this section]

## Problem Description
Given an unsorted array of integers `nums`, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

## Examples

### Example 1:
**Input:**
```
nums = [100, 4, 200, 1, 3, 2]
```
**Output:**
```
4
```
**Explanation:** 
The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

### Example 2:
**Input:**
```
nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
```
**Output:**
```
9
```

## Constraints:
- \(0 \leq \text{nums.length} \leq 10^5\)
- \(-10^9 \leq \text{nums[i]} \leq 10^9\)

## Solution
```javascript
class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numsSet = new Set(nums);
        let longestLength = 0;
        if (nums.length === 0) return longestLength;

        for (const num of nums) {
            if (!numsSet.has(num - 1)) {
                let currNum = num;
                let currLength = 1;
                while (numsSet.has(currNum + 1)) {
                    currNum += 1;
                    currLength += 1;
                }
                longestLength = Math.max(longestLength, currLength);
            }
        }
        return longestLength;
    }
}
```
