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
        <div className="step">
          <img src={assets.Frame3} alt="Step 2" className="step-image" />
          
        </div>
        <div className="step">
          <img src={assets.Frame3} alt="Step 3" className="step-image" />
          
        </div>
        <div className="step">
          <img src={assets.Frame3} alt="Step 4" className="step-image" />
          
        </div>
      </div>

      <div className="cart-container">
        <div className="cart-item-summary">
          <img src={assets.arm1} alt="Arm Chair" className="cart-item-image" />
          <div className="cart-item-details">
            <h2>Sturdy Suede Arm Chair</h2>
            <p>Item No: AR45609776099H</p>
            <p>1kg</p>
            <div className="quantity-container">
              <span>Quantity:</span>
              <img src={assets.expand_more} alt="Expand More" className="expand-more" />
              <p className="payment-text">Subtotal: ₦86,000</p>
            </div>
            <button>
              <img src={assets.delete_item} alt="Delete Item" className="delete-more" />
            </button>
            Delete
            <button>
              <img src={assets.fav} alt="Favorite Item" className="fav-more" />
            </button>
            Save later
          </div>
        </div>
        <div className="order-summary">
          <h2>Order Summary</h2>
          <p><span>Subtotal:</span> <span className="right-align">₦86,000</span></p>
          <p className="shipping-cost">
            <span>Shipping costs:</span>
            
          </p>
          <p className="tax-estimate"><span>Tax Estimate:</span> <span className="right-align">₦4500</span></p>
          <p><span><strong>GRANDTOTAL Estimate:</strong></span> <span className="right-align"><strong>₦90,500</strong></span></p>
          <button className="proceed-to-checkout" onClick={handleCheckout}>Proceed to Checkout</button>
          <img src={assets.info} alt="Info Icon" />Shipping fee to be updated upon adding shipping location
        </div>
      </div>
      
      <ProductSection title="FREQUENTLY BOUGHT PRODUCTS" products={product2} />
      
      <Footer />
    </div>
  );
};

export default Cart;
