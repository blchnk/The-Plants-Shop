import React, {useContext, useEffect, useState} from 'react';
import style from './EditProduct.module.scss';
import {observer} from "mobx-react-lite";
import Dropdown from "../../dropdown/Dropdown";
import {Context} from "../../../index";
import {patchProduct, fetchInfo} from "../../../api/productAPI"

const EditProduct = observer(({setLoading, setActive, productId}) => {
    const [isLoading, setIsLoading] = useState(true);
    const {product} = useContext(Context);

    const currentProduct = product.products.find(item => item.id === productId);

    const [name, setName] = useState(currentProduct.name);
    const [price, setPrice] = useState(currentProduct.price);
    const [file, setFile] = useState(currentProduct.img);
    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetchInfo(currentProduct.id).then(data => setInfo(data)).then(data => setIsLoading(false))
    }, [isLoading])

    useEffect(() => {
        let type = product.types.find(item => item.id === currentProduct.typeId);
        product.setSelectedType({id: type.id, name: type.name});
    })

    const selectFile = e => {
        setFile(e.target.files[0]);
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

    const editProduct = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('typeId', product.selectedType.id)
        formData.append('info', JSON.stringify(info))
        patchProduct(currentProduct.id, formData).then(data => setActive(false))
    }

    return (
        <div className={[style.bgModal, style.active].join(' ')}
             onClick={() => setActive(false)}>
            <div className={style.modalCard} onClick={e => e.stopPropagation()}>
                <h2>Редактировать товар</h2>
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
                    {
                        isLoading ? <h3>Загрузка...</h3> :
                            info.map((item) =>
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
                    <button type='button'
                            onClick={addInfo}>
                        Добавить новое свойство
                    </button>
                </form>
                <div className={style.btnsWrapper}>
                    <button type='button' className={style.red} onClick={() => setActive(false)}>Закрыть</button>
                    <button className={style.green} onClick={() => {
                        setLoading(true);
                        editProduct();
                    }}>Подтвердить
                    </button>
                </div>
            </div>
        </div>
    );
});

export default EditProduct;