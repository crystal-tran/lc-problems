# Valid Parentheses

## Problem Description

Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['`, and `']'`, determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

## Examples

### Example 1
- **Input:** `s = "()"`
- **Output:** `true`

### Example 2
- **Input:** `s = "()[]{}"`
- **Output:** `true`

### Example 3
- **Input:** `s = "(]"`
- **Output:** `false`

## Constraints
- `1 <= s.length <= 10^4`
- `s` consists of parentheses only `'()[]{}'`.

## Solution

To solve this problem, we can use a stack data structure to keep track of the opening brackets. When we encounter a closing bracket, we check if it matches the latest opening bracket in the stack. If it does, we pop the stack; otherwise, the string is invalid. If the stack is
