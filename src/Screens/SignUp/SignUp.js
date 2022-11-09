import React, { useState } from 'react';
import Button from '../../Components/Button/Button';
import InputBox from '../../Components/InputBox/InputBox';
import Logo from '../../Components/Logo/Logo';
import './SignUp.scss';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cnfrmPassword, setCnfrmPassword] = useState('');
  const [stuClass, setStuClass] = useState('');
  const [fullName, setFullName] = useState('');
  const onSubmitHandler = () => {
    console.log(email);
    console.log(password);
    console.log(cnfrmPassword);
  };
  return (
    <div className="signup-container">
      <div className="authBox">
        <Logo />

        <InputBox
          type="text"
          title="Full Name"
          value={fullName}
          setValue={setFullName}
          placeholder="Full Name"
        />
        <InputBox
          type="text"
          title="Class Name"
          value={stuClass}
          setValue={setStuClass}
          placeholder="Class Name"
        />
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
        <InputBox
          type="password"
          title="Confirm Password"
          value={cnfrmPassword}
          setValue={setCnfrmPassword}
          placeholder="Password"
        />
        <Button title="Register" onSubmit={onSubmitHandler} type="empty" />
      </div>
    </div>
  );
};

export default SignUp;
