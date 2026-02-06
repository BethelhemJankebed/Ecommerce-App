import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import { PRODUCTS } from './Home'; // We'll import the data from Home for simplicity
import { useCart } from '../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = PRODUCTS.find(p => p.id === parseInt(id));

  if (!product) {
    return <div className="container">Product not found</div>;
  }

  return (
    <div>
      <button onClick={() => navigate(-1)} className="btn" style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
        <ArrowLeft size={20} /> Back to Shopping
      </button>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'start' }}>
        <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
          <img src={product.image} alt={product.title} style={{ width: '100%', display: 'block' }} />
        </div>

        <div>
          <span style={{ color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.9rem' }}>
            {product.category}
          </span>
          <h1 style={{ fontSize: '2.5rem', marginTop: '0.5rem', marginBottom: '1rem' }}>{product.title}</h1>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>${product.price}</p>
          
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2rem', fontSize: '1.1rem' }}>
            {product.description}
          </p>

          <button onClick={() => addToCart(product)} className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
            <ShoppingCart size={24} /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
