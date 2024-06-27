import React from 'react';
import { ReactTyped } from "react-typed";

const TypingEffect = () => {
  return (
    <ReactTyped
      strings={[
        'Start The New Dream!<br />A New Journey!<br />Let\'s Go!!',
      ]}
      typeSpeed={40}
      backSpeed={50}
      loop
    />
  );
};

export default TypingEffect;

