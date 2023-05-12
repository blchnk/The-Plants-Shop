import React, {useState} from 'react';
import s from './SortDropdown.module.scss'


const SortDropdown = ({setSortParams, sortOptions}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [title, setTitle] = useState('Новизне');

    return (
        <>
            <span className={s.sortSpan} onClick={() => setIsVisible(!isVisible)}>
                Сортировать по:
                <span> {title}</span>
                {
                    isVisible &&
                    <div className={s.dropdown}>
                        <ul className={s.sortList}>
                            {
                                sortOptions.map((item, index) =>
                                    <li key={index}
                                        onClick={() => {
                                        setTitle(item.name);
                                        setSortParams(item)
                                    }}>
                                        {item.name}
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                }
            </span>

        </>
    );
};

export default SortDropdown;