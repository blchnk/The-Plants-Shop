import React, {useContext, useEffect, useState} from 'react';
import s from './AccountDetails.module.scss';
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import {getUserData, patchUserData} from "../../../api/userAPI";
import {ToastContainer, toast, Bounce} from 'react-toastify';

const AccountDetails = observer(() => {
    const {user} = useContext(Context);

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState(user.user.email);

    const notifySuccess = (message) => toast.success(message, {
        hideProgressBar: true,
        limit: 2,
        draggable: true,
        autoClose: 1500,
        transition: Bounce,
        position: "top-center"
    });
    const notifyError = (message) => toast.error(message, {
        hideProgressBar: true,
        limit: 2,
        draggable: true,
        autoClose: 1500,
        transition: Bounce,
        position: "top-center"
    });

    useEffect(() => {
        getUserData(user.user.id).then(data => {
            if (data.name) setName(data.name);
            if (data.surname) setSurname(data.surname);
            if (data.country) setCountry(data.country);
            if (data.city) setCity(data.city);
            if (data.phone === 0) {
                setPhone('');
            } else {
                setPhone(data.phone)
            }
            if (data.email) setEmail(data.email);
        });
    }, [])

    const sendUserData = (id) => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('surname', surname);
        formData.append('country', country);
        formData.append('city', city);
        formData.append('phone', Number(phone));

        patchUserData(id, formData)
            .then(data => notifySuccess('Данные успешно обновлены'))
    }

    const sendUserEmail = (id) => {
        patchUserData(id, {email: email}).then(data => notifySuccess('Данные успешно обновлены'));
    }

    return (
        <>
            <div className={s.accountDetails}>
                <h4 className={s.sectionHeader}>Персональные данные</h4>
                <section className={s.separatedBlock}>
                    <span className={s.spanDesription}>Здесь вы можете изменить свои персональные данные</span>
                    <form className={s.formBlock}>
                        <div className={s.inputsWrapper}>
                            <label>
                                ИМЯ
                                <input name='name'
                                       type="text"
                                       value={name}
                                       onChange={e => setName(e.target.value)}
                                />
                            </label>

                            <label>
                                ФАМИЛИЯ
                                <input name='surname'
                                       type="text"
                                       value={surname}
                                       onChange={e => setSurname(e.target.value)}
                                />
                            </label>
                        </div>

                        <div className={s.inputsWrapper}>
                            <label>
                                СТРАНА
                                <input name='country'
                                       type="text"
                                       value={country}
                                       onChange={e => setCountry(e.target.value)}
                                />
                            </label>

                            <label>
                                ГОРОД
                                <input name='city'
                                       type="text"
                                       value={city}
                                       onChange={e => setCity(e.target.value)}
                                />
                            </label>
                        </div>

                        <label style={{maxWidth: '320px'}}>
                            НОМЕР ТЕЛЕФОНА
                            <input name='phone'
                                   type="text"
                                   value={phone}
                                   onChange={e => setPhone(e.target.value)}
                                   maxLength={9}
                            />
                            <span style={{fontSize: '13px'}}>Введите девятизначное число без пробелов.</span>
                        </label>
                        <button className='btn btnAnimation'
                                type="button"
                                onClick={() => sendUserData(user.user.id)}>
                            Сохранить
                        </button>
                    </form>
                </section>

                <h4 className={s.sectionHeader}>Email</h4>
                <section className={s.separatedBlock}>
                    <span className={s.spanDesription}>Введите, чтобы получать рассылку</span>
                    <form className={s.formBlock} action="">
                        <label style={{maxWidth: '320px'}}>
                            Email
                            <input name='email'
                                   type="text"
                                   value={email}
                                   onChange={e => setEmail(e.target.value)}
                            />
                        </label>
                        <button className={['btn', 'btnAnimation'].join(' ')}
                                type="button"
                                onClick={() => sendUserEmail(user.user.id)}
                        >
                            Сохранить
                        </button>
                    </form>
                </section>

            </div>
            <ToastContainer/>
        </>
    );
});

export default AccountDetails;