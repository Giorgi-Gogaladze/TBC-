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

  async function fetchData(name) {
    setisLoading(true)
    try {
      const response = await fetch(`https://dummyjson.com/products/search?q=${name}`)
      if(!response.ok) {
        console.log(`something went wrong, didn't fetch`)
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
  useEffect(() => {
    fetchData('')
  }, [])


  const handleSort = (e) => {
    setSortBy(e.target.value)
  }

  const sortedProduct = [...Product].sort((a, b) => {
    if(sortBy === 'price-up') {
      return a.price - b.price;
    }
    if( sortBy === 'price-down') {
      return b.price - a.price;
    }
    if(sortBy === 'rating-up') {
      return a.rating - b.rating;
    }
    if(sortBy === 'rating-down') {
      return b.rating - a.rating;
    }
  })   


useEffect(() => {
  setProduct(sortedProduct)
}, [sortBy])

if(isLoading) return <Loading />


  return (

    <div className="products main-width">
      <div className="search">
        <input type="text"
        placeholder='Search product by name . . .'
        value={SearchInput}
        onChange={(e) => setSearchInput(e.target.value)}
         />
         <button onClick={() =>
         {
          fetchData(SearchInput);
          setSearchInput('')
          }}>Search</button>
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
          Product.map(product => (
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