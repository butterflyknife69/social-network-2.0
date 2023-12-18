import s from "./Users.module.css"


const Users = (props) => {
    return (
        props.users.map(u => <div className={s.usersWrap} key={u.id}>
            <span>
                <div className={s.userImgWrap}><img className={s.userImg} src={u.photoUrl} alt="user" /></div>
                <div>
                    {u.followed
                        ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                        : <button onClick={() => { props.follow(u.id) }}>Follow</button>
                    }

                </div>
            </span>
            <span>
                <span>
                    <div> {u.fullName} </div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </span>
        </div>)
    )
}

export default Users;