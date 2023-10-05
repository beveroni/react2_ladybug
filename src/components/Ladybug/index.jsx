import React from 'react';
import './style.css';

const Ladybug = ({ posX, posY, orientation }) => {
  return (
    <div 
      className={`ladybug ladybug--${orientation}`} 
      style={{
        top: `${posX}px`,
        left: `${posY}px`,
      }}
    />
  );
};

export default Ladybug;