import React from 'react';
import style from './DropdownNavbarMenu.module.scss'

const DropdownNavbarMenu = () => {
    return (
        <div className={style.dropdownNavbarMenu}>
            <div className={style.col}>
                <ul>
                    <li>
                        test
                    </li>
                    <li>
                        test
                    </li>
                    <li>
                        test
                    </li>
                </ul>
            </div>
            <div className={style.col}>
                <ul>
                    <li>
                        test
                    </li>
                    <li>
                        test
                    </li>
                    <li>
                        test
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DropdownNavbarMenu;