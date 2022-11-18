import React, { useContext, useEffect } from 'react';
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
import { getMyResults } from '../../store/actions/actions';
import { context } from '../../store/store';

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
];

const Gradebook = () => {
  const { state, dispatch } = useContext(context);
  useEffect(() => {
    getMyResults(state.user.uid)(dispatch);
  }, []);

  const d = date => {
    var myDate = new Date(date);
    return myDate.toLocaleDateString();
  };

  function timeDifference(d1, d2) {
    var date1 = new Date(d1);
    var date2 = new Date(d2);
    var difference = date1.getTime() - date2.getTime();

    var hoursDifference = Math.floor(difference / 1000 / 60 / 60);
    difference -= hoursDifference * 1000 * 60 * 60;

    var minutesDifference = Math.floor(difference / 1000 / 60);
    difference -= minutesDifference * 1000 * 60;

    var secondsDifference = Math.floor(difference / 1000);

    return hoursDifference + ':' + minutesDifference + ':' + secondsDifference;
  }
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
          {state.myResults.map((res, index) => (
            <div className="marksheet-card__table r">
              <div className="r-name">{res.title}</div>
              <div className={`r-status ${res.status}`}>
                <p>{res.status}</p>
              </div>
              <div className={`r-score ${res.status}`}>
                <p>
                  {res.score}/{res.total}
                </p>
              </div>
              <div className={`r-grade ${res.status}`}>
                <p>{res.grade}</p>
              </div>
              <div className="r-timeSpent">
                {timeDifference(res.endsAt, res.startAt)} Hr
              </div>
              <div className="r-submitted">{d(res.endsAt)}</div>
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
