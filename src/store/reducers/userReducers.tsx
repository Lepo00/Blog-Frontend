const initialState = false;

const LoggedReducer = (state = initialState, action: { type: string; payload:boolean }) => {
    switch (action.type) {
        case 'SIGNIN':
            return true;
        case 'SIGNOUT':
            return false;
        case 'LOGIN':
            return action.payload
        default:
            return state
    }
}
export default LoggedReducer;