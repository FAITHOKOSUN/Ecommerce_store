import React from 'react';
import './ProductSection.css';
import { assets } from '../assets/assets';

const ProductSection = ({ title, products, handleAddToCart }) => {
  return (
    <div className="product-section">
      <div className="section-header">
        <h2>{title}</h2>
      </div>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <div className='product-details'>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <p>{product.weight}</p>
            {product.image === assets.arm1 && (
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
