import React from 'react';
import style from './OtherPromo.module.scss';

const OtherPromo = ({title, description, src, alt}) => {
    return (
        <>
            <div className={style.otherPromoWrapper}>
                <div className={style.textBlock}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <button className={['btn', 'btnAnimation'].join(' ')}>Купить</button>
                </div>
                <div className={style.imgBlock}>
                    <img src={src} alt={alt}/>
                </div>
            </div>
        </>
    );
};

export default OtherPromo;