import Wallper from "./Wallper/Wallper";
import s from "./Profile.module.css"
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./AvaInfo/ProfileInfo";



const Profile = (props) => {
    return (
        <div className={s.wraper}>
            <Wallper />
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;