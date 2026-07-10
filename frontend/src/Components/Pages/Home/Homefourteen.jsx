import { ArrowUpRight, Check, TrendingUp, Users, Package, DollarSign } from "lucide-react";

const benefits = [
  { icon: Users,      text: "Reach thousands of customers" },
  { icon: TrendingUp, text: "AI-powered analytics dashboard" },
  { icon: Package,    text: "Easy inventory management" },
  { icon: DollarSign, text: "Low commission — keep more profit" },
];

const stats = [
  { value: "500+",   label: "Active Sellers" },
  { value: "50K+",   label: "Happy Buyers" },
  { value: "1M+",    label: "Products Listed" },
  { value: "₹10Cr+", label: "GMV Processed" },
];

export default function Homefourteen() {
  return (
    <section style={{ padding: "80px 20px", background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 100%)", position: "relative", overflow: "hidden" }}>
      {/* Background decoration */}
      <div style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(200,241,53,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -80, left: -80, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(79,142,247,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Stats bar */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "rgba(255,255,255,0.05)", borderRadius: 20, overflow: "hidden", marginBottom: 64 }}>
          {stats.map((s, i) => (
            <div key={i} style={{ padding: "24px 20px", textAlign: "center", background: "rgba(255,255,255,0.03)" }}>
              <p style={{ fontSize: 32, fontWeight: 900, color: "#c8f135", lineHeight: 1 }}>{s.value}</p>
              <p style={{ fontSize: 13, color: "#666", marginTop: 6 }}>{s.label}</p>
            </div>
          ))}
        </div>

        {/* Main CTA */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#111", background: "#c8f135", display: "inline-block", padding: "4px 14px", borderRadius: 50, marginBottom: 20 }}>FOR SELLERS</p>
            <h2 style={{ fontSize: 48, fontWeight: 900, color: "#fff", lineHeight: 1.15, letterSpacing: -1.5, marginBottom: 20 }}>
              Start Selling on<br /><span style={{ color: "#c8f135" }}>NovaMart</span> Today
            </h2>
            <p style={{ fontSize: 16, color: "#888", lineHeight: 1.7, marginBottom: 36 }}>
              Join hundreds of successful sellers and grow your business with AI-powered tools, real-time analytics, and access to thousands of buyers.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 40 }}>
              {benefits.map(({ icon: Icon, text }, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 32, height: 32, background: "rgba(200,241,53,0.15)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={15} color="#c8f135" />
                  </div>
                  <span style={{ fontSize: 15, color: "#ccc" }}>{text}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 16 }}>
              <button style={{ background: "#c8f135", color: "#111", border: "none", borderRadius: 50, padding: "14px 32px", fontWeight: 800, fontSize: 15, cursor: "pointer", display: "flex", alignItems: "center", gap: 8, transition: "transform 0.2s, box-shadow 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(200,241,53,0.4)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                Start Selling Free <ArrowUpRight size={16} />
              </button>
              <button style={{ background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,0.2)", borderRadius: 50, padding: "14px 32px", fontWeight: 700, fontSize: 15, cursor: "pointer", transition: "border-color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"}>
                Learn More
              </button>
            </div>
          </div>

          {/* Right visual */}
          <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 28, padding: 32 }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#888", marginBottom: 20 }}>SELLER DASHBOARD PREVIEW</p>
            {/* Mock dashboard */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
              {[{ label: "Revenue", value: "₹1,24,500", up: true }, { label: "Orders", value: "342", up: true }, { label: "Products", value: "89", up: false }, { label: "Rating", value: "4.8 ★", up: true }].map((m, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.05)", borderRadius: 14, padding: "16px 14px" }}>
                  <p style={{ fontSize: 11, color: "#666", marginBottom: 6 }}>{m.label}</p>
                  <p style={{ fontSize: 20, fontWeight: 900, color: "#fff" }}>{m.value}</p>
                  <p style={{ fontSize: 11, color: m.up ? "#22c55e" : "#ef4444", marginTop: 4 }}>{m.up ? "↑ +12% this month" : "→ Stable"}</p>
                </div>
              ))}
            </div>
            {/* Mock chart bar */}
            <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 14, padding: 16 }}>
              <p style={{ fontSize: 11, color: "#666", marginBottom: 12 }}>WEEKLY SALES</p>
              <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 60 }}>
                {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                  <div key={i} style={{ flex: 1, background: i === 5 ? "#c8f135" : "rgba(200,241,53,0.25)", borderRadius: "4px 4px 0 0", height: `${h}%`, transition: "height 0.3s" }} />
                ))}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
                {["M","T","W","T","F","S","S"].map((d, i) => (
                  <span key={i} style={{ fontSize: 10, color: "#555", flex: 1, textAlign: "center" }}>{d}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
