import React from 'react';
import style from './ProductCard.module.scss'
import {useNavigate} from 'react-router-dom'
import {PRODUCT_ROUTE} from "../../utils/consts";

const ProductCard = ({item}) => {
    const navigate = useNavigate();

    return (
        <div className={style.productCard} onClick={() => navigate(PRODUCT_ROUTE + '/' + item.id)}>
            <img src={require('../../resources/img/' + item.img)} alt="product"/>
            <div className={style.cardTextBlock}>
                <p className={style.title}>{item.name}</p>
                <p className={style.price}>{item.price}₽</p>
            </div>
        </div>
    );
};

export default ProductCard;