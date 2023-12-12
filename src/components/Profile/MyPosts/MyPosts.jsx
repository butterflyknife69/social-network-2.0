import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";


const MyPosts = (props) => {
    let postElements=props.posts.map(p=><Post message={p.message} likesCount={p.likesCount} />)



let newPostElement=React.createRef();

let addPost=()=>{
    let text=newPostElement.current.value;
    props.addPost(text)
    newPostElement.current.value='';
}
let onPostChange=()=>{}
    return (
        <div className={s.myPosts}>
            <h3> My Posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;