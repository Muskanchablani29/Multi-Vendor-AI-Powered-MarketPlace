import { useState, useEffect, useRef } from "react";
import { Star, ShoppingCart, Heart, Eye, Sparkles, TrendingUp, ArrowRight } from "lucide-react";

const ALL = "All";
const filters = [ALL, "Electronics", "Fashion", "Gaming", "Home", "Sports"];

const products = [
  { id: 1, name: "MacBook Air M2",           sub: "Apple · 8GB RAM · 256GB SSD",  price: 89999,  original: 114900, discount: 22, rating: 4.9, reviews: 1203, seller: "AppleZone",  category: "Electronics", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=380&fit=crop",  ai: true  },
  { id: 2, name: "Samsung Galaxy S24 Ultra", sub: "Samsung · 12GB · 256GB",        price: 109999, original: 134999, discount: 19, rating: 4.8, reviews: 987,  seller: "SamsungHub", category: "Electronics", img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&h=380&fit=crop",  ai: false },
  { id: 3, name: "Sony PlayStation 5",       sub: "Sony · Disc Edition · White",   price: 49990,  original: 54990,  discount: 9,  rating: 4.9, reviews: 4521, seller: "GameWorld",  category: "Gaming",      img: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=500&h=380&fit=crop",  ai: true  },
  { id: 4, name: "Dyson V15 Detect",         sub: "Dyson · Cordless · Gold",       price: 44900,  original: 59900,  discount: 25, rating: 4.7, reviews: 342,  seller: "HomeElite",  category: "Home",        img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=380&fit=crop",  ai: false },
  { id: 5, name: "Levi's 511 Slim Jeans",    sub: "Levi's · Slim Fit · Dark Blue", price: 2499,   original: 3999,   discount: 38, rating: 4.5, reviews: 2109, seller: "FashionHub", category: "Fashion",     img: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=380&fit=crop",  ai: false },
  { id: 6, name: "Nikon Z50 Mirrorless",     sub: "Nikon · 20.9MP · 4K Video",    price: 69990,  original: 84990,  discount: 18, rating: 4.8, reviews: 567,  seller: "CameraZone", category: "Electronics", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&h=380&fit=crop",  ai: true  },
  { id: 7, name: "Philips Air Fryer XXL",    sub: "Philips · 7.3L · Digital",      price: 8999,   original: 13999,  discount: 36, rating: 4.6, reviews: 3421, seller: "KitchenPro", category: "Home",        img: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=500&h=380&fit=crop",  ai: false },
  { id: 8, name: "Adidas Ultraboost 23",     sub: "Adidas · Men's · Size 7–11",    price: 12999,  original: 17999,  discount: 28, rating: 4.7, reviews: 1876, seller: "SportZone",  category: "Sports",      img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&h=380&fit=crop",  ai: true  },
];

export default function Homefour() {
  const [active, setActive]   = useState(ALL);
  const [wished, setWished]   = useState({});
  const [visible, setVisible] = useState({});
  const refs = useRef([]);

  const filtered = active === ALL ? products : products.filter(p => p.category === active);

  useEffect(() => {
    setVisible({});
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const i = Number(e.target.dataset.i);
          setTimeout(() => setVisible(v => ({ ...v, [e.target.dataset.key]: true })), i * 80);
        }
      });
    }, { threshold: 0.1 });
    refs.current.forEach(r => r && obs.observe(r));
    return () => obs.disconnect();
  }, [active]);

  return (
    <section style={{ padding: "88px 40px", background: "#fafafa" }}>
      <style>{`
        @keyframes cardEntrance {
          from { opacity: 0; transform: translateY(32px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }
        @keyframes aiGlow {
          0%,100% { box-shadow: 0 0 0 0 rgba(200,241,53,0.5); }
          50%     { box-shadow: 0 0 0 6px rgba(200,241,53,0); }
        }
        @keyframes heartBeat {
          0%  { transform: scale(1); }
          30% { transform: scale(1.45); }
          60% { transform: scale(0.88); }
          100%{ transform: scale(1); }
        }
        @keyframes shimmerSweep {
          from { transform: translateX(-100%) skewX(-12deg); }
          to   { transform: translateX(220%)  skewX(-12deg); }
        }

        /* Filter tabs */
        .trend-tab {
          padding: 8px 20px; border-radius: 50px; font-size: 13px;
          font-weight: 700; cursor: pointer; border: 1.5px solid #e5e7eb;
          background: #fff; color: #555;
          transition: all 0.22s ease;
          white-space: nowrap;
        }
        .trend-tab:hover  { border-color: #111; color: #111; }
        .trend-tab.active { background: #111; color: #fff; border-color: #111; }

        /* Card */
        .trend-card {
          background: #fff;
          border-radius: 24px;
          overflow: hidden;
          border: 1.5px solid #f0f0f0;
          cursor: pointer;
          position: relative;
          opacity: 0;
          transition: transform 0.38s cubic-bezier(.22,.68,0,1.2),
                      box-shadow 0.38s ease, border-color 0.3s;
        }
        .trend-card.in {
          animation: cardEntrance 0.5s cubic-bezier(.22,.68,0,1.2) forwards;
        }
        .trend-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 32px 64px rgba(0,0,0,0.1);
          border-color: #e5e7eb;
        }

        /* Image zoom */
        .trend-img {
          width: 100%; height: 210px; object-fit: cover; display: block;
          transition: transform 0.5s ease;
        }
        .trend-card:hover .trend-img { transform: scale(1.07); }

        /* Shimmer on hover */
        .trend-shimmer {
          position: absolute; inset: 0; pointer-events: none; z-index: 2;
          background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.38) 50%, transparent 60%);
          transform: translateX(-100%) skewX(-12deg);
        }
        .trend-card:hover .trend-shimmer { animation: shimmerSweep 0.7s ease forwards; }

        /* Action tray — slides up on hover */
        .action-tray {
          position: absolute; bottom: 0; left: 0; right: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.5) 60%, transparent 100%);
          padding: 28px 14px 14px;
          transform: translateY(100%);
          transition: transform 0.32s cubic-bezier(.22,.68,0,1.2);
          z-index: 3;
          display: flex; gap: 8px;
        }
        .trend-card:hover .action-tray { transform: translateY(0); }

        .tray-btn-main {
          flex: 1; background: #fff; color: #111; border: none;
          border-radius: 12px; padding: 10px 0; font-weight: 800;
          font-size: 12px; cursor: pointer; display: flex;
          align-items: center; justify-content: center; gap: 6px;
          transition: background 0.2s, transform 0.2s;
        }
        .tray-btn-main:hover { background: #c8f135; transform: scale(1.03); }

        .tray-btn-icon {
          width: 38px; height: 38px; border-radius: 10px;
          background: rgba(255,255,255,0.15); border: none;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; flex-shrink: 0;
          transition: background 0.2s, transform 0.2s;
          backdrop-filter: blur(6px);
        }
        .tray-btn-icon:hover { background: rgba(255,255,255,0.3); transform: scale(1.1); }

        /* Wish btn */
        .wish-v2 {
          position: absolute; top: 12px; right: 12px; z-index: 4;
          width: 34px; height: 34px; border-radius: 50%; border: none;
          background: rgba(255,255,255,0.92); backdrop-filter: blur(8px);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          transition: transform 0.2s;
        }
        .wish-v2:hover { transform: scale(1.12); }
        .wish-v2.on { animation: heartBeat 0.4s ease; }

        /* AI badge */
        .ai-badge {
          position: absolute; top: 12px; left: 12px; z-index: 4;
          display: inline-flex; align-items: center; gap: 4px;
          background: #111; color: #c8f135;
          font-size: 10px; font-weight: 800; padding: 4px 9px;
          border-radius: 50px; letter-spacing: 0.3px;
          animation: aiGlow 2s ease-in-out infinite;
        }

        /* Discount badge */
        .disc-v2 {
          position: absolute; top: 12px; left: 12px; z-index: 4;
          background: #ef4444; color: #fff;
          font-size: 11px; font-weight: 900; padding: 3px 9px;
          border-radius: 50px;
        }

        /* Seller chip */
        .seller-chip {
          display: inline-flex; align-items: center; gap: 4px;
          background: #f3f4f6; border-radius: 50px;
          padding: 3px 10px; font-size: 10px; font-weight: 700; color: #555;
        }
      `}</style>

      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* ── Header ── */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 36 }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#fdf4ff", border: "1px solid #e9d5ff", borderRadius: 50, padding: "5px 14px", marginBottom: 12 }}>
              <TrendingUp size={13} color="#9333ea" />
              <span style={{ fontSize: 12, fontWeight: 700, color: "#7e22ce", letterSpacing: 1, textTransform: "uppercase" }}>Hot Right Now</span>
            </div>
            <h2 style={{ fontSize: 48, fontWeight: 900, color: "#0f0f0f", letterSpacing: -2, lineHeight: 1 }}>
              Trending <span style={{ background: "linear-gradient(135deg,#8b5cf6,#ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Products</span>
            </h2>
          </div>
          <button
            style={{ display: "flex", alignItems: "center", gap: 8, background: "#0f0f0f", color: "#fff", border: "none", borderRadius: 50, padding: "13px 26px", fontWeight: 700, fontSize: 14, cursor: "pointer", transition: "all 0.22s", boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 28px rgba(0,0,0,0.2)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.15)"; }}>
            View All <ArrowRight size={15} />
          </button>
        </div>

        {/* ── Filter tabs ── */}
        <div style={{ display: "flex", gap: 10, marginBottom: 36, flexWrap: "wrap" }}>
          {filters.map(f => (
            <button key={f} className={`trend-tab ${active === f ? "active" : ""}`} onClick={() => setActive(f)}>{f}</button>
          ))}
        </div>

        {/* ── Grid ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 22 }}>
          {filtered.map((p, i) => (
            <div
              key={p.id}
              ref={el => refs.current[i] = el}
              data-i={i} data-key={p.id}
              className={`trend-card ${visible[p.id] ? "in" : ""}`}
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              {/* Image area */}
              <div style={{ position: "relative", overflow: "hidden", background: "#f3f4f6" }}>
                <img src={p.img} alt={p.name} className="trend-img" />
                <div className="trend-shimmer" />

                {/* Badges */}
                {p.ai
                  ? <span className="ai-badge"><Sparkles size={10} /> AI Pick</span>
                  : <span className="disc-v2">-{p.discount}%</span>
                }
                {p.ai && (
                  <span style={{ position: "absolute", top: 12, left: 72, zIndex: 4, background: "#ef4444", color: "#fff", fontSize: 11, fontWeight: 900, padding: "3px 9px", borderRadius: 50 }}>-{p.discount}%</span>
                )}

                {/* Wishlist */}
                <button
                  className={`wish-v2 ${wished[p.id] ? "on" : ""}`}
                  onClick={() => setWished(w => ({ ...w, [p.id]: !w[p.id] }))}>
                  <Heart size={14} fill={wished[p.id] ? "#ef4444" : "none"} color={wished[p.id] ? "#ef4444" : "#aaa"} />
                </button>

                {/* Hover action tray */}
                <div className="action-tray">
                  <button className="tray-btn-main"><ShoppingCart size={13} /> Add to Cart</button>
                  <button className="tray-btn-icon"><Eye size={15} color="#fff" /></button>
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: "16px 16px 18px" }}>

                {/* Seller */}
                <div style={{ marginBottom: 8 }}>
                  <span className="seller-chip">🏪 {p.seller}</span>
                </div>

                {/* Name + sub */}
                <p style={{ fontSize: 15, fontWeight: 800, color: "#0f0f0f", lineHeight: 1.3, marginBottom: 3 }}>{p.name}</p>
                <p style={{ fontSize: 11, color: "#9ca3af", marginBottom: 10 }}>{p.sub}</p>

                {/* Rating */}
                <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 12 }}>
                  <div style={{ display: "flex", gap: 2 }}>
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={11} fill={j < Math.floor(p.rating) ? "#facc15" : "#e5e7eb"} color={j < Math.floor(p.rating) ? "#facc15" : "#e5e7eb"} />
                    ))}
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#374151" }}>{p.rating}</span>
                  <span style={{ fontSize: 11, color: "#9ca3af" }}>({p.reviews.toLocaleString()})</span>
                </div>

                {/* Divider */}
                <div style={{ height: 1, background: "#f3f4f6", marginBottom: 12 }} />

                {/* Price row */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <span style={{ fontSize: 20, fontWeight: 900, color: "#0f0f0f" }}>₹{p.price.toLocaleString()}</span>
                    <span style={{ fontSize: 12, color: "#d1d5db", textDecoration: "line-through", marginLeft: 8 }}>₹{p.original.toLocaleString()}</span>
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 800, color: "#16a34a", background: "#f0fdf4", padding: "3px 9px", borderRadius: 50 }}>
                    {p.discount}% off
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
