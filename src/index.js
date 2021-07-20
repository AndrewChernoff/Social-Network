import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux-store';
import { BrowserRouter } from 'react-router-dom';
import StoreContext, { Provider } from './StoreConrexr';

let renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App /* store={store} *//>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}


renderEntireTree(store.getState());

store.subscribe(renderEntireTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
