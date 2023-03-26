import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import MainPage from "../pages/mainPage/MainPage";
import {Context} from "../index";

const AppRouter = () => {
    const {user} = useContext(Context);

    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, component}) =>
                <Route key={path} path={path} element={component} />
            )}
            {publicRoutes.map(({path, component}) =>
                <Route key={path} path={path} element={component} />
            )}
            <Route path={'*'} element={<MainPage/>} />
        </Routes>
    );
};

export default AppRouter;

