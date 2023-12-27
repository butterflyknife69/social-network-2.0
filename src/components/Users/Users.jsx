import React from "react"
import s from "./Users.module.css"
import userPhoto from '../../assets/imges/avatarUsers.webp'
import { NavLink } from "react-router-dom"
import axios from "axios"



let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.usersWrap}>
            <div className={s.numPage}>
                {pages.map(p => {
                    return <span className={props.currentPage === p && s.selectedPage}
                        onClick={() => { props.onPageChanget(p) }}>{p}</span>
                })}
            </div>
            {
                props.users.map(u => (<div key={u.id}>
                    <span>
                        <div className={s.userImgWrap}>
                            <NavLink to={'/profile/' + u.id}>
                                <img className={s.userImg} src={u.photos.small != null
                                    ? u.photos.small : userPhoto} alt="user" />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers:{
                                            "API-KEY":'efdde01c-f6f9-4518-b37d-3a38f6737f0d'
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(u.id)
                                            }
                                        })

                                }}>Unfollow</button>
                                : <button onClick={() => {

                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers:{
                                            "API-KEY":'efdde01c-f6f9-4518-b37d-3a38f6737f0d'
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                        })
                                }}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                </div>
                ))}
        </div>
    )
}


export default Users;

