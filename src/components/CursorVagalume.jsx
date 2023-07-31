import React, { useState, useEffect } from 'react';

const CursorVagalume = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const updateCursorPosition = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', updateCursorPosition);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: position.y,
        left: position.x,
        width: '10px',
        height: '10px',
        border: '3px solid #CC3CFF',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        boxShadow: '0 0 30px #4B6ED5',
      }}
    ></div>
  );
};

export default CursorVagalume;
