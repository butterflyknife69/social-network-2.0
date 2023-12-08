import s from "./Navbar.module.css"

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.item} href="#"> <a>Profile</a> </div>
            <div className={s.item} href="#"> <a>Dialogs</a> </div>
            <div className={s.item} href="#"> <a>News</a> </div>
            <div className={s.item} href="#"> <a>Music</a> </div>
            <div className={s.item} href="#"> <a>Video</a> </div>
            <div className={s.item} href="#"> <a>Settings</a> </div>
        </nav>
    )
}

export default Navbar;