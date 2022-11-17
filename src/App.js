import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { ref, set } from 'firebase/database';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import React, { useContext, useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';

import SideBar from './Components/SideBar/SideBar';
import { database, db, firestore } from './firebase/config';
import Dashboard from './Screens/Dashboard/Dashboard';
import Gradebook from './Screens/Gradebook/Gradebook';
import Quiz from './Screens/Quiz/Quiz';
import SignIn from './Screens/SignIn/SignIn';
import SignUp from './Screens/SignUp/SignUp';
import { ERROR, USER_LOGIN_SUCCESS } from './store/action.types';
import { authState, checkProfileHandler } from './store/actions/actions';
import { context } from './store/store';

const App = () => {
  const { state, dispatch } = useContext(context);
  console.log(state);

  useEffect(() => {
    authState()(dispatch);
  }, []);

  return (
    <div className="app">
      <SideBar />
      <div className="body">
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/"
            element={state.authState ? <Dashboard /> : <SignIn />}
          />
          <Route
            path="/gradebook"
            element={state.authState ? <Gradebook /> : <SignIn />}
          />
          <Route
            path="/quiz"
            element={state.authState ? <Quiz /> : <SignIn />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
