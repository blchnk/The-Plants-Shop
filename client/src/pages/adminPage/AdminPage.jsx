import React, {useContext, useEffect, useState} from 'react';
import style from './AdminPage.module.scss';
import CreateProduct from "../../components/modals/CreateProduct";
import CreateType from "../../components/modals/CreateType";
import {fetchProducts, fetchTypes} from "../../api/productAPI";
import {Context} from "../../index";
import DeleteProduct from "../../components/modals/DeleteProduct";

const AdminPage = () => {
    const {product} = useContext(Context);

    useEffect(() => {
        fetchTypes().then(data => product.setTypes(data));
        fetchProducts().then(data => product.setProducts(data));
    }, [product.types]);

    const [productModalIsVisible, setProductModalIsVisible] = useState(false);
    const [typeModalIsVisible, setTypeModalIsVisible] = useState(false);
    const [deleteProductModalIsVisible, setDeleteProductModalIsVisible] = useState(false);

    return (
        <div>
            <div className='container'>
                <button
                    className={style.createBtn}
                    onClick={() => setProductModalIsVisible(true)}>
                    Добавить товар
                </button>
                <button
                    className={style.createBtn}
                    onClick={() => setTypeModalIsVisible(true)}>
                    Добавить тип
                </button>
                <CreateProduct isActive={productModalIsVisible} setActive={setProductModalIsVisible}/>
                <CreateType isActive={typeModalIsVisible} setActive={setTypeModalIsVisible}/>
            </div>
        </div>
    );
};

export default AdminPage;