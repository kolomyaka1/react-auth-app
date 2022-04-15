import { useNavigate } from 'react-router-dom';
import { Form } from './Form'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from 'store/slices/userSlice';
import { useAppDispatch } from 'hooks/redux-hooks';


export const SignUp = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const handleRegister = (email: string, pass: string) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, pass) 
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }));
                navigate(`/`);
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