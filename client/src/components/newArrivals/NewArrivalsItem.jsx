import React from 'react';
import style from './NewArrivalsItem.module.scss'
import {useNavigate} from "react-router-dom";
import {PRODUCT_ROUTE} from "../../utils/consts";

const NewArrivalsItem = ({item}) => {
    const navigate = useNavigate();

    return (
        <div className={style.card}>
            <img src={process.env.REACT_APP_API_URL + item.img}
                 alt="newArrivalsProduct"
                 onClick={() => navigate(PRODUCT_ROUTE + '/' + item.id)}
            />
            <div className={style.cardTextBlock}>
                <p className={style.title}>{item.name}</p>
                <p className={style.price}>{item.price}₽</p>
            </div>
        </div>
    );
};

export default NewArrivalsItem;