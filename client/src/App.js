import React, {useContext} from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {authRoutes, publicRoutes} from "./routes";
import './App.module.scss'
import {Context} from "./index";

function App() {
    const {user} = useContext(Context);

    return (
        <BrowserRouter>
            <Routes>
                {user.isAuth && authRoutes.map(({path, component}) =>
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
