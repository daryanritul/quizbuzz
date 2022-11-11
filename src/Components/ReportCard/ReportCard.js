import React from 'react';
import './ReportCard.scss';

import { MdCheck, MdViewList, MdViewModule } from 'react-icons/md';

const ReportCard = ({ Icon = MdCheck, color, title, value }) => {
  return (
    <div className="report-card">
      <div className={`report-card__icon color-${color}`}>
        <Icon className="report-icon" />
      </div>
      <div className="report-card__text">
        <p>{title}</p>
        <h3>{value}</h3>
      </div>
    </div>
  );
};

export default ReportCard;
