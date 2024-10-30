'use client';
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './AddingProducts.css';

function AddingProducts({ handleCreatedProds, editData, handleEdit }) {
  const [brand, setBrand] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [desc, setDesc] = useState('');

  useEffect(() => {
    if (editData) {
      setBrand(editData.brand);
      setTitle(editData.title);
      setPrice(editData.price);
      setStock(editData.availabilityStatus);
      setThumbnail(editData.thumbnail);
      setDesc(editData.description);
    } else {
      setBrand('');
      setTitle('');
      setPrice('');
      setStock('');
      setThumbnail('');
      setDesc('');
    }
  }, [editData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
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

    setBrand('');
    setTitle('');
    setPrice('');
    setStock('');
    setThumbnail('');
    setDesc('');
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
