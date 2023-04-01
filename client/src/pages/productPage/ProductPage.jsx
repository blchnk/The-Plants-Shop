import style from './ProductPage.module.scss';
import Accordion from "../../components/accordion/Accordion";
import React from "react";
import {loremIpsum} from "lorem-ipsum";

const ProductPage = () => {
    const product = {id: 1, name: 'Aglaonema', price: '2500', img: 'plant1.png'};

    const accordionData = [
        {
            title: 'Section 1',
            content: loremIpsum
        },
        {
            title: 'Section 2',
            content: loremIpsum
        },
        {
            title: 'Section 3',
            content: loremIpsum
        }
    ];

    return (
        <div className='container'>
            <div className={style.contentWrapper}>
                <div className={style.imgBlock}>
                    <img src={require('../../resources/img/' + product.img)} alt=""/>
                </div>
                <div className={style.infoBlock}>
                    <h2 className={style.name}>{product.name}</h2>
                    <p className={style.price}>{product.price} руб</p>
                    <p className={style.description}>{loremIpsum()}</p>
                    <div className={style.paramOptionsBlock}>
                        <div className={style.paramWrapper}>
                            <h3>Размер</h3>
                            <p>10см</p>
                        </div>
                        <div className={style.paramWrapper}>
                            <h3>Цвет</h3>
                            <p>Зеленый</p>
                        </div>
                        <div className={style.paramWrapper}>
                            <h3>Количество</h3>
                            <p>10шт</p>
                        </div>
                    </div>

                    <div className={style.accordion}>
                        {accordionData.map(({title, content}, number) =>
                            <Accordion title={title} content={content} key={number}/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;