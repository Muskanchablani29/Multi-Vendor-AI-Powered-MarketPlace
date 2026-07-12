import { useEffect, useRef, useState } from "react";

const steps = [
  { num: "01", emoji: "👤", title: "Sign Up",         desc: "Create your free account in under 60 seconds. No credit card required — just your email and you're in.", side: "left"  },
  { num: "02", emoji: "🔍", title: "Browse Products", desc: "Explore thousands of products across all categories from verified sellers worldwide.",                   side: "right" },
  { num: "03", emoji: "🤖", title: "Ask AI",          desc: "Let our AI assistant find the perfect product for your needs with smart, personalised recommendations.",  side: "left"  },
  { num: "04", emoji: "🛒", title: "Place Order",     desc: "Checkout securely with Razorpay — UPI, cards, wallets, and more supported.",                             side: "right" },
  { num: "05", emoji: "📦", title: "Track Delivery",  desc: "Real-time tracking from dispatch to doorstep. Get notified at every step of the journey.",               side: "left"  },
];

function StepRow({ step, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const isLeft = step.side === "left";

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.25 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: isLeft ? "flex-start" : "flex-end",
        marginBottom: 0,
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateX(0)"
          : isLeft ? "translateX(-60px)" : "translateX(60px)",
        transition: `opacity 0.6s ease ${index * 0.12}s, transform 0.6s ease ${index * 0.12}s`,
      }}
    >
      {/* Card */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 24,
          flexDirection: isLeft ? "row" : "row-reverse",
          background: "#1a1a1a",
          border: "1.5px solid #2a2a2a",
          borderRadius: 20,
          padding: "28px 32px",
          width: "46%",
          position: "relative",
          transition: "border-color 0.3s, box-shadow 0.3s",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = "#c8f135";
          e.currentTarget.style.boxShadow = "0 0 32px rgba(200,241,53,0.12)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = "#2a2a2a";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        {/* Emoji circle */}
        <div style={{
          width: 68, height: 68, flexShrink: 0,
          background: "#c8f135", borderRadius: "50%",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 28,
        }}>
          {step.emoji}
        </div>

        {/* Text */}
        <div>
          <span style={{ fontSize: 11, fontWeight: 800, color: "#c8f135", letterSpacing: 2 }}>
            STEP {step.num}
          </span>
          <h3 style={{ fontSize: 18, fontWeight: 900, color: "#fff", margin: "6px 0 8px" }}>
            {step.title}
          </h3>
          <p style={{ fontSize: 13, color: "#888", lineHeight: 1.7, margin: 0 }}>
            {step.desc}
          </p>
        </div>
      </div>

      {/* Center number badge — sits on the vertical line */}
      <div style={{
        position: "absolute", left: "50%", transform: "translateX(-50%)",
        width: 44, height: 44, borderRadius: "50%",
        background: "#c8f135", color: "#111",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 13, fontWeight: 900,
        boxShadow: "0 0 0 6px #111, 0 0 0 8px #2a2a2a",
        zIndex: 2,
        opacity: visible ? 1 : 0,
        transition: `opacity 0.4s ease ${index * 0.12 + 0.3}s`,
      }}>
        {step.num}
      </div>
    </div>
  );
}

export default function Hometwelve() {
  return (
    <section style={{ padding: "80px 20px", background: "#111", position: "relative" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p style={{
            fontSize: 12, fontWeight: 800, color: "#111",
            background: "#c8f135", display: "inline-block",
            padding: "4px 16px", borderRadius: 50, marginBottom: 12, letterSpacing: 1,
          }}>
            SIMPLE PROCESS
          </p>
          <h2 style={{ fontSize: 42, fontWeight: 900, color: "#fff", letterSpacing: -1, margin: 0 }}>
            How NovaMart Works
          </h2>
          <p style={{ fontSize: 15, color: "#666", marginTop: 12 }}>
            From sign-up to delivery — five simple steps.
          </p>
        </div>

        {/* Steps with vertical line */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div style={{
            position: "absolute", left: "50%", top: 0, bottom: 0,
            width: 2, background: "linear-gradient(to bottom, transparent, #2a2a2a 10%, #2a2a2a 90%, transparent)",
            transform: "translateX(-50%)", zIndex: 0,
          }} />

          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {steps.map((s, i) => (
              <StepRow key={i} step={s} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
