
import s from "./MyPosts.module.css"
import Post from "./Post/Post";


const MyPosts = (props) => {
    return (
        <div className={s.myPosts}>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <div className={s.posts}>
                <Post message={'Hi my name Ihor'} likesCount={5}/>
                <Post message={'Im, profesional coder'}likesCount={14}/>
            </div>
        </div>
    )
}

export default MyPosts;