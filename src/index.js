import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.js';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux' 
import {movies} from './reducers'

const store= createStore(movies);   
console.log('store',store)
// console.log('before state',store.getState())

// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:"samuel"}]
// })

// console.log('after state',store.getState())


ReactDOM.render( <StrictMode><App store={store} /> </StrictMode> ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
