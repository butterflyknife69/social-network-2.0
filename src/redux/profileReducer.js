

const profileReducer = (state, action) => {

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