import React from 'react';
import { removeFromCart } from "../actionsCreators";
import { connect } from "react-redux";

/**
 * 
 * @param {*} 
 * Como es un componente solo representacional, no es necesario hacer el extends. Se puede desglosar el props en solo las propiedasdes que nos interesan (cart, removeFromCart) 
 */
const ShoppingCart = ({cart,removeFromCartito}) => {

    return (
      <div className="Shopping Cart">
        <h2>Shopping Cart</h2>
        <table fill>
          <tbody>
            {cart.map(product =>
              <tr key={product.id}>
                <td>{product.name}</td>
                <td className="text-right">${product.price}</td>
                <td className="text-right"><button bsSize="xsmall" bsStyle="danger" onClick={() => removeFromCartito(product)}><span glyph="trash" >Delete</span></button></td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4">
                Total: ${cart.reduce((sum, product) => sum + product.price, 0)}
              </td>
            </tr>
          </tfoot>
        </table>

      </div>
    )
}

/**
 * 
 * @param {*} state
 * Data of state. This Data is obtained through props.
 * 
 */
const mapStateToProps = state =>{
  return {
    cart: state.cart
  }
};

/**
 * 
 * @param {*} dispatch 
 * We must return an object that has a function capable of dispatching the action removeFromCart name of the function that calls the       dispatcher of the action.
 * 
 * I write cartito only for verification...
 * 
 */
const mapDispatchToProps = dispatch =>{
  return {
    removeFromCartito(product) {
      dispatch(removeFromCart(product));
    }
  }
};

/**
 * Connect is a wrapper to get the data from the store
 */
export default connect(mapStateToProps,mapDispatchToProps)(ShoppingCart);
