import React from 'react';
import style from "../../components/cartItem/CartItem.module.scss";
import plant from "../../resources/img/plant1.png";
import delBtn from '../../resources/img/icons/delete_FILL0_wght100_GRAD0_opsz48.png';
import minus from '../../resources/img/icons/remove_FILL0_wght100_GRAD0_opsz48.svg';
import plus from '../../resources/img/icons/add_FILL0_wght100_GRAD0_opsz48.svg';

const CartItem = (props) => {
    return (
        <>
            <div className={style.cartItemWrapper}>
                <div className={style.blockL}>
                    <div className={style.imgBlock}>
                        <img src={plant} alt="plant"/>
                    </div>
                    <div className={style.textBlock}>
                        <div>
                            <h3 className={style.title}>Пшеничный папоротник</h3>
                            <span style={{color: '#7a7a7a'}}>qnx56x2w09</span>

                            <div style={{display: "flex", alignItems: 'center', marginTop: '1rem'}}>
                                <p className={style.quantity}>Количество</p>
                                <img className={style.minusIcon} src={minus} alt="decrease"/>
                                <div className={style.amountCircle}>5</div>
                                <img className={style.plusIcon} src={plus} alt="increase"/>
                            </div>
                        </div>
                        <p>Стоимость единицы товара <span style={{fontWeight: '600'}}>100Р</span></p>
                    </div>
                </div>
                <div className={style.blockR}>
                    <button className={style.delBtn}>
                        <img src={delBtn} alt="delete button"/>
                    </button>
                    <p>Сумма к оплате <span style={{fontWeight: '600'}}>1000р</span></p>
                </div>
            </div>
        </>
    );
};

export default CartItem;