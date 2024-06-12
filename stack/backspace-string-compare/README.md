# Backspace String Compare

## Problem Description

Given two strings `s` and `t`, return `true` if they are equal when both are typed into empty text editors. `'#'` means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

## Examples

### Example 1
- **Input:** `s = "ab#c"`, `t = "ad#c"`
- **Output:** `true`
- **Explanation:** Both `s` and `t` become `"ac"`.

### Example 2
- **Input:** `s = "ab##"`, `t = "c#d#"`
- **Output:** `true`
- **Explanation:** Both `s` and `t` become `""`.

### Example 3
- **Input:** `s = "a#c"`, `t = "b"`
- **Output:** `false`
- **Explanation:** `s` becomes `"c"` while `t` becomes `"b"`.

## Constraints
- `1 <= s.length, t.length <= 200`
- `s` and `t` only contain lowercase letters and `'#'` characters.

## Solution

To solve this problem, we can simulate the typing process for each string, handling the backspace character `'#'` appropriately. We can use a stack to keep track of the characters.

### Steps:
1. Create a helper function `process` to simulate typing for a given string.
2. Use a stack to handle characters and backspaces.
3. Iterate through each character in the string:
   - If the character is `'#'`, pop the stack if it's not empty.
   - Otherwise, push the character onto the stack.
4. Return the stack as a string after processing.
5. Compare the processed results of both strings `s` and `t`.

### Follow Up
The follow-up question asks for an O(n) time and O(1) space solution. This can be achieved by using two pointers to iterate through the strings from the end to the beginning, skipping backspaced characters.

### Example Code (Python):
```python
def backspaceCompare(s: str, t: str) -> bool:
    def process(string):
        stack = []
        for char in string:
            if char == '#':
                if stack:
                    stack.pop()
            else:
                stack.append(char)
        return ''.join(stack)
    
    return process(s) == process(t)

# Follow Up Solution (O(n) time and O(1) space):
def backspaceCompareOptimized(s: str, t: str) -> bool:
    def getNextValidCharIndex(string, index):
        skip = 0
        while index >= 0:
            if string[index] == '#':
                skip += 1
            elif skip > 0:
                skip -= 1
            else:
                break
            index -= 1
        return index
    
    i, j = len(s) - 1, len(t) - 1
    while i >= 0 or j >= 0:
        i = getNextValidCharIndex(s, i)
        j = getNextValidCharIndex(t, j)
        if i >= 0 and j >= 0 and s[i] != t[j]:
            return False
        if (i >= 0) != (j >= 0):
            return False
        i -= 1
        j -= 1
    
    return True
