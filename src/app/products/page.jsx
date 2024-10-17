
import Link from 'next/link';
import './Products.css';
import ProductSearchPage from '../../Components/products-page/ProductSearchPage';
import SortingOptions from '../../Components/products-page/SortingOptions'

const fetchProducts = async (searchQuery, sortBy, order) =>{
  let url = `https://dummyjson.com/products`;

  if(searchQuery){
    url += `/search?q=${searchQuery}`;
  }
  if(sortBy && order) {
    url += (searchQuery ? `&sortBy=${sortBy}&order=${order}` : `?sortBy=${sortBy}&order=${order}`)
  }

  const response = await  fetch(url)
  if(!response.ok) throw new Error ('failed to fetch data, response is not OK')

    const data = await response.json();
    return data.products;
}

const Page = async ({searchParams}) => {
const searchQuery = searchParams.q || '';
const sortBy = searchParams.sortBy || '';
const order = searchParams.order || '';


let products = [];
try {
  products = await fetchProducts(searchQuery, sortBy, order)
} catch (error) {
  console.error(error)
}

  return (
    <div className="products main-width">
      <ProductSearchPage searchQuery={searchQuery} />
      <SortingOptions sortBy={sortBy} order={order} />

      <div className="product-cards">
        {products.length === 0 ? (
          <div className="not-found">
            <p>No product found</p>
          </div>
        ) : (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="image">
                <img src={product.images[0]} alt={product.title} />
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
