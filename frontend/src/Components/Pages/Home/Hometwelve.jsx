const steps = [
  { num: "01", emoji: "👤", title: "Sign Up",         desc: "Create your free account in under 60 seconds." },
  { num: "02", emoji: "🔍", title: "Browse Products", desc: "Explore thousands of products across all categories." },
  { num: "03", emoji: "🤖", title: "Ask AI",          desc: "Let our AI find the perfect product for your needs." },
  { num: "04", emoji: "🛒", title: "Place Order",     desc: "Checkout securely with your preferred payment method." },
  { num: "05", emoji: "📦", title: "Track Delivery",  desc: "Real-time tracking until your order arrives at your door." },
];

export default function Hometwelve() {
  return (
    <section style={{ padding: "64px 20px", background: "#111" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: "#111", background: "#c8f135", display: "inline-block", padding: "4px 14px", borderRadius: 50, marginBottom: 10 }}>SIMPLE PROCESS</p>
          <h2 style={{ fontSize: 40, fontWeight: 900, color: "#fff", letterSpacing: -1 }}>How NovaMart Works</h2>
        </div>

        <div style={{ display: "flex", alignItems: "flex-start", gap: 0 }}>
          {steps.map((s, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", flex: 1 }}>
              {/* Step card */}
              <div style={{ flex: 1, textAlign: "center" }}>
                <div style={{ width: 72, height: 72, background: i % 2 === 0 ? "#c8f135" : "#1a1a1a", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: 28, border: i % 2 !== 0 ? "2px solid #333" : "none", transition: "transform 0.25s" }}
                  onMouseEnter={e => e.currentTarget.style.transform = "scale(1.15)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>
                  {s.emoji}
                </div>
                <span style={{ fontSize: 11, fontWeight: 800, color: "#c8f135", letterSpacing: 1 }}>{s.num}</span>
                <h3 style={{ fontSize: 15, fontWeight: 800, color: "#fff", margin: "6px 0 8px" }}>{s.title}</h3>
                <p style={{ fontSize: 12, color: "#666", lineHeight: 1.6, maxWidth: 140, margin: "0 auto" }}>{s.desc}</p>
              </div>
              {/* Arrow connector */}
              {i < steps.length - 1 && (
                <div style={{ paddingTop: 28, color: "#333", fontSize: 24, fontWeight: 900, flexShrink: 0 }}>→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
