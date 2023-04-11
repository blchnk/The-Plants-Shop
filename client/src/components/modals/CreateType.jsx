import React, {useState} from 'react';
import style from './CreateType.module.scss';

const CreateType = ({isActive, setActive}) => {
    const [value, setValue] = useState('');


    const addType = () => {
        // createType({name: value}).then(data => {
        //     setValue('');
        //     setActive(false);
        // })
    }

    return (
        <div className={isActive ? [style.bgModal, style.active].join(' ') : style.bgModal}
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
                <button className={style.green} onClick={addType}>Добавить</button>
            </div>
            </div>
        </div>
    );
};

export default CreateType;