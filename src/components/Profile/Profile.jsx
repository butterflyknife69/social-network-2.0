import AvaInfo from "./AvaInfo/AvaInfo";
import Wallper from "./Wallper/Wallper";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css"



const Profile = (props) => {
    return (
        <div className={s.wraper}>
            <Wallper />
            <AvaInfo />
            <MyPosts posts={props.state.posts}/>
        </div>
    )
}

export default Profile;