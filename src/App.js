import React from 'react';

import { Route, Routes } from 'react-router-dom';

import SideBar from './Components/SideBar/SideBar';
import Dashboard from './Screens/Dashboard/Dashboard';
import Gradebook from './Screens/Gradebook/Gradebook';
import Quiz from './Screens/Quiz/Quiz';
import SignIn from './Screens/SignIn/SignIn';
import SignUp from './Screens/SignUp/SignUp';

const App = () => {
  return (
    <div className="app">
      {/* <SignUp /> */}
      {/* <SignIn /> */}
      {/* <Quiz /> */}
      <SideBar />
      <div className="body">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/gradebook" element={<Gradebook />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
