/**
 * ALL reducers has two params:
 * @param {*} state 
 * @param {*} action 
 * 
 * Reducer is a pure function take the actual state and an action, return a new state.
 */
export const products = (state=[], action) => {
    
    if(action.type === "REPLACE_PRODUCTS"){
        return action.products
    }

    return state;
};

export const cart = (state=[], action) => {
    if(action.type === "ADD_TO_CART"){
        return state.concat(action.product)
    }
    else if(action.type === "REMOVE_FROM_CART"){
        return state.filter(val => val.id !== action.product.id)
    }

    return state;
};
