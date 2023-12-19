import axios from "axios"
import s from "./Users.module.css"
import userPhoto from '../../assets/imges/avatarUsers.webp'




const Users = (props) => {

    if (props.users.length === 0) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items)
            })

    }


    return (
        props.users.map(u => <div className={s.usersWrap} key={u.id}>
            <span>
                <div className={s.userImgWrap}><img className={s.userImg} src={u.photos.small != null ? u.photos.small : userPhoto} alt="user" /></div>
                <div>
                    {u.followed
                        ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                        : <button onClick={() => { props.follow(u.id) }}>Follow</button>
                    }

                </div>
            </span>
            <span>
                <span>
                    <div> {u.name} </div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </span>
            </span>
        </div>)
    )
}

export default Users;