import {
    ACCOUNT_ROUTE,
    ADMIN_ROUTE, CARE_ROUTE,
    CART_ROUTE,
    HOME_ROUTE,
    LOGIN_ROUTE, POTS_ROUTE,
    PRODUCT_ROUTE,
    PRODUCTS_ROUTE,
    REGISTRATION_ROUTE
} from "./utils/consts";

import AdminPage from "./pages/adminPage/AdminPage";
import CartPage from "./pages/cartPage/CartPage";
import ProductsPage from "./pages/productsPage/ProductsPage";
import ProductPage from "./pages/productPage/ProductPage";
import MainPage from "./pages/mainPage/MainPage";
import AuthPage from "./pages/authPage/AuthPage";
import AccountPage from "./pages/accountPage/AccountPage";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        component: <AdminPage/>
    },
    {
        path: CART_ROUTE,
        component: <CartPage/>
    },
    {
        path: ACCOUNT_ROUTE,
        component: <AccountPage/>
    }
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        component: <MainPage/>
    },
    {
        path: PRODUCTS_ROUTE,
        component: <ProductsPage/>
    },
    {
        path: POTS_ROUTE,
        component: <ProductsPage typeId={2}/>
    },
    {
        path: CARE_ROUTE,
        component: <ProductsPage typeId={3}/>
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        component: <ProductPage/>
    },
    {
        path: REGISTRATION_ROUTE,
        component: <AuthPage/>
    },
    {
        path: LOGIN_ROUTE,
        component: <AuthPage/>
    },
]