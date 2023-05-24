import React from "react";
import style from './Footer.module.css'

const Footer: React.FC = () => {
    return (
        <footer className={style.footer}>
            <h2 className={style.title}>Дмитрий Сергеев</h2>
           <div className={style.images}>
               <div><img src="./images/photo.jpg" className={style.image} alt=""/></div>
               <div><img src="./images/photo.jpg" className={style.image} alt=""/></div>
               <div><img src="./images/photo.jpg" className={style.image} alt=""/></div>
               <div><img src="./images/photo.jpg" className={style.image} alt=""/></div>
           </div>

            <div className={style.copy}>&copy; 2023 Все права защищены</div>
        </footer>
    )
}

export default Footer;