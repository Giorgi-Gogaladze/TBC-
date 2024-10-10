import React from 'react';
import './Product.css';

async function fetchProduct(id) {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    if (!response.ok) {
      return null;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log( error);
    return null;
  }
}

export default async function ProductCard({ params }) {
  let product;
  try {
    product = await fetchProduct(params.id); 

    if (!product) {
      return <div>product not found.</div>;
    }
  } catch (error) {
    console.error(error);
  }

  if (!product) {
    return <div>product not found.</div>; 
  }

  return (
    <div className="main-card">
      <h1>{product.brand}</h1>
      <div className="inner-container">
        <div className="for-image">
          <img src={product.images ? product.images[0] : 'default-image-url'} alt="product image" />
        </div>
        <div className="info-container">
          <h2>Rating: {product.rating}⭐</h2>
          <h1 className="title">{product.title}</h1>
          <p className="availability">{product.availabilityStatus}</p>
          <h3>Price: {product.price}$</h3>
          <p className="description">{product.description}</p>               
          <button className="button">Add To The Cart</button>                               
        </div>
      </div>
    </div>
  )
}
