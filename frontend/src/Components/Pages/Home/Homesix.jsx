import { useState } from "react";
import { Send, Sparkles, Bot } from "lucide-react";

const suggestions = [
  "Find me a gaming laptop under ₹70k",
  "Best wireless earbuds under ₹2000",
  "Skincare routine for dry skin",
  "Running shoes for beginners",
];

export default function Homesix() {
  const [query, setQuery] = useState("");

  return (
    <section style={{ padding: "64px 20px", background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 50%, #16213e 100%)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>

        {/* Left — Robot Illustration */}
        <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
          <div style={{ width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(200,241,53,0.15) 0%, transparent 70%)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
            {/* Orbit ring */}
            <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", border: "1px dashed rgba(200,241,53,0.3)", animation: "spin 12s linear infinite" }} />
            {/* Robot body */}
            <div style={{ textAlign: "center" }}>
              <div style={{ width: 120, height: 120, background: "linear-gradient(135deg, #c8f135, #84cc16)", borderRadius: 32, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", boxShadow: "0 0 60px rgba(200,241,53,0.4)" }}>
                <Bot size={64} color="#111" />
              </div>
              <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
                {["🛍️","💡","🔍"].map((e, i) => (
                  <span key={i} style={{ background: "rgba(255,255,255,0.1)", borderRadius: 50, padding: "6px 12px", fontSize: 18, backdropFilter: "blur(8px)" }}>{e}</span>
                ))}
              </div>
            </div>
            {/* Floating badges */}
            {[
              { label: "AI Powered", top: "8%",  left: "-10%", color: "#c8f135" },
              { label: "Smart Search", top: "75%", left: "-5%", color: "#4f8ef7" },
              { label: "Personalized", top: "15%", right: "-8%", color: "#f97316" },
            ].map((b, i) => (
              <div key={i} style={{ position: "absolute", top: b.top, left: b.left, right: b.right, background: "rgba(255,255,255,0.08)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "6px 14px", fontSize: 12, fontWeight: 700, color: b.color, whiteSpace: "nowrap" }}>
                {b.label}
              </div>
            ))}
          </div>
          <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
        </div>

        {/* Right — Content */}
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(200,241,53,0.15)", border: "1px solid rgba(200,241,53,0.3)", borderRadius: 50, padding: "6px 16px", marginBottom: 20 }}>
            <Sparkles size={14} color="#c8f135" />
            <span style={{ fontSize: 13, fontWeight: 700, color: "#c8f135" }}>Powered by Gemini AI</span>
          </div>
          <h2 style={{ fontSize: 40, fontWeight: 900, color: "#fff", lineHeight: 1.2, marginBottom: 16, letterSpacing: -1 }}>
            Need help finding the<br /><span style={{ color: "#c8f135" }}>perfect product?</span>
          </h2>
          <p style={{ fontSize: 15, color: "#888", lineHeight: 1.7, marginBottom: 32 }}>
            Our AI assistant understands your needs and finds the best products tailored just for you — from thousands of listings.
          </p>

          {/* Search Box */}
          <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 16, padding: "4px 4px 4px 20px", display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Find me a gaming laptop under ₹70k..."
              style={{ flex: 1, background: "none", border: "none", outline: "none", color: "#fff", fontSize: 14, padding: "12px 0" }}
            />
            <button style={{ background: "#c8f135", border: "none", borderRadius: 12, padding: "12px 20px", fontWeight: 800, fontSize: 14, color: "#111", cursor: "pointer", display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
              Ask AI <Send size={14} />
            </button>
          </div>

          {/* Suggestions */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {suggestions.map((s, i) => (
              <button key={i} onClick={() => setQuery(s)} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 50, padding: "6px 14px", fontSize: 12, color: "#aaa", cursor: "pointer", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(200,241,53,0.15)"; e.currentTarget.style.color = "#c8f135"; e.currentTarget.style.borderColor = "rgba(200,241,53,0.4)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.color = "#aaa"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}>
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
