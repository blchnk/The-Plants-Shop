import React from 'react';
import s from './CartPage.module.scss';
import CartItem from "../../components/cartItem/CartItem";

const CartPage = () => {
    return (
        <>
            <div className='container'>
                <h2>Ваша корзина</h2>
                <CartItem/>
                <div className={s.infoWrapper}>
                    <div className={s.totalWrapper}>
                        <p style={{fontWeight: '500', fontSize: '22px'}}>Всего к оплате</p>
                        <span style={{fontWeight: '500', fontSize: '22px'}}>500&#8381;</span>
                    </div>
                    <div className={s.btnsWrapper}>
                        <button className={['btn', s.blackBtn].join(' ')}>Продолжить покупки</button>
                        <button className={['btn', s.blackBtnActiveDefault].join(' ')}>Перейти к оформлению</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartPage;