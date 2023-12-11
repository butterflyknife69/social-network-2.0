
import s from "./MyPosts.module.css"
import Post from "./Post/Post";


const MyPosts = (props) => {


    let posts = [
        { id:1, message:"Hi my name Ihor",likesCount:5 },
        { id:2, message:"Im, profesional coder",likesCount:14 },
        { id:3, message:"Hello Bro",likesCount:52 }
    ]
    let postElements=posts.map(p=><Post message={p.message} likesCount={p.likesCount} />)

    return (
        <div className={s.myPosts}>
            <h3> My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;