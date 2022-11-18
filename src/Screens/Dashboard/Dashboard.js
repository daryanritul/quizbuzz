import React, { useContext, useEffect, useState } from 'react';
import { MdLogout, MdPerson } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import Modal from '../../Components/Modal/Modal';
import TestCard from '../../Components/TestCard/TestCard';
import { getQuizAction, signOutHandler } from '../../store/actions/actions';
import { context } from '../../store/store';
import './Dashboard.scss';

const Dashboard = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(context);
  useEffect(() => {
    getQuizAction(state.user.classes)(dispatch);
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard-title">
        <h3>Dashboard</h3>
      </div>
      <div className="dashboard-body">
        <div className="dashboard-exam">
          <div className="dashboard-exam__title">
            <p>Upcomming Events</p>
            <small>View All</small>
          </div>
          <div className="dashboard-exam__list">
            {state.quizList.map((quiz, index) => (
              <TestCard
                key={quiz.qid}
                title={quiz.quiz}
                index={index}
                type={quiz.type}
                deadline={quiz.closesAt}
                questions={quiz.questions.length}
                duration={quiz.duration}
              />
            ))}
          </div>
        </div>
        <div className="dashboard-profile">
          <div className="profile">
            <div className="profile-avatar">
              <MdPerson className="profile-avatar__icon" />
            </div>
            <div className="profile-title">{state.user.fullName}</div>
            <div className="profile-subtitle">M.C.A</div>
            <div className="profile-subtitle">{state.user.email}</div>
          </div>
          <div className="signout" onClick={() => signOutHandler()(dispatch)}>
            <MdLogout className="signout-icon" />
            <p>SIGN OUT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
