/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const splitPath = path.split('/');
    const stack = [];
    for(let i = 1; i < splitPath.length; i++){
        
        if(splitPath[i] !== '' && splitPath[i]!== '..' && splitPath[i] !=='.'){
            stack.push(splitPath[i]);
        }

        if(splitPath[i] === '..'){
            stack.pop();
        }
    }
    return '/' + stack.join('/')
};


// EDITORIAL SOLUTION BELOW

var simplifyPath = function (path) {
    // Initialize a stack
    let stack = [];
    // Split the input string on "/" as the delimiter
    // and process each portion one by one
    for (let portion of path.split("/")) {
        // If the current component is a "..", then
        // we pop an entry from the stack if it's non-empty
        if (portion === "..") {
            if (stack.length) {
                stack.pop();
            }
        } else if (portion === "." || !portion) {
            // A no-op for a "." or an empty string
            continue;
        } else {
            // Finally, a legitimate directory name, so we add it
            // to our stack
            stack.push(portion);
        }
    }
    // Stich together all the directory names together
    return "/" + stack.join("/");
};
