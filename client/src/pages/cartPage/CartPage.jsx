import React, {useContext, useEffect, useState} from 'react';
import s from './CartPage.module.scss';
import CartItem from "../../components/cartItem/CartItem";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const CartPage = observer(() => {
    const {cart} = useContext(Context);

    useEffect(() => {
        cart.loadFromLocalStorage();
    }, [])

    useEffect(() => {
        cart.saveToLocalStorage();
    }, [cart.cart])

    const increaseCart = (index) => {
        cart.increaseCart(index)
    }

    const decreaseCart = (index) => {
        cart.decreaseCart(index);
    }

    return (
        <>
            {
                cart.cart.length ?
                    <div className='container'>
                        <h2>Ваша корзина</h2>
                        {
                            cart.cart.map((item, number) =>
                                <CartItem item={item}
                                          increaseCart={increaseCart}
                                          decreaseCart={decreaseCart}
                                          index={number}
                                          key={number}
                                />)
                        }
                        <div className={s.infoWrapper}>
                            <div className={s.totalWrapper}>
                                <p style={{fontWeight: '500', fontSize: '22px'}}>Всего к оплате</p>
                                <span style={{fontWeight: '500', fontSize: '22px'}}>500&#8381;</span>
                            </div>
                            <div className={s.btnsWrapper}>
                                <button className={['btn', s.blackBtn].join(' ')}>Продолжить покупки</button>
                                <button className={['btn', s.blackBtnActiveDefault].join(' ')}>Перейти к оформлению
                                </button>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='container'>
                        <h2>Корзина пуста</h2>
                    </div>
            }
        </>
    );
});

export default CartPage;