import React from 'react';
import './Product.css';

interface ProductCard {
  params: {
    id: number;
  };
}

interface fetchProduct {
  id: string;
  created_at: string;
  name: string;
  price: number;
  img: string;
  rating: number;
  comments_quantity: number;
}

async function fetchProduct(id: number): Promise<fetchProduct | null> {
  try {
    const response = await fetch(`http://localhost:3000/api/getProducts/${id}`);
    if (!response.ok) {
      return null;
    }
    const data = await response.json();
    return data.post;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export default async function ProductCard({ params }: ProductCard) {
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
    <div className='main-card'>
      {/* <h1>{product.brand}</h1> */}
      <div className='inner-container'>
        <div className='for-image'>
          <img
            src={product.img ? product.img : 'default-image-url'}
            alt='product image'
          />
        </div>
        <div className='info-container'>
          <h2>Rating: {product.rating}⭐</h2>
          <h1 className='title'>{product.name}</h1>
          {/* <p className='availability'>{product.availabilityStatus}</p> */}
          <h3>Price: {product.price}$</h3>
          <p className='description'>idk somehting: {product.comments_quantity}</p>
          <button className='button'>buy now</button>
        </div>
      </div>
    </div>
  );
}
