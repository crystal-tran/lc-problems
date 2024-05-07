/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let bCount = 0;
    let aCount = 0;
    let lCount = 0;
    let oCount = 0;
    let nCount = 0;

    for(let c of text){
        if(c === 'b'){
            bCount ++;
        } else if( c === 'a'){
            aCount ++;
        } else if( c === 'l'){
            lCount ++;
        } else if( c === 'o'){
            oCount ++;
        } else if( c === 'n'){
            nCount ++;
        }
    }

    lCount = Math.floor(lCount/2)
    oCount = Math.floor(oCount/2)
    return Math.min(bCount, aCount, lCount, oCount, nCount)
};