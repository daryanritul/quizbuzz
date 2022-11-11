import React from 'react';
import { MdLogout, MdPerson } from 'react-icons/md';
import TestCard from '../../Components/TestCard/TestCard';
import './Dashboard.scss';

const Dashboard = () => {
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
            <TestCard
              title="Machine Learning"
              type="mock"
              deadline={'21 jan, 2022'}
              questions={20}
              duration={145}
            />
            <TestCard
              title="Artificial Intelligance"
              type="mock"
              deadline={'21 jan, 2022'}
              questions={20}
              duration={115}
            />
            <TestCard
              title="Mobile Aplication Development"
              type="restricted"
              deadline={'21 jan, 2022'}
              questions={60}
              duration={60}
            />
            <TestCard
              title="Machine Learning"
              type="restricted"
              deadline={'21 jan, 2022'}
              questions={20}
              duration={100}
            />
          </div>
        </div>
        <div className="dashboard-profile">
          <div className="profile">
            <div className="profile-avatar">
              <MdPerson className="profile-avatar__icon" />
            </div>
            <div className="profile-title">RITUL DARYAN</div>
            <div className="profile-subtitle">M.C.A</div>
            <div className="profile-subtitle">ritul.daryan.205@gmail.com</div>
          </div>
          <div className="signout">
            <MdLogout className="signout-icon" />
            <p>SIGN OUT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
