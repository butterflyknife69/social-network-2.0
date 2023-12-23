let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
            return { ...state, users: action.users }
        case 'SETCURENTPAGE':
            return { ...state, currentPage: action.currentPage }
        case 'SETTOTALUSERSCOUNT':
            return { ...state, totalUsersCount: action.totalUsersCount }
        case 'TOGGLEISFETCHING':
            return { ...state, isFetching: action.isFetching }
        default:
            return state
    }
}

// UsersAC
export const follow = (userId) => ({ type: 'FOLLOW', userId })
export const unfollow = (userId) => ({ type: 'UNFOLLOW', userId })
export const setUsers = (users) => ({ type: 'SETUSERS', users })
export const setCurrentPage = (currentPage) => ({ type: 'SETCURENTPAGE', currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: 'SETTOTALUSERSCOUNT', totalUsersCount })
export const toggleIsFetching = (isFetching) => ({ type: 'TOGGLEISFETCHING', isFetching })
export default usersReducer;  