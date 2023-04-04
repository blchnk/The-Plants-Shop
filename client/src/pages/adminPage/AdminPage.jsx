import React, {useState} from 'react';
import style from './AdminPage.module.scss';
import CreateProduct from "../../components/modals/CreateProduct";
import CreateType from "../../components/modals/CreateType";

const AdminPage = () => {
    const [productModalIsVisible, setProductModalIsVisible] = useState(false);
    const [typeModalIsVisible, setTypeModalIsVisible] = useState(false);

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
                <CreateProduct isActive={productModalIsVisible} setActive={setProductModalIsVisible} />
                <CreateType isActive={typeModalIsVisible} setActive={setTypeModalIsVisible}/>
            </div>
        </div>
    );
};

export default AdminPage;