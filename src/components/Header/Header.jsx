import s from "./Heder.module.css"

const Header=(props)=>{
return(
<header className={s.header}>
        <img className={s.img_header} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png" alt="logo" />
      </header>
)
}

export default Header;