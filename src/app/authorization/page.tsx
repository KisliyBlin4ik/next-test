'use client'
import { useState } from 'react';
import '../../styles/Authorization.modal.css'
import SignIn from '@/components/SingIn';
import SignUp from '@/components/SignUp';

export default function Authorization() {
  const [toggle, setToggle] = useState(1);
  
  return (
    <div className='container'>
      <div className='form'>
        <div className='form__tabMenu'>
          <div className={toggle === 1 ? 'tabMenu active' : 'tabMenu'} onClick={() => setToggle(1)}>Sign in</div>
          <div className={toggle === 2 ? 'tabMenu active' : 'tabMenu'} onClick={() => setToggle(2)}>Registration</div>
        </div>
        {toggle === 1 && <SignIn/>}
        {toggle === 2 && <SignUp/>}
      </div>
    </div>
  );
}
