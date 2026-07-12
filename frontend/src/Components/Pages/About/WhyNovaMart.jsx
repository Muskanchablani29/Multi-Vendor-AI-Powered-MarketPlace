import { useEffect, useRef, useState } from "react";
import "./About.css";

const steps = [
  {
    num: "01",
    icon: "🤖",
    title: "AI-Powered Shopping",
    desc: "Our Gemini-powered engine learns your preferences and surfaces the most relevant products, deals, and sellers — automatically. No more endless scrolling.",
    tag: "Smart Recommendations",
    color: "#c8f135",
  },
  {
    num: "02",
    icon: "🏪",
    title: "Multi-Vendor Marketplace",
    desc: "Browse thousands of products from hundreds of verified sellers all in one place. Compare prices, read reviews, and buy with confidence.",
    tag: "500+ Active Sellers",
    color: "#4f8ef7",
  },
  {
    num: "03",
    icon: "🛡️",
    title: "Secure Payments",
    desc: "Every transaction is protected by Razorpay's industry-leading infrastructure. UPI, cards, wallets — all supported with end-to-end encryption.",
    tag: "Razorpay Powered",
    color: "#22c55e",
  },
  {
    num: "04",
    icon: "📊",
    title: "Seller Analytics",
    desc: "Sellers get a powerful real-time dashboard — track orders, revenue, top products, and customer insights. Make data-driven decisions effortlessly.",
    tag: "Real-Time Dashboard",
    color: "#f97316",
  },
  {
    num: "05",
    icon: "❤️",
    title: "Smart Wishlist",
    desc: "Save your favourite items and get instantly notified when prices drop or stock runs low. Never miss a deal again.",
    tag: "Price Drop Alerts",
    color: "#e11d48",
  },
  {
    num: "06",
    icon: "🚀",
    title: "Fast & Reliable Delivery",
    desc: "Partnered with trusted logistics providers to ensure your orders arrive on time, every time — with live tracking built right in.",
    tag: "Live Order Tracking",
    color: "#8b5cf6",
  },
];

function StepCard({ step, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const isEven = index % 2 === 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`wnm-step ${isEven ? "wnm-left" : "wnm-right"} ${visible ? "wnm-visible" : ""}`}
    >
      {/* Number */}
      <div className="wnm-step-num" style={{ color: step.color }}>{step.num}</div>

      {/* Content card */}
      <div className="wnm-step-card">
        <div className="wnm-step-icon" style={{ background: step.color + "22", border: `1.5px solid ${step.color}44` }}>
          <span>{step.icon}</span>
        </div>
        <div className="wnm-step-body">
          <span className="wnm-step-tag" style={{ background: step.color + "22", color: step.color }}>
            {step.tag}
          </span>
          <h3>{step.title}</h3>
          <p>{step.desc}</p>
        </div>
      </div>

      {/* Connector line (not on last) */}
      {index < steps.length - 1 && <div className="wnm-connector" />}
    </div>
  );
}

export default function WhyNovaMart() {
  const headerRef = useRef(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true); },
      { threshold: 0.4 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="wnm-section">
      <div ref={headerRef} className={`ab-section-header ${headerVisible ? "wnm-header-visible" : "wnm-header-hidden"}`}>
        <span className="ab-section-tag">Why Choose Us</span>
        <h2>Why NovaMart?</h2>
        <p>Six reasons thousands of buyers and sellers trust NovaMart every day.</p>
      </div>

      <div className="wnm-steps">
        {steps.map((step, i) => (
          <StepCard key={i} step={step} index={i} />
        ))}
      </div>
    </section>
  );
}
