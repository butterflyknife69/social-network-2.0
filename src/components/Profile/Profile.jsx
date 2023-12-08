import AvaInfo from "./MyPosts/AvaInfo/AvaInfo";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css"



const Profile = (props) => {
    return (
        <div className={s.content}>
            <div className={s.div_img}><img className={s.img_content} src="https://images4.alphacoders.com/214/214928.jpg" alt="content" /></div>
            <AvaInfo />
            <MyPosts />
        </div>
    )
}

export default Profile;