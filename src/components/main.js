import React, { useState } from 'react';

const Main = function(){
        const [score, setScore] = useState(0);
        const [bestScore, setBestScore] = useState(0);
        const [clickedCards, setClickedCards] = useState([]);
            const addScore = function(){
            setScore( score + 1)
            };
        
            const addBestScore = function(){
                if (score > bestScore){
                    setBestScore(score)
                }
            };
            addBestScore();

const DisplayCards = () => {
    const cards = [
        "./cards/1.jpg",
        "./cards/2.jpg",
        "./cards/3.jpg",
        "./cards/4.jpg",
        "./cards/5.jpg",
        "./cards/6.jpg",
        "./cards/7.jpg",
        "./cards/8.jpg",
        "./cards/9.jpg",
        "./cards/10.jpg",
        "./cards/11.jpg",
        "./cards/12.jpg",
    ]
    const shuffleCards = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      };
    
      const shuffledCards = shuffleCards(cards);

      const handleClick = (index) => {
       if (clickedCards.includes(index)) {
       setScore(0)
       addBestScore();
       setClickedCards([])
       } else {
        setClickedCards([...clickedCards, index]);
        addScore();
        addBestScore();
       }  

      }
    
      return (
        <div className='cards'>
          {shuffledCards.map((card, index) => (
            <img 
            className={"card" + index} 
            src={card} 
            key={index}
            onClick={() => handleClick(card)} 
            />
          ))}
        </div>
      );
  }
  
  
  

    return(
        
        <div className='main'>
            <div className='header'>
        <h1 className='title'>Memory Game</h1>
        <div className='score'>
            <div className='scoreTitle'>
            <p >score: </p>
            <p className='scoreCount'>{score}</p>
            </div>
            <div className='scoreTitle'>
            <p >best score: </p>
            <p className='bestScoreCount'>{bestScore}</p>
            </div>
        </div>
  
    </div>
        
        <DisplayCards />
        </div>
    )
}

export default Main;