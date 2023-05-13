import React from 'react';
import s from './Footer.module.scss';
import {HOME_ROUTE} from "../../utils/consts";
import style from "../header/Header.module.scss";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className='container'>
                <footer>
                    <Link to={HOME_ROUTE} className={style.logoLink}>
                        THE<br/>
                        PLANTS
                    </Link>
                    <div className={s.row}>
                        <div className={s.col}>
                            <h2 className={s.colName}>Меню</h2>
                            <p>Растения</p>
                            <p>Уход</p>
                            <p>Горшки</p>
                            <p>О нас</p>
                            <p>Доставка и Оплата</p>
                            <p>Задать вопрос</p>
                        </div>
                        <div className={s.col}>
                            <h2 className={s.colName}>Магазин</h2>
                            <p>Легкие в уходе</p>
                            <p>Очищающие воздух</p>
                            <p>Комнатные</p>
                            <p>Уличные</p>
                            <p>Редкие</p>
                            <p>Уход</p>
                            <p>Горшки</p>
                        </div>
                        <div className={s.col}>
                            <h2 className={s.colName}>Помощь</h2>
                            <p>Доставка</p>
                            <p>Оплата</p>
                            <p>Задать вопрос</p>
                            <p>Политика возврата</p>
                        </div>
                        <div className={s.col}>
                            <h2 className={s.colName}>О нас</h2>
                            <p>О компании</p>
                            <p>Наши преимущества</p>
                            <p>О качестве</p>
                            <p>Связаться с нами</p>
                            <p>Вопросы и ответы</p>
                        </div>
                        <div className={[s.col, s.colWide].join(' ')}>
                            <h2 className={s.colName}>Подписаться</h2>
                            <p>Войдите в аккаунт для того, чтобы получать рассылку об актуальной информации и свежих акциях</p>
                            <input className={s.emailInput} type="text"/>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Footer;