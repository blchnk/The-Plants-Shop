import React, {useContext, useEffect} from 'react';
import style from './ProductsPage.module.scss';
import SortBar from "../../components/sortBar/SortBar";
import ProductCard from "../../components/productCard/ProductCard";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {fetchProducts, fetchTypes} from "../../api/productAPI";

const ProductsPage = observer(() => {
    const {product} = useContext(Context);

    useEffect(() => {
        fetchTypes().then(data => product.setTypes(data));
        fetchProducts().then(data => product.setProducts(data));
    }, []);

    return (
        <div className='container'>
            <p style={{fontSize: '50px'}}>Категория такая-то</p>
            <div className={style.contentWrapper}>
                <SortBar/>
                <div className={style.productCardsWrapper}>
                    {product.products.map(item =>
                        <ProductCard item={item} key={item.id}/>
                    )}
                </div>
            </div>
        </div>
    );
});

export default ProductsPage;