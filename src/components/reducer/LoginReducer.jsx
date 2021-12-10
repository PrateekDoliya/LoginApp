const initialState = null;
const LoginReducer = (state=initialState, action) => {
    if(action.type === 'login')
    {
        state=action.name
        return state;
    }
    else
    {
        return state
    }
}

export default LoginReducer;