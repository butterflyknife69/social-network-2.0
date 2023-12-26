let initialState = {
    id: null,
    email: null,
    login: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SETUSERDATA':
            return {
                ...state,
               ...action.data
            }
    
        default:
            return state
    }
}

export const setUserData = (id,email,login) => ({ type: 'SETUSERDATA', data:{id,email,login}})


export default authReducer;  