import React, {useState} from 'react';
import style from './CreateType.module.scss';
import {createType} from "../../../api/productAPI";
import {observer} from "mobx-react-lite";

const CreateType = observer(({setLoading, setActive}) => {
    const [value, setValue] = useState('');

    const addType = () => {
        createType({name: value}).then(data => setValue(''));
        setActive(false);
    }

    return (
        <div className={[style.bgModal, style.active].join(' ')}
             onClick={() => setActive(false)}>
            <div className={style.modalCard} onClick={e => e.stopPropagation()}>
                <h2>Добавить тип</h2>
                <form>
                    <input type="text"
                           placeholder='Введите название типа'
                           value={value}
                           onChange={(e) => setValue(e.target.value)}/>
                </form>
                <div className={style.btnsWrapper}>
                    <button type='button' className={style.red} onClick={() => setActive(false)}>Закрыть</button>
                    <button className={style.green} onClick={() => {
                        addType();
                        setLoading(true);
                    }}>Добавить
                    </button>
                </div>
            </div>
        </div>
    );
});

export default CreateType;