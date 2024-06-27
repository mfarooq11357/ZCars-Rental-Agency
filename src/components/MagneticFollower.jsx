// src/MagneticFollower.js
import React, { useEffect, useState, useRef } from 'react';
import '../index.css';

const MagneticFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const followerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const follower = followerRef.current;
    let followX = mousePosition.x;
    let followY = mousePosition.y;
    let friction = 0.1;

    const animateFollower = () => {
      followX += (mousePosition.x - followX) * friction;
      followY += (mousePosition.y - followY) * friction;
      follower.style.transform = `translate3d(${followX}px, ${followY}px, 0)`;
      requestAnimationFrame(animateFollower);
    };

    animateFollower();
  }, [mousePosition]);

  return <div className="follower" ref={followerRef}></div>;
};

export default MagneticFollower;
