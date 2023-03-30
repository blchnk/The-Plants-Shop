import style from './ProductPage.module.scss';
import Accordion from "../../components/accordion/Accordion";
import React from "react";

const ProductPage = () => {
    const product = {id: 1, name: 'Aglaonema', price: '2500', img: 'plant1.png'};

    const accordionData = [
        {
            title: 'Section 1',
            content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
        },
        {
            title: 'Section 2',
            content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`
        },
        {
            title: 'Section 3',
            content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
        }
    ];

    return (
        <div className='container'>
            <div className={style.contentWrapper}>
                <div className={style.imgBlock}>
                    <img src={require('../../resources/img/' + product.img)} alt=""/>
                </div>
                <div className={style.infoBlock}>
                    <h2 className={style.name}>{product.name}</h2>
                    <p className={style.price}>{product.price} руб</p>
                    <p className={style.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
                        asperiores delectus eveniet
                        fuga nam perferendis sed tempore. Accusamus adipisci atque culpa earum fugit harum, in labore
                        nam quibusdam, ratione voluptate.</p>
                    <div className={style.paramOptionsBlock}>
                        <div className={style.paramWrapper}>
                            <h3>Размер</h3>
                            <p>10см</p>
                        </div>
                        <div className={style.paramWrapper}>
                            <h3>Цвет</h3>
                            <p>Зеленый</p>
                        </div>
                        <div className={style.paramWrapper}>
                            <h3>Количество</h3>
                            <p>10шт</p>
                        </div>
                    </div>

                    <div className={style.accordion}>
                        {accordionData.map(({title, content}, number) =>
                            <Accordion title={title} content={content} key={number}/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;