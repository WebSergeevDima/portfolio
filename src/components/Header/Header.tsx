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
                            <li><a href="#" className={style.navLink}>Главная</a></li>
                            <li><a href="#" className={style.navLink}>Скиллы</a></li>
                            <li><a href="#" className={style.navLink}>Работы</a></li>
                            <li><a href="#" className={style.navLink}>Контакты</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;