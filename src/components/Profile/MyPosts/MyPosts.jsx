
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
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default MyPosts;