import React from 'react';
import SideBar from './Components/SideBar/SideBar';

import Dashboard from './Screens/Dashboard/Dashboard';
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
        {/* <Dashboard /> */}
        <Quiz />
      </div>
    </div>
  );
};

export default App;
