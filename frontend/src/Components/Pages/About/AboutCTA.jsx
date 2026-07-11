import { ArrowUpRight } from "lucide-react";
import "./About.css";

export default function AboutCTA() {
  return (
    <section className="ab-cta">
      <div className="ab-cta-inner">
        <div className="ab-cta-glow" />
        <span className="ab-section-tag">Get Started</span>
        <h2>Ready to Shop or Sell?</h2>
        <p>Join thousands of buyers and sellers already on NovaMart. It's free to get started.</p>
        <div className="ab-cta-btns">
          <button className="ab-cta-btn primary">
            Start Shopping <ArrowUpRight size={16} />
          </button>
          <button className="ab-cta-btn secondary">
            Become a Seller <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
