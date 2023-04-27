import React, {useState} from 'react';
import s from './AccountDetails.module.scss';
import {loremIpsum} from "lorem-ipsum";

const AccountDetails = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    return (
        <>
            <div style={{display: "flex", flexDirection: 'column', justifyContent: 'space-between'}}>
                <h4 style={{fontSize: '1rem', fontWeight: '500', padding: '30px 0 0 0'}}>Персональные данные</h4>
                <div style={{borderBottom: '1px solid #dedee1', margin: '5px 0 25px'}}></div>
                <section className={s.separatedBlock}>
                    <span className={s.spanDesription}>Здесь вы можете изменить свои персональные данные</span>
                    <form className={s.formBlock} action="">
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
                            />
                            <span style={{fontSize: '13px'}}>Введите девятизначное число без пробелов.</span>
                        </label>
                        <button className={['btn', 'btnAnimation'].join(' ')}>Сохранить</button>
                    </form>
                </section>

                <h4 style={{fontSize: '1rem', fontWeight: '500', padding: '25px 0 0 0'}}>Email</h4>
                <div style={{borderBottom: '1px solid #dedee1', margin: '5px 0 15px'}}></div>
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
                        <button className={['btn', 'btnAnimation'].join(' ')}>Сохранить</button>
                    </form>
                </section>

            </div>
        </>
    );
};

export default AccountDetails;