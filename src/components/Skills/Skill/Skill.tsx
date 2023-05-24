import React from "react";
import style from './Skill.module.css'

const Skill: React.FC = () => {
    return (
        <a href="src/components/Skills/Skill/Skill#" className={style.skill}>
            <div><img src="./images/photo.jpg" className={style.skillImage} alt=""/></div>
            <div className={style.skillTitle}>React</div>
            <div className={style.skillDescription}>Подробное описание навыка</div>
        </a>
    )
}

export default Skill;