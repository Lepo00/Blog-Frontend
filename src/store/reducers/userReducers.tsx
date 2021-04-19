const initialState = false;

const LoggedReducer = (state = initialState, action: { type: string; payload: boolean }) => {
    switch (action.type) {
        case 'LOGIN':
            return action.payload;
        case 'LOGOUT':
            return false;
        default:
            return state
    }
}
export default LoggedReducer;