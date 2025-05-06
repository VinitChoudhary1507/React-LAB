import React from 'react'
import Image1 from '../../images/hangman-0.svg';
import Image2 from '../../images/hangman-1.svg';
import Image3 from '../../images/hangman-2.svg';
import Image4 from '../../images/hangman-3.svg';
import Image5 from '../../images/hangman-4.svg';
import Image6 from '../../images/hangman-5.svg';
import Image7 from '../../images/hangman-6.svg';

const ImageUI = ({wrongGuesses}) => {

      const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7];
  return (
    <>
    <div className="col-md-6 text-center mb-4 mb-md-0">
      <img src={images[wrongGuesses.length]} alt="Hangman" className="img-fluid" />
      <h3 className='mt-4 text-secondary'>Hangman Game</h3>
    </div>
    </>
  )
}

export default ImageUI