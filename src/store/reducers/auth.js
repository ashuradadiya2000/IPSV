const initState = {
    authenticated: false,
    token: null
}


export const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, ...action.payload };
        case 'LOGOUT':
            return { ...state, authenticated: action.payload.authenticated };
        default:
            return state;
    }
};