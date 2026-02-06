import React from 'react';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem 0' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Your Cart is Empty</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Looks like you haven't added anything yet.</p>
        <Link to="/" className="btn btn-primary">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Shopping Cart</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '2rem' }}>
        {/* Cart Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {cart.map(item => (
            <div key={item.id} className="glass" style={{ display: 'flex', gap: '1.5rem', padding: '1.5rem', borderRadius: 'var(--radius)', alignItems: 'center' }}>
              <img src={item.image} alt={item.title} style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px' }} />
              
              <div style={{ flex: 1 }}>
                <h3 style={{ marginBottom: '0.25rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)' }}>${item.price}</p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--card-bg)', padding: '0.25rem', borderRadius: '8px' }}>
                <button onClick={() => updateQuantity(item.id, -1)} className="btn-icon">
                  <Minus size={16} />
                </button>
                <span style={{ fontWeight: 600, minWidth: '20px', textAlign: 'center' }}>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)} className="btn-icon">
                  <Plus size={16} />
                </button>
              </div>

              <div style={{ textAlign: 'right', minWidth: '80px' }}>
                <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>${(item.price * item.quantity).toFixed(2)}</p>
              </div>

              <button onClick={() => removeFromCart(item.id)} className="btn-icon" style={{ color: 'var(--danger)' }}>
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius)', height: 'fit-content' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Order Summary</h3>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <span style={{ color: 'var(--text-muted)' }}>Subtotal</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <span style={{ color: 'var(--text-muted)' }}>Shipping</span>
            <span>Free</span>
          </div>
          
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', margin: '1.5rem 0' }} />
          
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', fontSize: '1.25rem', fontWeight: 'bold' }}>
            <span>Total</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>

          <button className="btn btn-primary" style={{ width: '100%' }}>
            Checkout <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
