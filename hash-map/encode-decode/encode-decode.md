# String Encode and Decode

**Solved**  
**Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.**

## Example 1:

**Input:** `["neet","code","love","you"]`

**Output:** `["neet","code","love","you"]`

## Example 2:

**Input:** `["we","say",":","yes"]`

**Output:** `["we","say",":","yes"]`

## Constraints:

- \(0 \leq \text{strs.length} < 100\)
- \(0 \leq \text{strs[i].length} < 200\)
- `strs[i]` contains only UTF-8 characters.

### Implementation

```javascript
class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";
        for(const str of strs){
            result += `${str.length}#${str}`
        }
        return result;
    }
    //"4#neet4#code4#love3#you"

    /**
     * @param {string} str
     * @returns {string[]}
     */

      decode(str) {
        const decoded = [];
        for (let i = 0; i < str.length; i++) {
            // Find the position of '#'
            const hashIndex = str.indexOf('#', i);
            // Get the length of the substring
            const length = parseInt(str.substring(i, hashIndex));
            // Move i to the start of the substring
            i = hashIndex + 1;
            // Get the substring
            const substring = str.substring(i, i + length);
            decoded.push(substring);
            // Move i to the end of the substring
            i += length - 1; // Subtract 1 because the loop increments i by 1
        }
        return decoded;
    }
}

