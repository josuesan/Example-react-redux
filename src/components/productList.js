import React from 'react';
import {connect} from "react-redux";
import { addToCart } from "../actionsCreators";

const ProductList = ({products, addToCart}) => {

    return (
      <div >
        {products.map(product =>
          <div className="thumbnail"  key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="caption">
              <h4>{product.name}</h4>
              <p>
                <button onClick={() => addToCart(product)} disabled={product.inventory <= 0}>${product.price} <span >Purcharse</span></button>
              </p>
            </div>
          </div>
        )}
      </div>
    );
    

}
const mapStateToProps = state =>{
    return {
        products: state.products
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        addToCart(products){
            dispatch(addToCart(products));
        }
    }
}

export default connect(mapStateToProps,
    mapDispatchToProps)(ProductList);
