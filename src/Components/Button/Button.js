import React from 'react';
import './Button.scss';

const Button = ({ type, title, onSubmit }) => {
  return (
    <button onClick={() => onSubmit()} className={`button ${type}`}>
      {title}
    </button>
  );
};

export default Button;
