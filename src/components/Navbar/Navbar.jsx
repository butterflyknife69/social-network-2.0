import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css"

const Navbar = (props) => {
    const activeClassName = navData => navData.isActive ? s.active : s.item;
    return (
        <nav className={s.nav}>
            <div className={s.item} > <NavLink to="/profile" className={activeClassName}>Profile</NavLink> </div>
            <div className={s.item} > <NavLink to="/dialogs" className={activeClassName}>Dialogs</NavLink> </div>
            <div className={s.item} > <NavLink to="/news" className={activeClassName}>News</NavLink> </div>
            <div className={s.item} > <NavLink to="/music" className={activeClassName}>Music</NavLink> </div>
            <div className={s.item} > <NavLink to="/video" className={activeClassName}>Video</NavLink> </div>
            <div className={s.item} > <NavLink to="/settings" className={activeClassName}>Settings</NavLink> </div>
        </nav>
    )
}

export default Navbar;