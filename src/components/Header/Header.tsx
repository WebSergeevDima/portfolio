import React from "react";
import style from './Header.module.css'

const Header: React.FC = () => {
    return (
        <header>
            <div className="container">
                <div className={style.header}>
                    <div></div>
                    <nav>
                        <ul className={style.nav}>
                            <li><a href="#" className={style.nav__link}>Главная</a></li>
                            <li><a href="#" className={style.nav__link}>Скиллы</a></li>
                            <li><a href="#" className={style.nav__link}>Работы</a></li>
                            <li><a href="#" className={style.nav__link}>Контакты</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;