import React from 'react'
import { alphabetCreate } from '../../Logic/Gamelogic';
const KeyboardUI = ({ guesses }) => {
  const alphabetObject = alphabetCreate()
  return (
    <div className="d-flex mt-3 flex-wrap justify-content-center">
      {alphabetObject.map((letter, index) => {

        const isGuessed = guesses.includes(letter.toUpperCase());
        return (
        <button
          key={index}
          className="m-2  h-75 text-light rounded border-0 px-4 py-2"
          style={{
            backgroundColor: isGuessed ? "#808080" : "#9370DB",
            cursor: isGuessed ? "not-allowed" : "pointer",
            opacity: isGuessed ? 0.6 : 1,
          }}
          disabled={isGuessed}
        >
          {letter}
        </button>
        )}
      )}
    </div>
  )
}

export default KeyboardUI