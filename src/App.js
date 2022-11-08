import React from 'react';
import SideBar from './Components/SideBar/SideBar';

import Dashboard from './Screens/Dashboard/Dashboard';
import SignIn from './Screens/SignIn/SignIn';
import SignUp from './Screens/SignUp/SignUp';

const App = () => {
  return (
    <div className="app">
      {/* <SignUp /> */}
      {/* <SignIn /> */}
      <SideBar />
      <div className="body">
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
