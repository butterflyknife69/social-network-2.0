import { NavLink } from "react-router-dom";
import s from "./Heder.module.css"

const Header = (props) => {
  return (
    <header className={s.header}>
      <div className={s.wraperItemHeader}>
        <div  className={s.imgWraper}>
          <img className={s.img_header} src="https://assets.stickpng.com/images/62e131df7fe3599fdd46ecb3.png" alt="logo" />
        </div>
        <div className={s.swichDark}>
          <button id="switchMode">Switch</button>
        </div>
        <div className={s.loginBlock}>
        {props.isAuth ? props.login
          : <NavLink to='/login'>Login</NavLink>
        }
      </div>
      </div>
    </header>
  )
}

export default Header;

