import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Package } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cartCount } = useCart();

  return (
    <nav className="glass" style={{ position: 'sticky', top: 0, zIndex: 100, marginBottom: '2rem' }}>
      <div className="container" style={{ height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>
          <Package size={32} />
          <span>Gebeya</span>
        </Link>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <Link to="/" style={{ fontWeight: 500 }}>Home</Link>
          <Link to="/cart" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>
            <ShoppingCart size={20} />
            <span>Cart</span>
            {cartCount > 0 && (
              <span style={{ backgroundColor: 'white', color: 'var(--primary)', padding: '0 6px', borderRadius: '10px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
