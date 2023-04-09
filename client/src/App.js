import React, {useContext, useEffect, useState} from "react";
import {BrowserRouter} from 'react-router-dom';
import AppRouter from "./components/AppRouter";
import Header from "./components/header/Header";
import {check} from "./api/userAPI";
import {Context} from "./index";

function App() {
    const {user} = useContext(Context)

    useEffect(() => {
        check().then(data => {
            user.setUser(true)
            user.setIsAuth(true)
        })
    }, [])

    return (
        <BrowserRouter>
            <Header/>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
