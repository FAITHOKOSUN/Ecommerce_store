import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductSection from '../components/ProductSection';
import { assets } from '../assets/assets';
import './Cart.css';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();

  const product2 = [
    { id: 1, name: 'Sturdy Suede Arm Chair', price: '₦86,000', weight: 'weight: 5kg', image: assets.table1 },
    { id: 2, name: 'Single Arm Chair', price: '₦70,000', weight: 'weight: 5kg', image: assets.table2 },
    { id: 3, name: 'Single Arm Chair', price: '₦75,000', weight: 'weight: 5kg', image: assets.table3 },
    { id: 4, name: 'Sturdy Suede Arm Chair', price: '₦86,000', weight: 'weight: 5kg', image: assets.table4 },
    { id: 5, name: 'Single Arm Chair', price: '₦70,000', weight: 'weight: 5kg', image: assets.table5 },
    { id: 6, name: 'Single Arm Chair', price: '₦75,000', weight: 'weight: 5kg', image: assets.table6 },
  ];

  const handleCheckout = () => {
    navigate('/PlaceOrder');
  };

  return (
    <div>
      <Header />
      <div className="order-steps">
        <div className="step">
          <img src={assets.Frame1} alt="Step 1" className="step-image active" />
          <div className="step-label">Your Cart</div>
        </div>
        <img src={assets.Frame2} alt="Step 2" className="step-image" />
        <img src={assets.Frame3} alt="Step 3" className="step-image" />
      </div>
      <h2>Your Cart</h2>
      <div className="cart-container container">
        <div className="cart-item-summary">
          <img src={assets.arm1} alt="Arm Chair" className="cart-item-image" />
          <div className="cart-item-details">
          <h2>Sturdy Suede Arm Chair</h2>
            <p>Item No: AR45609776099H</p>
            <p>1kg</p>
            <p>Quantity: 1</p>
            <p>Subtotal: ₦86,000</p>
            <p>Quantity: <span className="quantity"><img src={assets.expand_more} alt="Expand More" /> 1</span></p>
          </div>
        </div>
        <div className="order-summary">
          <h2>Order Summary</h2>
          <p>Subtotal: ₦86,000</p>
          <p>Shipping costs: --</p>
          <p>Tax Estimate: ₦4500</p>
          <p><strong>GRANDTOTAL Estimate: ₦90,500</strong></p>
          <button className="proceed-to-checkout" onClick={handleCheckout}>Proceed to Checkout</button>
        </div>
      </div>
      <ProductSection title="FREQUENTLY BOUGHT PRODUCTS" products={product2} />
      <Footer />
    </div>
  );
};

export default Cart;
