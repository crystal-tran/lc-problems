/**
 * @param {string[]} strs
 * @return {string[][]}
 *
 * Time complexity: O(n*mlogm)
 */
var groupAnagrams = function(strs) {
    const anagrams = {}
    for(const str of strs){
        const key = str.split('').sort().join('');
        if(!anagrams[key]) anagrams[key] = [];
        anagrams[key].push(str);
    }
    return Object.values(anagrams)
};

