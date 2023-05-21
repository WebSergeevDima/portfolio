import React from "react";
import style from './Works.module.css'
import Work from "../Work/Work";

const Works: React.FC = () => {
    return (
        <div className={style.works}>
            <div className="container">
                <h2 className={style.worksTitle}>Мои работы</h2>

                <div className={style.worksItems}>
                    <Work/>
                    <Work/>
                </div>
            </div>
        </div>
    )
}

export default Works;