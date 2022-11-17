import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../Components/Button/Button';
import InputBox from '../../Components/InputBox/InputBox';
import Logo from '../../Components/Logo/Logo';
import { signInHandler } from '../../store/actions/actions';
import { context } from '../../store/store';
import './SignIn.scss';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { dispatch } = useContext(context);
  const onSubmitHandler = () => {
    signInHandler(email, password)(dispatch);
    navigate('/');
  };
  return (
    <div className="signup-container">
      <div className="authBox signin">
        <Logo />
        <InputBox
          type="email"
          title="Email Address"
          value={email}
          setValue={setEmail}
          placeholder="Email Address"
        />
        <InputBox
          type="password"
          title="Password"
          value={password}
          setValue={setPassword}
          placeholder="Password"
        />
        <Button title="Log In" onSubmit={onSubmitHandler} type="empty" />
        <p className="auth" onClick={() => navigate('/signup')}>
          Create new Account? <span>Register Here</span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
