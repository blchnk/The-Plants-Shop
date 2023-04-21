import React, {useContext, useState} from 'react';
import {Context} from "../../index";
import style from './CreateProduct.module.scss';
import {observer} from "mobx-react-lite";
import Dropdown from '../dropdown/Dropdown';
import {createProduct} from "../../api/productAPI";

const CreateProduct = observer(({isActive, setActive}) => {
    const {product} = useContext(Context);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [file, setFile] = useState(null);
    const [info, setInfo] = useState([]);

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(item => item.number === number ? {...item, [key]: value} : item))
    }

    const removeInfo = (number) => {
        setInfo(info.filter(item => item.number !== number))
    }

    const addProduct = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('typeId', product.selectedType.id)
        formData.append('info', JSON.stringify(info))
        createProduct(formData).then(data => setActive(false))
    }

    return (
        <div className={isActive ? [style.bgModal, style.active].join(' ') : style.bgModal}
             onClick={() => setActive(false)}>
            <div className={style.modalCard} onClick={e => e.stopPropagation()}>
                <h2>Добавить товар</h2>
                <form>
                    <input type="text"
                           placeholder='Введите название товара'
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                    />
                    <input type="number"
                           placeholder='Введите стоимость товара'
                           value={price}
                           onChange={(e) => setPrice(Number(e.target.value))}
                    />
                    <Dropdown options={product.types} product={product} placeholder='Введите тип товара'/>
                    <input type="file"
                           onChange={selectFile}
                    />
                    <button type='button'
                            onClick={addInfo}>
                        Добавить новое свойство
                    </button>
                    {info.map((item) =>
                        <div key={item.number} style={{display: "flex", gap: "0.5rem"}}>
                            <input type="text"
                                   value={item.title}
                                   onChange={(e) => changeInfo('title', e.target.value, item.number)}
                                   placeholder='Введите название свойства'
                            />
                            <input type="text"
                                   placeholder='Введите описание свойства'
                                   value={item.description}
                                   onChange={(e) => changeInfo('description', e.target.value, item.number)}
                            />
                            <button className={style.red}
                                    onClick={() => removeInfo(item.number)}
                                    type="button">
                                Удалить
                            </button>
                        </div>)
                    }
                </form>
                <div className={style.btnsWrapper}>
                    <button className={style.red} onClick={() => setActive(false)}>Закрыть</button>
                    <button className={style.green} onClick={() => {
                        setActive(false);
                        addProduct();
                    }}>
                        Добавить
                    </button>
                </div>
            </div>
        </div>
    );
});

export default CreateProduct;