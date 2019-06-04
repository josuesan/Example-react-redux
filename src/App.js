import React from 'react';
import './App.css';
import ProductList from './components/productList';
import ShoppingCart from './components/shoppingCart';

function App() {
  return (
    <div className="App">
      <h1>Example Redux Store</h1>
      <div className="row">
        <div className="col-8">
          <ProductList />
        </div>
        <div className="col-4">
          <ShoppingCart />
        </div>
      </div>
      
    </div>
  );
}

export default App;
