import User from "../../models/User";
import axios from 'axios';

export const signin=(user:User)=>{
    return {
        type: "SIGNIN"
    }
}

export const signout=()=>{
    return {
        type: "SIGNOUT"
    }
}

export const login =()=>async(dispatch: (actions: { type: string; payload: any; }) => void)=>{
    const res = await axios.get('http://localhost:8080/auth/token');
    const logged=res.status===200?console.log("Login ok"):console.log("Login Failed");
    dispatch({
        type: "GET_ARTICLES",
        payload: logged
    })
}