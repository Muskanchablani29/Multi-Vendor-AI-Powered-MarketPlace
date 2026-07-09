import { useState, useEffect } from "react";
import { ArrowUpRight, Star, Heart, Sparkles } from "lucide-react";
import "./Homeone.css";

const steps = [
  { num: "01", title: "AI-Powered Shopping",      desc: "Get personalized recommendations tailored just for you by our smart AI engine." },
  { num: "02", title: "Multi-Vendor Marketplace", desc: "Browse thousands of products from hundreds of verified sellers in one place." },
  { num: "03", title: "Secure Payments",          desc: "Pay safely with Razorpay — UPI, cards, wallets all supported." },
  { num: "04", title: "Seller Analytics",         desc: "Sellers get real-time dashboards to track sales, revenue and growth." },
  { num: "05", title: "Smart Wishlist",           desc: "Save your favourite items and get notified when prices drop." },
  { num: "06", title: "Fast Delivery",            desc: "Reliable logistics partners ensure your orders arrive on time, every time." },
];

const products = [
  { id: 1, img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=120&h=120&fit=crop" },
  { id: 2, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=120&h=120&fit=crop" },
  { id: 3, img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=120&h=120&fit=crop" },
];

export default function Homeone() {
  const [step, setStep]       = useState(0);
  const [animDir, setAnimDir] = useState("up"); // "up" | "down"
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      setAnimDir("up");
      setTimeout(() => {
        setStep(s => (s + 1) % steps.length);
        setAnimDir("down");
        setVisible(true);
      }, 350);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  const current = steps[step];

  return (
    <div className="home-wrapper">

      {/* ── Top Grid ── */}
      <div className="home-grid">

        {/* ── Hero Card ── */}
        <div className="card hero-card anim-fade-up">
          <span className="hero-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="9" height="9" rx="1.5"/><rect x="13" y="2" width="9" height="9" rx="1.5"/><rect x="2" y="13" width="9" height="9" rx="1.5"/><rect x="13" y="13" width="9" height="9" rx="1.5"/></svg>
            Multi-Vendor Marketplace
          </span>

          <div className="hero-content">
            <div className="hero-text">
              <h1>Shop Smarter,<br /><em className="hero-accent">Sell Better.</em></h1>

              {/* Step Slider */}
              <div className="hero-feature">
                <span className="hero-num">{current.num}</span>
                <span className="hero-line" />
                <div className={`step-content ${visible ? "step-in" : "step-out"} step-${animDir}`}>
                  <p className="hero-feature-title">{current.title}</p>
                  <p className="hero-feature-desc">{current.desc}</p>
                </div>
              </div>

              {/* Step dots */}
              <div className="step-dots">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    className={`step-dot ${i === step ? "active" : ""}`}
                    onClick={() => { setVisible(false); setTimeout(() => { setStep(i); setVisible(true); }, 300); }}
                  />
                ))}
              </div>

              <button className="hero-btn">
                View All Products
                <span className="hero-btn-icon"><ArrowUpRight size={16} /></span>
              </button>
            </div>

            <div className="hero-image-wrap">

              {/* floating orbit dots */}
              <div className="hero-dot dot1" />
              <div className="hero-dot dot2" />
              <div className="hero-dot dot3" />

              {/* ── Shopping Bag Scene ── */}
              <div className="bag-scene-hero">

                {/* product cards flying in */}
                <div className="hfly hfly-1">
                  <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=56&h=56&fit=crop" alt="watch" />
                  <span>Watch</span>
                </div>
                <div className="hfly hfly-2">
                  <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=56&h=56&fit=crop" alt="shoe" />
                  <span>Sneaker</span>
                </div>
                <div className="hfly hfly-3">
                  <img src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=56&h=56&fit=crop" alt="perfume" />
                  <span>Perfume</span>
                </div>
                <div className="hfly hfly-4">
                  <img src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=56&h=56&fit=crop" alt="laptop" />
                  <span>Laptop</span>
                </div>

                {/* main bag */}
                <div className="hero-bag">
                  <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* shadow */}
                    <ellipse cx="60" cy="134" rx="36" ry="6" fill="rgba(0,0,0,0.12)"/>
                    {/* bag body */}
                    <rect x="10" y="44" width="100" height="86" rx="18" fill="#1a1a1a"/>
                    {/* bag shine */}
                    <rect x="22" y="58" width="30" height="6" rx="3" fill="#ffffff18"/>
                    {/* handle left */}
                    <path d="M38 44 C38 20 52 14 60 14" stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round" fill="none"/>
                    {/* handle right */}
                    <path d="M82 44 C82 20 68 14 60 14" stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round" fill="none"/>
                    {/* NM label */}
                    <rect x="30" y="76" width="60" height="32" rx="8" fill="#c8f135"/>
                    <text x="60" y="98" textAnchor="middle" fill="#111" fontSize="16" fontWeight="900" fontFamily="Inter,sans-serif">NovaMart</text>
                    {/* bag opening highlight */}
                    <rect x="10" y="44" width="100" height="14" rx="10" fill="#2e2e2e"/>
                  </svg>
                </div>

                {/* sparkles after drop */}
                <div className="hsp hsp-1">✦</div>
                <div className="hsp hsp-2">✦</div>
                <div className="hsp hsp-3">✦</div>
                <div className="hsp hsp-4">✦</div>
                <div className="hsp hsp-5">✦</div>

                {/* count badge */}
                <div className="bag-count">4 items added!</div>
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

          <div className="card categories-card anim-fade-up" style={{ animationDelay: "0.1s" }}>
            <p className="card-label">Popular Categories</p>
            <div className="category-dots">
              {["#4f8ef7","#f97316","#22c55e","#ef4444","#06b6d4"].map((c, i) => (
                <span key={i} className="cat-dot" style={{ background: c, animationDelay: `${0.15 + i * 0.08}s` }} />
              ))}
            </div>
          </div>

          <div className="card featured-seller-card anim-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="fs-text">
              <p className="card-label">Top Seller</p>
              <p className="fs-name">TechZone Store</p>
            </div>
            <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=160&fit=crop" alt="Top Seller" className="fs-img" />
            <button className="arrow-btn"><ArrowUpRight size={16} /></button>
          </div>

          <div className="card ai-card anim-fade-up" style={{ animationDelay: "0.3s" }}>
            <button className="arrow-btn" style={{ position:"absolute", top:14, right:14 }}><ArrowUpRight size={16} /></button>
            <img src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=280&h=200&fit=crop" alt="AI Picks" className="ai-img" />
            <div className="ai-text">
              <p className="ai-name">AI Picks — Laptop</p>
              <p className="ai-sub">Curated just for you</p>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom Row ── */}
      <div className="bottom-row">

        <div className="card more-card anim-fade-up" style={{ animationDelay: "0.35s" }}>
          <div className="more-header">
            <div>
              <p className="more-title">More Products</p>
              <p className="more-sub">10,000+ items.</p>
            </div>
            <button className="heart-btn"><Heart size={16} fill="#e11d48" color="#e11d48" /></button>
          </div>
          <div className="more-imgs">
            {products.map((p, i) => (
              <img key={p.id} src={p.img} alt="product" className="more-img" style={{ animationDelay: `${0.4 + i * 0.1}s` }} />
            ))}
          </div>
        </div>

        <div className="card sellers-card anim-fade-up" style={{ animationDelay: "0.45s" }}>
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

        <div className="card popular-card anim-fade-up" style={{ animationDelay: "0.5s" }}>
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

        <div className="card trending-card anim-fade-up" style={{ animationDelay: "0.55s" }}>
          <button className="arrow-btn top-right"><ArrowUpRight size={16} /></button>
          <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=260&h=200&fit=crop" alt="Trending" className="trending-img" />
          <div className="trending-text">
            <p className="trending-name">Trending Sneakers</p>
            <p className="trending-sub">Best deals this week</p>
          </div>
        </div>

      </div>
    </div>
  );
}
