import React, {useMemo, useState} from 'react';
import NewArrivalsItem from "./NewArrivalsItem";
import style from './NewArrivals.module.scss'
import {getNewArrivals} from "../../api/productAPI";

const NewArrivals = ({title, items}) => {
    const [load, setLoad] = useState(true);
    const [newArrivals, setNewArrivals] = useState([]);

    useMemo(() => {
        getNewArrivals().then(data => {
            setNewArrivals(data)
            setLoad(false)
        })
    }, [load])

    return (
        load ?
            <h1>LOADING...</h1> :
            <section className='mainPageSection'>
                <div className={style.newArrivals}>
                    <h2>{title}</h2>
                    <div className={style.cardsWrapper}>
                        {newArrivals.map(item =>
                            <NewArrivalsItem item={item} key={item.id}/>
                        )}
                    </div>
                    <button className={['btn', 'btnAnimation'].join(' ')}>Купить Сейчас</button>
                </div>
            </section>
    );
};

export default NewArrivals;