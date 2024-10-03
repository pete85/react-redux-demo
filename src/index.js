import React from 'react';
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from './components/App';
import "./styles/index.scss";
import store from './state/configureStore';
import {Provider} from "react-redux";

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);

// const store = configureStore();

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);
