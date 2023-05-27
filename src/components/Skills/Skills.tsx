import React from "react";
import style from './Skills.module.css'
import Skill from "./Skill/Skill";

const Skills: React.FC = () => {
    return (
        <div className={style.skills}>
            <div className="container">
                <h2 className={style.skillsTitle}>Мои скиллы</h2>

                <div className={style.skillsItems}>
                    <Skill title="HTML/CSS" description="Адаптивная, кроссбраузерная вёрстка" image="htmlcss.jpg"/>
                    <Skill title="React" description="SPA при использовании стека React + Redux" image="react.jpg"/>
                    <Skill title="Typescript" description="Один из самых популярных ЯП в мире" image="typescript.jpg"/>
                </div>
            </div>
        </div>
    )
}

export default Skills;