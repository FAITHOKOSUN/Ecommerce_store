import React from 'react';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import ProductSection from '../components/ProductSection';
import Footer from '../components/Footer';
import './HomePage.css';
import { assets } from '../assets/assets';



const products = [
  { id: 1, name: 'Sturdy Suede Arm Chair', price: '₦86,000', weight: 'weight: 5kg', image: assets.arm1 },
  { id: 2, name: 'Single Arm Chair', price: '₦70,000', weight: 'weight: 5kg', image: assets.arm2 },
  { id: 3, name: 'Single Arm Chair', price: '₦75,000', weight: 'weight: 5kg', image: assets.arm3 },
  { id: 4, name: 'Sturdy Suede Arm Chair', price: '₦86,000', weight: 'weight: 5kg', image: assets.arm4 },
  { id: 5, name: 'Single Arm Chair', price: '₦70,000', weight: 'weight: 5kg', image: assets.arm5 },
  { id: 6, name: 'Single Arm Chair', price: '₦75,000', weight: 'weight: 5kg', image: assets.arm6 },
];

const product1 = [
  { id: 1, name: 'Sturdy Suede Arm Chair', price: '₦86,000', weight: 'weight: 5kg', image: assets.sofa1 },
  { id: 2, name: 'Single Arm Chair', price: '₦70,000', weight: 'weight: 5kg', image: assets.sofa2 },
  { id: 3, name: 'Single Arm Chair', price: '₦75,000', weight: 'weight: 5kg', image: assets.sofa3 },
  { id: 4, name: 'Sturdy Suede Arm Chair', price: '₦86,000', weight: 'weight: 5kg', image: assets.sofa4 },
  { id: 5, name: 'Single Arm Chair', price: '₦70,000', weight: 'weight: 5kg', image: assets.sofa5 },
  { id: 6, name: 'Single Arm Chair', price: '₦75,000', weight: 'weight: 5kg', image: assets.sofa6 },
];

const product2 = [
  { id: 1, name: 'Sturdy Suede Arm Chair', price: '₦86,000', weight: 'weight: 5kg', image: assets.table1 },
  { id: 2, name: 'Single Arm Chair', price: '₦70,000', weight: 'weight: 5kg', image: assets.table2 },
  { id: 3, name: 'Single Arm Chair', price: '₦75,000', weight: 'weight: 5kg', image: assets.table3 },
  { id: 4, name: 'Sturdy Suede Arm Chair', price: '₦86,000', weight: 'weight: 5kg', image: assets.table4 },
  { id: 5, name: 'Single Arm Chair', price: '₦70,000', weight: 'weight: 5kg', image: assets.table5 },
  { id: 6, name: 'Single Arm Chair', price: '₦75,000', weight: 'weight: 5kg', image: assets.table6 },
];

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <MainContent />
      <ProductSection title="SINGLE ARM CHAIRS" subtitle="23 Items Sold!" products={products} />
      <ProductSection title="SOFA SETS" subtitle="Top Picks!" products={product1} />
      <ProductSection title="CENTRE TABLES" subtitle="New Arrivals" products={product2} />
      <Footer />
    </div>
  );
}

export default HomePage;



