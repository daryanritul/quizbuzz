import React, { useContext, useEffect, useState } from 'react';
import './Quiz.scss';

import exam from '../../question.js';
import Button from '../../Components/Button/Button';
import { MdTimer } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { context } from '../../store/store';
import { uploadResult } from '../../store/actions/actions';
import Timer from '../../utils/Timer';
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
  const [answer, setAnswer] = useState({});
  const navigate = useNavigate();
  const { state, dispatch } = useContext(context);
  const [startAt, setStartAt] = useState('');

  useEffect(() => {
    setStartAt(Date.now());
  }, []);

  const onFinishTimer = () => {
    console.log('POPUP/');
    // navigate('/');
  };

  const submitExam = () => {
    var score = 0;
    state.questions.map(ques => {
      if (ques.correct === answer[ques.id]) {
        score++;
      }
    });
    uploadResult(
      {
        title: state.activeQuiz.quiz,
        startAt,
        endsAt: Date.now(),
        score,
        total: state.questions.length,
        status: 'passed',
        grade: 'good',
      },
      state.user.uid,
      state.activeQuiz.qid
    );
  };

  const clearAns = uid => {
    let newAns = { ...answer };
    delete newAns[uid];
    setAnswer(newAns);
  };

  const pegination = path => {
    if (path == 'prev') {
      if (currQuiz === 0) {
        setCurrQuiz(state.questions.length - 1);
      } else setCurrQuiz(currQuiz - 1);
    } else if (path == 'next') {
      if (currQuiz === state.questions.length - 1) {
        setCurrQuiz(0);
      } else setCurrQuiz(currQuiz + 1);
    }
  };
  var time = state.activeQuiz.duration.split(':');
  const hoursMinSecs = {
    hours: parseInt(time[0]),
    minutes: parseInt(time[1]),
    seconds: 0,
  };
  return (
    <div className="quiz">
      <div className="quiztitle">{exam.title}</div>
      <div className="quizBox">
        <div className="quizBox-question">
          Question: {currQuiz + 1}. {state.questions[currQuiz].question}
        </div>
        <div
          className={`quizBox-option ${
            answer[state.questions[currQuiz].id] === 'A' && 'select'
          }`}
          onClick={() =>
            setAnswer({
              ...answer,
              [state.questions[currQuiz].id]: 'A',
            })
          }
        >
          A. {state.questions[currQuiz].options.A}
        </div>
        <div
          className={`quizBox-option ${
            answer[state.questions[currQuiz].id] === 'B' && 'select'
          }`}
          onClick={() =>
            setAnswer({
              ...answer,
              [state.questions[currQuiz].id]: 'B',
            })
          }
        >
          B. {state.questions[currQuiz].options.B}
        </div>
        <div
          className={`quizBox-option ${
            answer[state.questions[currQuiz].id] === 'C' && 'select'
          }`}
          onClick={() =>
            setAnswer({
              ...answer,
              [state.questions[currQuiz].id]: 'C',
            })
          }
        >
          C. {state.questions[currQuiz].options.C}
        </div>
        <div
          className={`quizBox-option ${
            answer[state.questions[currQuiz].id] === 'D' && 'select'
          }`}
          onClick={() =>
            setAnswer({
              ...answer,
              [state.questions[currQuiz].id]: 'D',
            })
          }
        >
          D. {state.questions[currQuiz].options.D}
        </div>
        <p
          onClick={() => clearAns(state.questions[currQuiz].id)}
          className="ansClear"
        >
          clear answer
        </p>
        <div className="examButton">
          <Button
            title={'Pervious'}
            type="outline"
            onSubmit={() => pegination('prev')}
          />
          <Button
            title={'Next'}
            type="outline"
            onSubmit={() => pegination('next')}
          />
        </div>
      </div>
      <div className="questionBox">
        <div className="duration">
          <p>Total Questions ({exam.questionList.length})</p>
          <span>
            <MdTimer className="time-icon" />
            <Timer hoursMinSecs={hoursMinSecs} onFinish={onFinishTimer} />
          </span>
        </div>
        <p className="questionBox-title">Questions</p>
        <div className="questionList">
          {state.questions.map((item, index) => (
            <div
              className={`question ${index === currQuiz && 'active'} ${
                answer[item.id] && 'done'
              }`}
              onClick={() => setCurrQuiz(index)}
            >
              <p>{index + 1}</p>
            </div>
          ))}
        </div>
        <div className="finishBtn">
          <Button
            title="Finish Test"
            type={'fill'}
            onSubmit={() => submitExam()}
          />
        </div>
      </div>
    </div>
  );
};

export default Quiz;
