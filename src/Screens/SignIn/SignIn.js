import React, { useState } from 'react';
import Button from '../../Components/Button/Button';
import InputBox from '../../Components/InputBox/InputBox';
import Logo from '../../Components/Logo/Logo';
import './SignIn.scss';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = () => {
    console.log(email);
    console.log(password);
  };
  return (
    <div className="signup-container">
      <div className="authBox">
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
      </div>
    </div>
  );
};

export default SignIn;
