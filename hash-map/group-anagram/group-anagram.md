# 49. Group Anagrams

**Solved**  
**Medium**

## Topics
- Arrays
- Hash Tables
- Strings

## Companies

---

### Problem Statement

Given an array of strings `strs`, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

### Example 1:

**Input:** `strs = ["eat","tea","tan","ate","nat","bat"]`

**Output:** `[["bat"],["nat","tan"],["ate","eat","tea"]]`

### Example 2:

**Input:** `strs = [""]`

**Output:** `[[""]]`

### Example 3:

**Input:** `strs = ["a"]`

**Output:** `[["a"]]`

### Constraints:

- \(1 \leq \text{strs.length} \leq 10^4\)
- \(0 \leq \text{strs[i].length} \leq 100\)
- `strs[i]` consists of lowercase English letters.
