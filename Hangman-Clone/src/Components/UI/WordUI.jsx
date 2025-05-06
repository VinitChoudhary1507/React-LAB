import React from 'react'

const WordUI = ({wrongGuesses,wordle,guesses}) => {
    
  return (
    <>
    <h3 className="mb-3">
              Word:{" "}
              <span className="text-info">
                {wordle.word.split("").map((letter, index) => (
                    <span key={index} className="mx-1 border-bottom border-3 border-dark">
                    {guesses.includes(letter.toUpperCase())
                      ? letter
                      : "-"}
                  </span>
                ))}
              </span>
            </h3>
            <p className="mt-5 lead">Hint: <em>{wordle.hint}</em></p>
            <div className='mt-4'>Incorrect Guesses: <span className='text-danger'>{wrongGuesses.length}/6</span></div>
        </>
  )
}

export default WordUI