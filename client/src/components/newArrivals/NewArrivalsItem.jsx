import React from 'react';
import style from './NewArrivalsItem.module.scss'

const NewArrivalsItem = ({ item }) => {
    return (
        <div className={style.card}>
            <img src={require('../../resources/img/' + item.image)} alt="" />
            <div className={style.cardTextBlock}>
                <p className={style.title}>{item.name}</p>
                <p className={style.price}>{item.price}₽</p>
            </div>
        </div>
    );
};

export default NewArrivalsItem;