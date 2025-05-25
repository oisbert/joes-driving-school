import React from 'react';
import './Button.css';

const Button = ({ href, text, onClick, fullWidth }) => {
  return (
    <a 
      href={href} 
      className="btn" 
      onClick={onClick}
      style={{ width: fullWidth ? '100%' : 'auto', textAlign: fullWidth ? 'center' : 'left' }}
    >
      {text}
    </a>
  );
};

export default Button;