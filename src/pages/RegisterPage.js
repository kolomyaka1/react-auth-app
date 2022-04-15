import { SignUp } from 'components/SignUp'
import React from 'react'
import { NavLink } from 'react-router-dom'

export const RegisterPage = () => {
    return (
        <div>
            <h1>Register</h1>
            <SignUp />
            <p>
                Already have an account? <NavLink to='/login'>Sing in</NavLink>
            </p>
        </div>
    )
}
