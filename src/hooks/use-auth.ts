import { useCustomSelector } from './redux-hooks'

export function useAuth() {
    const { email, token, id } = useCustomSelector(state => state.userReducer)

    return {
        isAuth: !!email,
        email,
        token,
        id
    }
}