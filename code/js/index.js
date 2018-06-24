// Для загрузки node_modules
// npm install

// Для запуска сервера!!!
// npm run start

import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers';
import WebPage from './components/WebPage';


const store01 = createStore (allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store01}>
    <WebPage />
    </Provider>,
    document.getElementById('fieldToShow')
);
