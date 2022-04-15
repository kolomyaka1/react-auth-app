import React from 'react';
import { Form } from './Form';
import { useDispatch } from 'react-redux';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from 'store/slices/userSlice';

export const Login = () => {

    const dispatch = useDispatch();
    const handleLogin = (email, pass) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth,email, pass)
            .then(console.log)
            .catch(console.error)
    }

  return (
    <>
        <Form 
        title='sign in'
        handleClick={handleLogin}
        />
    </>
  )
}
