import React, {useContext, useState} from 'react';
import {Context} from "../../index";
import style from './AuthPage.module.scss';
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, PRODUCTS_ROUTE, REGISTRATION_ROUTE} from "../../utils/consts";
import {observer} from "mobx-react-lite";
import {login, registration} from "../../api/userAPI";

const AuthPage = observer(() => {
    const user = useContext(Context);
    const navigate = useNavigate();
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const auth = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
                navigate(PRODUCTS_ROUTE);
                alert('Вы успешно авторизовались');
            } else {
                data = await registration(email, password);
                alert('Регистрация прошла успешно');
                console.log(data);
            }
            user.user.setUser(data);
            user.user.setIsAuth(true);
        } catch (e) {
            alert(e.response.data.message);
        }
    }

    return (
        <>
            <div className={style.auth}>
                <div className={style.card}>
                    <form className={style.authForm}>
                        {isLogin ? <h2>Авторизация</h2> : <h2>Регистрация</h2>}
                        <input type="text"
                               name='login'
                               placeholder='Введите ваш логин'
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            name='password'
                            placeholder='Введите ваш пароль'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </form>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'start'}}>
                        {isLogin
                            ?
                            <div>Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}
                                                        className={style.colorBlue}>Зарегистрируйся!</NavLink></div>
                            :
                            <div>Есть аккаунт? <NavLink to={LOGIN_ROUTE} className={style.colorBlue}>Войдите!</NavLink>
                            </div>
                        }
                        <button className={style.sendBtn} onClick={auth}>{isLogin ? 'Войти' : 'Регистрация'}</button>
                    </div>
                </div>
            </div>
        </>
    );
});

export default AuthPage;