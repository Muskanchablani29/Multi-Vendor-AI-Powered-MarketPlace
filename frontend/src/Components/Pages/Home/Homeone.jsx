import { ArrowUpRight, Star, Heart, Sparkles } from "lucide-react";
import "./Homeone.css";

const products = [
  { id: 1, name: "Wireless Earbuds Pro", price: "₹1,299", img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=120&h=120&fit=crop" },
  { id: 2, name: "Smart Watch X2", price: "₹3,499", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=120&h=120&fit=crop" },
  { id: 3, name: "Laptop Sleeve", price: "₹599", img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=120&h=120&fit=crop" },
];

export default function Homeone() {
  return (
    <div className="home-wrapper">

      {/* ── Main Grid ── */}
      <div className="home-grid">

        {/* ── Hero Card ── */}
        <div className="card hero-card">
          <span className="hero-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="9" height="9" rx="1.5"/><rect x="13" y="2" width="9" height="9" rx="1.5"/><rect x="2" y="13" width="9" height="9" rx="1.5"/><rect x="13" y="13" width="9" height="9" rx="1.5"/></svg>
            Multi-Vendor Marketplace
          </span>

          <div className="hero-content">
            <div className="hero-text">
              <h1>Shop Smarter,<br /><em className="hero-accent">Sell Better.</em></h1>
              <div className="hero-feature">
                <span className="hero-num">01</span>
                <span className="hero-line" />
                <div>
                  <p className="hero-feature-title">AI-Powered Shopping</p>
                  <p className="hero-feature-desc">Get personalized recommendations tailored just for you by our smart AI engine.</p>
                </div>
              </div>
              <button className="hero-btn">
                View All Products
                <span className="hero-btn-icon"><ArrowUpRight size={16} /></span>
              </button>
            </div>

            <div className="hero-image-wrap">
              <div className="hero-dot dot1" />
              <div className="hero-dot dot2" />
              <div className="hero-dot dot3" />
              <img
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=420&h=420&fit=crop"
                alt="Featured Product"
                className="hero-img"
              />
              <div className="hero-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8l4 4-4 4"/></svg>
              </div>
            </div>
          </div>

          <div className="hero-footer">
            <span>Follow us on:</span>
            <a href="#">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="#">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>

        {/* ── Right Column ── */}
        <div className="right-col">

          {/* Popular Categories */}
          <div className="card categories-card">
            <p className="card-label">Popular Categories</p>
            <div className="category-dots">
              {["#4f8ef7","#f97316","#22c55e","#ef4444","#06b6d4"].map((c, i) => (
                <span key={i} className="cat-dot" style={{ background: c }} />
              ))}
            </div>
          </div>

          {/* Featured Seller */}
          <div className="card featured-seller-card">
            <div className="fs-text">
              <p className="card-label">Top Seller</p>
              <p className="fs-name">TechZone Store</p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=160&fit=crop"
              alt="Top Seller"
              className="fs-img"
            />
            <button className="arrow-btn"><ArrowUpRight size={16} /></button>
          </div>

          {/* AI Picks */}
          <div className="card ai-card">
            <button className="arrow-btn"><ArrowUpRight size={16} /></button>
            <img
              src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=280&h=200&fit=crop"
              alt="AI Picks"
              className="ai-img"
            />
            <div className="ai-text">
              <p className="ai-name">AI Picks — Laptop</p>
              <p className="ai-sub">Curated just for you</p>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom Row ── */}
      <div className="bottom-row">

        {/* More Products */}
        <div className="card more-card">
          <div className="more-header">
            <div>
              <p className="more-title">More Products</p>
              <p className="more-sub">10,000+ items.</p>
            </div>
            <button className="heart-btn"><Heart size={16} fill="#e11d48" color="#e11d48" /></button>
          </div>
          <div className="more-imgs">
            {products.map(p => (
              <img key={p.id} src={p.img} alt={p.name} className="more-img" />
            ))}
          </div>
        </div>

        {/* Sellers Stats */}
        <div className="card sellers-card">
          <div className="sellers-avatars">
            {["seed=buyer1","seed=seller1","seed=vendor2"].map((s, i) => (
              <img key={i} src={`https://api.dicebear.com/7.x/adventurer/svg?${s}`} alt="user" className="seller-avatar" />
            ))}
          </div>
          <div className="sellers-stat">
            <p className="stat-num">500+</p>
            <p className="stat-label">Active Sellers</p>
          </div>
          <div className="sellers-rating">
            <Star size={14} fill="#facc15" color="#facc15" />
            <span>4.8 reviews</span>
          </div>
        </div>

        {/* Popular Product */}
        <div className="card popular-card">
          <span className="popular-tag"><Sparkles size={12} /> Popular</span>
          <button className="arrow-btn top-right"><ArrowUpRight size={16} /></button>
          <p className="popular-title">AI Shopping<br />Has Arrived</p>
          <div className="popular-imgs">
            <img src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=80&h=80&fit=crop" alt="p1" />
            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=80&h=80&fit=crop" alt="p2" />
          </div>
          <div className="popular-rating">
            <Star size={13} fill="#facc15" color="#facc15" /> 4.9
          </div>
        </div>

        {/* Trending */}
        <div className="card trending-card">
          <button className="arrow-btn top-right"><ArrowUpRight size={16} /></button>
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=260&h=200&fit=crop"
            alt="Trending"
            className="trending-img"
          />
          <div className="trending-text">
            <p className="trending-name">Trending Sneakers</p>
            <p className="trending-sub">Best deals this week</p>
          </div>
        </div>

      </div>
    </div>
  );
}
