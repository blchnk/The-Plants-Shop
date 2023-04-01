import React from 'react';
import style from './CategoriesPromo.module.scss'
import categoriesPromo from '../../resources/img/categoriesPromo.png';
import Accordion from "../accordion/Accordion";
import {loremIpsum} from "lorem-ipsum";

const CategoriesPromo = () => {
    const accordionData = [
        {
            title: 'Домашние растения',
            content: loremIpsum()
        },
        {
            title: 'Уличные растения',
            content: loremIpsum()
        },
        {
            title: 'Все растения',
            content: loremIpsum()
        },
    ];

    return (
        <>
            <h2>КАТЕГОРИИ РАСТЕНИЙ</h2>
            <div className={style.categoriesBody}>
                <img src={categoriesPromo} alt=""/>
                <div className={style.infoBlock}>
                    <p className={style.description}>{loremIpsum()}</p>
                    {
                        accordionData.map(({title, content}, number) =>
                            <Accordion title={title} content={content} key={number} />)
                    }
                </div>
            </div>
        </>
    );
};

export default CategoriesPromo;