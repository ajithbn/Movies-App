import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import { saveToLocalStorage } from './selector/movies'

const store = configureStore()
console.log('store',store.getState())

store.subscribe(() => {
    //console.log('subscribe', store.getState())
    saveToLocalStorage(store.getState())
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
