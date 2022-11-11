import React from 'react';
import ReportCard from '../../Components/ReportCard/ReportCard';
import './Gradebook.scss';

import {
  MdArrowDownward,
  MdBookmark,
  MdCheck,
  MdClass,
  MdClose,
  MdError,
  MdFlag,
  MdKeyboardArrowDown,
  MdOutlineStar,
  MdRunCircle,
  MdViewList,
  MdViewModule,
} from 'react-icons/md';
import InputBox from '../../Components/InputBox/InputBox';

const result = [
  {
    name: 'Machine Learning',
    status: 'passed',
    score: 40,
    totalScore: 60,
    grade: 'good',
    timeSpent: '22 MIN',
    submitted: Date.now(),
  },
  {
    name: 'Machine Learning',
    status: 'passed',
    score: 40,
    totalScore: 60,
    grade: 'excellent',
    timeSpent: '22 MIN',
    submitted: Date.now(),
  },
  {
    name: 'Machine Learning',
    status: 'absent',
    score: 30,
    totalScore: 60,
    grade: 'excellent',
    timeSpent: '22 MIN',
    submitted: Date.now(),
  },
  {
    name: 'Machine Learning',
    status: 'failed',
    score: 10,
    totalScore: 60,
    grade: 'excellent',
    timeSpent: '22 MIN',
    submitted: Date.now(),
  },
  {
    name: 'Machine Learning',
    status: 'passed',
    score: 10,
    totalScore: 60,
    grade: 'excellent',
    timeSpent: '22 MIN',
    submitted: Date.now(),
  },
  {
    name: 'Machine Learning',
    status: 'passed',
    score: 10,
    totalScore: 60,
    grade: 'excellent',
    timeSpent: '22 MIN',
    submitted: Date.now(),
  },
  {
    name: 'Machine Learning',
    status: 'passed',
    score: 10,
    totalScore: 60,
    grade: 'excellent',
    timeSpent: '22 MIN',
    submitted: Date.now(),
  },
  {
    name: 'Machine Learning',
    status: 'passed',
    score: 10,
    totalScore: 60,
    grade: 'excellent',
    timeSpent: '22 MIN',
    submitted: Date.now(),
  },
  {
    name: 'Machine Learning',
    status: 'passed',
    score: 10,
    totalScore: 60,
    grade: 'excellent',
    timeSpent: '22 MIN',
    submitted: Date.now(),
  },
  {
    name: 'Machine Learning',
    status: 'passed',
    score: 10,
    totalScore: 60,
    grade: 'excellent',
    timeSpent: '22 MIN',
    submitted: Date.now(),
  },
  {
    name: 'Machine Learning',
    status: 'passed',
    score: 10,
    totalScore: 60,
    grade: 'excellent',
    timeSpent: '22 MIN',
    submitted: Date.now(),
  },
  {
    name: 'Machine Learning',
    status: 'passed',
    score: 10,
    totalScore: 60,
    grade: 'excellent',
    timeSpent: '22 MIN',
    submitted: Date.now(),
  },
  {
    name: 'Machine Learning',
    status: 'passed',
    score: 10,
    totalScore: 60,
    grade: 'excellent',
    timeSpent: '22 MIN',
    submitted: Date.now(),
  },
  {
    name: 'Machine Learning',
    status: 'passed',
    score: 10,
    totalScore: 60,
    grade: 'excellent',
    timeSpent: '22 MIN',
    submitted: Date.now(),
  },
  {
    name: 'Machine Learning',
    status: 'passed',
    score: 10,
    totalScore: 60,
    grade: 'excellent',
    timeSpent: '22 MIN',
    submitted: Date.now(),
  },
  {
    name: 'Machine Learning',
    status: 'passed',
    score: 10,
    totalScore: 60,
    grade: 'excellent',
    timeSpent: '22 MIN',
    submitted: Date.now(),
  },
];

const Gradebook = () => {
  return (
    <div className="gradeBook">
      <h3 className="gradeBook-title">GRADEBOOK</h3>
      <div className="report">
        <ReportCard Icon={MdClass} color="1" title="Total Exams" value="230" />

        <ReportCard
          Icon={MdBookmark}
          color="i"
          title="Total Exam Presents"
          value="230"
        />
        <ReportCard
          Icon={MdError}
          color="w"
          title="Total Exam Absents"
          value="230"
        />
        <ReportCard
          Icon={MdFlag}
          color="s"
          title="Total Exam Passed"
          value="230"
        />
        <ReportCard
          Icon={MdClose}
          color="d"
          title="Total Exam Failed"
          value="230"
        />

        <ReportCard
          Icon={MdOutlineStar}
          color="b"
          title="Average Score"
          value="230"
        />
      </div>
      <div className="marksheet">
        <div className="marksheet-filters">{/* Filter HERE */}</div>
        <div className="marksheet-card">
          <div className="marksheet-card__table h">
            <div>Exam</div>
            <div>Status</div>
            <div>Score</div>
            <div>Grade</div>
            <div>Time Spent</div>
            <div>Submitted</div>
            <div className="r-details">Details</div>
          </div>
          {result.map((res, index) => (
            <div className="marksheet-card__table r">
              <div className="r-name">{res.name}</div>
              <div className={`r-status ${res.status}`}>
                <p>{res.status}</p>
              </div>
              <div className={`r-score ${res.status}`}>
                <p>
                  {res.score}/{res.totalScore}
                </p>
              </div>
              <div className={`r-grade ${res.status}`}>
                <p>{res.grade}</p>
              </div>
              <div className="r-timeSpent">{res.timeSpent}</div>
              <div className="r-submitted">{res.submitted}</div>
              <div className="r-details">
                <MdKeyboardArrowDown className="r-details-icon" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gradebook;
