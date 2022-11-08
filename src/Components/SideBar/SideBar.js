import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import './SideBar.scss';

import {
  MdSpaceDashboard,
  MdAnalytics,
  MdMultilineChart,
  MdBorderAll,
  MdCircleNotifications,
} from 'react-icons/md';

const SideBar = () => {
  const [active, setActive] = useState('dashboard');
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <Logo />
      </div>
      <div
        className={`sidebar-options ${active == 'dashboard' && 'active'}`}
        onClick={() => setActive('dashboard')}
      >
        <div className="sidebar-options__icon">
          <MdSpaceDashboard className="sidebar-icon" />
        </div>
        <div className="sidebar-options__item">Dashboard</div>
      </div>
      <div
        className={`sidebar-options ${active == 'quiz' && 'active'}`}
        onClick={() => setActive('quiz')}
      >
        <div className="sidebar-options__icon">
          <MdBorderAll className="sidebar-icon" />
        </div>
        <div className="sidebar-options__item">My Quiz</div>
      </div>
      <div
        className={`sidebar-options ${active == 'gradebook' && 'active'}`}
        onClick={() => setActive('gradebook')}
      >
        <div className="sidebar-options__icon">
          <MdAnalytics className="sidebar-icon" />
        </div>
        <div className="sidebar-options__item">Gradebook</div>
      </div>
      <div
        className={`sidebar-options ${active == 'performance' && 'active'}`}
        onClick={() => setActive('performance')}
      >
        <div className="sidebar-options__icon">
          <MdMultilineChart className="sidebar-icon" />
        </div>
        <div className="sidebar-options__item">Performance</div>
      </div>
      <div
        className={`sidebar-options ${active == 'announcement' && 'active'}`}
        onClick={() => setActive('announcement')}
      >
        <div className="sidebar-options__icon">
          <MdCircleNotifications className="sidebar-icon" />
        </div>
        <div className="sidebar-options__item">Announcements</div>
      </div>
    </div>
  );
};

export default SideBar;
