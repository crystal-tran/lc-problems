/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    const winCount = {};
    const loseCount = {};
    for(let match of matches){
        const winner = match[0];
        const loser = match[1];
        
        const wins = (winCount[winner] || 0) + 1;
        winCount[winner] = wins
        
        const losses = (loseCount[loser] || 0) + 1;
        loseCount[loser] = losses;
    }
    
    console.log('w', winCount)
    console.log('l', loseCount)
    
    let winResult = [];
    for(let win in winCount){
        console.log('win', win)
        if(!(win in loseCount)){
            winResult.push(win);
        }
    }
    console.log('winResult', winResult)
    
    let loser = [];
    for(let lose in loseCount){
        if(loseCount[lose] === 1){
            loser.push(lose)
        }
    }
    console.log('loser', loser)
    
    return [winResult,loser];
};