import React, { useRef, useEffect, useState } from 'react';
import './FadeInSection.css';
// 
const FadeInSection = ({ children, onVisible }) => {
  const box = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          // console.log(onVisible)
          if (onVisible) onVisible(); // Notify parent
          observer.unobserve(box.current);
        }
      },
      { threshold: 1 }
    );
 
    if (box.current) observer.observe(box.current);
    return () => observer.disconnect();
  }, [onVisible]);

  console.log("FadeInSection render:",box, isVisible);
 

  return (
    <div  ref={box} className={`fade-in-section ${isVisible ? 'visible' : ''}`}>
      {children}  {/*  Renders whatever is passed inside <FadeInSection> (like <h2>...</h2>) */}
    </div>
  );
};

const DynamicFadeInList = () => {
  const [sections, setSections] = useState([0]);
  const addSection = () => {
    setSections((prev) => [...prev, prev.length]);
  };
  // console.log(sections)

  return (
    <div>
      {sections.map((id) => (
        <FadeInSection key={id} onVisible={id === sections.length - 1 ? addSection : null}>
          <h2>Section #{id + 1}</h2>
        </FadeInSection>
      ))}
    </div>
  );
};

export default DynamicFadeInList;
