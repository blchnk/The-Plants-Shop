import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import UserStore from './store/UserStore';
import ProductStore from "./store/ProductStore";
import CartStore from "./store/CartStore";
import ProductInfoStore from "./store/ProductInfoStore";
import NewArrivalsStore from "./store/NewArrivalsStore";
import App from './App';
import './styles/index.scss'
import 'react-toastify/dist/ReactToastify.css';

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={
        {
            user: new UserStore(),
            product: new ProductStore(),
            productInfo: new ProductInfoStore(),
            cart: new CartStore(),
            newArrivals: new NewArrivalsStore()
        }
    }>
        <App/>
    </Context.Provider>
);
