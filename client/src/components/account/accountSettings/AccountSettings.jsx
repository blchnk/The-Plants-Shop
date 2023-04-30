import React, {useContext, useEffect, useState} from 'react';
import s from './AccountSettings.module.scss';
import {Context} from "../../../index";
import {getUserData, patchUserData} from "../../../api/userAPI";
import {Bounce, toast, ToastContainer} from "react-toastify";
import bcrypt from "bcryptjs-react";

const AccountSettings = () => {
    const {user} = useContext(Context);
    const [userData, setUserData] = useState({});

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newRepeatPassword, setNewRepeatPassword] = useState('');

    // const [isValid, setIsValid] = useState(true);
    const [showPassword, setShowPassword] = useState(false);

    const notifySuccess = (message) => toast.success(message, {
        hideProgressBar: true,
        limit: 2,
        draggable: true,
        autoClose: 1500,
        transition: Bounce,
        position: "top-center",
    });
    const notifyError = (message) => toast.error(message, {
        hideProgressBar: true,
        limit: 2,
        draggable: true,
        autoClose: 1500,
        transition: Bounce,
        position: "top-center",
    });

    useEffect(() => {
        getUserData(user.user.id).then(data => {
            setUserData(data);
        })
    }, [])

    const checkInputsValid = () => {
        if (oldPassword === '' || newPassword === '' || newRepeatPassword === '') {
            notifyError('Поля не должны быть пустыми');
            return false;
        }
        if (!bcrypt.compareSync(oldPassword, userData.password)) {
            notifyError('Старый пароль указан неверно')
            return false;
        }
        if (oldPassword === newPassword) {
            notifyError('Новый пароль должен отличаться от старого');
            return false;
        }
        if (newPassword !== newRepeatPassword) {
            notifyError('Новый пароль введен неверно');
            return false;
        }

        return true;
    }

    // const checkNewPasswordValid = (password) => {
    //     if (password.length < 9) {
    //         setIsValid(false);
    //     } else {
    //         setIsValid(true);
    //     }
    // }

    const sendNewPassword = (userId) => {
        if (!checkInputsValid()) {
            return;
        }

        patchUserData(userId, {password: newPassword}) // Шифрование происходит на сервере перед сохранением в БД
            .then(data => notifySuccess('Пароль успешно обновлен!'))
            .then(data => setTimeout(() => {
                window.location.reload()
            }, 1500))
    }

    return (
        <>
            <div className={s.accountSettings}>
                <h4 className={s.sectionHeader}>Пароль</h4>
                <section className={s.separatedBlock}>
                    <span className={s.spanDesription}>Здесь вы можете сменить свой пароль</span>
                    <form className={s.formBlock}>
                        <div className={s.inputsWrapper}>
                            <label>
                                ВВЕДИТЕ СТАРЫЙ ПАРОЛЬ
                                <input name='oldPassword'
                                       id='oldInputPassword'
                                       type={showPassword ? "text" : "password"}
                                       value={oldPassword}
                                       onChange={e => {
                                           setOldPassword(e.target.value);
                                           // console.log(oldPassword)
                                       }}
                                       maxLength={24}
                                />
                            </label>

                            <label>
                                ВВЕДИТЕ НОВЫЙ ПАРОЛЬ
                                <input name='newPassword'
                                       id='newInputPassword'
                                       type="password"
                                       value={newPassword}
                                       onChange={e => setNewPassword(e.target.value)}
                                       maxLength={24}
                                       // className={!isValid && s.errorInputBorder}
                                />
                                {/*{!isValid &&*/}
                                {/*    <span style={{fontSize: '13px', color: 'red', position: 'absolute', top: '60px'}}>*/}
                                {/*        Пароль должен содержать более девяти символов*/}
                                {/*    </span>*/}
                                {/*}*/}
                            </label>
                        </div>
                        <label>
                            ПОВТОРИТЕ НОВЫЙ ПАРОЛЬ
                            <input name='newPassword'
                                   id='newInputRepeatPassword'
                                   type="password"
                                   value={newRepeatPassword}
                                   onChange={e => setNewRepeatPassword(e.target.value)}
                                   maxLength={24}
                            />
                        </label>
                        <button className='btn btnAnimation'
                                type="button"
                                onClick={() => sendNewPassword(user.user.id)}
                                // disabled={!checkInputsValid ? true : false}
                        >
                            Сохранить
                        </button>
                    </form>
                </section>
            </div>
            <ToastContainer/>
        </>
    );
};

export default AccountSettings;