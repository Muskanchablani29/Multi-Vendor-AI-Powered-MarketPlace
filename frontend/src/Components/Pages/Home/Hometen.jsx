import { useState } from "react";
import { Star, ShoppingCart, TrendingUp, Award, Eye } from "lucide-react";

const tabs = [
  { label: "Top Purchased", icon: ShoppingCart },
  { label: "Most Rated",    icon: Award },
  { label: "Most Viewed",   icon: Eye },
];

const data = {
  "Top Purchased": [
    { id: 1, name: "iPhone 15 Pro Max",      price: 134900, rating: 4.9, sold: "12.4K sold",  img: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop" },
    { id: 2, name: "Samsung 65\" QLED TV",   price: 89990,  rating: 4.7, sold: "8.1K sold",   img: "https://images.unsplash.com/photo-1593359677879-a4bb92f4834c?w=300&h=300&fit=crop" },
    { id: 3, name: "Instant Pot Duo 7-in-1", price: 7999,   rating: 4.8, sold: "21K sold",    img: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=300&h=300&fit=crop" },
    { id: 4, name: "Levi's 501 Original",    price: 3499,   rating: 4.5, sold: "34K sold",    img: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=300&fit=crop" },
    { id: 5, name: "Dyson Airwrap",          price: 44900,  rating: 4.8, sold: "5.6K sold",   img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&h=300&fit=crop" },
  ],
  "Most Rated": [
    { id: 1, name: "Sony A7 IV Camera",      price: 229990, rating: 5.0, sold: "4.9★ (2.1K)", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&h=300&fit=crop" },
    { id: 2, name: "Bose QC45 Headphones",   price: 24900,  rating: 4.9, sold: "4.9★ (8.4K)", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop" },
    { id: 3, name: "Apple AirPods Pro 2",    price: 24900,  rating: 4.9, sold: "4.9★ (15K)",  img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300&h=300&fit=crop" },
    { id: 4, name: "Kindle Scribe",          price: 29999,  rating: 4.8, sold: "4.8★ (3.2K)", img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=300&fit=crop" },
    { id: 5, name: "Vitamix Blender",        price: 34999,  rating: 4.9, sold: "4.9★ (1.8K)", img: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=300&h=300&fit=crop" },
  ],
  "Most Viewed": [
    { id: 1, name: "PS5 Slim Console",       price: 44990,  rating: 4.9, sold: "2.1M views",  img: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=300&h=300&fit=crop" },
    { id: 2, name: "MacBook Pro M3",         price: 199900, rating: 4.8, sold: "1.8M views",  img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=300&fit=crop" },
    { id: 3, name: "Nike Dunk Low Retro",    price: 8495,   rating: 4.7, sold: "1.4M views",  img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop" },
    { id: 4, name: "GoPro Hero 12 Black",    price: 39990,  rating: 4.7, sold: "980K views",  img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300&h=300&fit=crop" },
    { id: 5, name: "Rolex Submariner",       price: 899000, rating: 4.9, sold: "870K views",  img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop" },
  ],
};

export default function Hometen() {
  const [active, setActive] = useState("Top Purchased");
  const products = data[active];

  return (
    <section style={{ padding: "48px 20px", background: "#fff" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#111", borderRadius: 50, padding: "4px 14px", marginBottom: 8 }}>
              <TrendingUp size={12} color="#c8f135" />
              <span style={{ fontSize: 13, fontWeight: 700, color: "#c8f135" }}>BESTSELLERS</span>
            </div>
            <h2 style={{ fontSize: 36, fontWeight: 900, color: "#111", letterSpacing: -1 }}>Best Selling Products</h2>
          </div>
          {/* Tabs */}
          <div style={{ display: "flex", background: "#f3f4f6", borderRadius: 50, padding: 4, gap: 4 }}>
            {tabs.map(({ label, icon: Icon }) => (
              <button key={label} onClick={() => setActive(label)} style={{ display: "flex", alignItems: "center", gap: 6, background: active === label ? "#111" : "transparent", color: active === label ? "#fff" : "#555", border: "none", borderRadius: 50, padding: "8px 18px", fontWeight: 700, fontSize: 13, cursor: "pointer", transition: "all 0.2s" }}>
                <Icon size={13} /> {label}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 20 }}>
          {products.map((p, i) => (
            <div key={p.id} style={{ background: "#f8f9fa", borderRadius: 20, overflow: "hidden", cursor: "pointer", transition: "transform 0.25s, box-shadow 0.25s" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
              <div style={{ position: "relative" }}>
                <img src={p.img} alt={p.name} style={{ width: "100%", height: 180, objectFit: "cover" }} />
                <span style={{ position: "absolute", top: 12, left: 12, background: "#111", color: "#c8f135", fontSize: 11, fontWeight: 900, padding: "4px 10px", borderRadius: 50 }}>#{i + 1}</span>
              </div>
              <div style={{ padding: "14px 16px" }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: "#111", marginBottom: 6, lineHeight: 1.4 }}>{p.name}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 6 }}>
                  <Star size={12} fill="#facc15" color="#facc15" />
                  <span style={{ fontSize: 12, color: "#555", fontWeight: 600 }}>{p.rating}</span>
                  <span style={{ fontSize: 11, color: "#aaa" }}>· {p.sold}</span>
                </div>
                <p style={{ fontSize: 16, fontWeight: 900, color: "#111", marginBottom: 12 }}>₹{p.price.toLocaleString()}</p>
                <button style={{ width: "100%", background: "#111", border: "none", borderRadius: 10, padding: "9px 0", fontWeight: 700, fontSize: 12, color: "#fff", cursor: "pointer" }}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
