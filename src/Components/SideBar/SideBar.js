import React, { useContext, useState } from 'react';
import Logo from '../Logo/Logo';
import './SideBar.scss';

import {
  MdSpaceDashboard,
  MdAnalytics,
  MdMultilineChart,
  MdBorderAll,
  MdCircleNotifications,
} from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import { context } from '../../store/store';
const SideBar = () => {
  const location = useLocation();
  const { state } = useContext(context);

  return (
    <div
      className={`sidebar ${
        (location.pathname === '/signin' ||
          location.pathname === '/signup' ||
          !state.authState) &&
        'close'
      }`}
    >
      <div className="sidebar-logo">
        <Logo />
      </div>
      <Link
        to={'/'}
        className={`sidebar-options ${location.pathname == '/' && 'active'}`}
      >
        <div className="sidebar-options__icon">
          <MdSpaceDashboard className="sidebar-icon" />
        </div>
        <div className="sidebar-options__item">Dashboard</div>
      </Link>
      <Link
        to={'/quiz'}
        className={`sidebar-options ${
          location.pathname == '/quiz' && 'active'
        }`}
      >
        <div className="sidebar-options__icon">
          <MdBorderAll className="sidebar-icon" />
        </div>
        <div className="sidebar-options__item">Quiz</div>
      </Link>
      <Link
        to={'/gradebook'}
        className={`sidebar-options ${
          location.pathname == '/gradebook' && 'active'
        }`}
      >
        <div className="sidebar-options__icon">
          <MdAnalytics className="sidebar-icon" />
        </div>
        <div className="sidebar-options__item">Gradebook</div>
      </Link>
      <div className={`sidebar-options`}>
        <div className="sidebar-options__icon">
          <MdMultilineChart className="sidebar-icon" />
        </div>
        <div className="sidebar-options__item">Performance</div>
      </div>
      <div className={`sidebar-options`}>
        <div className="sidebar-options__icon">
          <MdCircleNotifications className="sidebar-icon" />
        </div>
        <div className="sidebar-options__item">Announcements</div>
      </div>
    </div>
  );
};

export default SideBar;
