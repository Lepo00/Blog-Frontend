import { noToken as axios, instance as token } from '../../config/axiosConfig';
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

export const myProfile = (): AppThunk => async dispatch => {
    const {data} = await token.get('user/my-profile');
    dispatch({
        type: "MY_PROFILE",
        payload: data
    })
}

export const updateProfile = (user:User): AppThunk => async dispatch => {
    const {data} = await token.put('user', user);
    dispatch({
        type: "UPDATE_PROFILE",
        payload: data
    })
}

export const uploadPhoto = (file:FormData): AppThunk => async dispatch => {
    const {data} = await token.put('user/upload-photo', file);
    dispatch({
        type: "UPLOAD_PHOTO",
        payload: data
    })
}