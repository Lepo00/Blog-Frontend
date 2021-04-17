import {noToken as axios} from '../../config/axiosConfig';

interface customUser {
    username: string,
    password: string,
    remember: boolean
}

export const login = (user: customUser) => async (dispatch: (actions: { type: string; payload: any; }) => void) => {
    try {
        const res = await axios.post('/auth/token', user);
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

export const logout=()=>{
    sessionStorage.removeItem("jwt");
    localStorage.removeItem("jwt");
    return {
        type: "LOGOUT"
    }
}