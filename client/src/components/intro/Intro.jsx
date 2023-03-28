import React from 'react';
import style from './Intro.module.scss'
import introImg from '../../resources/img/introPlant.png'

const Intro = () => {
    return (
        <div className={style.intro}>
            <div>
                <h1 className={style.mainText}>THE<br/>PLANTS</h1>
                <p>Lorem ipsum lorem ipsum lorem</p>
                <button className={['btn', 'btnAnimation'].join(' ')}>Купить</button>
            </div>
            <div>
                <img className={style.mainImg} src={introImg} alt=""/>
            </div>
        </div>
    );
};

export default Intro;