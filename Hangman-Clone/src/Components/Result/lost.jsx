import React from 'react'
import lost from '../../images/lost.gif'
const Lost = ({wordle}) => {
  return (
    <div className="modal fade show overflow-hidden h-75" style={{ display: 'block', }} tabIndex="-1" aria-labelledby="lostModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
            <h1 className="modal-title text-center" id="lostModalLabel">Game Over</h1>
            <h3 className="modal-title text-center" id="lostModalLabel">Word was <span className='text-success'> {wordle.word} </span>  </h3>
          <div className="modal-body">
            <img src={lost} alt="Game Over" className="img-fluid w-50" />
            <h3 className="text-center mt-3">Sorry, you lost! Try again.</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lost