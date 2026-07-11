import "./About.css";

export default function AboutHero() {
  return (
    <section className="ab-hero">
      <div className="ab-hero-badge">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="9" height="9" rx="1.5"/><rect x="13" y="2" width="9" height="9" rx="1.5"/><rect x="2" y="13" width="9" height="9" rx="1.5"/><rect x="13" y="13" width="9" height="9" rx="1.5"/></svg>
        About NovaMart
      </div>
      <h1 className="ab-hero-title">
        The Marketplace Built<br />
        for <em>Everyone.</em>
      </h1>
      <p className="ab-hero-sub">
        NovaMart is an AI-powered multi-vendor platform connecting thousands of buyers and sellers across India — with smart recommendations, secure payments, and real-time analytics.
      </p>
      <div className="ab-hero-stats">
        {[
          { num: "10K+",  label: "Products Listed"  },
          { num: "500+",  label: "Active Sellers"   },
          { num: "50K+",  label: "Happy Buyers"     },
          { num: "4.8★",  label: "Average Rating"   },
        ].map((s, i) => (
          <div className="ab-stat" key={i}>
            <span className="ab-stat-num">{s.num}</span>
            <span className="ab-stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
