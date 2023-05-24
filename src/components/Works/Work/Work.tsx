import React from "react";
import style from './Work.module.css'

const Work: React.FC = () => {
    return (
        <div className={style.work}>
            <div><img src="./images/photo.jpg" className={style.workImage} alt=""/></div>
            <div className={style.workTitle}>Название проекта</div>
            <div className={style.workDescription}>Краткое описание</div>
        </div>
    )
}

export default Work;