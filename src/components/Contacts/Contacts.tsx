import React from "react";
import style from './Contacts.module.css'

const Contacts: React.FC = () => {
    return (
        <div className={style.contacts}>
            <h2>Дмитрий Сергеев</h2>
            <form action="" className={style.form}>
                <input type="text"/>
                <input type="text"/>
                <textarea></textarea>
                <button>Отправить</button>
            </form>
        </div>
    )
}

export default Contacts;