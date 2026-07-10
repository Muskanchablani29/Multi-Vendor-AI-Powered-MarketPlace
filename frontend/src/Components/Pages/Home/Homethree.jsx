import { useState, useEffect } from "react";
import { Star, ShoppingCart, Heart } from "lucide-react";

const deals = [
  { id: 1, name: "Sony WH-1000XM5 Headphones", price: 18999, original: 29999, discount: 37, rating: 4.8, reviews: 2341, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop" },
  { id: 2, name: "Nike Air Max 270 Sneakers",   price: 6499,  original: 9999,  discount: 35, rating: 4.6, reviews: 1892, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop" },
  { id: 3, name: "Apple Watch Series 9",        price: 34999, original: 44900, discount: 22, rating: 4.9, reviews: 3120, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop" },
  { id: 4, name: "Boat Airdopes 141 TWS",       price: 999,   original: 2999,  discount: 67, rating: 4.3, reviews: 8901, img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300&h=300&fit=crop" },
  { id: 5, name: "Puma Men's Sports T-Shirt",   price: 799,   original: 1499,  discount: 47, rating: 4.4, reviews: 654,  img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop" },
];

function pad(n) { return String(n).padStart(2, "0"); }

export default function Homethree() {
  const [time, setTime] = useState({ h: 3, m: 12, s: 45 });

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

  return (
    <section style={{ padding: "48px 20px", background: "#111" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <div>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#c8f135", marginBottom: 4 }}>⚡ LIMITED TIME</p>
              <h2 style={{ fontSize: 36, fontWeight: 900, color: "#fff", letterSpacing: -1 }}>Flash Deals</h2>
            </div>
            {/* Countdown */}
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              {[pad(time.h), pad(time.m), pad(time.s)].map((v, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ background: "#c8f135", borderRadius: 12, padding: "10px 16px", textAlign: "center", minWidth: 56 }}>
                    <p style={{ fontSize: 28, fontWeight: 900, color: "#111", lineHeight: 1 }}>{v}</p>
                    <p style={{ fontSize: 10, fontWeight: 700, color: "#555", marginTop: 2 }}>{["HRS","MIN","SEC"][i]}</p>
                  </div>
                  {i < 2 && <span style={{ color: "#c8f135", fontSize: 24, fontWeight: 900 }}>:</span>}
                </div>
              ))}
            </div>
          </div>
          <button style={{ background: "#c8f135", color: "#111", border: "none", borderRadius: 50, padding: "10px 24px", fontWeight: 700, cursor: "pointer", fontSize: 14 }}>View All Deals</button>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
          {deals.map(d => (
            <div key={d.id} style={{ background: "#1a1a1a", borderRadius: 20, overflow: "hidden", cursor: "pointer", transition: "transform 0.25s, box-shadow 0.25s" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 20px 48px rgba(200,241,53,0.15)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
              <div style={{ position: "relative" }}>
                <img src={d.img} alt={d.name} style={{ width: "100%", height: 180, objectFit: "cover" }} />
                <span style={{ position: "absolute", top: 12, left: 12, background: "#ef4444", color: "#fff", fontSize: 12, fontWeight: 800, padding: "4px 10px", borderRadius: 50 }}>-{d.discount}%</span>
                <button style={{ position: "absolute", top: 12, right: 12, background: "rgba(255,255,255,0.15)", border: "none", borderRadius: "50%", width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", backdropFilter: "blur(4px)" }}>
                  <Heart size={14} color="#fff" />
                </button>
              </div>
              <div style={{ padding: "14px 16px" }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: "#fff", marginBottom: 8, lineHeight: 1.4 }}>{d.name}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 10 }}>
                  <Star size={12} fill="#facc15" color="#facc15" />
                  <span style={{ fontSize: 12, color: "#facc15", fontWeight: 700 }}>{d.rating}</span>
                  <span style={{ fontSize: 11, color: "#666" }}>({d.reviews.toLocaleString()})</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                  <span style={{ fontSize: 18, fontWeight: 900, color: "#c8f135" }}>₹{d.price.toLocaleString()}</span>
                  <span style={{ fontSize: 12, color: "#555", textDecoration: "line-through" }}>₹{d.original.toLocaleString()}</span>
                </div>
                <button style={{ width: "100%", background: "#c8f135", border: "none", borderRadius: 10, padding: "9px 0", fontWeight: 800, fontSize: 13, color: "#111", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                  <ShoppingCart size={14} /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
