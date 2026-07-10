import { useState } from "react";
import { Star, Users, Package, ArrowUpRight, BadgeCheck, ChevronRight } from "lucide-react";

const sellers = [
  { name: "TechZone",    category: "Electronics", rating: 4.9, followers: "12.4K", products: 342, accent: "#4f8ef7", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=120&h=120&fit=crop", banner: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500&h=300&fit=crop" },
  { name: "FashionHub",  category: "Fashion",     rating: 4.7, followers: "8.2K",  products: 891, accent: "#ec4899", logo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=120&h=120&fit=crop", banner: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&h=300&fit=crop" },
  { name: "GameWorld",   category: "Gaming",      rating: 4.8, followers: "21K",   products: 156, accent: "#8b5cf6", logo: "https://images.unsplash.com/photo-1593118247619-e2d6f056869e?w=120&h=120&fit=crop", banner: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=500&h=300&fit=crop" },
  { name: "BeautyBliss", category: "Beauty",      rating: 4.6, followers: "5.9K",  products: 423, accent: "#f97316", logo: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=120&h=120&fit=crop", banner: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&h=300&fit=crop" },
  { name: "SportZone",   category: "Sports",      rating: 4.8, followers: "9.7K",  products: 534, accent: "#22c55e", logo: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=120&h=120&fit=crop", banner: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop" },
];

function SellerCard({ s, i }) {
  const [followed, setFollowed] = useState(false);
  const [hovered, setHovered]   = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: "1 1 0",
        minWidth: 0,
        borderRadius: 28,
        overflow: "hidden",
        background: "#fff",
        border: "1.5px solid #f0f0f0",
        cursor: "pointer",
        position: "relative",
        transition: "transform 0.38s cubic-bezier(.22,.68,0,1.2), box-shadow 0.38s ease, border-color 0.3s",
        transform: hovered ? "translateY(-12px)" : "translateY(0)",
        boxShadow: hovered ? `0 32px 64px ${s.accent}22, 0 8px 24px rgba(0,0,0,0.08)` : "0 2px 16px rgba(0,0,0,0.06)",
        borderColor: hovered ? `${s.accent}44` : "#f0f0f0",
        animationDelay: `${i * 0.1}s`,
      }}
    >
      {/* ── Banner with diagonal clip ── */}
      <div style={{ position: "relative", height: 130, overflow: "hidden" }}>
        <img
          src={s.banner} alt=""
          style={{
            width: "100%", height: "100%", objectFit: "cover", display: "block",
            transition: "transform 0.5s ease",
            transform: hovered ? "scale(1.08)" : "scale(1)",
          }}
        />
        {/* colour overlay tinted with accent */}
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, ${s.accent}cc 0%, rgba(0,0,0,0.55) 100%)` }} />

        {/* diagonal bottom cut */}
        <div style={{ position: "absolute", bottom: -1, left: 0, right: 0, height: 36, background: "#fff", clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }} />

        {/* Category chip */}
        <span style={{ position: "absolute", top: 14, left: 14, background: "rgba(255,255,255,0.18)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 50, padding: "3px 10px", fontSize: 10, fontWeight: 700, color: "#fff", letterSpacing: 0.5 }}>
          {s.category}
        </span>

        {/* Rating pill top-right */}
        <div style={{ position: "absolute", top: 14, right: 14, background: "rgba(0,0,0,0.45)", backdropFilter: "blur(8px)", borderRadius: 50, padding: "4px 10px", display: "flex", alignItems: "center", gap: 4 }}>
          <Star size={11} fill="#facc15" color="#facc15" />
          <span style={{ fontSize: 12, fontWeight: 800, color: "#fff" }}>{s.rating}</span>
        </div>
      </div>

      {/* ── Logo floats over the cut ── */}
      <div style={{ position: "relative", marginTop: -32, paddingLeft: 18, zIndex: 2 }}>
        <div style={{ position: "relative", display: "inline-block" }}>
          <img
            src={s.logo} alt={s.name}
            style={{
              width: 60, height: 60, borderRadius: 18, objectFit: "cover",
              border: "3px solid #fff",
              boxShadow: `0 6px 20px ${s.accent}44`,
              transition: "transform 0.3s",
              transform: hovered ? "scale(1.08) rotate(-3deg)" : "scale(1) rotate(0deg)",
            }}
          />
          {/* verified badge */}
          <div style={{ position: "absolute", bottom: -4, right: -4, background: s.accent, borderRadius: "50%", width: 20, height: 20, display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid #fff" }}>
            <BadgeCheck size={11} color="#fff" />
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div style={{ padding: "10px 18px 18px" }}>
        <p style={{ fontSize: 15, fontWeight: 900, color: "#0f0f0f", letterSpacing: -0.3 }}>{s.name}</p>

        {/* Stats row */}
        <div style={{ display: "flex", gap: 0, margin: "12px 0", background: "#f8f9fa", borderRadius: 14, overflow: "hidden" }}>
          {[
            { icon: Users,   val: s.followers, label: "Followers" },
            { icon: Package, val: s.products,  label: "Products"  },
          ].map(({ icon: Icon, val, label }, j) => (
            <div key={j} style={{ flex: 1, padding: "10px 0", textAlign: "center", borderRight: j === 0 ? "1px solid #ebebeb" : "none" }}>
              <p style={{ fontSize: 14, fontWeight: 900, color: "#0f0f0f", lineHeight: 1 }}>{val}</p>
              <p style={{ fontSize: 10, color: "#9ca3af", marginTop: 3, fontWeight: 600 }}>{label}</p>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", gap: 8 }}>
          <button
            onClick={() => setFollowed(f => !f)}
            style={{
              flex: 1, border: `1.5px solid ${followed ? s.accent : "#e5e7eb"}`,
              borderRadius: 12, padding: "9px 0", fontWeight: 700, fontSize: 12,
              cursor: "pointer", transition: "all 0.22s",
              background: followed ? s.accent : "#fff",
              color: followed ? "#fff" : "#555",
            }}
            onMouseEnter={e => { if (!followed) { e.currentTarget.style.borderColor = s.accent; e.currentTarget.style.color = s.accent; } }}
            onMouseLeave={e => { if (!followed) { e.currentTarget.style.borderColor = "#e5e7eb"; e.currentTarget.style.color = "#555"; } }}
          >
            {followed ? "✓ Following" : "+ Follow"}
          </button>
          <button style={{
            width: 38, height: 38, borderRadius: 12, border: "none",
            background: "#0f0f0f", display: "flex", alignItems: "center",
            justifyContent: "center", cursor: "pointer", flexShrink: 0,
            transition: "background 0.2s, transform 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = s.accent; e.currentTarget.style.transform = "rotate(45deg)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#0f0f0f"; e.currentTarget.style.transform = "rotate(0deg)"; }}
          >
            <ArrowUpRight size={16} color="#fff" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Homefive() {
  return (
    <section style={{ padding: "88px 40px", background: "#fafafa" }}>
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .seller-row > * {
          opacity: 0;
          animation: fadeSlideUp 0.5s cubic-bezier(.22,.68,0,1.2) forwards;
        }
        .seller-row > *:nth-child(1) { animation-delay: 0.05s; }
        .seller-row > *:nth-child(2) { animation-delay: 0.13s; }
        .seller-row > *:nth-child(3) { animation-delay: 0.21s; }
        .seller-row > *:nth-child(4) { animation-delay: 0.29s; }
        .seller-row > *:nth-child(5) { animation-delay: 0.37s; }
        .seller-row > *:nth-child(6) { animation-delay: 0.45s; }
      `}</style>

      <div style={{ maxWidth: 1380, margin: "0 auto" }}>

        {/* ── Header ── */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40 }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#fff7ed", border: "1px solid #fed7aa", borderRadius: 50, padding: "5px 14px", marginBottom: 12 }}>
              <BadgeCheck size={13} color="#f97316" />
              <span style={{ fontSize: 12, fontWeight: 700, color: "#ea580c", letterSpacing: 1, textTransform: "uppercase" }}>Verified Stores</span>
            </div>
            <h2 style={{ fontSize: 48, fontWeight: 900, color: "#0f0f0f", letterSpacing: -2, lineHeight: 1 }}>
              Featured <span style={{ background: "linear-gradient(135deg,#f97316,#ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Sellers</span>
            </h2>
          </div>
          <p style={{ fontSize: 14, color: "#9ca3af", maxWidth: 260, textAlign: "right", lineHeight: 1.6 }}>
            Hand-picked top-rated stores trusted by thousands of buyers.
          </p>
        </div>

        {/* ── Single row ── */}
        <div className="seller-row" style={{ display: "flex", gap: 18, alignItems: "stretch" }}>

          {sellers.map((s, i) => <SellerCard key={i} s={s} i={i} />)}

          {/* ── View All card ── */}
          <div style={{
            flex: "0 0 160px", borderRadius: 28,
            background: "linear-gradient(160deg, #0f0f0f 0%, #1a1a2e 100%)",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            gap: 16, cursor: "pointer", border: "1.5px solid #222",
            transition: "transform 0.3s, box-shadow 0.3s",
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-12px)"; e.currentTarget.style.boxShadow = "0 32px 64px rgba(0,0,0,0.25)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
          >
            {/* Animated ring */}
            <div style={{ position: "relative", width: 56, height: 56 }}>
              <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "2px solid rgba(200,241,53,0.3)", animation: "ping 1.8s ease-in-out infinite" }} />
              <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "rgba(200,241,53,0.12)", border: "1.5px solid rgba(200,241,53,0.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <ChevronRight size={22} color="#c8f135" />
              </div>
            </div>
            <div style={{ textAlign: "center", padding: "0 12px" }}>
              <p style={{ fontSize: 13, fontWeight: 800, color: "#fff", lineHeight: 1.3 }}>View All<br />Sellers</p>
              <p style={{ fontSize: 10, color: "#555", marginTop: 6 }}>500+ stores</p>
            </div>
            <style>{`@keyframes ping { 0%,100%{transform:scale(1);opacity:0.6} 50%{transform:scale(1.5);opacity:0} }`}</style>
          </div>

        </div>
      </div>
    </section>
  );
}
