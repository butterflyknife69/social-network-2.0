
import s from "./Wallper.module.css"


const Wallper = (props) => {
    return (
        <div className={s.wallper}>
            <img className={s.img_content} src="https://images4.alphacoders.com/214/214928.jpg" alt="content" />
        </div>
    )
}

export default Wallper;