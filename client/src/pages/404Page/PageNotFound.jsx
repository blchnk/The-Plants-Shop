import React from 'react';
import s from './PageNotFound.module.scss';
import {useNavigate} from "react-router-dom";
import {HOME_ROUTE} from "../../utils/consts";

const PageNotFound = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className='container'>
                <div className={s.pageNotFound}>
                    <div className={s.textContent}>
                        <h1>
                            СТРАНИЦА НЕ<br/>
                            НАЙДЕНА
                        </h1>
                        <p style={{margin: '1rem 0.8rem'}}>
                            Ууупс! Похоже мы не можем найти страницу, что вы ищете<br/>
                            Попробуйте вернуться к предыдущей странице или вернуться на главную.
                        </p>
                        <button className={'btn btnAnimation'}
                                style={{maxWidth: '500px', marginLeft: '0.8rem'}}
                                onClick={() => navigate(HOME_ROUTE)}
                        >
                            Вернуться домой
                        </button>
                    </div>
                    <div className={s.errorNumber}>
                        <p>404</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PageNotFound;