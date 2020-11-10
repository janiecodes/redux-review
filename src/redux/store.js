//This is what actually holds the store
//You can have multiple reducers for one store so you always put store in a separate file

import {createStore} from 'redux';
import moviesReducer from './moviesReducer';
import {devToolsEnhancer} from 'redux-devtools-extension';
//Because moviesReducer is the only default export, the other two need to be wrapped between curly braces
//No curly braces for default exports

//createStore is a function that takes in a reducer
export default createStore(moviesReducer, devToolsEnhancer());