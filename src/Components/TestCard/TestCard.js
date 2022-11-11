import React from 'react';
import { MdCalendarToday, MdTimer } from 'react-icons/md';
import Button from '../Button/Button';
import './TestCard.scss';

const TestCard = ({ title }) => {
  return (
    <div className="testCard">
      <div className="testCard-body">
        <h3>{title}</h3>
        <p className="testCard-type">Mock Test</p>
        <p className="testCard-text">50 Questions / 2 Min Per Question</p>
        <div className="testCard-footer">
          <div className="testCard-footer__box">
            <MdTimer />
            <small>1H 30 MIN</small>
          </div>
          <div className="testCard-footer__box">
            <MdCalendarToday />
            <small>11 July 2022</small>
          </div>
        </div>
      </div>
      <div className="testCard-btn">START</div>
    </div>
  );
};

export default TestCard;
