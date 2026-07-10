import { Lock, ShoppingBag, Heart, Search, Sparkles } from "lucide-react";

const mockProducts = [
  { id: 1, name: "Dell XPS 15 Laptop",       price: 129999, img: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=300&h=200&fit=crop", tag: "Based on Searches" },
  { id: 2, name: "Nike Air Force 1",          price: 7495,   img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=200&fit=crop", tag: "From Wishlist" },
  { id: 3, name: "Kindle Paperwhite",         price: 13999,  img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=200&fit=crop", tag: "Purchase History" },
  { id: 4, name: "Boat Rockerz 450 Headset",  price: 1499,   img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop", tag: "Based on Searches" },
];

const isLoggedIn = false; // toggle to true to preview logged-in state

export default function Homeseven() {
  return (
    <section style={{ padding: "48px 20px", background: "#f0fdf4" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#111", borderRadius: 50, padding: "4px 14px", marginBottom: 8 }}>
              <Sparkles size={12} color="#c8f135" />
              <span style={{ fontSize: 13, fontWeight: 700, color: "#c8f135" }}>AI POWERED</span>
            </div>
            <h2 style={{ fontSize: 36, fontWeight: 900, color: "#111", letterSpacing: -1 }}>Recommended For You</h2>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            {[{ icon: ShoppingBag, label: "Purchase History" }, { icon: Heart, label: "Wishlist" }, { icon: Search, label: "Searches" }].map(({ icon: Icon, label }, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, background: "#fff", borderRadius: 50, padding: "6px 14px", fontSize: 12, fontWeight: 600, color: "#555", boxShadow: "0 1px 6px rgba(0,0,0,0.07)" }}>
                <Icon size={13} color="#22c55e" /> {label}
              </div>
            ))}
          </div>
        </div>

        {!isLoggedIn ? (
          /* Locked state */
          <div style={{ background: "#fff", borderRadius: 24, padding: "64px 40px", textAlign: "center", boxShadow: "0 2px 20px rgba(0,0,0,0.06)", position: "relative", overflow: "hidden" }}>
            {/* Blurred preview */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, filter: "blur(6px)", opacity: 0.4, pointerEvents: "none", marginBottom: -120 }}>
              {mockProducts.map(p => (
                <div key={p.id} style={{ background: "#f8f9fa", borderRadius: 16, overflow: "hidden" }}>
                  <img src={p.img} alt="" style={{ width: "100%", height: 140, objectFit: "cover" }} />
                  <div style={{ padding: 12 }}><p style={{ fontWeight: 700, fontSize: 13 }}>{p.name}</p></div>
                </div>
              ))}
            </div>
            {/* Overlay */}
            <div style={{ position: "relative", zIndex: 2, background: "rgba(255,255,255,0.92)", backdropFilter: "blur(4px)", borderRadius: 20, padding: "40px 32px", maxWidth: 400, margin: "0 auto" }}>
              <div style={{ width: 64, height: 64, background: "#f0fdf4", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                <Lock size={28} color="#22c55e" />
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 900, color: "#111", marginBottom: 8 }}>Login to See Your Picks</h3>
              <p style={{ fontSize: 14, color: "#666", lineHeight: 1.6, marginBottom: 24 }}>Get AI-powered recommendations based on your purchase history, wishlist, and searches.</p>
              <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
                <button style={{ background: "#111", color: "#fff", border: "none", borderRadius: 50, padding: "12px 28px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>Login</button>
                <button style={{ background: "transparent", color: "#111", border: "2px solid #111", borderRadius: 50, padding: "12px 28px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>Sign Up</button>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {mockProducts.map(p => (
              <div key={p.id} style={{ background: "#fff", borderRadius: 20, overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}>
                <img src={p.img} alt={p.name} style={{ width: "100%", height: 160, objectFit: "cover" }} />
                <div style={{ padding: 14 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, color: "#22c55e", background: "#f0fdf4", padding: "2px 8px", borderRadius: 50 }}>{p.tag}</span>
                  <p style={{ fontSize: 13, fontWeight: 700, color: "#111", marginTop: 8 }}>{p.name}</p>
                  <p style={{ fontSize: 16, fontWeight: 900, color: "#111", marginTop: 6 }}>₹{p.price.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
