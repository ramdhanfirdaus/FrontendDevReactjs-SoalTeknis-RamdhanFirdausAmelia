import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRoutes from "./routing/AppRoutes";
import {AuthProvider, setupAxios} from './components/pages/auth'
import axios from 'axios'
import { Provider } from "react-redux"
import { store } from './redux/store'

setupAxios(axios)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <AuthProvider>
            <AppRoutes />
        </AuthProvider>
    </Provider>
);


