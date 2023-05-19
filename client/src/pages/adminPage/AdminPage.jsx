import React, {useContext, useEffect, useState} from 'react';
import style from './AdminPage.module.scss';
import CreateProduct from "../../components/modals/admin/CreateProduct";
import CreateType from "../../components/modals/admin/CreateType";
import EditProduct from "../../components/modals/admin/EditProduct";
import {deleteProduct, fetchProducts, fetchTypes} from "../../api/productAPI";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import editIcon from '../../resources/img/icons/edit_FILL0_wght100_GRAD0_opsz48.png';
import deleteIcon from '../../resources/img/icons/delete_FILL0_wght100_GRAD0_opsz48.png';
import {
    getAllBenefits,
    getAllColors,
    getAllLights,
    getAllMaterials,
    getAllSizes,
    getAllVarieties
} from "../../api/propertiesAPI";

const AdminPage = observer(() => {
    const {product} = useContext(Context);
    const [loading, setLoading] = useState(true);
    const [editId, setEditId] = useState(0);

    const [productModalIsVisible, setProductModalIsVisible] = useState(false);
    const [typeModalIsVisible, setTypeModalIsVisible] = useState(false);
    const [editModalIsVisible, setEditModalIsVisible] = useState(false);

    useEffect(() => {
        fetchTypes().then(data => product.setTypes(data));

        getAllColors().then(data => product.setColors(data));
        getAllSizes().then(data => product.setSizes(data));
        getAllMaterials().then(data => product.setMaterials(data));
        getAllLights().then(data => product.setLights(data));
        getAllBenefits().then(data => product.setBenefits(data));
        getAllVarieties().then(data => product.setVarieties(data));

        fetchProducts().then(data => {
            product.setProducts(data);
        }).finally(() => setLoading(false))
    }, [loading]);

    const editHandler = (id) => {
        setEditId(id);
        setEditModalIsVisible(true);
    }

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
                            <tr className={style.tableTitle}>
                                <th>id</th>
                                <th>Название</th>
                                <th>Стоимость</th>
                                <th>Изображение</th>
                                <th>Тип</th>
                                <th>createdAt</th>
                                <th>updatedAt</th>
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
                                    <th>{item.createdAt}</th>
                                    <th>{item.updatedAt}</th>
                                    <input className={style.editBtn}
                                           onClick={() => editHandler(item.id)}
                                           type="image"
                                           src={editIcon}
                                           alt='edit'
                                    />
                                    <input className={style.deleteBtn}
                                           onClick={() => {
                                               deleteProduct(item.id);
                                               setLoading(true);
                                           }}
                                           type="image"
                                           src={deleteIcon}
                                           alt='delete'
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
                    {
                        productModalIsVisible && <CreateProduct setLoading={setLoading}
                                                                setActive={setProductModalIsVisible}/>
                    }
                    {
                        typeModalIsVisible && <CreateType setLoading={setLoading}
                                                          setActive={setTypeModalIsVisible}/>
                    }
                    {
                        editModalIsVisible && <EditProduct setLoading={setLoading}
                                                           setActive={setEditModalIsVisible}
                                                           productId={editId}/>
                    }
                </div>
            </div>
        </>
    );
});

export default AdminPage;