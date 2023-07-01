import style from './ProductPage.module.scss';
import Accordion from "../../components/accordion/Accordion";
import React, {useContext, useEffect, useState} from "react";
import ProductProperty from '../../components/productProperty/ProductProperty'
import {loremIpsum} from "lorem-ipsum";
import {useParams} from "react-router-dom";
import {fetchOneProduct, fetchInfo} from "../../api/productAPI";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import NewArrivals from "../../components/newArrivals/NewArrivals";

const ProductPage = observer(() => {
    const [product, setProduct] = useState([]);
    const [productInfo, setProductInfo] = useState([]);
    const {cart} = useContext(Context);
    const {id} = useParams();

    useEffect(() => {
        fetchOneProduct(id).then(data => setProduct(data));
        fetchInfo(id).then(data => setProductInfo(data));
    }, [])

    const addToCart = () => {
        cart.setCart(product);
        cart.saveToLocalStorage();
    }

    const accordionData = [
        {
            title: 'В чем особенность этого растения?',
            content: loremIpsum()
        },
        {
            title: 'Советы по уходу',
            content: loremIpsum()
        },
        {
            title: 'Условия доставки',
            content: loremIpsum()
        }
    ];

    return (
        <div className='container'>
            <div className={style.contentWrapper}>
                <div className={style.imgBlock}>
                    <img src={process.env.REACT_APP_API_URL + product.img} alt="plant"/>
                </div>
                <div className={style.infoBlock}>
                    <h2 className={style.name}>{product.name}</h2>
                    <p className={style.price}>{product.price} руб</p>
                    <p className={style.description}>Потрясающее растение, не требующее особого ухода</p>
                    <div style={{margin: '1rem 0 0 0', display: 'flex', gap: '0.3rem', flexDirection: 'column'}}>
                        <div style={{display: 'flex', gap: '2rem'}}>
                            <p style={{fontWeight: '500'}}>Разновидность</p>
                            <p>Папоротник</p>
                        </div>
                        <div style={{display: 'flex', gap: '2rem'}}>
                            <p style={{fontWeight: '500'}}>Особенность</p>
                            <p style={{marginLeft: '1.15rem'}}>Гипоалергенность</p>
                        </div>
                    </div>
                    <div className={style.paramOptionsBlock}>
                        {
                            productInfo.map((item, number) =>
                                <ProductProperty propertyTitle={item.title} propertyName={item.description}
                                                 key={number}
                                />
                            )
                        }
                    </div>

                    <div className={style.accordion}>
                        {
                            accordionData.map(({title, content}, number) =>
                                <Accordion title={title} content={content} key={number}/>
                            )
                        }
                    </div>

                    <button style={{width: '40%', padding: '1rem', maxWidth: '250px', marginTop: '1.7rem'}}
                            className='btn btnAnimation'
                            onClick={addToCart}>
                        Добавить в корзину
                    </button>
                </div>
            </div>
            <div className={style.preference}>
                <NewArrivals title={'Вам  также может понравиться'}/>
            </div>
        </div>
    );
});

export default ProductPage;