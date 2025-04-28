import { useState } from 'react';
import './App.css';
import myImage1 from './assets/developer-8764527_640.jpg';
import myImage2 from './assets/images.jpeg';
import myImage3 from './assets/cycle.jpeg';

function App() {
  const [count, setCount] = useState(0);

  const images = [myImage1, myImage2, myImage3];

  const forwardImage = () => {
    setCount((prevCount) => (prevCount + 1) % images.length);
  };

  const prevImage = () => {
    setCount((prevCount) => (prevCount - 1 + images.length) % images.length);
  };

  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <img
          src={images[count]}
          alt={`Image ${count + 1}`}
          style={{
            width: '600px',
            height: '500px',
            margin: '10px',
            objectFit: 'cover',
            borderRadius: '10px',
            boxShadow: '0px 4px 8px rgba(0,0,0,0.2)',
          }}
        />
        {/* Show percentage (0.33, 0.66, 1.00) */}
        {/* <p style={{ marginTop: '10px', fontSize: '18px' }}>
          {((count + 1) / images.length).toFixed(2)}
        </p> */}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', gap: '20px' }}>
        <button style={{backgroundColor:"grey",}} onClick={forwardImage}>Next</button>
        <button style={{backgroundColor:"grey",}} onClick={prevImage}>Previous</button>
      </div>
    </>
  );
}

export default App;
// dry run the code

{/* <div>
  {images.map((img, index) => (
    <img key={index} src={img} style={{ width: "300px", margin: "10px",height:"300px" }} alt={`Image ${index + 1}`} />
  ))}   
</div> */}