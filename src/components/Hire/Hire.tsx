import React from "react";
import style from './Hire.module.css'

const Hire: React.FC = () => {
    return (
        <div className={style.hire}>
            <h2 className={style.title}>Рассматриваю варианты удаленной работы</h2>
            <button className={style.btn}>Нанять меня</button>
        </div>
    )
}

export default Hire;