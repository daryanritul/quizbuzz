import React, { useContext, useEffect, useState } from 'react';
import './Quiz.scss';

import exam from '../../question.js';
import Button from '../../Components/Button/Button';
import { MdTimer } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { context } from '../../store/store';
import { uploadResult } from '../../store/actions/actions';
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
  const [endsAt, setEndsAt] = useState('');
  console.log(state.questions[currQuiz]);
  console.log(state);

  useEffect(() => {
    setStartAt(Date.now());
  }, []);

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
      },
      state.user.uid,
      state.activeQuiz.qid
    );
  };

  return (
    <div className="quiz">
      <div className="quiztitle">{exam.title}</div>
      <div className="quizBox">
        <div className="quizBox-question">
          Question: {currQuiz + 1}. {state.questions[currQuiz].question}
        </div>
        <div
          className={`quizBox-option ${selectAnswer === 'a' && 'select'}`}
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
          className={`quizBox-option ${selectAnswer === 'b' && 'select'}`}
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
          className={`quizBox-option ${selectAnswer === 'c' && 'select'}`}
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
          className={`quizBox-option ${selectAnswer === 'd' && 'select'}`}
          onClick={() =>
            setAnswer({
              ...answer,
              [state.questions[currQuiz].id]: 'D',
            })
          }
        >
          D. {state.questions[currQuiz].options.D}
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
            <MdTimer className="time-icon" />
            <p>00:34:40 </p>
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
