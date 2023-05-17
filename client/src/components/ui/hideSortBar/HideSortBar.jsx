import React from 'react';
import s from './HideSortBar.module.scss';

const HideSortBar = ({hide, setHide}) => {
    return (
        <>
            <p  className={s.hide}
               onClick={() => setHide(!hide)}
            >
                Скрыть фильтры
            </p>
        </>
    );
};

export default HideSortBar;