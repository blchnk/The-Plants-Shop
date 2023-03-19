import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import UserStore from './store/UserStore';
import ProductStore from "./store/ProductStore";
import App from './App';
import './styles/resetStyles.scss'
import './styles/global.scss'

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Context.Provider value={{
            user: new UserStore(),
            product: new ProductStore()
        }
        }/>
        <App/>
    </React.StrictMode>
);
