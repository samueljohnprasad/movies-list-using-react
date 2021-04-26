import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.js';
import reportWebVitals from './reportWebVitals';
import {createStore,applyMiddleware} from 'redux' 
import rootReducer from './reducers'
import thunk from 'redux-thunk'
//import {movies} from './reducers'



// const logger=function ({dispatch,getState}){
//     return function (next){
//         return function (action){
//             //addd midddle ware
//             //console.log('Action type= ',action.type)
//             next(action)
//         }
//     }
// }

 const logger =({dispatch,getState})=>(next) =>(action)=>{
         
         if(typeof action !=='function' ){
          console.log('action type ',action.type)
         }
            next(action)
 }

//  const thunk =({dispatch,getState})=> (next)=>(action)=>{
//      if(typeof action==='function'){
//          action(dispatch)
//          return;
//      }

//      next(action)
//  }

const store= createStore(rootReducer ,applyMiddleware(logger,thunk));   
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
