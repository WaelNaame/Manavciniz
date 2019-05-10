


export default (state = { isLogin: false , message: '' }, action) => {
    switch (action.type) {
        case 'DO_LOGIN':
        return {...state, isLogin : true , message : action.payload}
        case 'LOGIN_FAIL':
        return {...state, isLogin : false , message : action.payload}

        default:
            return {...state, isLogin : false};
    }
}