import React from "react";
import style from './Skills.module.css'
import Skill from "../Skill/Skill";

const Skills: React.FC = () => {
    return (
        <div className={style.skills}>
            <div className="container">
                <h2 className={style.skillsTitle}>Мои скиллы</h2>

                <div className={style.skillsItems}>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                </div>
            </div>
        </div>
    )
}

export default Skills;