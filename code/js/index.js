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

const store = createStore (allReducers);

ReactDOM.render(
    <Provider store={store}>
    <WebPage />
    </Provider>,
    document.getElementById('fieldToShow')
);
