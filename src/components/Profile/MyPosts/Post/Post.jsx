
import s from "./Post.module.css"


const Post = (props) => {
    return (
        <div className={s.item}>
            <img className={s.postImg} src="https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Photo.png" alt="img" />
            {props.message}
            <div className={s.likesCount}>
                <span>Likes:</span> {props.likesCount} 
            </div>
        </div>
    )
}

export default Post;