import React from 'react';
import './Loading.scss';

const Loading = () => {
  return (
    <div className="loading">
      <div className="load-container">
        <div className="linespinner"></div>
      </div>
    </div>
  );
};

export default Loading;
