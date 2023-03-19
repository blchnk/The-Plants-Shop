import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {authRoutes, publicRoutes} from "./routes";
import './App.module.scss'

function App() {
    const isAuth = false;

    return (
        <BrowserRouter>
            <Routes>
                {isAuth && authRoutes.map(({path, component}) =>
                    <Route key={path} path={path} element={component} />
                )}
                {publicRoutes.map(({path, component}) =>
                    <Route key={path} path={path} element={component} />
                )}
                <Route path={'*'} element={publicRoutes[0].component} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
