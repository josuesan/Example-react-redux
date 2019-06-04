import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import * as reducers from "./reducers";


/**
 * Middleware fucntion, execute when reducer is caller.
 */
const logger = store => next => action => {
    console.log("dispatching", action);
    let result = next(action);
    console.log("next state", store.getState());
    return result;
}

/**
 * Combine Reducers allow fusion ALL reducers in one reducer and this pass a parameter to create store
 * Initial state of store
 * Thunk for Async functions
 */
export default createStore(combineReducers(reducers), { cart:[], products: [] }, applyMiddleware(logger, thunk));


/*
const reducers = (state, action) => {
    if(action.type === "ADD_TO_CART"){
        return{
            ...state
            state.cart.concat(action.product)
        }  
    }
    return state;
};
export default createStore( reducers, { cart:[], products: [] }, applyMiddleware(logger, thunk)); */