import React, { useState } from 'react';


const Header = function() {
 
    const [score, setScore] = useState(0);
const addScore = function(){
    setScore( score + 1)
};

const [bestScore, setBestScore] = useState(0);
const addBestScore = function(){
    if (score > bestScore){
        setBestScore(score)
    }
};
addBestScore();

return (
    <div className='header'>
        <h1 className='title'>Memory Game</h1>
        <div className='score'>
            <p className='scoreTitle'>score: </p>
            <p className='scoreCount'>{score}</p>
            <p className='bestScoreTitle'>best score: </p>
            <p className='bestScoreCount'>{bestScore}</p>

        </div>
  
    </div>
)
}

export default Header;