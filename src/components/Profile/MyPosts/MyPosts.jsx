
import s from "./MyPosts.module.css"


const MyPosts=(props)=>{
    return(
        <div className={s.myPosts}>My Posts
        <div>New post</div>
        <div>
            <div>Post1</div>
            <div>Post2</div>
            <div>Post3</div>
        </div>
    </div>
    )
}

export default MyPosts;