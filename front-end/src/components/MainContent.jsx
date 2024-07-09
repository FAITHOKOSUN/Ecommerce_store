import React from 'react';
import './MainContent.css';
import livingRoomImg from '../assets/living.png';
import bedroomsImg from '../assets/bedroom.png';
import kitchenImg from '../assets/kitchen.png';
import officeImg from '../assets/office.png';
import ShopImg from '../assets/shop.png';

const MainContent = () => {
  return (
    <div className="main-content">
      <section className="shop-section">
        <div className="shop-image-container">
          <img src={ShopImg} alt="Living Room" />
        </div>
      </section>

      <div className="shop-all">
        <a href="#shop-all">Shop All Furnitures</a>
      </div>

      <div className="categories">
        <div className="category living-room">
          <a href="#living-room" className='living-room-text'>
            <img src={livingRoomImg} alt="Living Room" />
            <span>Living Room</span>
          </a>
        </div>
        <div className="category">
          <a href="#bedrooms">
            <img src={bedroomsImg} alt="Bedrooms" />
            <span>Bedrooms</span>
          </a>
        </div>
        <div className="category">
          <a href="#kitchen">
            <img src={kitchenImg} alt="Kitchen" />
            <span>Kitchen</span>
          </a>
        </div>
        <div className="category">
          <a href="#office">
            <img src={officeImg} alt="Office" />
            <span>Office</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
