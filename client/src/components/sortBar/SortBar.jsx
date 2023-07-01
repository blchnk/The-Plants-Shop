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
                    <label htmlFor="sortCheckbox">Большой</label>
                </div>
                <div className={style.inputWrapper}>
                    <input type="checkbox" name='sortCheckbox'/>
                    <label htmlFor="sortCheckbox">Средний</label>
                </div>
                <div className={style.inputWrapper}>
                    <input type="checkbox" name='sortCheckbox'/>
                    <label htmlFor="sortCheckbox">Малый</label>
                </div>
            </div>

            <div className={style.sortBarItem}>
                <h3>Свет</h3>
                <div className={style.inputWrapper}>
                    <input type="checkbox" name='sortCheckbox'/>
                    <label htmlFor="sortCheckbox">Прямые лучи</label>
                </div>
                <div className={style.inputWrapper}>
                    <input type="checkbox" name='sortCheckbox'/>
                    <label htmlFor="sortCheckbox">Слабое освещение</label>
                </div>
            </div>

            <div className={style.sortBarItem}>
                <h3>Особенность</h3>
                <div className={style.inputWrapper}>
                    <input type="checkbox" name='sortCheckbox'/>
                    <label htmlFor="sortCheckbox">Легкие в уходе</label>
                </div>
                <div className={style.inputWrapper}>
                    <input type="checkbox" name='sortCheckbox'/>
                    <label htmlFor="sortCheckbox">Гипоалергенные</label>
                </div>
                <div className={style.inputWrapper}>
                    <input type="checkbox" name='sortCheckbox'/>
                    <label htmlFor="sortCheckbox">Безопасно для животных</label>
                </div>
                <div className={style.inputWrapper}>
                    <input type="checkbox" name='sortCheckbox'/>
                    <label htmlFor="sortCheckbox">Очищающие воздух</label>
                </div>
            </div>
        </div>
    );
};

export default SortBar;