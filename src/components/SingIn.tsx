'use client'
import {useState} from 'react'
import Input from './Input';

function getUserDataFromLocalStorage(key: string) {
    const data = localStorage.getItem(key);
    return data !== null ? JSON.parse(data) : [];
}

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInError, setSignInError] = useState(false);

    const handleSubmit = (e: any) => {
      e.preventDefault();

      const formData = {
        email,
        password,
      };

      const userArr = getUserDataFromLocalStorage('users');

      const isUserArr = userArr.some(
        (post: any) =>
          post.email === formData.email && post.password === formData.password
      );

      if (isUserArr) {
        localStorage.setItem('user_log', JSON.stringify(true));
        localStorage.setItem('user', JSON.stringify(formData));
        window.location.href = '/';
      } else {
        localStorage.setItem('user_log', JSON.stringify(false));
        setSignInError(true);
      }
    };
  
  return (
     <>
      {signInError ? <p className='error-message'>Incorrect username or password.</p> : ''}
      <Input
        type="text"
        value={email}
        label="Email"
        placeholder="Your email"
        onChange={setEmail}
      />
     <Input
        type="password"
        value={password}
        label="Password"
        placeholder="Your password"
        onChange={setPassword}
      />
     <button className='form__btn' type="button" onClick={handleSubmit}>Sign In</button>
     </>
  );
};

export default SignIn;
