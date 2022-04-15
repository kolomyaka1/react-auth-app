import React from 'react';
import { Form } from './Form';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from 'store/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'hooks/redux-hooks';

export const Login = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const handleLogin = (email: string, pass: string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth,email, pass)
            .then(({user}) => {
              dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: user.refreshToken
              }))
              navigate(`/`)
            })
            .catch(() => alert('Неправильный логин/пароль'))
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
