/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const sPath = path.split('/');
    const stack = [];
    for(const p of sPath){
        if(p === '..'){
            if(stack.length){
                stack.pop();
            }
        } else if(p == '.' || !p ){
            continue;
        } else {
            stack.push(p);
        }
    }
    return '/' + stack.join('/');
};