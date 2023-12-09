
import s from "./Post.module.css"


const Post = (props) => {
    return (
        <div className={s.item}>
            <img className={s.postImg} src="https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Photo.png" alt="img" />
            Post1
            <div className={s.like}>
                <span> Like</span>
            </div>
        </div>
    )
}

export default Post;