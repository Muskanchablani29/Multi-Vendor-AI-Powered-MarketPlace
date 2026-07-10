import { ArrowUpRight } from "lucide-react";

const collections = [
  { title: "Summer Sale",        subtitle: "Up to 60% off",       emoji: "☀️", img: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop", accent: "#f97316", span: 2 },
  { title: "Gaming Zone",        subtitle: "Latest gear & deals",  emoji: "🎮", img: "https://images.unsplash.com/photo-1593118247619-e2d6f056869e?w=400&h=400&fit=crop", accent: "#8b5cf6", span: 1 },
  { title: "Work From Home",     subtitle: "Productivity essentials",emoji: "💻",img: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=400&fit=crop", accent: "#4f8ef7", span: 1 },
  { title: "Luxury Collection",  subtitle: "Premium picks",        emoji: "💎", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop", accent: "#f59e0b", span: 1 },
  { title: "Student Essentials", subtitle: "Budget-friendly",      emoji: "🎒", img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=400&fit=crop", accent: "#22c55e", span: 1 },
  { title: "Fitness Collection", subtitle: "Train harder",         emoji: "💪", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop", accent: "#ef4444", span: 2 },
];

export default function Homenine() {
  return (
    <section style={{ padding: "48px 20px", background: "#f8f9fa" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: "#fff", background: "#ef4444", display: "inline-block", padding: "4px 14px", borderRadius: 50, marginBottom: 10 }}>CURATED FOR YOU</p>
          <h2 style={{ fontSize: 36, fontWeight: 900, color: "#111", letterSpacing: -1 }}>Featured Collections</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridAutoRows: 220, gap: 16 }}>
          {collections.map((c, i) => (
            <div key={i} style={{ gridColumn: `span ${c.span}`, borderRadius: 24, overflow: "hidden", position: "relative", cursor: "pointer", transition: "transform 0.3s, box-shadow 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.02)"; e.currentTarget.style.boxShadow = "0 24px 60px rgba(0,0,0,0.2)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "none"; }}>
              <img src={c.img} alt={c.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 60%)" }} />
              <div style={{ position: "absolute", bottom: 20, left: 20, right: 20 }}>
                <span style={{ fontSize: 22 }}>{c.emoji}</span>
                <p style={{ fontSize: 18, fontWeight: 900, color: "#fff", marginTop: 4 }}>{c.title}</p>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.75)" }}>{c.subtitle}</p>
              </div>
              <button style={{ position: "absolute", top: 16, right: 16, background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "50%", width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#fff" }}>
                <ArrowUpRight size={16} />
              </button>
              <div style={{ position: "absolute", top: 16, left: 16, background: c.accent, borderRadius: 50, padding: "4px 12px", fontSize: 11, fontWeight: 800, color: "#fff" }}>
                Shop Now
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
