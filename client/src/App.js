import React, {useContext, useEffect} from "react";
import {BrowserRouter} from 'react-router-dom';
import AppRouter from "./components/AppRouter";
import Header from "./components/header/Header";
import Footer from './components/footer/Footer';
import {check} from "./api/userAPI";
import {Context} from "./index";
import {observer} from "mobx-react-lite";

const App = observer(() =>  {
    const {user} = useContext(Context)

    useEffect(() => {
        check().then(data => {
            user.setUser(data)
            user.setIsAuth(true)
        })
    }, [])

    return (
        <BrowserRouter>
            <Header/>
            <AppRouter/>
            <Footer/>
        </BrowserRouter>
    );
});

export default App;
