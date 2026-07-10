import { Tv, Shirt, Sparkles, Home, Sofa, BookOpen, Dumbbell, ShoppingBasket, Gamepad2, Gem, Car, PawPrint } from "lucide-react";

const cats = [
  { icon: Tv,              name: "Electronics",   img: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=200&h=120&fit=crop", color: "#4f8ef7" },
  { icon: Shirt,           name: "Fashion",       img: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=200&h=120&fit=crop", color: "#f97316" },
  { icon: Sparkles,        name: "Beauty",        img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&h=120&fit=crop", color: "#ec4899" },
  { icon: Home,            name: "Home",          img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&h=120&fit=crop", color: "#22c55e" },
  { icon: Sofa,            name: "Furniture",     img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&h=120&fit=crop", color: "#a855f7" },
  { icon: BookOpen,        name: "Books",         img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=200&h=120&fit=crop", color: "#06b6d4" },
  { icon: Dumbbell,        name: "Sports",        img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=200&h=120&fit=crop", color: "#ef4444" },
  { icon: ShoppingBasket,  name: "Groceries",     img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=200&h=120&fit=crop", color: "#84cc16" },
  { icon: Gamepad2,        name: "Gaming",        img: "https://images.unsplash.com/photo-1593118247619-e2d6f056869e?w=200&h=120&fit=crop", color: "#8b5cf6" },
  { icon: Gem,             name: "Jewelry",       img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=200&h=120&fit=crop", color: "#f59e0b" },
  { icon: Car,             name: "Automotive",    img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=200&h=120&fit=crop", color: "#64748b" },
  { icon: PawPrint,        name: "Pet Supplies",  img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=200&h=120&fit=crop", color: "#f97316" },
];

export default function Hometwo() {
  return (
    <section style={{ padding: "48px 20px", background: "#f8f9fa" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#c8f135", background: "#111", display: "inline-block", padding: "4px 14px", borderRadius: 50, marginBottom: 8 }}>EXPLORE</p>
            <h2 style={{ fontSize: 36, fontWeight: 900, color: "#111", letterSpacing: -1 }}>Shop by Category</h2>
          </div>
          <button style={{ background: "#111", color: "#c8f135", border: "none", borderRadius: 50, padding: "10px 24px", fontWeight: 700, cursor: "pointer", fontSize: 14 }}>View All</button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 16 }}>
          {cats.map((c, i) => {
            const Icon = c.icon;
            return (
              <div key={i} style={{ borderRadius: 20, overflow: "hidden", background: "#fff", cursor: "pointer", transition: "transform 0.25s, box-shadow 0.25s", boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.13)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.07)"; }}>
                <div style={{ position: "relative", height: 100 }}>
                  <img src={c.img} alt={c.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.45))" }} />
                  <div style={{ position: "absolute", top: 10, left: 10, background: c.color, borderRadius: 10, padding: "6px", display: "flex" }}>
                    <Icon size={16} color="#fff" />
                  </div>
                </div>
                <div style={{ padding: "10px 12px 12px" }}>
                  <p style={{ fontSize: 13, fontWeight: 800, color: "#111" }}>{c.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
