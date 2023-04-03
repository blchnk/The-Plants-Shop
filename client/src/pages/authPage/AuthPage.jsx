import React, {useContext} from 'react';
import {Context} from "../../index";
import style from './AuthPage.module.scss';
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../../utils/consts";

const AuthPage = () => {
    const user = useContext(Context);
    const navigate = useNavigate();
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;

    return (
        <>
            <div className={style.auth}>
                <div className={style.card}>
                    <form className={style.authForm}>
                        {isLogin ? <h2>Авторизация</h2> : <h2>Регистрация</h2>}
                        <input type="text" name='login' placeholder='Введите ваш логин'/>
                        <input type="text" name='password' placeholder='Введите ваш пароль'/>
                    </form>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'start'}}>
                        {isLogin
                            ?
                            <div>Нет аккаунта? <NavLink to={REGISTRATION_ROUTE} className={style.colorBlue}>Зарегистрируйся!</NavLink></div>
                            :
                            <div>Есть аккаунт? <NavLink to={LOGIN_ROUTE} className={style.colorBlue}>Войдите!</NavLink></div>
                        }
                        <button className={style.sendBtn}>{isLogin ? 'Войти' : 'Регистрация'}</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AuthPage;