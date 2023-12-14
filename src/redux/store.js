
let store = {
  _callSubscriber(){ console.log('hi') },

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
  getState(){
    return this._state
  },

  // Profile
  addPost(){
    let newPost = { id: 4, message: this._state.profilePage.newPostText, likesCount: 0 }
    this._state.profilePage.posts.push(newPost)
    this._state.profilePage.newPostText = ''
    this._callSubscriber(this._state)
  },
  updateNewPostText(newText){
    this._state.profilePage.newPostText = newText
    this._callSubscriber(this._state)
  },
  // Dialog
  sendMessage(){
    let dialogMessage = { id: 7, message: this._state.dialogsPage.newMessageText }
    this._state.dialogsPage.messages.push(dialogMessage)
    this._state.dialogsPage.newMessageText = '';
    this._callSubscriber(this._state)
  },
  updateNewMessageText(newMessage){
    this._state.dialogsPage.newMessageText = newMessage
    this._callSubscriber(this._state)
  },
  // Observer
  subscribe(observer){
    this._callSubscriber = observer
  }

}


export default store;
