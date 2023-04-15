import React from 'react';
import CartItem from "../../components/cartItem/CartItem";

const CartPage = () => {
    return (
        <>
            <div className='container'>
                <h2>Ваша корзина</h2>
                <CartItem/>
            </div>
        </>
    );
};

export default CartPage;