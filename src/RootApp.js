import React, { useReducer } from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reducer from './store/reducer/reducer';
import { context, initialState } from './store/store';

const RootApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <BrowserRouter>
      <context.Provider
        value={{
          state,
          dispatch,
        }}
      >
        <App />
      </context.Provider>
    </BrowserRouter>
  );
};

export default RootApp;
