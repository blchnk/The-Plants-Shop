import React, { useState } from 'react';
import NewArrivalsItem from "./NewArrivalsItem";
import style from './NewArrivals.module.scss'

const NewArrivals = () => {
    const [cards, setCards] = useState([
        {
            id: 1,
            name: 'plant1',
            price: 1000,
            image: 'plant1.png',
        },
        {
            id: 2,
            name: 'plant2',
            price: 500,
            image: 'plant1.png',
        },
        {
            id: 3,
            name: 'plant3',
            price: 5000,
            image: 'plant1.png',
        },
        {
            id: 4,
            name: 'plant4',
            price: 3000,
            image: 'plant1.png',
        },
    ]);

    return (
        <section className='mainPageSection'>
            <div className={style.newArrivals}>
                <h2>НОВЫЕ ПОСТУПЛЕНИЯ</h2>
                <div className={style.cardsWrapper}>
                    {cards.map(item =>
                        <NewArrivalsItem item={item} key={item.id} />
                    )}
                </div>
                <button className={['btn', 'btnAnimation'].join(' ')}>Купить Сейчас</button>
            </div>
        </section>
    );
};

export default NewArrivals;