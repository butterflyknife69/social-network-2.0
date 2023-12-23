
let initialState = {
    posts: [
        { id: 1, message: "Hi my name Ihor", likesCount: 5 },
        { id: 2, message: "Im, profesional coder", likesCount: 14 },
        { id: 3, message: "Hello Bro", likesCount: 52 }
    ],
    newPostText: 'Kamasutra'
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST':
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, { id: state.posts.length + 1, message: state.newPostText, likesCount: 0 }]
            }
        case 'UPDATE-NEW-POST-TEXT':
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state
    }
}
// ProfileAC
export const addPost = () => ({ type: 'ADD-POST' })
export const updateNewPostText = (text) => ({ type: 'UPDATE-NEW-POST-TEXT', newText: text })

export default profileReducer;