
import Preloader from "../../common/Preloader";
import s from "./AvaInfo.module.css"


const AvaInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={s.avaDskr}>
            <img src={props.profile.photos.large} alt="ava" />
            Ava+Description
        </div>
    )
}

export default AvaInfo;