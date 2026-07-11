import "./About.css";

const pillars = [
  {
    icon: "🤖",
    title: "AI-Powered",
    desc: "Our Gemini-powered engine learns your preferences and surfaces the most relevant products, deals, and sellers — automatically.",
  },
  {
    icon: "🛡️",
    title: "Secure & Trusted",
    desc: "Every transaction is protected by Razorpay's industry-leading payment infrastructure. Shop with complete confidence.",
  },
  {
    icon: "📊",
    title: "Seller Analytics",
    desc: "Sellers get a powerful real-time dashboard — track orders, revenue, top products, and customer insights in one place.",
  },
  {
    icon: "🚀",
    title: "Built to Scale",
    desc: "From a single seller to thousands of vendors, NovaMart's architecture grows with your business without missing a beat.",
  },
];

export default function AboutMission() {
  return (
    <section className="ab-mission">
      <div className="ab-section-header">
        <span className="ab-section-tag">Our Mission</span>
        <h2>Why NovaMart Exists</h2>
        <p>We believe commerce should be simple, smart, and accessible to everyone — whether you're a first-time buyer or a growing business.</p>
      </div>
      <div className="ab-pillars">
        {pillars.map((p, i) => (
          <div className="ab-pillar-card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="ab-pillar-icon">{p.icon}</div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
