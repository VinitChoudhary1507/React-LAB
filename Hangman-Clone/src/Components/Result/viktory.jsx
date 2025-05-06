import React from 'react'
import victory from '../../images/victory.gif'
const Viktory = () => {
   return (
     <div className="modal fade show overflow-hidden h-75" style={{ display: 'block', }} tabIndex="-1" aria-labelledby="lostModalLabel" aria-hidden="true">
       <div className="modal-dialog">
         <div className="modal-content">
             <h1 className="modal-title text-center" id="lostModalLabel">Game Over</h1>
           <div className="modal-body">
             <img src={victory} alt="Game Over" className="img-fluid w-50" />
             <h3 className="text-center mt-3">You Won</h3>
           </div>
         </div>
       </div>
     </div>
   );
 };

export default Viktory;