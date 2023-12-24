import AvaInfo from "./AvaInfo/AvaInfo";
import Wallper from "./Wallper/Wallper";
import s from "./Profile.module.css"
import MyPostsContainer from "./MyPosts/MyPostsContainer";



const Profile = (props) => {
    return (
        <div className={s.wraper}>
            <Wallper />
            <AvaInfo profile={props.profile} />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;