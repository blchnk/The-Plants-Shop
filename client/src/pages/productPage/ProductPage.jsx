import React, {useContext} from 'react';
import style from './ProductPage.module.scss';

const ProductPage = () => {
    const product = {id: 1, name: 'Aglaonema', price: '2500', img: '/resources/img/plant1.png'};

    return (
        <div className='container'>
            <div className={style.contentWrapper}>
                <div className={style.imgBlock}>
                    <img src={product.img} alt=""/>
                </div>
                <div className={style.infoBlock}>
                    <h2 className={style.name}>{product.name}</h2>
                    <p className={style.price}>{product.price} руб</p>
                    <p className={style.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
                        asperiores delectus eveniet
                        fuga nam perferendis sed tempore. Accusamus adipisci atque culpa earum fugit harum, in labore
                        nam quibusdam, ratione voluptate.</p>
                    <div className={style.paramWrapper}>
                        <h3>Размер</h3>
                        <p>10см</p>
                        <p>10см</p>
                    </div>
                    <div className={style.paramWrapper}>
                        <h3>Цвет</h3>
                        <p>Тест</p>
                        <p>Тест</p>
                    </div>
                    <div className={style.paramWrapper}>
                        <h3>Количество</h3>
                        <p>Тест</p>
                        <p>Тест</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;