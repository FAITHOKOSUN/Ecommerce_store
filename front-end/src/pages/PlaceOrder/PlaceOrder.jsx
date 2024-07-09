import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { assets } from '../../assets/assets'; // Ensure you import assets correctly
import './PlaceOrder.css';

const PlaceOrder = () => {
  return (
    <div>
      <Header />
      <div className="order-steps">
        <div className="step">
          <div className="step-line active"></div>
          <div className="step-label">Your Cart</div>
        </div>
        <div className="step">
          <div className="step-line active"></div>
          <div className="step-label">Shipping & Billing</div>
        </div>
        <div className="step">
          <div className="step-line"></div>
        </div>
        <div className="step">
          <div className="step-line"></div>
        </div>
      </div>
      <div className="place-order-container">
        <div className="cart-item-summary">
          <div className="cart-item-details">
            <h2>Your Cart</h2>
            <img src={assets.arm1} alt="Sturdy Suede Arm Chair" />
            <p>Sturdy Suede Arm Chair</p>
            <p>Item No: AR45609776099H</p>
            <p>1kg</p>
            <p>Quantity: 1</p>
            <p>Subtotal: ₦86,000</p>
            <button>Delete</button>
            <button>Save for later</button>
          </div>
          <div className="order-summary">
            <h2>Order Summary</h2>
            <p>Subtotal: ₦86,000</p>
            <p>Shipping costs: --</p>
            <p>Tax Estimate: ₦4,500</p>
            <p>GRANDTOTAL Estimate: ₦90,500</p>
            <button className="proceed-to-checkout">Proceed to Checkout</button>
          </div>
        </div>
        <div className="shipping-billing">
          <h2>Shipping & Billing</h2>
          <div className="sign-in">
            <input type="email" placeholder="Enter your Email Address" />
            <button>Sign In</button>
            <button>Continue As Guest</button>
            <p>New Here? <a href="#">Create Account</a></p>
            <label>
              <input type="checkbox" /> Send me promotional offers and deals.
            </label>
          </div>
          <div className="shipping-address">
            <h3>Shipping Address</h3>
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Street Address" />
            <input type="text" placeholder="Enter your Street Address" />
            <input type="text" placeholder="Postal Code" />
            <select>
              <option>Select your City</option>
              <option>City 1</option>
              <option>City 2</option>
            </select>
            <input type="text" placeholder="Enter your phone number" />
            <label>
              <input type="checkbox" /> Billing Address same as Shipping Address
            </label>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PlaceOrder;
