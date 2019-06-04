/**
 * 
 * @param {*} product 
 * Create all actions 
 */
export const addToCart = product => {
    return {
        type: "ADD_TO_CART",
        product:product
      }
}

export const removeFromCart = product => {
    return {
        type: "REMOVE_FROM_CART",
        product:product
      };
}

export const loadProducts = () => {
  return dispatch => {
    return fetch("http://localhost:3002/products").then(res=> res.json()).then(response =>{
      dispatch({
        type: "REPLACE_PRODUCTS",
        products: response
      })
    })
  }
}