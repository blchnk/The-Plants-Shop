import React, {useContext, useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import MainPage from "../pages/mainPage/MainPage";
import {Context} from "../index";
import {check} from "../api/userAPI";
import {observer} from "mobx-react-lite";
import PageNotFound from "../pages/404Page/PageNotFound";

const AppRouter = observer(() => {
    const {user} = useContext(Context);

    useEffect(() => {
        check().then(data => {
            user.setUser(data);
            user.setIsAuth(true);
        })
    }, [])

    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, component}) =>
                <Route key={path} path={path} element={component} />
            )}
            {publicRoutes.map(({path, component}) =>
                <Route key={path} path={path} element={component} />
            )}
            <Route path={'*'} element={<PageNotFound/>} />
        </Routes>
    );
});

export default AppRouter;

