import React from 'react';
import style from './Header.module.scss'
import { Link } from "react-router-dom";
import {HOME_ROUTE, PRODUCTS_ROUTE} from "../../utils/consts";

const Header = () => {
    return (
        <div className='container'>
            <header className={style.header}>
                <nav className={style.navbar}>
                    <div className={style.logo}>
                        <Link to={HOME_ROUTE} className={style.logoLink}>
                            THE<br />
                            PLANTS
                        </Link>
                    </div>
                    <ul className={[style.list, style.pageLinks].join(' ')}>
                        <li className={style.item}>
                            <Link className={style.linkToPage} to={PRODUCTS_ROUTE}>Растения</Link>
                        </li>
                        <li className={style.item}>
                            <a href="/">Уход</a>
                        </li>
                        <li className={style.item}>
                            <a href="/">Горшки</a>
                        </li>
                        <li className={style.item}>
                            <a href="/">Блог</a>
                        </li>
                        <li className={style.item}>
                            <a href="/">О Нас</a>
                        </li>
                        <li className={style.item}>
                            <a href="/">Доставка и Оплата</a>
                        </li>
                    </ul>
                    <ul className={[style.iconsList, style.icons].join(' ')}>
                        <li className={style.item}>
                            <input className={style.navIcon} type="image" alt='search' src='resources/img/icons/search_FILL0_wght100_GRAD200_opsz48.png' />
                        </li>
                        <li className={style.item}>
                            <input className={style.navIcon} type="image" alt='account' src='resources/img/icons/account_circle_FILL0_wght100_GRAD200_opsz48.png' />
                        </li>
                        <li className={style.item}>
                            <input className={style.navIcon} type="image" alt='call' src='resources/img/icons/call_FILL0_wght100_GRAD200_opsz48.png' />
                        </li>
                        <li className={style.item}>
                            <input className={style.navIcon} type="image" alt='cart' src='resources/img/icons/shopping_bag_FILL0_wght100_GRAD200_opsz48.png' />
                        </li>

                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;