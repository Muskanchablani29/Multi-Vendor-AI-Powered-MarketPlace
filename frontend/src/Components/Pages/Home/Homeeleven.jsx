import { useEffect, useRef, useState } from "react";

const steps = [
  { num: "01", icon: "🤖", title: "AI-Powered Shopping",      desc: "Our Gemini-powered engine learns your preferences and surfaces the most relevant products, deals, and sellers — automatically. No more endless scrolling.", tag: "Smart Recommendations", color: "#c8f135", dark: false },
  { num: "02", icon: "🏪", title: "Multi-Vendor Marketplace", desc: "Browse thousands of products from hundreds of verified sellers all in one place. Compare prices, read reviews, and buy with confidence.",                tag: "500+ Active Sellers",   color: "#60a5fa", dark: false },
  { num: "03", icon: "🛡️", title: "Secure Payments",          desc: "Every transaction is protected by Razorpay's industry-leading infrastructure. UPI, cards, wallets — all supported with end-to-end encryption.",              tag: "Razorpay Powered",      color: "#34d399", dark: false },
  { num: "04", icon: "📊", title: "Seller Analytics",         desc: "Sellers get a powerful real-time dashboard — track orders, revenue, top products, and customer insights. Make data-driven decisions effortlessly.",           tag: "Real-Time Dashboard",   color: "#fb923c", dark: false },
  { num: "05", icon: "❤️", title: "Smart Wishlist",           desc: "Save your favourite items and get instantly notified when prices drop or stock runs low. Never miss a deal again.",                                             tag: "Price Drop Alerts",     color: "#f472b6", dark: false },
  { num: "06", icon: "🚀", title: "Fast & Reliable Delivery", desc: "Partnered with trusted logistics providers to ensure your orders arrive on time, every time — with live tracking built right in.",                          tag: "Live Order Tracking",   color: "#a78bfa", dark: false },
];

/* ── re-triggers every time card enters/leaves viewport ── */
function useScrollVisible(threshold = 0.2) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

function StepCard({ step, index }) {
  const [ref, visible] = useScrollVisible(0.2);
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        alignItems: "stretch",
        gap: 0,
        position: "relative",
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateX(0) translateY(0)"
          : `translateX(${isEven ? "-80px" : "80px"}) translateY(20px)`,
        transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)`,
        transitionDelay: `${index * 0.05}s`,
      }}
    >
      {/* Number column */}
      <div style={{
        width: 100,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: isEven ? "flex-end" : "flex-start",
        paddingTop: 28,
        paddingRight: isEven ? 24 : 0,
        paddingLeft: isEven ? 0 : 24,
        order: isEven ? 0 : 2,
      }}>
        <span style={{
          fontSize: 64,
          fontWeight: 900,
          fontFamily: "'Playfair Display', Georgia, serif",
          color: step.color,
          lineHeight: 1,
          opacity: visible ? 0.9 : 0.1,
          transition: "opacity 0.6s ease",
          transitionDelay: `${index * 0.05 + 0.2}s`,
          textShadow: `0 0 40px ${step.color}44`,
        }}>
          {step.num}
        </span>
      </div>

      {/* Center line + dot */}
      <div style={{
        width: 2,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        order: 1,
      }}>
        <div style={{
          width: 14,
          height: 14,
          borderRadius: "50%",
          background: step.color,
          flexShrink: 0,
          marginTop: 34,
          boxShadow: `0 0 0 4px ${step.color}33, 0 0 16px ${step.color}66`,
          zIndex: 1,
          transition: "transform 0.4s ease, box-shadow 0.4s ease",
          transform: visible ? "scale(1)" : "scale(0)",
          transitionDelay: `${index * 0.05 + 0.1}s`,
        }} />
        <div style={{
          flex: 1,
          width: 2,
          background: `linear-gradient(to bottom, ${step.color}88, ${step.color}11)`,
          marginTop: 4,
        }} />
      </div>

      {/* Card */}
      <div
        style={{
          flex: 1,
          margin: "12px 0 24px",
          marginLeft: isEven ? 24 : 0,
          marginRight: isEven ? 0 : 24,
          order: isEven ? 2 : 0,
          background: "#ffffff",
          borderRadius: 20,
          padding: "24px 26px",
          boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
          border: "1px solid #f0f0f0",
          transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
          cursor: "pointer",
          position: "relative",
          overflow: "hidden",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = "translateY(-6px)";
          e.currentTarget.style.boxShadow = `0 20px 60px rgba(0,0,0,0.1), 0 0 0 1px ${step.color}44`;
          e.currentTarget.style.borderColor = step.color + "66";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 2px 20px rgba(0,0,0,0.06)";
          e.currentTarget.style.borderColor = "#f0f0f0";
        }}
      >
        {/* bg number watermark */}
        <span style={{
          position: "absolute",
          top: -8,
          right: 16,
          fontSize: 88,
          fontWeight: 900,
          color: step.color,
          opacity: 0.05,
          lineHeight: 1,
          fontFamily: "'Playfair Display', serif",
          userSelect: "none",
          pointerEvents: "none",
        }}>
          {step.num}
        </span>

        {/* top row */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
          <div style={{
            width: 52,
            height: 52,
            borderRadius: 16,
            background: step.color + "15",
            border: `1.5px solid ${step.color}33`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 24,
            flexShrink: 0,
          }}>
            {step.icon}
          </div>
          <div>
            <span style={{
              display: "inline-block",
              background: step.color + "18",
              color: step.color === "#c8f135" ? "#777" : step.color,
              borderRadius: 50,
              padding: "2px 10px",
              fontSize: 10.5,
              fontWeight: 700,
              letterSpacing: 0.4,
              marginBottom: 4,
            }}>
              {step.tag}
            </span>
            <h3 style={{
              fontSize: 17,
              fontWeight: 800,
              color: "#0f0f0f",
              margin: 0,
              lineHeight: 1.2,
              letterSpacing: -0.3,
            }}>
              {step.title}
            </h3>
          </div>
        </div>

        <p style={{
          fontSize: 13.5,
          color: "#6b7280",
          lineHeight: 1.7,
          margin: 0,
        }}>
          {step.desc}
        </p>

        {/* bottom accent bar */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 3,
          background: `linear-gradient(to right, ${step.color}, ${step.color}44)`,
          borderRadius: "0 0 20px 20px",
          opacity: 0.7,
        }} />
      </div>
    </div>
  );
}

export default function Homeeleven() {
  const [headerRef, headerVisible] = useScrollVisible(0.3);

  return (
    <section style={{
      padding: "100px 40px",
      background: "linear-gradient(180deg, #f8f9fb 0%, #eef0f4 100%)",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* bg decoration */}
      <div style={{
        position: "absolute", top: -120, right: -120,
        width: 500, height: 500,
        background: "radial-gradient(circle, rgba(200,241,53,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: -80, left: -80,
        width: 400, height: 400,
        background: "radial-gradient(circle, rgba(96,165,250,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 900, margin: "0 auto", position: "relative" }}>

        {/* Header */}
        <div
          ref={headerRef}
          style={{
            textAlign: "center",
            marginBottom: 64,
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 7,
            background: "#fff", borderRadius: 50, padding: "6px 18px",
            fontSize: 11.5, fontWeight: 700, color: "#666",
            letterSpacing: 1, textTransform: "uppercase",
            boxShadow: "0 2px 12px rgba(0,0,0,0.07)", marginBottom: 20,
            border: "1px solid #ebebeb",
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#c8f135", display: "inline-block" }} />
            Why Choose Us
          </span>

          <h2 style={{
            fontSize: 52,
            fontWeight: 900,
            color: "#0f0f0f",
            letterSpacing: -2,
            fontFamily: "'Playfair Display', Georgia, serif",
            lineHeight: 1.08,
            margin: "0 0 16px",
          }}>
            Why <em style={{ fontStyle: "italic", color: "#a0522d" }}>NovaMart?</em>
          </h2>

          <p style={{
            fontSize: 16,
            color: "#6b7280",
            maxWidth: 480,
            margin: "0 auto",
            lineHeight: 1.65,
          }}>
            Six reasons thousands of buyers and sellers trust NovaMart every single day.
          </p>
        </div>

        {/* Steps */}
        <div style={{ position: "relative" }}>
          {steps.map((step, i) => (
            <StepCard key={i} step={step} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
