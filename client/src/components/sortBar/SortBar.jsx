import React from 'react';
import style from './SortBar.module.scss'

const SortBar = () => {
    return (
        <div className={style.sortBar}>
            <div className={style.sortOptionWrapper}>
                <p className={style.title}>Тип</p>
                <p>dedw</p>
                <p>dedw</p>
                <p>dedw</p>
                <p>dedw</p>
                <p>dedw</p>
                <p>dedw</p>
                <p>dedw</p>
                <p>dedw</p>
                <p>dedw</p>
                <p>dedw</p>
                <p>dedw</p>
            </div>

            <p className={style.title}>Размер</p>
            <p className={style.title}>Комнатные</p>
            <p className={style.title}>Уход</p>
            <p className={style.title}>Особые</p>
            <p className={style.title}>Цена</p>
        </div>
    );
};

export default SortBar;