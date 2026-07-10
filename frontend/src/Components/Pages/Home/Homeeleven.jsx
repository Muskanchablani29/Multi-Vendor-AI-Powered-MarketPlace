const features = [
  { emoji: "🚚", title: "Fast Delivery",        desc: "Get your orders delivered within 24-48 hours with our trusted logistics partners." },
  { emoji: "🔒", title: "Secure Payment",       desc: "100% secure transactions powered by Razorpay — UPI, cards, wallets supported." },
  { emoji: "🤖", title: "AI Recommendations",   desc: "Our Gemini-powered AI curates products tailored to your taste and budget." },
  { emoji: "🛍️", title: "Trusted Sellers",      desc: "Every seller is verified and rated by thousands of real buyers on our platform." },
  { emoji: "💰", title: "Best Prices",          desc: "Compare prices across hundreds of sellers and always get the best deal." },
  { emoji: "🔄", title: "Easy Returns",         desc: "Hassle-free 7-day return policy with instant refunds to your original payment method." },
];

export default function Homeeleven() {
  return (
    <section style={{ padding: "64px 20px", background: "linear-gradient(135deg, #f8f9fa 0%, #eef0f2 100%)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: "#fff", background: "#22c55e", display: "inline-block", padding: "4px 14px", borderRadius: 50, marginBottom: 10 }}>OUR PROMISE</p>
          <h2 style={{ fontSize: 40, fontWeight: 900, color: "#111", letterSpacing: -1, marginBottom: 12 }}>Why Choose NovaMart?</h2>
          <p style={{ fontSize: 16, color: "#666", maxWidth: 500, margin: "0 auto" }}>We're not just another marketplace — we're your AI-powered shopping companion.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {features.map((f, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 24, padding: "32px 28px", cursor: "pointer", transition: "transform 0.25s, box-shadow 0.25s", boxShadow: "0 2px 16px rgba(0,0,0,0.06)", position: "relative", overflow: "hidden" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 24px 60px rgba(0,0,0,0.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 16px rgba(0,0,0,0.06)"; }}>
              {/* Background number */}
              <span style={{ position: "absolute", top: -10, right: 16, fontSize: 80, fontWeight: 900, color: "#f3f4f6", lineHeight: 1, userSelect: "none" }}>{String(i + 1).padStart(2, "0")}</span>
              <div style={{ fontSize: 44, marginBottom: 16 }}>{f.emoji}</div>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: "#111", marginBottom: 10 }}>{f.title}</h3>
              <p style={{ fontSize: 14, color: "#666", lineHeight: 1.7 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
