let initialState = {
    users: [
        // { id: 1, fullName: 'Dmitriy K', followed: false, status: 'Im boos', location: { city: 'Minsk', country: 'Belarus' } },
        // { id: 2, fullName: 'Sasha', followed: true, status: 'Im boos', location: { city: 'Kiev', country: 'Ukraine' } },
        // { id: 3, fullName: 'Andrew', followed: false, status: 'Im boos', location: { city: 'Krakov', country: 'Poland' } }
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        case 'SETUSERS':
            return { ...state, users: [...state.users, ...action.users] }
        default:
            return state
    }
}

// UsersAC
export const followAC = (userId) => ({ type: 'FOLLOW', userId })
export const unfollowAC = (userId) => ({ type: 'UNFOLLOW', userId })
export const setUsersAC = (users) => ({ type: 'SETUSERS', users })

export default usersReducer;