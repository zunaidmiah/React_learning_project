import React from 'react';
import Product from './Product';

function Products(items){
  const { productsList } = items;
  const productMarkup = productsList.map((product) => (
        <Product key={product.id} product={product}/>
      ))
  return (
    <div className="products">
      {productMarkup}
    </div>
  );
};

export default Products;