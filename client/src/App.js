import React, {useContext, useEffect} from "react";
import {BrowserRouter} from 'react-router-dom';
import AppRouter from "./components/AppRouter";
import Header from "./components/header/Header";
import {check} from "./api/userAPI";
import {Context} from "./index";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
