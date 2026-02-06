import React from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="card">
      <div style={{ height: '250px', overflow: 'hidden', position: 'relative' }}>
        <img
          src={product.image}
          alt={product.title}
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = 'https://placehold.co/600x400?text=No+Image';
          }}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }}
          className="btn-primary"
          style={{
            position: 'absolute',
            bottom: '1rem',
            right: '1rem',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            padding: 0,
            boxShadow: '0 4px 6px rgba(0,0,0,0.2)'
          }}
        >
          <Plus size={24} />
        </button>
      </div>
      <div style={{ padding: '1rem' }}>
        <Link to={`/product/${product.id}`}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {product.title}
          </h3>
        </Link>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
          {product.category}
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>${product.price}</span>
          <Link to={`/product/${product.id}`} style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 500 }}>
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
