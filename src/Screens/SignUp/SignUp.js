import React, { useContext, useState } from 'react';
import { MdAdd, MdArrowDropDown, MdRemove } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import Button from '../../Components/Button/Button';
import InputBox from '../../Components/InputBox/InputBox';
import Logo from '../../Components/Logo/Logo';
import { signUpHandler } from '../../store/actions/actions';
import { context } from '../../store/store';
import './SignUp.scss';

const classes = [
  'B.C.A',
  'M.C.A',
  'B.Tech',
  'M.Tech',
  'M.B.A',
  'B.S.C',
  'M.S.C',
];

const SignUp = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cnfrmPassword, setCnfrmPassword] = useState('');
  const [stuClass, setStuClass] = useState('');

  const { state, dispatch } = useContext(context);

  const onSubmitHandler = () => {
    const data = {
      email,
      fullName,
      classes: stuClass,
    };
    if (email && password && cnfrmPassword && password === cnfrmPassword) {
      signUpHandler(email, password, data)(dispatch);
    }
    navigate('/');
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
        <div className="drop">
          <InputBox
            type="text"
            title="Classes"
            placeholder="Classes,Seprated by comma Ex(MCA, BCA)"
            value={stuClass}
            disabled={true}
          />
          <div className="dropList">
            {classes.map((item, index) => (
              <div
                className="dropList-Item"
                key={index}
                onClick={() => setStuClass(item)}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
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
        <p className="auth" onClick={() => navigate('/signin')}>
          Already have an Account?<span>Login Here</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
