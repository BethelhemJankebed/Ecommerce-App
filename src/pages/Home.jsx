import React from 'react';
import ProductCard from '../components/ProductCard';

// Dummy Data
export const PRODUCTS = [
  {
    id: 1,
    title: "Premium Wireless Headphones",
    price: 299.99,
    description: "Experience crystal clear sound with our latest noise-cancelling technology. Perfect for travel and focus.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Minimalist Watch",
    price: 149.50,
    description: "A sleek, timeless design that goes with everything. Genuine leather strap included.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Smart Fitness Tracker",
    price: 89.99,
    description: "Track your health metrics with precision. Water-resistant and 7-day battery life.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Leather Crossbody Bag",
    price: 120.00,
    description: "Handcrafted from Italian leather. Spacious enough for all your daily essentials.",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Mechanical Keyboard",
    price: 159.99,
    description: "Tactile switches for the ultimate typing experience. customizable RGB backlighting.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b91add1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Designer Sunglasses",
    price: 210.00,
    description: "UV protection meets style. The perfect accessory for sunny days.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80"
  }
];

const Home = () => {
  return (
    <div>
      <header style={{ textAlign: 'center', margin: '4rem 0' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem', background: 'linear-gradient(to right, #6366f1, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Gebeya Store
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
          Discover our collection of premium products designed to elevate your lifestyle.
        </p>
      </header>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
        {PRODUCTS.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
