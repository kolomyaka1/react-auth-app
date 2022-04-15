import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Form } from './Form'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from 'store/slices/userSlice';


export const SignUp = () => {
    const navigate = Navigate();
    const dispatch = useDispatch();
    const handleRegister = (email, pass) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, pass) 
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }))
            })
            .catch(console.error)
    }

    return (
        <>
        <Form 
        title='register'
        handleClick={handleRegister}
        />
        </>
    )
}