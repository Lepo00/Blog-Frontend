import { Action, User } from "../../models";
import UserState from "../../models/store/UserState";

const initialState:UserState = {
    logged: false,
    profile: {}
};

const userReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                logged: action.payload as boolean
            }
        case 'LOGOUT':
            return {
                ...state,
                logged: false,
                profile:{}
            }
        case 'REGISTER':
            return state;
        case 'MY_PROFILE':
            return{
                ...state,
                profile: action.payload as User
            }
        default:
            return state
    }
}
export default userReducer;