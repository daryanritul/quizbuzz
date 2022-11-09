import React from 'react';
import TestCard from '../../Components/TestCard/TestCard';
import './Dashboard.scss';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2 className="screenTitle">Dashboard</h2>
      <div className="dashboard-body">
        <div className="dashboard-body__item">
          <div className="upcomming">
            <div className="dashtitle">
              <p>Upcomming Events</p>
              <small>View All</small>
            </div>
            <div className="upcomming-tests">
              <TestCard title="Machine Learning" />
              <TestCard title="Data Science" />
              <TestCard title="English" />
              <TestCard title="Aptitude" />
            </div>
          </div>
          <div className="results">
            <div className="dashtitle">
              <p>Pervious Results</p>
              <small>View All</small>
            </div>
          </div>
        </div>
        <div className="profile">pp</div>
      </div>
    </div>
  );
};

export default Dashboard;
