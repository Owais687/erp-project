import React, { useState } from 'react';
import ProductsList from './ProductsList';
import ProductForm from './ProductForm';

const ProductsManagement = () => {
  // Mock data array
  const [products, setProducts] = useState([
    { id: 1, name: 'Iphone 15 ', category: 'Mobile', price: 65000, stockQuantity: 10 },
    { id: 2, name: 'Samsung Galaxy S24 Ultra', category: 'Mobile', price: 130000, stockQuantity: 15 },
    { id: 3, name: 'Dell Alienware', category: 'Laptops', price: 150000, stockQuantity: 7 },
    { id: 4, name: 'Boat Airdopes 141', category: 'Earbuds', price: 1500, stockQuantity: 20 },
    { id: 5, name: 'Sony Playstation 4 Pro', category: 'Console', price: 45000, stockQuantity: 10 }
  ]);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, { id: Date.now(), ...newProduct }]);
  };

  const handleDeleteProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
  };

  return (
    <div>
      <h2>Add Product</h2>
      <ProductForm onSubmit={handleAddProduct} />
      <div style={{ marginTop: '2rem' }}></div>
      {/* Pass mock data as a prop */}
      <ProductsList products={products} onDelete={handleDeleteProduct} />
    </div>
  );
};

export default ProductsManagement;
