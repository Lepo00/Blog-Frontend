const initialState = false;

const LoggedReducer = (state = initialState, action: { type: string; }) => {
    switch (action.type) {
        case 'SIGNIN':
            return true;
        case 'SIGNOUT':
            return false;
        default:
            return state
    }
}
export default LoggedReducer;