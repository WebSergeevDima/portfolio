import React from "react";
import style from './Skill.module.css'

type SkillType = {
    title: string
    description: string
    image: string
}

const Skill: React.FC<SkillType> = ({title, description, image}) => {
    return (
        <div className={style.skill}>
            <div><img src={`./images/skills/${image}`} className={style.skillImage} alt={title}/></div>
            <div className={style.skillTitle}>{title}</div>
            <div className={style.skillDescription}>{description}</div>
        </div>
    )
}

export default Skill;