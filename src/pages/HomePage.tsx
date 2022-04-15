import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from 'hooks/use-auth'
import { removeUser } from 'store/slices/userSlice'
import { useAppDispatch } from 'hooks/redux-hooks'


export const HomePage = () => {
    const dispatch = useAppDispatch();
    const {isAuth, email } = useAuth();
    return isAuth ? (
        <>
            <h1>Welcome!</h1>

            <button
             onClick={() => dispatch(removeUser())}
            >
                Logout from {email}
             </button>

        </>
    ) : (
        <Navigate to="/login" />
    )
}
