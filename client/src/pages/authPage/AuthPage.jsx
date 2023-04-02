import React, {useContext} from 'react';
import {Context} from "../../index";
import style from './AuthPage.module.scss';

const AuthPage = () => {
    const user = useContext(Context);

    return (
        <>
            <div className={style.auth}>
                <div className={style.card}>
                    <form className={style.authForm}>
                        {user.isAuth ? <h2>Регистрация</h2> : <h2>Авторизация</h2>}
                        <input type="text" name='login' placeholder='Введите ваш логин'/>
                        <input type="text" name='password' placeholder='Введите ваш пароль'/>
                    </form>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'start'}}>
                        {user.isAuth ? <p>Есть аккаунт? <span className={style.colorBlue}>Войди!</span></p> : <p>Нет аккаунта? <span className={style.colorBlue}>Зарегистрируйся!</span></p>}
                        <button className={style.sendBtn}>{user.isAuth ? 'Войти' : 'Регистрация'}</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AuthPage;