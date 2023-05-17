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
import HideSortBar from "../../components/ui/hideSortBar/HideSortBar";

const ProductsPage = observer(({typeId}) => {
    const {product} = useContext(Context);
    const location = useLocation();
    const [pageTypeTitle, setPageTypeTitle] = useState('');
    const [sortParams, setSortParams] = useState({});
    const [sortBarVisible, setSortBarVisible] = useState(true);

    useEffect(() => {
        fetchTypes().then(data => {
            product.setTypes(data);
            setPageTypeTitle(product.types[typeId - 1].name);
        });

        fetchProducts(typeId).then(data => {
            product.setProducts(data);
        });
    }, [location.pathname]);

    const sortedProducts = useSortedProducts(product.products, sortParams);

    return (
        <div className='container'>
            <div style={{display: "flex", alignItems: 'baseline', justifyContent: 'space-between'}}>
                <p style={{fontSize: '50px'}}>{pageTypeTitle}</p>
                <div style={{display: 'flex', gap: '3rem'}}>
                    <HideSortBar hide={sortBarVisible} setHide={setSortBarVisible}/>
                    <SortDropdown
                        setSortParams={setSortParams}
                        sortOptions={[
                            {value: 'price', name: '₽ Возрастанию', type: 'ascending'},
                            {value: 'price', name: '₽ Убыванию', type: 'descending'}
                        ]}
                    />
                </div>
            </div>
            <div className={sortBarVisible ? style.contentWrapper : style.contentWrapperFull}>
                {sortBarVisible && <SortBar/>}
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