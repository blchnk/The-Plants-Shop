import React, {useContext, useEffect, useState} from 'react';
import style from './ProductsPage.module.scss';
import SortBar from "../../components/sortBar/SortBar";
import SortDropdown from "../../components/ui/sortDropdown/SortDropdown";
import ProductCard from "../../components/productCard/ProductCard";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {fetchProducts, fetchTypes} from "../../api/productAPI";
import {useLocation} from "react-router-dom";
import {useSortedProducts} from "../../hooks/useSortedProducts";

const ProductsPage = observer(({typeId}) => {
    const {product} = useContext(Context);
    const location = useLocation();
    const [pageTypeTitle, setPageTypeTitle] = useState('');
    const [sortParams, setSortParams] = useState({});

    useEffect(() => {
        fetchTypes().then(data => {
            product.setTypes(data);
            setPageTypeTitle(product.types[typeId - 1].name);
        });

        fetchProducts(typeId).then(data => {
            product.setProducts(data);
            // console.log(data)
        });
    }, [location.pathname]);

    const sortedProducts = useSortedProducts(product.products, sortParams);

    return (
        <div className='container'>
            <div style={{display: "flex", alignItems: 'baseline', justifyContent: 'space-between'}}>
                <p style={{fontSize: '50px'}}>{pageTypeTitle}</p>
                <SortDropdown
                    setSortParams={setSortParams}
                    sortOptions={[
                        {value: 'price', name: '₽ Возрастанию', type: 'ascending'},
                        {value: 'price', name: '₽ Убыванию', type: 'descending'}
                    ]}
                />
            </div>
            <div className={style.contentWrapper}>
                <SortBar/>
                <div className={style.productCardsWrapper}>
                    {sortedProducts.map(item =>
                        <ProductCard item={item} key={item.id}/>
                    )}
                </div>
            </div>
        </div>
    );
});

export default ProductsPage;