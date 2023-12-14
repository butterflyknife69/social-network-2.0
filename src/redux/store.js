
let store = {
  _callSubscriber() { console.log('hi') },
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi my name Ihor", likesCount: 5 },
        { id: 2, message: "Im, profesional coder", likesCount: 14 },
        { id: 3, message: "Hello Bro", likesCount: 52 }
      ],
      newPostText: 'Kamasutra'
    },
    dialogsPage: {
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you" },
        { id: 3, message: "Hi bro" },
        { id: 4, message: "What your doing" },
        { id: 5, message: "Brooo" },
        { id: 6, message: "Waid a minute" }
      ],
      dialogs: [
        { id: 1, name: "Dimich" },
        { id: 2, name: "Andrew" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Viktor" },
        { id: 6, name: "Valera" }
      ],
      newMessageText: 'Hello'
    }
  },
  // Метод state
  getState() {
    return this._state
  },
  // Observer
  subscribe(observer) {
    this._callSubscriber = observer
  },
  dispatch(action) {
    // Profile
    if (action.type === 'ADD-POST') {
      let newPost = { id: 4, message: this._state.profilePage.newPostText, likesCount: 0 }
      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostText = ''
      this._callSubscriber(this._state)
    }
    else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText
      this._callSubscriber(this._state)
    } // Dialog
    else if (action.type === 'SEND-MESSAGE') {
      let dialogMessage = { id: 7, message: this._state.dialogsPage.newMessageText }
      this._state.dialogsPage.messages.push(dialogMessage)
      this._state.dialogsPage.newMessageText = '';
      this._callSubscriber(this._state)
    }
    else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
      this._state.dialogsPage.newMessageText = action.newMessage
      this._callSubscriber(this._state)
    }
  }
}

// ProfileAC
export const addPostActionCreator = () => ({ type: 'ADD-POST' })
export const updateNewPostTextActionCreator = (text) =>
  ({ type: 'UPDATE-NEW-POST-TEXT', newText: text })

// DialogsAC
export const sendMessageAC = () => ({ type: 'SEND-MESSAGE' })
export const updateNewMESSAGETextAC = (newMessage) =>
  ({ type: 'UPDATE-NEW-MESSAGE-TEXT', newMessage: newMessage })




export default store;
