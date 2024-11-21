'use client';
import Link from 'next/link';
import ProductSearchPage from '../../Components/products-page/ProductSearchPage';
import SortingOptions from '../../Components/products-page/SortingOptions';
import AddingProducts from '../../Components/adding-products/AddingProducts';
import { useEffect, useState } from 'react';

interface fetchProducts {
  id: string;
  created_at: string;
  name: string;
  price: number;
  img: string;
  rating: number;
  comments: string;
}

//  fetchProducts ატან პარამეტრად searchQuery, sortBy, order
const fetchProducts = async (): Promise<fetchProducts[]> => {
  let url = `http://localhost:3000/api/getProducts`;

  // if (searchQuery) {
  //   url += `/search?q=${searchQuery}`;
  // }
  // if (sortBy && order) {
  //   url += (searchQuery ? `&sortBy=${sortBy}&order=${order}` : `?sortBy=${sortBy}&order=${order}`);
  // }

  const response = await fetch(url);
  if (!response.ok) throw new Error('Failed to fetch data, response is not OK');

  const data = await response.json();

  return data.posts;
};

const Page: React.FC = () => {
  // const initialSearchQuery = searchParams.q || '';
  // const sortBy = searchParams.sortBy || '';
  // const order = searchParams.order || '';

  const [fetchedProds, setFetchedProds] = useState<fetchProducts[]>([]);
  const [createdProds, setCreatedProds] = useState([]);
  const [editData, setEditData] = useState(null);
  // const [searchQuery, setSearchQuery] = useState(initialSearchQuery);

  // const handleCreatedProds = (newProd) => {
  //   setCreatedProds((prev) => [...prev, newProd]);
  // };

  // const deleteProduct = (ID) => {
  //   setCreatedProds((prev) => prev.filter((prod) => prod.id !== ID));
  // };

  // const handleEdit = (product) => {
  //   setCreatedProds((prev) =>
  //     prev.map((prod) => (prod.id === product.id ? product : prod))
  //   );
  //   setEditData(null);
  // };

  // const editProductInitiation = (product) => {
  //   setEditData(product);
  // };

  // const handleSearchQueryChange = (query) => {
  //   setSearchQuery(query);
  // };

  useEffect(() => {
    const displayProds = async () => {
      try {
        const products = await fetchProducts();
        setFetchedProds(products);
      } catch (error) {
        console.error(error);
      }
    };
    displayProds();
  }, []);

  const unitedProds = [...createdProds, ...fetchedProds];

  return (
    <div className="products main-width min-h-[57.8vh]">
  {/* <div className='imported-comps'>
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
  </div> */}

  <div className="product-cards flex flex-wrap justify-center gap-6">
    {unitedProds.length === 0 ? (
      <div className="not-found flex items-center justify-center min-h-[40vh]">
        <p className="text-4xl font-bold text-black">No product found</p>
      </div>
    ) : (
      unitedProds.map((product) => (
        <div key={product.id} className="product-card w-[17rem] h-[22rem] p-2 bg-[#f9f9f9] rounded-lg shadow-lg flex flex-col items-center">
          <div className="flex gap-6 w-full justify-between">
            <img
              src="https://png.pngtree.com/png-vector/20190420/ourmid/pngtree-delete-vector-icon-png-image_963444.jpg"
              alt="remove"
              // onClick={() => deleteProduct(product.id)}
              className="cursor-pointer"
            />
            <img
              src="https://w7.pngwing.com/pngs/1018/119/png-transparent-computer-icons-editing-pencil-miscellaneous-angle-pencil.png"
              alt="edit"
              // onClick={() => editProductInitiation(product)}
              className="cursor-pointer"
            />
          </div>
          <div className="image w-full h-[50%] bg-cover bg-center rounded-t-lg overflow-hidden">
            <img src={product.img} alt={product.name} className="w-full h-full object-cover object-center" />
          </div>
          <div className="info flex flex-col items-center justify-center gap-2 mt-3">
            {/* <h2>{product.brand}</h2> */}
            <h4 className="text-lg">{product.name}</h4>
            <p className="font-semibold">Price: ${product.price}</p>
            {/* <p>Stock: {product.availabilityStatus}</p> */}
            <Link href={`/products/${product.id}`}>
              <button className="bg-black text-white text-lg font-semibold py-1 px-2 rounded-md cursor-pointer transition-transform transform hover:scale-105">
                See more
              </button>
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
