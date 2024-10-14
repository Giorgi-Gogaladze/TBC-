'use client'
import React, { useEffect, useState } from 'react'
import './Products.css'
import Link from 'next/link'
import Loading from '../../Components/loading/Loading'

function Products() {
  const [Product, setProduct] = useState([]);
  const [isLoading,setisLoading] =useState(false);
  const [SearchInput, setSearchInput] = useState('');
  const [nothingFound, setNothingFound] = useState(false);
  const [sortBy, setSortBy] = useState('');


  const debounce = (func, delay) => {
    let timeOut;
    return (...args) => {
      if(timeOut) clearTimeout(timeOut)
        timeOut =setTimeout(() => {
          func(...args);
        }, delay);
    }
  }

  async function fetchData(name ='') {
    setisLoading(true)
    try {
      const response = await fetch( name ? `https://dummyjson.com/products/search?q=${name}` : `https://dummyjson.com/products`)
      if(!response.ok) {
        console.log(`something went wrong, didn't fetch`)
        return;
      }
      const data = await response.json();
      if(data.products.length === 0) {
        setNothingFound(true)
      }else{
        setNothingFound(false)
      }

      setProduct(data.products)
    } catch (error) {
      console.log(error.message)
      
    }finally {
      setisLoading(false)
    }
  }

  const debouncFunc = debounce(fetchData, 1500)

  useEffect(() => {
    if (SearchInput) {
      debouncFunc(SearchInput);
    } else {
      fetchData();
    }
  }, [SearchInput]);


  const handleSort = (e) => {
    setSortBy(e.target.value)
  }

  const sortedProduct = [...Product].sort((a, b) => {
   switch (sortBy) {
    case 'price-up':
      return a.price - b.price
    case 'price-down':
      return b.price - a.price
    case 'rating-up':
      return a.rating - b.rating
    case 'rating-down':
      return b.rating - a.rating
    default:
      return 0;
   }
  })   


if(isLoading) return <Loading />

  return (

    <div className="products main-width">
      <div className="search">
        <input type="text"
        placeholder='Search product by name . . .'
        value={SearchInput}
        onChange={(e) => setSearchInput(e.target.value)}
         />
          {/* <button onClick={() =>{
          fetchData(SearchInput);
          setSearchInput('')
          }}>Search</button> */}
      </div>

      <div className="sorting">
        <p>Sort By: </p>
        <select name="sort" onChange={handleSort}>
          <option></option>
          <option value='price-up'>Price-Up</option>
          <option value='price-down'>Price-Down</option>
          <option value='rating-up'>Rating-Up</option>
          <option value='rating-down'>Rating-Down</option>
        </select>
      </div>

      <div className='product-cards'>
        {nothingFound ? (
          <div className="not-found"><p>No product found</p></div>
        ) : (
          sortedProduct.map(product => (
            <div key={product.id} className='product-card'>
                <div className="image">
                  <img src={product.images[0]} alt={product.title} />
                </div>
                <div className='info'>
                  <h2>{product.brand}</h2>
                  <h4>{product.title}</h4>
                  <p>Price: ${product.price}</p>
                  <p>Stock: {product.availabilityStatus}</p>
                    <Link href={`/products/${product.id}`} key={product.id}>
                      <button>See more</button>
                    </Link>
                </div>
  
              </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Products