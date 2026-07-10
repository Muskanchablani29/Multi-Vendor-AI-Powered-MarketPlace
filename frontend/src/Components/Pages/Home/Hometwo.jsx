import { Tv, Shirt, Sparkles, Home, Sofa, BookOpen, Dumbbell, ShoppingBasket, Gamepad2, Gem, Car, PawPrint } from "lucide-react";

const cats = [
  { icon: Tv,             name: "Electronics",  img: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=520&fit=crop", color: "#4f8ef7", grad: "linear-gradient(135deg,#4f8ef722,#4f8ef708)" },
  { icon: Shirt,          name: "Fashion",      img: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=520&fit=crop", color: "#f97316", grad: "linear-gradient(135deg,#f9731622,#f9731608)" },
  { icon: Sparkles,       name: "Beauty",       img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=520&fit=crop", color: "#ec4899", grad: "linear-gradient(135deg,#ec489922,#ec489908)" },
  { icon: Home,           name: "Home",         img: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=400&h=520&fit=crop", color: "#22c55e", grad: "linear-gradient(135deg,#22c55e22,#22c55e08)" },
  { icon: Sofa,           name: "Furniture",    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=520&fit=crop", color: "#a855f7", grad: "linear-gradient(135deg,#a855f722,#a855f708)" },
  { icon: BookOpen,       name: "Books",        img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=520&fit=crop", color: "#06b6d4", grad: "linear-gradient(135deg,#06b6d422,#06b6d408)" },
  { icon: Dumbbell,       name: "Sports",       img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=520&fit=crop", color: "#ef4444", grad: "linear-gradient(135deg,#ef444422,#ef444408)" },
  { icon: ShoppingBasket, name: "Groceries",    img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=520&fit=crop", color: "#84cc16", grad: "linear-gradient(135deg,#84cc1622,#84cc1608)" },
  { icon: Gamepad2,       name: "Gaming",       img: "https://images.unsplash.com/photo-1593118247619-e2d6f056869e?w=400&h=520&fit=crop", color: "#8b5cf6", grad: "linear-gradient(135deg,#8b5cf622,#8b5cf608)" },
  { icon: Gem,            name: "Jewelry",      img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=520&fit=crop", color: "#f59e0b", grad: "linear-gradient(135deg,#f59e0b22,#f59e0b08)" },
  { icon: Car,            name: "Automotive",   img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=520&fit=crop", color: "#64748b", grad: "linear-gradient(135deg,#64748b22,#64748b08)" },
  { icon: PawPrint,       name: "Pet Supplies", img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=520&fit=crop", color: "#fb923c", grad: "linear-gradient(135deg,#fb923c22,#fb923c08)" },
];

const doubled = [...cats, ...cats];

export default function Hometwo() {
  return (
    <section style={{ padding: "80px 0 0", background: "#fff", overflow: "hidden" }}>

      <style>{`
        @keyframes marquee        { from{transform:translateX(0)}    to{transform:translateX(-50%)} }
        @keyframes marqueeReverse { from{transform:translateX(-50%)} to{transform:translateX(0)}    }
        @keyframes fadeSlideUp    { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }

        .mq-fwd  { display:flex; gap:20px; width:max-content; animation:marquee        36s linear infinite; }
        .mq-rev  { display:flex; gap:14px; width:max-content; animation:marqueeReverse 28s linear infinite; }
        .mq-tick { display:flex; gap:0;    width:max-content; animation:marquee        24s linear infinite; }
        .mq-fwd:hover,.mq-rev:hover,.mq-tick:hover { animation-play-state:paused; }

        /* ── Portrait card ── */
        .cat-card-v2 {
          flex-shrink: 0;
          width: 175px;
          height: 260px;
          border-radius: 28px;
          overflow: hidden;
          cursor: pointer;
          position: relative;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          transition: transform 0.4s cubic-bezier(.22,.68,0,1.2), box-shadow 0.4s ease;
        }
        .cat-card-v2:hover {
          transform: translateY(-10px) scale(1.04);
          box-shadow: 0 28px 60px rgba(0,0,0,0.18);
        }
        .cat-card-v2 img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.5s ease;
        }
        .cat-card-v2:hover img { transform: scale(1.08); }
        .cat-card-v2 .card-shine {
          position: absolute; inset: 0;
          background: linear-gradient(160deg, rgba(255,255,255,0.12) 0%, transparent 60%);
          pointer-events: none;
        }
        .cat-card-v2 .card-grad {
          position: absolute; bottom: 0; left: 0; right: 0; height: 65%;
          background: linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.3) 60%, transparent 100%);
        }
        .cat-card-v2 .card-icon {
          position: absolute; top: 14px; left: 14px;
          width: 38px; height: 38px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.3);
          background: rgba(255,255,255,0.18);
          transition: transform 0.3s;
        }
        .cat-card-v2:hover .card-icon { transform: scale(1.15) rotate(-5deg); }
        .cat-card-v2 .card-body {
          position: absolute; bottom: 18px; left: 16px; right: 16px;
        }
        .cat-card-v2 .card-name {
          font-size: 14px; font-weight: 800; color: #fff;
          letter-spacing: 0.2px; line-height: 1.2;
        }
        .cat-card-v2 .card-cta {
          display: inline-flex; align-items: center; gap: 4px;
          margin-top: 6px; font-size: 11px; font-weight: 600;
          color: rgba(255,255,255,0.65); letter-spacing: 0.5px;
          transition: color 0.2s, gap 0.2s;
        }
        .cat-card-v2:hover .card-cta { color: #fff; gap: 7px; }

        /* ── Pill ── */
        .cat-pill-v2 {
          display: flex; align-items: center; gap: 10px;
          padding: 8px 20px 8px 8px;
          border-radius: 100px; flex-shrink: 0; cursor: pointer;
          border: 1.5px solid #ebebeb;
          background: #fafafa;
          transition: all 0.25s ease;
          box-shadow: 0 1px 6px rgba(0,0,0,0.04);
        }
        .cat-pill-v2:hover {
          border-color: var(--pill-color);
          background: #fff;
          box-shadow: 0 6px 20px rgba(0,0,0,0.09);
          transform: translateY(-3px);
        }
        .cat-pill-v2 .pill-icon {
          width: 36px; height: 36px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; transition: transform 0.3s;
        }
        .cat-pill-v2:hover .pill-icon { transform: rotate(-8deg) scale(1.1); }
        .cat-pill-v2 .pill-name {
          font-size: 13px; font-weight: 700; color: #222;
          white-space: nowrap; letter-spacing: 0.1px;
        }

        /* ── Ticker ── */
        .tick-item {
          display: flex; align-items: center;
          padding: 0 32px; gap: 32px; flex-shrink: 0;
        }
        .tick-word {
          font-size: 15px; font-style: italic;
          font-family: 'Georgia', 'Times New Roman', serif;
          color: #999; white-space: nowrap; letter-spacing: 0.4px;
          transition: color 0.2s;
        }
        .tick-item:hover .tick-word { color: #555; }
        .tick-dot { color: #ddd; font-size: 10px; }
      `}</style>

      {/* ── Header ── */}
      <div style={{ maxWidth: 1280, margin: "0 auto 52px", padding: "0 40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#f3f4f6", borderRadius: 50, padding: "5px 14px", marginBottom: 14 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#c8f135", display: "inline-block" }} />
            <span style={{ fontSize: 12, fontWeight: 700, color: "#555", letterSpacing: 1.5, textTransform: "uppercase" }}>Browse</span>
          </div>
          <h2 style={{ fontSize: 48, fontWeight: 900, color: "#0f0f0f", letterSpacing: -2, lineHeight: 1.05 }}>
            Shop by <span style={{ background: "linear-gradient(135deg,#111 30%,#555)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Category</span>
          </h2>
          <p style={{ fontSize: 15, color: "#888", marginTop: 10, fontWeight: 400 }}>Explore 12 curated categories — find exactly what you need.</p>
        </div>
        <button
          style={{ display: "flex", alignItems: "center", gap: 8, background: "#0f0f0f", color: "#fff", border: "none", borderRadius: 50, padding: "13px 28px", fontWeight: 700, cursor: "pointer", fontSize: 14, letterSpacing: 0.2, boxShadow: "0 4px 20px rgba(0,0,0,0.18)", transition: "transform 0.2s, box-shadow 0.2s" }}
          onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 32px rgba(0,0,0,0.22)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.18)"; }}>
          View All
          <span style={{ background: "#c8f135", color: "#111", borderRadius: "50%", width: 26, height: 26, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 900 }}>→</span>
        </button>
      </div>

      {/* ── Sliders ── */}
      <div style={{ position: "relative" }}>
        {/* Fade masks */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 160, background: "linear-gradient(to right, #fff 30%, transparent)", zIndex: 3, pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 160, background: "linear-gradient(to left, #fff 30%, transparent)", zIndex: 3, pointerEvents: "none" }} />

        {/* Row 1 — Portrait cards → */}
        <div style={{ overflow: "hidden", paddingBottom: 20 }}>
          <div className="mq-fwd" style={{ paddingLeft: 20 }}>
            {doubled.map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={i} className="cat-card-v2">
                  <img src={c.img} alt={c.name} />
                  <div className="card-shine" />
                  <div className="card-grad" />
                  <div className="card-icon">
                    <Icon size={17} color="#fff" />
                  </div>
                  <div className="card-body">
                    <p className="card-name">{c.name}</p>
                    <span className="card-cta">Explore <span>→</span></span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 2 — Pills ← */}
        <div style={{ overflow: "hidden", padding: "4px 0 20px" }}>
          <div className="mq-rev" style={{ paddingLeft: 20 }}>
            {doubled.map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={i} className="cat-pill-v2" style={{ "--pill-color": c.color }}>
                  <div className="pill-icon" style={{ background: `${c.color}18` }}>
                    <Icon size={16} color={c.color} />
                  </div>
                  <span className="pill-name">{c.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Ticker strip ── */}
      <div style={{ overflow: "hidden", borderTop: "1px solid #f0f0f0", background: "linear-gradient(to right, #fafafa, #f5f5f5, #fafafa)", padding: "16px 0" }}>
        <div className="mq-tick">
          {doubled.map((c, i) => (
            <div key={i} className="tick-item">
              <span className="tick-word">{c.name}</span>
              <span className="tick-dot">◆</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
