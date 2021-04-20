const initialState = false;

const userReducer = (state = initialState, action: { type: string; payload: boolean }) => {
    switch (action.type) {
        case 'LOGIN':
            return action.payload;
        case 'LOGOUT':
            return false;
        case 'REGISTER':
            return state;
        default:
            return state
    }
}
export default userReducer;