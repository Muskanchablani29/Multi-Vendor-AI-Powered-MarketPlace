import { useState, useEffect, useRef } from "react";
import { Star, ShoppingCart, Heart, Zap, ArrowRight } from "lucide-react";

const deals = [
  { id: 1, name: "Sony WH-1000XM5",     sub: "Noise Cancelling Headphones", price: 18999, original: 29999, discount: 37, rating: 4.8, reviews: 2341, sold: 68, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop", tag: "Best Seller", accent: "#f59e0b" },
  { id: 2, name: "Nike Air Max 270",     sub: "Men's Running Sneakers",      price: 6499,  original: 9999,  discount: 35, rating: 4.6, reviews: 1892, sold: 54, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop", tag: "Trending",   accent: "#8b5cf6" },
  { id: 3, name: "Apple Watch Series 9", sub: "GPS + Cellular, 45mm",        price: 34999, original: 44900, discount: 22, rating: 4.9, reviews: 3120, sold: 82, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop", tag: "Hot 🔥",     accent: "#ef4444" },
  { id: 4, name: "boAt Airdopes 141",    sub: "True Wireless Earbuds",       price: 999,   original: 2999,  discount: 67, rating: 4.3, reviews: 8901, sold: 91, img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop", tag: "Flash Deal", accent: "#22c55e" },
  { id: 5, name: "Puma Sports T-Shirt",  sub: "Men's Dry-Fit Collection",    price: 799,   original: 1499,  discount: 47, rating: 4.4, reviews: 654,  sold: 43, img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop", tag: "New",        accent: "#4f8ef7" },
];

const tagColors = {
  "Best Seller": { bg: "#fef3c7", color: "#92400e" },
  "Trending":    { bg: "#ede9fe", color: "#5b21b6" },
  "Hot 🔥":      { bg: "#fee2e2", color: "#991b1b" },
  "Flash Deal":  { bg: "#dcfce7", color: "#166534" },
  "New":         { bg: "#dbeafe", color: "#1e40af" },
};

function pad(n) { return String(n).padStart(2, "0"); }

/* Animated flip digit */
function FlipDigit({ value, label }) {
  const [prev, setPrev] = useState(value);
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    if (value !== prev) {
      setFlip(true);
      const t = setTimeout(() => { setPrev(value); setFlip(false); }, 300);
      return () => clearTimeout(t);
    }
  }, [value, prev]);

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ position: "relative", width: 64, height: 68, perspective: 300 }}>
        {/* back face */}
        <div style={{
          position: "absolute", inset: 0, background: "#1a1a1a", borderRadius: 14,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 30, fontWeight: 900, color: "#c8f135",
          boxShadow: "inset 0 -3px 0 rgba(0,0,0,0.4)",
        }}>{value}</div>
        {/* front face — flips away */}
        <div style={{
          position: "absolute", inset: 0, background: "#111", borderRadius: 14,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 30, fontWeight: 900, color: "#fff",
          transformOrigin: "bottom",
          transform: flip ? "rotateX(-90deg)" : "rotateX(0deg)",
          transition: flip ? "transform 0.3s ease-in" : "none",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          zIndex: 1,
        }}>{prev}</div>
        {/* divider line */}
        <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: 1, background: "rgba(0,0,0,0.25)", zIndex: 2, pointerEvents: "none" }} />
      </div>
      <p style={{ fontSize: 9, fontWeight: 800, color: "#999", marginTop: 6, letterSpacing: 2, textTransform: "uppercase" }}>{label}</p>
    </div>
  );
}

export default function Homethree() {
  const [time, setTime]   = useState({ h: 3, m: 12, s: 45 });
  const [wished, setWished] = useState({});
  const [visible, setVisible] = useState({});
  const cardRefs = useRef([]);

  useEffect(() => {
    const id = setInterval(() => {
      setTime(t => {
        let { h, m, s } = t;
        s--; if (s < 0) { s = 59; m--; } if (m < 0) { m = 59; h--; } if (h < 0) { h = 23; m = 59; s = 59; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  /* Intersection observer — staggered card entrance */
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const idx = Number(e.target.dataset.idx);
          setTimeout(() => setVisible(v => ({ ...v, [idx]: true })), idx * 120);
        }
      });
    }, { threshold: 0.15 });
    cardRefs.current.forEach(r => r && obs.observe(r));
    return () => obs.disconnect();
  }, []);

  return (
    <section style={{ padding: "80px 40px", background: "#fff", position: "relative", overflow: "hidden" }}>
      <style>{`
        /* ── Keyframes ── */
        @keyframes bgShift {
          0%,100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }
        @keyframes floatUp {
          0%   { transform: translateY(0)   scale(1);   opacity: 0.6; }
          100% { transform: translateY(-120px) scale(0); opacity: 0; }
        }
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(40px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
        }
        @keyframes shimmer {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes pulseBadge {
          0%,100% { box-shadow: 0 0 0 0 rgba(239,68,68,0.5); }
          50%     { box-shadow: 0 0 0 8px rgba(239,68,68,0); }
        }
        @keyframes progressFill {
          from { width: 0%; }
        }
        @keyframes zapPulse {
          0%,100% { transform: scale(1) rotate(0deg); }
          25%     { transform: scale(1.3) rotate(-10deg); }
          75%     { transform: scale(1.1) rotate(8deg); }
        }
        @keyframes glowPulse {
          0%,100% { opacity: 0.5; transform: scale(1); }
          50%     { opacity: 1;   transform: scale(1.08); }
        }
        @keyframes heartPop {
          0%   { transform: scale(1); }
          40%  { transform: scale(1.5); }
          70%  { transform: scale(0.85); }
          100% { transform: scale(1); }
        }

        /* ── Particles ── */
        .particle {
          position: absolute; border-radius: 50%;
          animation: floatUp linear infinite;
          pointer-events: none;
        }

        /* ── Section glow blobs ── */
        .glow-blob {
          position: absolute; border-radius: 50%;
          filter: blur(80px); pointer-events: none;
          animation: glowPulse 4s ease-in-out infinite;
        }

        /* ── Card ── */
        .deal-card-v3 {
          background: #fff;
          border-radius: 24px;
          overflow: hidden;
          border: 1.5px solid #f0f0f0;
          cursor: pointer;
          position: relative;
          opacity: 0;
          transition: transform 0.4s cubic-bezier(.22,.68,0,1.2),
                      box-shadow 0.4s ease, border-color 0.3s;
        }
        .deal-card-v3.visible {
          animation: cardIn 0.55s cubic-bezier(.22,.68,0,1.2) forwards;
        }
        .deal-card-v3:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 36px 72px rgba(0,0,0,0.12);
          border-color: transparent;
        }
        .deal-card-v3:hover .deal-img-v3 { transform: scale(1.08); }
        .deal-card-v3:hover .shimmer-layer { animation: shimmer 1.2s ease forwards; }
        .deal-card-v3:hover .card-accent-bar { opacity: 1; }

        /* accent bar at top */
        .card-accent-bar {
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          opacity: 0; transition: opacity 0.3s; z-index: 5;
        }

        .deal-img-v3 {
          width: 100%; height: 200px; object-fit: cover;
          transition: transform 0.55s ease; display: block;
        }

        /* shimmer sweep */
        .shimmer-layer {
          position: absolute; inset: 0;
          background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.45) 50%, transparent 60%);
          transform: translateX(-100%);
          pointer-events: none; z-index: 2;
        }

        /* discount badge pulse */
        .disc-badge {
          position: absolute; top: 14px; left: 14px;
          background: #ef4444; color: #fff;
          font-size: 12px; font-weight: 900;
          padding: 4px 10px; border-radius: 50px;
          animation: pulseBadge 2s ease-in-out infinite;
          z-index: 3;
        }

        /* wishlist */
        .wish-btn-v3 {
          position: absolute; top: 14px; right: 14px;
          width: 36px; height: 36px; border-radius: 50%;
          border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(8px);
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          transition: transform 0.2s; z-index: 3;
        }
        .wish-btn-v3:hover { transform: scale(1.15); }
        .wish-btn-v3.wished { animation: heartPop 0.4s ease; }

        /* progress */
        .prog-bg { height: 6px; background: #f3f4f6; border-radius: 99px; overflow: hidden; }
        .prog-fill {
          height: 100%; border-radius: 99px;
          animation: progressFill 1.2s cubic-bezier(.22,.68,0,1.2) forwards;
        }

        /* cart btn */
        .cart-btn-v3 {
          width: 100%; border: none; border-radius: 14px;
          padding: 12px 0; font-weight: 800; font-size: 13px;
          cursor: pointer; display: flex; align-items: center;
          justify-content: center; gap: 7px;
          background: #0f0f0f; color: #fff;
          transition: all 0.25s ease;
          position: relative; overflow: hidden;
        }
        .cart-btn-v3::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
          transform: translateX(-100%);
          transition: transform 0.4s ease;
        }
        .cart-btn-v3:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.2); }
        .cart-btn-v3:hover::after { transform: translateX(100%); }
        .cart-btn-v3:active { transform: scale(0.97); }
      `}</style>

      {/* ── Glow blobs ── */}
      <div className="glow-blob" style={{ width: 400, height: 400, background: "rgba(200,241,53,0.07)", top: -100, left: -100, animationDelay: "0s" }} />
      <div className="glow-blob" style={{ width: 300, height: 300, background: "rgba(239,68,68,0.06)", top: 0, right: -80, animationDelay: "2s" }} />
      <div className="glow-blob" style={{ width: 250, height: 250, background: "rgba(79,142,247,0.05)", bottom: 0, left: "40%", animationDelay: "1s" }} />

      {/* ── Floating particles ── */}
      {[
        { w: 6,  l: "8%",  d: "3.2s", delay: "0s",    color: "#c8f135" },
        { w: 4,  l: "20%", d: "4.1s", delay: "1.2s",  color: "#ef4444" },
        { w: 8,  l: "35%", d: "3.7s", delay: "0.5s",  color: "#4f8ef7" },
        { w: 5,  l: "55%", d: "4.5s", delay: "2s",    color: "#f59e0b" },
        { w: 7,  l: "70%", d: "3.9s", delay: "0.8s",  color: "#8b5cf6" },
        { w: 4,  l: "85%", d: "4.2s", delay: "1.6s",  color: "#22c55e" },
        { w: 6,  l: "92%", d: "3.5s", delay: "0.3s",  color: "#ec4899" },
      ].map((p, i) => (
        <div key={i} className="particle" style={{
          width: p.w, height: p.w, background: p.color,
          bottom: "10%", left: p.l,
          animationDuration: p.d, animationDelay: p.delay,
          opacity: 0.5,
        }} />
      ))}

      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* ── Header ── */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 52 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 36 }}>

            {/* Title */}
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "#fff7ed", border: "1px solid #fed7aa", borderRadius: 50, padding: "5px 14px", marginBottom: 10 }}>
                <Zap size={13} color="#f97316" fill="#f97316" style={{ animation: "zapPulse 1.5s ease-in-out infinite" }} />
                <span style={{ fontSize: 12, fontWeight: 700, color: "#ea580c", letterSpacing: 1.2, textTransform: "uppercase" }}>Limited Time</span>
              </div>
              <h2 style={{ fontSize: 48, fontWeight: 900, color: "#0f0f0f", letterSpacing: -2, lineHeight: 1 }}>
                Flash <span style={{ background: "linear-gradient(135deg,#ef4444,#f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Deals</span>
              </h2>
            </div>

            {/* Flip countdown */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: 8, background: "#f8f9fa", borderRadius: 22, padding: "16px 22px", border: "1.5px solid #f0f0f0" }}>
              <FlipDigit value={pad(time.h)} label="Hours" />
              <span style={{ fontSize: 28, fontWeight: 900, color: "#ddd", paddingTop: 14, lineHeight: 1 }}>:</span>
              <FlipDigit value={pad(time.m)} label="Mins" />
              <span style={{ fontSize: 28, fontWeight: 900, color: "#ddd", paddingTop: 14, lineHeight: 1 }}>:</span>
              <FlipDigit value={pad(time.s)} label="Secs" />
            </div>
          </div>

          <button
            style={{ display: "flex", alignItems: "center", gap: 8, background: "#fff", color: "#0f0f0f", border: "1.5px solid #e5e7eb", borderRadius: 50, padding: "13px 26px", fontWeight: 700, cursor: "pointer", fontSize: 14, transition: "all 0.25s", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
            onMouseEnter={e => { e.currentTarget.style.background = "#0f0f0f"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "#0f0f0f"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#0f0f0f"; e.currentTarget.style.borderColor = "#e5e7eb"; e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.06)"; }}>
            View All Deals <ArrowRight size={15} />
          </button>
        </div>

        {/* ── Cards ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 20 }}>
          {deals.map((d, idx) => {
            const tc = tagColors[d.tag];
            return (
              <div
                key={d.id}
                ref={el => cardRefs.current[idx] = el}
                data-idx={idx}
                className={`deal-card-v3 ${visible[idx] ? "visible" : ""}`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Accent bar */}
                <div className="card-accent-bar" style={{ background: `linear-gradient(90deg, ${d.accent}, ${d.accent}88)` }} />

                {/* Image */}
                <div style={{ overflow: "hidden", position: "relative", background: "#f8f9fa" }}>
                  <img src={d.img} alt={d.name} className="deal-img-v3" />
                  <div className="shimmer-layer" />

                  <div className="disc-badge">-{d.discount}%</div>

                  <button
                    className={`wish-btn-v3 ${wished[d.id] ? "wished" : ""}`}
                    onClick={() => setWished(w => ({ ...w, [d.id]: !w[d.id] }))}>
                    <Heart size={15} fill={wished[d.id] ? "#ef4444" : "none"} color={wished[d.id] ? "#ef4444" : "#aaa"} />
                  </button>
                </div>

                {/* Body */}
                <div style={{ padding: "16px 16px 18px" }}>
                  <span style={{ fontSize: 10, fontWeight: 700, background: tc.bg, color: tc.color, padding: "3px 9px", borderRadius: 50, letterSpacing: 0.5 }}>{d.tag}</span>

                  <p style={{ fontSize: 14, fontWeight: 800, color: "#0f0f0f", margin: "8px 0 2px", lineHeight: 1.3 }}>{d.name}</p>
                  <p style={{ fontSize: 11, color: "#9ca3af", marginBottom: 10 }}>{d.sub}</p>

                  <div style={{ display: "flex", alignItems: "center", gap: 3, marginBottom: 12 }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={11} fill={i < Math.floor(d.rating) ? "#facc15" : "#e5e7eb"} color={i < Math.floor(d.rating) ? "#facc15" : "#e5e7eb"} />
                    ))}
                    <span style={{ fontSize: 11, color: "#6b7280", marginLeft: 3 }}>{d.rating} ({d.reviews.toLocaleString()})</span>
                  </div>

                  <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 14 }}>
                    <span style={{ fontSize: 21, fontWeight: 900, color: "#0f0f0f" }}>₹{d.price.toLocaleString()}</span>
                    <span style={{ fontSize: 12, color: "#d1d5db", textDecoration: "line-through" }}>₹{d.original.toLocaleString()}</span>
                    <span style={{ fontSize: 11, fontWeight: 700, color: "#16a34a" }}>Save ₹{(d.original - d.price).toLocaleString()}</span>
                  </div>

                  {/* Animated progress bar */}
                  <div style={{ marginBottom: 16 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                      <span style={{ fontSize: 11, color: "#9ca3af" }}>Sold: {d.sold}%</span>
                      <span style={{ fontSize: 11, fontWeight: 700, color: d.sold > 80 ? "#ef4444" : "#6b7280" }}>
                        {d.sold > 80 ? "⚠ Almost gone!" : `${100 - d.sold}% left`}
                      </span>
                    </div>
                    <div className="prog-bg">
                      <div className="prog-fill" style={{
                        width: visible[idx] ? `${d.sold}%` : "0%",
                        background: d.sold > 80
                          ? "linear-gradient(90deg,#ef4444,#f97316)"
                          : `linear-gradient(90deg,${d.accent}99,${d.accent})`,
                        transition: visible[idx] ? `width 1.2s cubic-bezier(.22,.68,0,1.2) ${idx * 0.12}s` : "none",
                      }} />
                    </div>
                  </div>

                  <button className="cart-btn-v3">
                    <ShoppingCart size={14} /> Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
