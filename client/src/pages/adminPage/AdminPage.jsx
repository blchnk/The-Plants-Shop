import React, {useContext, useEffect, useState} from 'react';
import style from './AdminPage.module.scss';
import CreateProduct from "../../components/modals/CreateProduct";
import CreateType from "../../components/modals/CreateType";
import {deleteProduct, fetchProducts, fetchTypes} from "../../api/productAPI";
import {Context} from "../../index";
import editIcon from '../../resources/img/icons/edit_FILL0_wght100_GRAD0_opsz48.png';
import deleteIcon from '../../resources/img/icons/delete_FILL0_wght100_GRAD0_opsz48.png';
import {observer} from "mobx-react-lite";

const AdminPage = observer(() => {
    const {product} = useContext(Context);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchTypes().then(data => product.setTypes(data));
        fetchProducts().then(data => {
            product.setProducts(data);
        }).finally(() => setLoading(false))
    }, [product.products, product.types, loading]);

    const [productModalIsVisible, setProductModalIsVisible] = useState(false);
    const [typeModalIsVisible, setTypeModalIsVisible] = useState(false);

    if (loading) {
        return <div className='container'>
            <h2>Загрузка...</h2>
        </div>
    }

    return (
        <>
            <div className='container'>
                <div className={style.adminPanel}>
                    <div>
                        <table>
                            <thead>
                            <tr>
                                <th>id</th>
                                <th>Название</th>
                                <th>Стоимость</th>
                                <th>Изображение</th>
                                <th>Тип</th>
                            </tr>
                            </thead>
                            <tbody>
                            {product.products.map((item, i) =>
                                <tr key={i}>
                                    <th>{item.id}</th>
                                    <th>{item.name}</th>
                                    <th>{item.price}</th>
                                    <th>{item.img}</th>
                                    <th>{product.types[item.typeId - 1].name}</th>
                                    <input className={style.editBtn} type="image" src={editIcon}/>
                                    <input onClick={() => {
                                        deleteProduct(item.id);
                                        setLoading(true);
                                    }}
                                           className={style.deleteBtn}
                                           type="image"
                                           src={deleteIcon}
                                    />
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>

                    <div>
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
                    </div>
                    <CreateProduct setLoading={setLoading} isActive={productModalIsVisible}
                                   setActive={setProductModalIsVisible}/>
                    <CreateType setLoading={setLoading} isActive={typeModalIsVisible}
                                setActive={setTypeModalIsVisible}/>
                </div>
            </div>
        </>
    );
});

export default AdminPage;