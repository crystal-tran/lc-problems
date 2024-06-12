# Remove All Adjacent Duplicates In String

## Problem Description

You are given a string `s` consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

We repeatedly make duplicate removals on `s` until we no longer can.

Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.

## Examples

### Example 1
- **Input:** `s = "abbaca"`
- **Output:** `"ca"`
- **Explanation:** 
  For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move. The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".

### Example 2
- **Input:** `s = "azxxzy"`
- **Output:** `"ay"`

## Constraints
- `1 <= s.length <= 10^5`
- `s` consists of lowercase English letters.

## Solution

To solve this problem, we can use a stack data structure to help manage the removals. The idea is to traverse the string and use the stack to keep track of characters. If the current character matches the top of the stack, we pop the stack (remove the duplicate). If it doesn't match, we push the character onto the stack.

### Steps:
1. Initialize an empty stack.
2. Iterate through each character in the string `s`.
3. If the stack is not empty and the top of the stack is equal to the current character, pop the stack.
4. Otherwise, push the current character onto the stack.
5. After iterating through the string, join the characters in the stack to form the result string.

### Example Code (Python):
```python
def removeDuplicates(s: str) -> str:
    stack = []
    
    for char in s:
        if stack and stack[-1] == char:
            stack.pop()
        else:
            stack.append(char)
    
    return ''.join(stack)
