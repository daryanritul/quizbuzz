import React, { useContext } from 'react';
import { MdCalendarToday, MdTimer } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { setActive } from '../../store/actions/actions';
import { context } from '../../store/store';
import Button from '../Button/Button';
import './TestCard.scss';

const TestCard = ({ title, type, questions, duration, deadline, index }) => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(context);
  var dateTime = deadline.split('T');
  var time = dateTime[1].split(':');
  var myDate = new Date(dateTime[0]);

  const onSelectStart = () => {
    setActive(state.quizList[index])(dispatch);
    navigate('/quiz');
  };

  return (
    <div className="testCard">
      <div className="testCard-body">
        <h3>{title}</h3>
        <p className={`testCard-type ${type}`}>{type} Test</p>
        <p className="testCard-text">{questions} Questions</p>
        <div className="testCard-footer">
          <div className="testCard-footer__box">
            <MdTimer />
            <small>{duration} Hours</small>
          </div>
          <div className="testCard-footer__box">
            <MdCalendarToday />
            <small>
              {myDate.toDateString()} at {time[0] > 12 ? time[0] - 12 : time[0]}{' '}
              : {time[1]} {time[0] > 12 ? 'PM' : 'AM'}
            </small>
          </div>
        </div>
      </div>
      <div className="testCard-btn" onClick={() => onSelectStart()}>
        START
      </div>
    </div>
  );
};

export default TestCard;
