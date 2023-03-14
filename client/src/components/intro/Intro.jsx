import React from 'react';
import style from './Intro.module.scss'

const Intro = () => {
    return (
        <div className={style.intro}>
            <div>
                <h1 className={style.mainText}>THE<br/>PLANTS</h1>
                <p>Lorem ipsum lorem ipsum lorem</p>
                <button className={['btn', 'btnAnimation'].join(' ')}>Купить</button>
            </div>
            <div>
                <img className={style.mainImg} src='/resources/img/introPlant.png' alt=""/>
            </div>
        </div>
    );
};

export default Intro;