import s from "./Profile.module.css"



const Profile = (props) => {
    return (
        <div className={s.content}>
            <div className={s.div_img}><img className={s.img_content} src="https://images4.alphacoders.com/214/214928.jpg" alt="content" /></div>
            <div>Ava+Description</div>
            <div>My Posts
                <div>New post</div>
                <div>
                    <div>Post1</div>
                    <div>Post2</div>
                    <div>Post3</div>
                </div>
            </div>
        </div>
    )
}

export default Profile;