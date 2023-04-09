import React, {useContext} from 'react';
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import {HOME_ROUTE} from "../../utils/consts";

const AccountPage = observer(() => {
    const user = useContext(Context);
    const navigate = useNavigate();

    const logOut = () => {
        user.user.setUser({});
        user.user.setIsAuth(false);
        navigate(HOME_ROUTE);
        localStorage.clear();
    }

    return (
        <>
            <div className='container'>
                <h2>Аккаунт</h2>
                <button style={{border: 'solid black 1px'}} onClick={() => logOut()}>Выйти</button>
            </div>
        </>
    );
});

export default AccountPage;