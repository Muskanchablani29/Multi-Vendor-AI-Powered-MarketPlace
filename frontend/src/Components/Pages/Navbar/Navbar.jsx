import { ShoppingBag, Heart, RefreshCw, User } from "lucide-react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">

        {/* Logo */}
        <div className="navbar-logo">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <rect x="2" y="2" width="9" height="9" rx="1.5" />
            <rect x="13" y="2" width="9" height="9" rx="1.5" />
            <rect x="2" y="13" width="9" height="9" rx="1.5" />
            <rect x="13" y="13" width="9" height="9" rx="1.5" />
          </svg>
          <span>NovaMart.</span>
        </div>

        {/* Nav Links */}
        <div className="navbar-links">
          <NavLink to="/"      className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>About</NavLink>
          <NavLink to="/products" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Products</NavLink>
          <NavLink to="/sellers"  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Sellers</NavLink>
        </div>

        {/* Centered Search */}
        <div className="navbar-center">
          <div className="navbar-search">
            <input type="text" placeholder="Search products..." />
            <button className="search-ai-btn" title="AI Search">
              <RefreshCw size={14} />
            </button>
          </div>
        </div>

        {/* Right Actions */}
        <div className="navbar-actions">
          <button className="icon-btn" title="Cart">
            <ShoppingBag size={18} />
          </button>
          <button className="icon-btn" title="Wishlist">
            <Heart size={18} fill="#e11d48" color="#e11d48" />
          </button>
          <button className="login-btn">
            <User size={14} />
            Login
          </button>
        </div>

      </nav>
    </div>
  );
}
