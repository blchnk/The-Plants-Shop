import React, {useState} from 'react';
import style from './ProductsPage.module.scss'
import Header from "../../components/header/Header";
import SortBar from "../../components/sortBar/SortBar";
import ProductCard from "../../components/productCards/ProductCard";

const ProductsPage = () => {
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
        <div>
            <div className='container'>
                <Header/>
                <p style={{fontSize: '50px'}}>Категория такая-то</p>
                <div className={style.contentWrapper}>
                    <SortBar/>
                    <div className={style.productCardsWrapper}>
                        {cards.map(item =>
                            <ProductCard item={item} key={item.id}/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;