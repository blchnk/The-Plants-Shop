import React from 'react';
import style from './AccordionPromo.module.scss'
import Accordion from "../accordion/Accordion";
import {loremIpsum} from "lorem-ipsum";

const AccordionPromo = ({props, src, promoName, imgPosition}) => {
    return (
        <div className={style.accordionPromo}>
            <h2>{promoName}</h2>
            {imgPosition === 'left'
                ?
                <div className={style.categoriesBody}>
                    <img src={src} alt=""/>
                    <div className={style.infoBlock}>
                        <p className={style.description}>{loremIpsum()}</p>
                        {
                            props.map(({title, content}, number) =>
                                <Accordion title={title} content={content} key={number}/>)
                        }
                    </div>
                </div>
                :
                <div className={style.categoriesBody}>
                    <div className={style.infoBlock}>
                        <p className={style.description}>{loremIpsum()}</p>
                        {
                            props.map(({title, content}, number) =>
                                <Accordion title={title} content={content} key={number}/>)
                        }
                    </div>
                    <img src={src} alt=""/>
                </div>
            }
        </div>
    );
};

export default AccordionPromo;