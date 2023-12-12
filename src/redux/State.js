import { rerenderEntireTree } from "../render"



let state = {
  profilePage:{
    posts: [
      { id: 1, message: "Hi my name Ihor", likesCount: 5 },
      { id: 2, message: "Im, profesional coder", likesCount: 14 },
      { id: 3, message: "Hello Bro", likesCount: 52 }
    ],
    newPostText:'Kamasutra'
  },
  dialogsPage:{
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
    newMessageText:'Hello'
  }   
  }




// Profile
export let addPost=()=>{
  let newPost={ id: 4, message: state.profilePage.newPostText, likesCount: 0 }
  state.profilePage.posts.push(newPost)
  state.profilePage.newPostText=''
  rerenderEntireTree(state)
}

export let updateNewPostText=(newText)=>{
  state.profilePage.newPostText=newText
  rerenderEntireTree(state)
}



// Dialog
export let sendMessage=()=>{
  let dialogMessage={ id: 7, message:state.dialogsPage.newMessageText }
  state.dialogsPage.messages.push(dialogMessage)
  state.dialogsPage.newMessageText='';
  rerenderEntireTree(state)
}
export let updateNewMessageText=(newMessage)=>{
  state.dialogsPage.newMessageText=newMessage
  rerenderEntireTree(state)
}


// export let updateNewMessageText=(newMessage)=>{
//   state.profilePage.newPostText=newText
//   rerenderEntireTree(state)
// }

  export default state;