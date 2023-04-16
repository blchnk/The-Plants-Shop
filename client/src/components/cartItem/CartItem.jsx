import React, {useContext} from 'react';
import style from "../../components/cartItem/CartItem.module.scss";
import delBtn from '../../resources/img/icons/delete_FILL0_wght100_GRAD0_opsz48.png';
import minus from '../../resources/img/icons/remove_FILL0_wght100_GRAD0_opsz48.svg';
import plus from '../../resources/img/icons/add_FILL0_wght100_GRAD0_opsz48.svg';
import {observer} from "mobx-react-lite";

const CartItem = observer(({item, increaseCart, decreaseCart, index}) => {
    return (
        <>
            <div className={style.cartItemWrapper}>
                <div className={style.blockL}>
                    <div className={style.imgBlock}>
                        <img src={process.env.REACT_APP_API_URL + item.img} alt="plant"/>
                    </div>
                    <div className={style.textBlock}>
                        <div>
                            <h3 className={style.title}>{item.name}</h3>
                            <span style={{opacity: '50%'}}>{item.article}</span>

                            <div style={{display: "flex", alignItems: 'center', marginTop: '1rem'}}>
                                <p className={style.quantity}>Количество</p>
                                <img className={style.minusIcon} src={minus} alt="decrease" onClick={() => decreaseCart(index)}/>
                                <div className={style.amountCircle}>{item.quantity}</div>
                                <img className={style.plusIcon} src={plus} alt="increase" onClick={() => increaseCart(index)} />
                            </div>
                        </div>
                        <p>Стоимость единицы товара <span style={{fontWeight: '600'}}>{item.price}&#8381;</span></p>
                    </div>
                </div>
                <div className={style.blockR}>
                    <button className={style.delBtn}>
                        <img src={delBtn} alt="delete button"/>
                    </button>
                    <p>Сумма <span style={{fontWeight: '600'}}>&#8381;</span></p>
                </div>
            </div>
        </>
    );
});

export default CartItem;