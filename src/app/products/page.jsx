'use client'
import React, { useEffect, useState } from 'react'
import './Products.css'
import Link from 'next/link'
import Loading from '../../Components/loading/Loading'

function Products() {
  const [Product, setProduct] = useState([])
  const [isLoading,setisLoading] =useState(false)

  async function fetchData() {
    setisLoading(true)
    try {const response = await fetch('https://dummyjson.com/products')
      if(!response.ok) {
        console.log(`something went wrong, didn't fetch`)
      }
      const data = await response.json();
      setProduct(data.products)
    } catch (error) {
      console.log(error.message)
    }finally {
      setisLoading(false)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  if(isLoading) return <Loading />

  return (
    <div className="products main-width">
      <div className='product-cards'>
        {Product.map(product => (
          <div className='product-card'>
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
        ))}
      </div>
    </div>
  )
}

export default Products