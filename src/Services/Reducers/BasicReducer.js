const basicReducer = (state={
    message:"Hello from the reducer",
    username: null,
    saveLogin: null,
    signedIn: false
}, action) => {
    switch(action.type){
        case 'DEFAULT':
        state={
            ...state,
            message: action.message 
        }
        break;

        default:
            break;
    }
    return state;
};

export default basicReducer;

