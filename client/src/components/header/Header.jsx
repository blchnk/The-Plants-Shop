import React, {useContext} from 'react';
import style from './Header.module.scss'
import {Link} from "react-router-dom";
import {
    ACCOUNT_ROUTE, CARE_ROUTE,
    CART_ROUTE,
    HOME_ROUTE,
    POTS_ROUTE,
    PRODUCTS_ROUTE,
    REGISTRATION_ROUTE
} from "../../utils/consts";
import searchIcon from '../../resources/img/icons/search_FILL0_wght100_GRAD200_opsz48.png';
import accountIcon from '../../resources/img/icons/account_circle_FILL0_wght100_GRAD200_opsz48.png';
import callIcon from '../../resources/img/icons/call_FILL0_wght100_GRAD200_opsz48.png';
import cartIcon from '../../resources/img/icons/shopping_bag_FILL0_wght100_GRAD200_opsz48.png';
import Search from "../ui/Search";
import {useNavigate} from 'react-router-dom'
import {Context} from "../../index";

const Header = () => {
    const navigate = useNavigate();
    const {user} = useContext(Context);

    return (
        <div className='container'>
            <header className={style.header}>
                <nav className={style.navbar}>
                    <div className={style.logo}>
                        <Link to={HOME_ROUTE} className={style.logoLink}>
                            THE<br/>
                            PLANTS
                        </Link>
                    </div>
                    <ul className={[style.list, style.pageLinks].join(' ')}>
                        <li className={style.item}>
                            <Link className={style.linkToPage} to={PRODUCTS_ROUTE}>Растения</Link>
                        </li>
                        <li className={style.item}>
                            <Link className={style.linkToPage} to={CARE_ROUTE}>Уход</Link>
                        </li>
                        <li className={style.item}>
                            <Link className={style.linkToPage} to={POTS_ROUTE}>Горшки</Link>
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
                            <Search className={style.navIcon}
                                    src={searchIcon}/>
                        </li>
                        <li className={style.item}>
                            <input className={style.navIcon}
                                   type="image" alt='account'
                                   src={accountIcon}
                                   onClick={() => {
                                       user.isAuth ? navigate(ACCOUNT_ROUTE) : navigate(REGISTRATION_ROUTE);
                                   }}/>
                        </li>
                        <li className={style.item}>
                            <input className={style.navIcon}
                                   type="image"
                                   alt='call'
                                   src={callIcon}/>
                        </li>
                        <li className={style.item}>
                            <input className={style.navIcon}
                                   type="image"
                                   alt='cart'
                                   onClick={() => navigate(CART_ROUTE)}
                                   src={cartIcon}/>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;