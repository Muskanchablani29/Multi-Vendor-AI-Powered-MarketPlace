import { Star, Users, Package, ArrowUpRight } from "lucide-react";

const sellers = [
  { name: "TechZone Store",   rating: 4.9, followers: "12.4K", products: 342, logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=80&h=80&fit=crop", banner: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=120&fit=crop" },
  { name: "FashionHub",       rating: 4.7, followers: "8.2K",  products: 891, logo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=80&h=80&fit=crop", banner: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=120&fit=crop" },
  { name: "GameWorld",        rating: 4.8, followers: "21K",   products: 156, logo: "https://images.unsplash.com/photo-1593118247619-e2d6f056869e?w=80&h=80&fit=crop", banner: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=400&h=120&fit=crop" },
  { name: "BeautyBliss",      rating: 4.6, followers: "5.9K",  products: 423, logo: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=80&h=80&fit=crop", banner: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=120&fit=crop" },
  { name: "HomeElite",        rating: 4.5, followers: "3.1K",  products: 267, logo: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=80&h=80&fit=crop", banner: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=400&h=120&fit=crop" },
  { name: "SportZone",        rating: 4.8, followers: "9.7K",  products: 534, logo: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=80&h=80&fit=crop", banner: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=120&fit=crop" },
];

export default function Homefive() {
  return (
    <section style={{ padding: "48px 20px", background: "#fff" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#fff", background: "#f97316", display: "inline-block", padding: "4px 14px", borderRadius: 50, marginBottom: 8 }}>⭐ TOP RATED</p>
            <h2 style={{ fontSize: 36, fontWeight: 900, color: "#111", letterSpacing: -1 }}>Featured Sellers</h2>
          </div>
          <button style={{ background: "#111", color: "#fff", border: "none", borderRadius: 50, padding: "10px 24px", fontWeight: 700, cursor: "pointer", fontSize: 14 }}>All Sellers</button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {sellers.map((s, i) => (
            <div key={i} style={{ borderRadius: 20, overflow: "hidden", background: "#f8f9fa", cursor: "pointer", transition: "transform 0.25s, box-shadow 0.25s", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)"; }}>
              <div style={{ position: "relative", height: 100 }}>
                <img src={s.banner} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.3)" }} />
              </div>
              <div style={{ padding: "0 20px 20px", position: "relative" }}>
                <img src={s.logo} alt={s.name} style={{ width: 56, height: 56, borderRadius: 14, objectFit: "cover", border: "3px solid #fff", marginTop: -28, display: "block", boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }} />
                <div style={{ marginTop: 10 }}>
                  <p style={{ fontSize: 16, fontWeight: 800, color: "#111" }}>{s.name}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 4 }}>
                    <Star size={13} fill="#facc15" color="#facc15" />
                    <span style={{ fontSize: 13, fontWeight: 700, color: "#111" }}>{s.rating}</span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 20, margin: "14px 0" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <Users size={14} color="#888" />
                    <span style={{ fontSize: 12, color: "#555", fontWeight: 600 }}>{s.followers} Followers</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <Package size={14} color="#888" />
                    <span style={{ fontSize: 12, color: "#555", fontWeight: 600 }}>{s.products} Products</span>
                  </div>
                </div>
                <button style={{ width: "100%", background: "#111", color: "#fff", border: "none", borderRadius: 12, padding: "10px 0", fontWeight: 700, fontSize: 13, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                  Visit Store <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
