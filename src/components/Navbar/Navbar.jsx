import s from "./Navbar.module.css"

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`} > <a href="!#">Profile</a> </div>
            <div className={s.item} > <a href="!#">Dialogs</a> </div>
            <div className={s.item} > <a href="!#">News</a> </div>
            <div className={s.item} > <a href="!#">Music</a> </div>
            <div className={s.item} > <a href="!#">Video</a> </div>
            <div className={s.item} > <a href="!#">Settings</a> </div>
        </nav>
    )
}

export default Navbar;