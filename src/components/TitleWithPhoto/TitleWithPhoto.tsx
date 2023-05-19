import React from "react";
import style from './TitleWithPhoto.module.css'

const TitleWithPhoto: React.FC = () => {
    return (
        <div>
            <div className="container">
                <div className={style.titleWithPhoto}>
                    <div className={style.title}>
                        Привет!
                        <br/>
                        Меня зовут Дмитрий Сергеев.
                        <br/>
                        Я front-end разработчик
                    </div>
                    <div>
                        <img className={style.image} src="./images/photo.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TitleWithPhoto;