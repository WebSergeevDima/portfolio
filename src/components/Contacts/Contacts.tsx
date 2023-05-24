import React from "react";
import style from './Contacts.module.css'

const Contacts: React.FC = () => {
    return (

        <div className={style.contacts}>
            <div className="container">
                <h2 className={style.title}>Контакты</h2>
                <form action="" className={style.form}>
                    <input className={style.input} type="text"/>
                    <input className={style.input} type="text"/>
                    <textarea className={style.textarea}></textarea>
                    <button className={style.btn}>Отправить</button>
                </form>
            </div>
        </div>
    )
}

export default Contacts;