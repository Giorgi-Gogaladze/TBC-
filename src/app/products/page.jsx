'use client';
import Link from 'next/link';
import './Products.css';
import ProductSearchPage from '../../Components/products-page/ProductSearchPage';
import SortingOptions from '../../Components/products-page/SortingOptions';
import AddingProducts from '../../Components/adding-products/AddingProducts';
import { useEffect, useState } from 'react';

const fetchProducts = async (searchQuery, sortBy, order) => {
  let url = `https://dummyjson.com/products`;

  if (searchQuery) {
    url += `/search?q=${searchQuery}`;
  }
  if (sortBy && order) {
    url += (searchQuery ? `&sortBy=${sortBy}&order=${order}` : `?sortBy=${sortBy}&order=${order}`);
  }

  const response = await fetch(url);
  if (!response.ok) throw new Error('Failed to fetch data, response is not OK');

  const data = await response.json();
  return data.products;
};

const Page = ({ searchParams }) => {
  const initialSearchQuery = searchParams.q || '';
  const sortBy = searchParams.sortBy || '';
  const order = searchParams.order || '';

  const [fetchedProds, setFetchedProds] = useState([]);
  const [createdProds, setCreatedProds] = useState([]);
  const [editData, setEditData] = useState(null);
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);

  const handleCreatedProds = (newProd) => {
    setCreatedProds((prev) => [...prev, newProd]);
  };

  const deleteProduct = (ID) => {
    setCreatedProds((prev) => prev.filter(prod => prod.id !== ID));
  };

  const handleEdit = (product) => {
    setCreatedProds((prev) => 
      prev.map((prod) => (prod.id === product.id ? product : prod))
    );
    setEditData(null); 
  };

  const editProductInitiation = (product) => {
    setEditData(product);
  };

  const handleSearchQueryChange = (query) => {
    setSearchQuery(query);  
  };

  useEffect(() => {
    const displayProds = async () => {
      try {
        const products = await fetchProducts(searchQuery, sortBy, order);
        setFetchedProds(products || []);
      } catch (error) {
        console.error(error);
      }
    };
    displayProds();
  }, [searchQuery, sortBy, order]); 

  const unitedProds = [...createdProds, ...fetchedProds];

  return (
    <div className="products main-width">
      <div className='imported-comps'>
        <AddingProducts 
          handleCreatedProds={handleCreatedProds} 
          editData={editData} 
          handleEdit={handleEdit} 
        />
        <div className='search-and-sort'>
          <ProductSearchPage 
            searchQuery={searchQuery} 
            onSearch={handleSearchQueryChange} 
          />
          <SortingOptions sortBy={sortBy} order={order} />
        </div>
      </div>

      <div className="product-cards">
        {unitedProds.length === 0 ? (
          <div className="not-found">
            <p>No product found</p>
          </div>
        ) : (
          unitedProds.map((product) => (
            <div key={product.id} className="product-card">
              <div style={{ display: 'flex', gap: 25, width: '100%', justifyContent: 'space-between' }}>
                <img 
                  src='https://png.pngtree.com/png-vector/20190420/ourmid/pngtree-delete-vector-icon-png-image_963444.jpg' 
                  alt="remove" 
                  onClick={() => deleteProduct(product.id)} 
                />
                <img 
                  src='https://w7.pngwing.com/pngs/1018/119/png-transparent-computer-icons-editing-pencil-miscellaneous-angle-pencil.png' 
                  alt="edit"
                  onClick={() => editProductInitiation(product)} 
                />
              </div>
              <div className="image">
                <img src={product.thumbnail} alt={product.title} />
              </div>
              <div className="info">
                <h2>{product.brand}</h2>
                <h4>{product.title}</h4>
                <p>Price: ${product.price}</p>
                <p>Stock: {product.availabilityStatus}</p>
                <Link href={`/products/${product.id}`}>
                  <button>See more</button>
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Page;
