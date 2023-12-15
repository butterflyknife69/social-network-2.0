
let initialState = {
    posts: [
        { id: 1, message: "Hi my name Ihor", likesCount: 5 },
        { id: 2, message: "Im, profesional coder", likesCount: 14 },
        { id: 3, message: "Hello Bro", likesCount: 52 }
    ],
    newPostText: 'Kamasutra'
}
const profileReducer = (state=initialState, action) => {

    switch (action.type) {
        case 'ADD-POST':
            let newPost = { id: 4, message: state.newPostText, likesCount: 0 }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText
            return state
        default:
            return state

    }

}

// ProfileAC
export const addPostActionCreator = () => ({ type: 'ADD-POST' })
export const updateNewPostTextActionCreator = (text) =>
    ({ type: 'UPDATE-NEW-POST-TEXT', newText: text })



export default profileReducer;