import {
    ADMIN_ROUTE,
    CART_ROUTE,
    HOME_ROUTE,
    LOGIN_ROUTE,
    PRODUCT_ROUTE,
    PRODUCTS_ROUTE,
    REGISTRATION_ROUTE
} from "./utils/consts";

import AdminPage from "./pages/adminPage/AdminPage";
import CartPage from "./pages/cartPage/CartPage";
import ProductsPage from "./pages/productsPage/ProductsPage";
import ProductPage from "./pages/productPage/ProductPage";
import RegistrationPage from "./pages/registration/RegistrationPage";
import LoginPage from "./pages/loginPage/LoginPage";
import MainPage from "./pages/mainPage/MainPage";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        component: <AdminPage/>
    },
    {
        path: CART_ROUTE,
        component: <CartPage/>
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
        path: PRODUCT_ROUTE + '/:id',
        component: <ProductPage/>
    },
    {
        path: CART_ROUTE,
        component: <CartPage/>
    },
    {
        path: REGISTRATION_ROUTE,
        component: <RegistrationPage/>
    },
    {
        path: LOGIN_ROUTE,
        component: <LoginPage/>
    }
]