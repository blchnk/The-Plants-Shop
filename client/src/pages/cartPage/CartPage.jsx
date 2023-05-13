import React, {useContext, useEffect, useRef, useState} from 'react';
import s from './CartPage.module.scss';
import CartItem from "../../components/cartItem/CartItem";
import emptyCartImg from '../../resources/img/emptyCart.jpg';
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const CartPage = observer(() => {
    const {cart} = useContext(Context);
    const [amount, setAmount] = useState(0);
    const mount = useRef(true);

    useEffect(() => {
        cart.loadFromLocalStorage();
        countStartAmount();
    }, [])

    const increaseCart = (index) => {
        let price = 0;
        if (mount) {
            price = cart.cart[index].price;
        }
        cart.increaseCart(index);
        setAmount((a) => a + cart.cart[index].price)
    }

    const decreaseCart = (index) => {
        let price = 0;
        if (mount) {
            price = cart.cart[index].price;
        }
        cart.decreaseCart(index);
        setAmount((a) => a - price)
    }

    const deleteCart = (index) => {
        cart.deleteCart(index);
    }

    const countStartAmount = () => {
        if (mount.current) {
            mount.current = false;
            cart.cart.map((item) => {
                setAmount((a) => item.quantity * item.price + a);
            })
        }
    }

    return (
        <>
            {
                cart.cart.length ?
                    <div className='container'>
                        <h2>Ваша корзина</h2>
                        {
                            cart.cart.map((item, index) =>
                                <CartItem item={item}
                                          increaseCart={increaseCart}
                                          decreaseCart={decreaseCart}
                                          deleteCart={deleteCart}
                                          index={index}
                                          key={item.id}
                                />
                            )
                        }
                        <div className={s.infoWrapper}>
                            <div className={s.totalWrapper}>
                                <p style={{fontWeight: '500', fontSize: '22px'}}>Всего к оплате</p>
                                <span style={{fontWeight: '500', fontSize: '22px'}}>{amount}&#8381;</span>
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
                        <div className={s.cartWrapper}>
                            <div className={s.textLeft}>
                                <h2>ВАША КОРЗИНА ПУСТА</h2>
                                <p>Похоже, что вы еще не добавили ни одного товара. Самое время выбрать что-нибудь.</p>
                            </div>
                            <img className={s.emptyCartImg} src={emptyCartImg} alt=""/>
                        </div>
                    </div>
            }
        </>
    );
});

export default CartPage;