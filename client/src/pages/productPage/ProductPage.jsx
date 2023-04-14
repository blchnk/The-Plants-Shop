import style from './ProductPage.module.scss';
import Accordion from "../../components/accordion/Accordion";
import React, {useEffect, useState} from "react";
import productProperty from '../../components/productProperty/productProperty'
import {loremIpsum} from "lorem-ipsum";
import {useParams} from "react-router-dom";
import {fetchOneProduct} from "../../api/productAPI";

const ProductPage = () => {
    const [product, setProduct] = useState({});
    const [productInfo, setProductInfo] = useState({});
    const {id} = useParams();

    useEffect(() => {
        fetchOneProduct(id).then(data => {
            setProduct(data);
            console.log(product);
        });

    }, [])

    const accordionData = [
        {
            title: 'Section 1',
            content: loremIpsum()
        },
        {
            title: 'Section 2',
            content: loremIpsum()
        },
        {
            title: 'Section 3',
            content: loremIpsum()
        }
    ];

    return (
        <div className='container'>
            <div className={style.contentWrapper}>
                <div className={style.imgBlock}>
                    <img src={process.env.REACT_APP_API_URL + product.img} alt=""/>
                </div>
                <div className={style.infoBlock}>
                    <h2 className={style.name}>{product.name}</h2>
                    <p className={style.price}>{product.price} руб</p>
                    <p className={style.description}>{loremIpsum()}</p>
                    <div className={style.paramOptionsBlock}>
                        {/*<div className={style.paramWrapper}>*/}
                        {/*    <h3>Размер</h3>*/}
                        {/*    <p>10см</p>*/}
                        {/*</div>*/}
                        {/*{*/}
                        {/*    product.map(item =>*/}
                        {/*        <productProperty property={item.info} key={item.id}/>)*/}
                        {/*}*/}
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