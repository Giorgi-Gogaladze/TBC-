'use client';
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './AddingProducts.css';
import { Product, AddingProductsProps } from './interfaces/product';

const AddingProducts: React.FC<AddingProductsProps> = ({
  handleCreatedProds,
  handleEdit,
  editData,
}) => {
  const [brand, setBrand] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [stock, setStock] = useState<string>('');
  const [thumbnail, setThumbnail] = useState<string>('');
  const [desc, setDesc] = useState<string>('');

  useEffect(() => {
    if (editData) {
      setBrand(editData.brand);
      setTitle(editData.title);
      setPrice(editData.price.toString());
      setStock(editData.availabilityStatus);
      setThumbnail(editData.thumbnail[0] || '');
      setDesc(editData.description);
    } else {
      resetForm()
    }
  }, [editData]);

  const resetForm = () => {
    setBrand('')
    setTitle('')
    setPrice('')
    setStock('')
    setThumbnail('')
    setDesc('')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newProduct: Product = {
      id: editData ? editData.id : uuidv4(),
      brand,
      title,
      price: parseFloat(price),
      availabilityStatus: stock,
      thumbnail: [thumbnail],
      description: desc,
    };

    if (editData) {
      handleEdit(newProduct);
    } else {
      handleCreatedProds(newProduct);
    }

    resetForm()
  };

  return (
    <section className="main-width">
      <div className="inputs">
        <h2>{editData ? 'Edit Product:' : 'Add Product:'}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            placeholder="Brand..."
            required
          />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title..."
            required
          />
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price..."
            required
          />
          <input
            type="text"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            placeholder="In stock..."
            required
          />
          <input
            type="text"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
            placeholder="Image URL..."
            required
          />
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Description"
            required
          />
          <button type="submit">{editData ? 'Update Product' : 'Add Product'}</button>
        </form>
      </div>
    </section>
  );
}

export default AddingProducts;
