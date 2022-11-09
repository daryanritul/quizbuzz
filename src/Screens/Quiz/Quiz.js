import React, { useEffect, useState } from 'react';
import './Quiz.scss';

import exam from '../../question.js';
import Button from '../../Components/Button/Button';
import { MdTimer } from 'react-icons/md';
const Quiz = () => {
  const [currQuiz, setCurrQuiz] = useState(0);
  const filledArray = Array(exam.questionList.length).fill(0);
  const [ans, setAns] = useState(filledArray);
  const [selectAnswer, setSelectAnswer] = useState('');
  const updateAnswer = (answer, index) => {
    setSelectAnswer(answer);
    var tempAns = ans;
    tempAns[index] = answer;
    setAns(tempAns);
  };
  return (
    <div className="quiz">
      <div className="quiz screenTitle">{exam.title}</div>
      <div className="quizBox">
        <div className="quizBox-question">
          Question: {currQuiz + 1}. {exam.questionList[currQuiz][0]}
        </div>
        <div
          className={`quizBox-option ${selectAnswer === 'a' && 'select'}`}
          onClick={() => updateAnswer('a', currQuiz)}
        >
          A. {exam.questionList[currQuiz][1]}
        </div>
        <div
          className={`quizBox-option ${selectAnswer === 'b' && 'select'}`}
          onClick={() => updateAnswer('b', currQuiz)}
        >
          B. {exam.questionList[currQuiz][2]}
        </div>
        <div
          className={`quizBox-option ${selectAnswer === 'c' && 'select'}`}
          onClick={() => updateAnswer('c', currQuiz)}
        >
          C. {exam.questionList[currQuiz][3]}
        </div>
        <div
          className={`quizBox-option ${selectAnswer === 'd' && 'select'}`}
          onClick={() => updateAnswer('d', currQuiz)}
        >
          D. {exam.questionList[currQuiz][4]}
        </div>
        <p onClick={() => updateAnswer(0, currQuiz)} className="ansClear">
          clear answer
        </p>
        <div className="examButton">
          <Button
            title={'Pervious'}
            type="outline"
            onSubmit={() => {
              if (currQuiz >= 0) setCurrQuiz(currQuiz - 1);
            }}
          />
          <Button
            title={'Next'}
            type="outline"
            onSubmit={() => setCurrQuiz(currQuiz + 1)}
          />
        </div>
      </div>
      <div className="questionBox">
        <div className="duration">
          <p>Total Questions ({exam.questionList.length})</p>
          <span>
            <MdTimer className="time-icon" /> <p>1h 34min 40sec</p>
          </span>
        </div>
        <p className="questionBox-title">Questions</p>
        <div className="questionList">
          {exam.questionList.map((item, index) => (
            <div
              className={`question ${index === currQuiz && 'active'} ${
                ans[index] !== 0 && 'done'
              }`}
              onClick={() => setCurrQuiz(index)}
            >
              <p>{index + 1}</p>
            </div>
          ))}
        </div>
        <div className="finishBtn">
          <Button title="Finish Test" type={'fill'} />
        </div>
      </div>
    </div>
  );
};

export default Quiz;
