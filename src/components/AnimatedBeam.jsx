import React, { useEffect, useRef, useState } from 'react';

const AnimatedBeam = ({ fromRef, toRef, duration }) => {
  const [visible, setVisible] = useState(false);
  const beamRef = useRef(null);

  useEffect(() => {
    if (fromRef.current && toRef.current) {
      const fromRect = fromRef.current.getBoundingClientRect();
      const toRect = toRef.current.getBoundingClientRect();
      
      const fromX = fromRect.left + fromRect.width / 2;
      const fromY = fromRect.top + fromRect.height / 2;
      const toX = toRect.left + toRect.width / 2;
      const toY = toRect.top + toRect.height / 2;
      
      if (beamRef.current) {
        beamRef.current.style.width = `${Math.hypot(toX - fromX, toY - fromY)}px`;
        beamRef.current.style.transform = `rotate(${Math.atan2(toY - fromY, toX - fromX)}rad)`;
        beamRef.current.style.left = `${fromX}px`;
        beamRef.current.style.top = `${fromY}px`;
      }
    }
  }, [fromRef, toRef]);

  useEffect(() => {
    if (visible) {
      setTimeout(() => setVisible(false), duration * 1000);
    }
  }, [visible, duration]);

  return (
    <div
      ref={beamRef}
      className={`beam ${visible ? 'visible' : ''}`}
      style={{
        position: 'absolute',
        background: '#9694ff',
        height: '2px',
        transition: `width ${duration}s ease-in-out, transform ${duration}s ease-in-out`,
        zIndex: 2,
      }}
    />
  );
};

export default AnimatedBeam;
