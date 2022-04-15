import { Login } from 'components/Login'
import React from 'react'
import { NavLink } from 'react-router-dom'

export const LoginPage = () => {
    return (
        <div>
            <h1>Login</h1>
            <Login />
            <p>
                Or <NavLink to='/register'>Register</NavLink>
            </p>
        </div>
    )
}
