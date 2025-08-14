import React, { useState } from "react";

function Product(productInfo) {
    const addToCart = () =>{
        if(qty <= 0){
            alert("Product is out of stock!");
        }else{
            setQty(qty - 1);
            alert("Product added to cart!");
        }
    };
    const { product } = productInfo;
    const { id, title, price, description, category, image, rating, quantity} = product;
    const [qty, setQty] = useState(quantity);
    return (
        <article className="product" key={id}>
        <img src={image} alt={title} />
        <div className="product__details">
          <h4 className="product__title">{title}</h4>
          <p className="product__price">Price: ${price}</p>
          <p className="product__rating">Rating: {rating.rate}/5</p>
          <p className="product__rating">Quantity: {qty} {qty <= 1 ? 'pc' : 'pcs'}</p>
          <p className="product__desc">Description: {description}</p>
          <button className="product__btn btn" onClick={addToCart}>Add to cart</button>
        </div>
      </article>
    )
}


export default Product;