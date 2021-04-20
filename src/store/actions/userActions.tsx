import { noToken as axios } from '../../config/axiosConfig';
import { LoginUser, User, AppThunk } from '../../models';

export const login = (user: LoginUser): AppThunk => async dispatch => {
    try {
        const res = await axios.post('auth/token', user);
        dispatch({
            type: "LOGIN",
            payload: res.status === 200
        })
        user.remember ? localStorage.setItem("jwt", res.data.message) : sessionStorage.setItem("jwt", res.data.message);
    } catch {
        dispatch({
            type: "LOGIN",
            payload: false
        })
    }
}

export const logout = () => {
    sessionStorage.removeItem("jwt");
    localStorage.removeItem("jwt");
    return {
        type: "LOGOUT"
    }
}

export const register = (user: User): AppThunk => async dispatch => {
    user.role = "USER";
    const res = await axios.post('user', user);
    dispatch({
        type: "REGISTER",
        payload: res.status === 200
    })
    dispatch(login(
        { username: user.username!, password: user.password!, remember: false }
    ))
}