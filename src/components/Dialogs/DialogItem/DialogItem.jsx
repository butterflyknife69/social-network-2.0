import { NavLink } from "react-router-dom"
import s from "./DialogItem.module.css"


const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <span><img className={s.imgDialog} src="https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Photo.png" alt="" /></span>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem;