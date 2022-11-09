import React from 'react';
import Button from '../Button/Button';
import './TestCard.scss';

const TestCard = ({ title }) => {
  return (
    <div className="testCard">
      <h3>{title}</h3>
      <p>Mock Test</p>
      <small>50 Questions</small>
      <small>Duration 1h 30min</small>
      <small>Monday, 11 July 2022</small>
      <Button title="START TEST" type="outline" />
    </div>
  );
};

export default TestCard;
