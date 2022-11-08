import React from 'react';
import './InputBox.scss';

const InputBox = ({ title, value, setValue, ...others }) => {
  return (
    <div className="inputBox">
      <label htmlFor="">{title}</label>
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder={others.placeholder}
        type={others.type}
      />
    </div>
  );
};

export default InputBox;
