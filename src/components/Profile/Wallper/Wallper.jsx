
import s from "./Wallper.module.css"


const Wallper = (props) => {
    return (
        <div className={s.div_img}>
            <img className={s.img_content} src="https://images4.alphacoders.com/214/214928.jpg" alt="content" />
        </div>
    )
}

export default Wallper;