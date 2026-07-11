import { ShoppingBag, Heart, RefreshCw, User } from "lucide-react";
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
          <a href="#" className="nav-link active">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#" className="nav-link">Products</a>
          <a href="#" className="nav-link">Sellers</a>
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
