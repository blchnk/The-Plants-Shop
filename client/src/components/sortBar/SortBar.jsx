import React from 'react';
import style from './SortBar.module.scss'

const SortBar = () => {
    return (
        <div className={style.sortBar}>

            <div className={style.sortBarItem}>
                <h3>Разновидность</h3>
                <div className={style.inputWrapper}>
                    <input type="checkbox" name='sortCheckbox'/>
                    <label htmlFor="sortCheckbox">Цветущие растения</label>
                </div>
                <div className={style.inputWrapper}>
                    <input type="checkbox" name='sortCheckbox'/>
                    <label htmlFor="sortCheckbox">Кактусы и суккуленты</label>
                </div>
                <div className={style.inputWrapper}>
                    <input type="checkbox" name='sortCheckbox'/>
                    <label htmlFor="sortCheckbox">Папоротники</label>
                </div>
                <div className={style.inputWrapper}>
                    <input type="checkbox" name='sortCheckbox'/>
                    <label htmlFor="sortCheckbox">Пальмовые</label>
                </div>
                <div className={style.inputWrapper}>
                    <input type="checkbox" name='sortCheckbox'/>
                    <label htmlFor="sortCheckbox">Цветущие</label>
                </div>
            </div>

            <div className={style.sortBarItem}>
                <h3>Размер</h3>
                <div className={style.inputWrapper}>
                    <input type="checkbox" name='sortCheckbox'/>
                    <label htmlFor="sortCheckbox">Большие</label>
                </div>
                <div className={style.inputWrapper}>
                    <input type="checkbox" name='sortCheckbox'/>
                    <label htmlFor="sortCheckbox">Средние</label>
                </div>
                <div className={style.inputWrapper}>
                    <input type="checkbox" name='sortCheckbox'/>
                    <label htmlFor="sortCheckbox">Маленькие</label>
                </div>
            </div>
            <div className={style.sortBarItem}>
                <h3>Комнатные</h3>
                <div className={style.inputWrapper}>
                    <input type="checkbox" name='sortCheckbox'/>
                    <label htmlFor="sortCheckbox">Да</label>
                </div>
                <div className={style.inputWrapper}>
                    <input type="checkbox" name='sortCheckbox'/>
                    <label htmlFor="sortCheckbox">Нет</label>
                </div>
            </div>
            <div className={style.sortBarItem}>
                <h3>Уход</h3>
                <div className={style.inputWrapper}>
                    <input type="checkbox" name='sortCheckbox'/>
                    <label htmlFor="sortCheckbox">Сложно</label>
                </div>
                <div className={style.inputWrapper}>
                    <input type="checkbox" name='sortCheckbox'/>
                    <label htmlFor="sortCheckbox">Легко</label>
                </div>
            </div>
        </div>
    );
};

export default SortBar;