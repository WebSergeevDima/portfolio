import React from "react";
import style from './Work.module.css'



type WorkType = {
    title: string
    description: string
    image: string
}

const Work: React.FC<WorkType> = ({title, description, image}) => {

    const SImage = {
        backgroundImage: 'url(./images/photo.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }

    return (
        <div className={style.work}>
            <div className={`${style.workImage}`} style={SImage}></div>
            <div className={style.workTitle}>{title}</div>
            <div className={style.workDescription}>{description}</div>
        </div>
    )
}

export default Work;