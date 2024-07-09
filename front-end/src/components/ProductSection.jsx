import React from 'react';
import './ProductSection.css';

import { assets } from '../assets/assets';

const ProductSection = ({ title, products, subtitle, handleAddToCart }) => {
  return (
    <div className="product-section">
      <div className="section-header">
        <span className="main-title">{title}</span>
        <img src={assets.local_fire_department} alt="fire icon" className="fire-icon" />
        <span className="subtitle">{subtitle}</span>
        <img src={assets.local_fire_department} alt="fire icon" className="fire-icon" />
      </div>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
           
            <img src={product.image} alt={product.name} />
            <div className="product-details">
              <p className="product-name">{product.name}</p>
              <p className="product-price">{product.price}</p>
              <p className="product-weight">{product.weight}</p>
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
