'use client';
import { useState } from 'react';
import Input from './Input';

function getUserDataFromLocalStorage(key: string) {
    const data = localStorage.getItem(key);
    return data !== null ? JSON.parse(data) : [];
}

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessages, setErrorMessages] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [registrationError, setRegistrationError] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setErrorMessages({
      email: '',
      password: '',
      confirmPassword: '',
    });

    if (!email || !password || !confirmPassword) {
      setErrorMessages({
        email: email ? '' : 'Email is required',
        password: password ? '' : 'Password is required',
        confirmPassword: confirmPassword ? '' : 'Confirm Password is required',
      });
      return;
    }

    const formData = {
      email,
      password,
      confirmPassword,
    };

    const userArr = getUserDataFromLocalStorage('users');
    const isUserEmail = userArr.some((post: any) => post.email === formData.email);

    if (!isUserEmail && password === confirmPassword) {
      userArr.push(formData);
      localStorage.setItem('users', JSON.stringify(userArr));
      setRegistrationError(false);
      setRegistrationSuccess(true);
    } else {
      setRegistrationSuccess(false);
      setRegistrationError(true);
    }
  };

  return (
    <>
      {registrationSuccess ? (
        <p className="success-message">
          Registration <strong>completed successfully</strong>. You can log into
          your account.
        </p>
      ) : (
        ''
      )}
      <Input
        type="text"
        value={email}
        label="Email"
        placeholder="Your email"
        children={errorMessages.email && <p className="error">{errorMessages.email}</p>}
        onChange={setEmail}
      />
      <Input
        type="password"
        value={password}
        label="Password"
        placeholder="Your password"
        children={errorMessages.password && (<p className="error">{errorMessages.password}</p>)}
        onChange={setPassword}
      />
      <Input
        type="password"
        value={confirmPassword}
        label="Confirm password"
        placeholder="Confirm your password"
        children={errorMessages.confirmPassword && (<p className="error">{errorMessages.confirmPassword}</p>)}
        onChange={setConfirmPassword}
      />
      {registrationError ? <p className='error-message'><strong>Error: </strong>Username or email address already exists</p> : ''}
      <button className='form__btn' type="button" onClick={handleSubmit}>Sign Up</button>
    </>
  );
};

export default SignUp;
