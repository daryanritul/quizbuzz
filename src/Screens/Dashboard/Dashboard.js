import React from 'react';
import TestCard from '../../Components/TestCard/TestCard';
import './Dashboard.scss';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h3 className="dashboard-title">Dashboard</h3>
      <div className="dashboard-body">
        <div className="dashboard-exam">
          <div className="dashboard-exam__title">
            <p>Upcomming Events</p>
            <small>View All</small>
          </div>
          <div className="dashboard-exam__list">
            <TestCard title="Machine Learning" />
            <TestCard title="Data Science" />
            <TestCard title="English" />
            <TestCard title="Aptitude" />
          </div>
        </div>
        <div className="dashboard-profile">pp</div>
      </div>
    </div>
  );
};

export default Dashboard;
