import React from 'react';
import { useEffect, useState } from 'react';

import { NewWordle, alphabetCreate,  newGame as resetGame  } from '../../Logic/Gamelogic';
import Viktory from '../Result/viktory';
import Lost from '../Result/lost';
import KeyboardUI from './KeyboardUI';
import WordUI from './WordUI';
import ImageUI from './ImageUI';

const alphabetObject = alphabetCreate()
const HangmanUI = () => {
  const [showPopup, setShowPopup] = useState("");
  const [wordle, setWordle] = useState(null);
  const [guesses, setGuesses] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState([]);
  const [flag, setFlagValue] = useState(false)


  useEffect(() => {
    const newWordle = NewWordle();
    setWordle(newWordle);
    const handleKeyDown = (event) => {
      const check = event.key.toUpperCase();
      if (!/^[A-Z]$/.test(check)) return;
      if (!newWordle) return;
      if (guesses.includes(check) || wrongGuesses.includes(check)) return;
      if (newWordle.word.toUpperCase().includes(check)) {
        setGuesses(prev => [...prev, check]);
      } else {
        setWrongGuesses(prev => [...prev, check]);
      }

    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [flag]);

  
  useEffect(() => {
    if (!wordle) return;
  
    const allLettersGuessed = wordle.word
      .toUpperCase()
      .split('')
      .every((letter) => guesses.includes(letter));
  
    if (allLettersGuessed) {
      triggerEndGame("Viktory");
    }
  
    if (wrongGuesses.length >= 6) {
      triggerEndGame("Lost");
    }
  }, [guesses, wrongGuesses, wordle]);
  
  const triggerEndGame = (result) => {
    setTimeout(() => {
      setShowPopup(result);
      setTimeout(() => {
        resetGame(setGuesses, setWrongGuesses, setShowPopup, setFlagValue);
      }, 2000);
    }, 100);
  };
  


  if (!wordle) return <div>Loading...</div>;


  return (
    <>
      {showPopup === 'Viktory' && <Viktory />}
      {showPopup === 'Lost' && <Lost  wordle={wordle}  />}
      <div className="container overflow-hidden py-5">
        <div className="row align-items-center">
          <ImageUI wrongGuesses={wrongGuesses} />
          <div className="col-md-6 top-0 " id='letter'>
            <WordUI wordle={wordle} wrongGuesses={wrongGuesses} guesses={guesses} />
            <KeyboardUI guesses={wrongGuesses}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default HangmanUI;
