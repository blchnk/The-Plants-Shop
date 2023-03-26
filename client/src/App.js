import React, {useContext} from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import AppRouter from "./components/AppRouter";
import Header from "./components/header/Header";

function App() {

    return (
        <BrowserRouter>
            <Header/>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
