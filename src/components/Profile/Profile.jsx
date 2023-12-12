import AvaInfo from "./AvaInfo/AvaInfo";
import Wallper from "./Wallper/Wallper";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css"



const Profile = (props) => {
    return (
        <div className={s.wraper}>
            <Wallper />
            <AvaInfo />
            <MyPosts posts={props.profilePage.posts}
             addPost={props.addPost}
             newPostText={props.profilePage.newPostText}/>
        </div>
    )
}

export default Profile;