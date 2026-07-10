import { Star, ShoppingCart, Heart, Eye, Sparkles } from "lucide-react";

const products = [
  { id: 1, name: "MacBook Air M2",          price: 89999, original: 114900, discount: 22, rating: 4.9, reviews: 1203, seller: "AppleZone", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop", ai: true },
  { id: 2, name: "Samsung Galaxy S24 Ultra",price: 109999,original: 134999, discount: 19, rating: 4.8, reviews: 987,  seller: "SamsungHub", img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=300&fit=crop", ai: false },
  { id: 3, name: "Sony PlayStation 5",      price: 49990, original: 54990,  discount: 9,  rating: 4.9, reviews: 4521, seller: "GameWorld",  img: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=400&h=300&fit=crop", ai: true },
  { id: 4, name: "Dyson V15 Vacuum",        price: 44900, original: 59900,  discount: 25, rating: 4.7, reviews: 342,  seller: "HomeElite",  img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop", ai: false },
  { id: 5, name: "Levi's 511 Slim Jeans",   price: 2499,  original: 3999,   discount: 38, rating: 4.5, reviews: 2109, seller: "FashionHub", img: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=300&fit=crop", ai: false },
  { id: 6, name: "Nikon Z50 Mirrorless",    price: 69990, original: 84990,  discount: 18, rating: 4.8, reviews: 567,  seller: "CameraZone", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop", ai: true },
  { id: 7, name: "Philips Air Fryer XXL",   price: 8999,  original: 13999,  discount: 36, rating: 4.6, reviews: 3421, seller: "KitchenPro", img: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=400&h=300&fit=crop", ai: false },
  { id: 8, name: "Adidas Ultraboost 23",    price: 12999, original: 17999,  discount: 28, rating: 4.7, reviews: 1876, seller: "SportZone",  img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=300&fit=crop", ai: true },
];

export default function Homefour() {
  return (
    <section style={{ padding: "48px 20px", background: "#f8f9fa" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#fff", background: "#8b5cf6", display: "inline-block", padding: "4px 14px", borderRadius: 50, marginBottom: 8 }}>🔥 HOT RIGHT NOW</p>
            <h2 style={{ fontSize: 36, fontWeight: 900, color: "#111", letterSpacing: -1 }}>Trending Products</h2>
          </div>
          <button style={{ background: "#111", color: "#fff", border: "none", borderRadius: 50, padding: "10px 24px", fontWeight: 700, cursor: "pointer", fontSize: 14 }}>View All</button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {products.map(p => (
            <div key={p.id} style={{ background: "#fff", borderRadius: 20, overflow: "hidden", cursor: "pointer", transition: "transform 0.25s, box-shadow 0.25s", boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 20px 48px rgba(0,0,0,0.12)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.07)"; }}>
              <div style={{ position: "relative" }}>
                <img src={p.img} alt={p.name} style={{ width: "100%", height: 200, objectFit: "cover" }} />
                <span style={{ position: "absolute", top: 12, left: 12, background: "#ef4444", color: "#fff", fontSize: 11, fontWeight: 800, padding: "3px 9px", borderRadius: 50 }}>-{p.discount}%</span>
                {p.ai && (
                  <span style={{ position: "absolute", top: 12, right: 48, background: "#111", color: "#c8f135", fontSize: 10, fontWeight: 800, padding: "3px 8px", borderRadius: 50, display: "flex", alignItems: "center", gap: 3 }}>
                    <Sparkles size={10} /> AI Pick
                  </span>
                )}
                <button style={{ position: "absolute", top: 12, right: 12, background: "#fff", border: "none", borderRadius: "50%", width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
                  <Heart size={14} color="#e11d48" />
                </button>
              </div>
              <div style={{ padding: "14px 16px" }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: "#111", marginBottom: 6, lineHeight: 1.4 }}>{p.name}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 6 }}>
                  <Star size={12} fill="#facc15" color="#facc15" />
                  <span style={{ fontSize: 12, color: "#555", fontWeight: 600 }}>{p.rating} ({p.reviews.toLocaleString()})</span>
                </div>
                <p style={{ fontSize: 11, color: "#888", marginBottom: 10 }}>by {p.seller}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                  <span style={{ fontSize: 17, fontWeight: 900, color: "#111" }}>₹{p.price.toLocaleString()}</span>
                  <span style={{ fontSize: 12, color: "#aaa", textDecoration: "line-through" }}>₹{p.original.toLocaleString()}</span>
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <button style={{ flex: 1, background: "#111", border: "none", borderRadius: 10, padding: "8px 0", fontWeight: 700, fontSize: 12, color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}>
                    <ShoppingCart size={13} /> Add Cart
                  </button>
                  <button style={{ background: "#f3f4f6", border: "none", borderRadius: 10, width: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                    <Eye size={14} color="#555" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
