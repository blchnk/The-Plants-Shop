import React, {useContext, useEffect, useState} from 'react';
import style from './ProductsPage.module.scss';
import SortBar from "../../components/sortBar/SortBar";
import ProductCard from "../../components/productCard/ProductCard";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {fetchProducts, fetchTypes} from "../../api/productAPI";
import {useLocation} from "react-router-dom";

const ProductsPage = observer(({typeId}) => {
    const {product} = useContext(Context);
    const location = useLocation();
    const [pageTypeTitle, setPageTypeTitle] = useState('');

    useEffect(() => {
        fetchTypes().then(data => {
            product.setTypes(data);
            setPageTypeTitle(product.types[typeId-1].name);
        });

        fetchProducts(typeId).then(data => {
            product.setProducts(data);
        });
    }, [location.pathname]);

    return (
        <div className='container'>
            <p style={{fontSize: '50px'}}>{pageTypeTitle}</p>
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