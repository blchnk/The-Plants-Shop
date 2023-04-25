import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import UserStore from './store/UserStore';
import ProductStore from "./store/ProductStore";
import CartStore from "./store/CartStore";
import App from './App';
import './styles/index.scss'
import ProductInfoStore from "./store/ProductInfoStore";

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={
        {
            user: new UserStore(),
            product: new ProductStore(),
            productInfo: new ProductInfoStore(),
            cart: new CartStore()
        }
    }>
        <App/>
    </Context.Provider>
);
