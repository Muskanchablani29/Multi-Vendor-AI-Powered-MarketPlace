import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const collections = [
  { title: "Summer Sale",        subtitle: "Up to 60% off",          tag: "Limited Time",  img: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop",  accent: "#f97316", span: 2, row: 1 },
  { title: "Gaming Zone",        subtitle: "Latest gear & deals",     tag: "New Arrivals",  img: "https://images.unsplash.com/photo-1593118247619-e2d6f056869e?w=500&h=500&fit=crop",  accent: "#8b5cf6", span: 1, row: 1 },
  { title: "Work From Home",     subtitle: "Productivity essentials", tag: "Best Sellers",  img: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=500&h=500&fit=crop",  accent: "#3b82f6", span: 1, row: 1 },
  { title: "Luxury Collection",  subtitle: "Premium picks",           tag: "Exclusive",     img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=500&fit=crop",  accent: "#f59e0b", span: 1, row: 2 },
  { title: "Student Essentials", subtitle: "Budget-friendly picks",   tag: "Top Rated",     img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&h=500&fit=crop",  accent: "#22c55e", span: 1, row: 2 },
  { title: "Fitness Collection", subtitle: "Train harder, go further",tag: "Trending",      img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",  accent: "#ef4444", span: 2, row: 2 },
];

const css = `
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(48px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.92); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes drawUnderline {
    from { width: 0; }
    to   { width: 56px; }
  }
  @keyframes shimmerTag {
    0%   { background-position: -200% center; }
    100% { background-position: 200% center; }
  }

  .fc-card {
    border-radius: 28px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    opacity: 0;
    transition: transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s;
  }
  .fc-card.visible {
    animation: scaleIn 0.65s cubic-bezier(0.22,1,0.36,1) forwards;
  }
  .fc-card:hover {
    transform: translateY(-6px) scale(1.015);
    box-shadow: 0 32px 72px rgba(0,0,0,0.22);
    z-index: 2;
  }
  .fc-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.22,1,0.36,1);
    display: block;
  }
  .fc-card:hover img { transform: scale(1.07); }

  .fc-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.18) 55%, transparent 100%);
    transition: background 0.4s;
  }
  .fc-card:hover .fc-overlay {
    background: linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.28) 60%, transparent 100%);
  }

  .fc-tag {
    position: absolute;
    top: 18px;
    left: 18px;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #fff;
    padding: 5px 13px;
    border-radius: 50px;
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255,255,255,0.25);
  }

  .fc-arrow {
    position: absolute;
    top: 18px;
    right: 18px;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: rgba(255,255,255,0.12);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.22);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    opacity: 0;
    transform: translateY(-6px);
    transition: opacity 0.3s, transform 0.3s, background 0.2s;
  }
  .fc-card:hover .fc-arrow {
    opacity: 1;
    transform: translateY(0);
  }
  .fc-arrow:hover { background: rgba(255,255,255,0.25); }

  .fc-info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 24px 22px;
    transform: translateY(6px);
    transition: transform 0.35s cubic-bezier(0.22,1,0.36,1);
  }
  .fc-card:hover .fc-info { transform: translateY(0); }

  .fc-subtitle {
    font-size: 13px;
    color: rgba(255,255,255,0.65);
    margin: 0 0 6px;
    opacity: 0;
    transform: translateY(8px);
    transition: opacity 0.3s 0.05s, transform 0.3s 0.05s;
  }
  .fc-card:hover .fc-subtitle { opacity: 1; transform: translateY(0); }

  .fc-title {
    font-size: 20px;
    font-weight: 900;
    color: #fff;
    margin: 0;
    letter-spacing: -0.5px;
    line-height: 1.2;
  }

  .fc-shop-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-top: 12px;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #fff;
    opacity: 0;
    transform: translateY(8px);
    transition: opacity 0.3s 0.1s, transform 0.3s 0.1s;
  }
  .fc-card:hover .fc-shop-btn { opacity: 1; transform: translateY(0); }
  .fc-shop-btn span {
    display: inline-block;
    width: 20px;
    height: 1px;
    background: #fff;
    transition: width 0.25s;
  }
  .fc-card:hover .fc-shop-btn span { width: 32px; }

  /* heading */
  .fc-heading-line {
    display: block;
    height: 4px;
    width: 0;
    border-radius: 2px;
    background: #111;
    margin: 10px auto 0;
  }
  .fc-heading-line.visible {
    animation: drawUnderline 0.8s cubic-bezier(0.22,1,0.36,1) 0.4s forwards;
  }

  .fc-section-label {
    opacity: 0;
    transform: translateY(16px);
    transition: opacity 0.5s, transform 0.5s;
  }
  .fc-section-label.visible { opacity: 1; transform: translateY(0); }

  .fc-heading {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s 0.15s, transform 0.6s 0.15s;
  }
  .fc-heading.visible { opacity: 1; transform: translateY(0); }

  .fc-subtext {
    opacity: 0;
    transform: translateY(16px);
    transition: opacity 0.5s 0.28s, transform 0.5s 0.28s;
  }
  .fc-subtext.visible { opacity: 1; transform: translateY(0); }
`;

export default function Homenine() {
  const sectionRef = useRef(null);
  const cardRefs   = useRef([]);
  const headerRef  = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    if (headerRef.current) {
      headerRef.current.querySelectorAll(".fc-section-label, .fc-heading, .fc-subtext, .fc-heading-line")
        .forEach(el => io.observe(el));
    }

    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      el.style.animationDelay = `${i * 0.1}s`;
      io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={{ padding: "30px 24px", background: "#fff" }}>
      <style>{css}</style>

      {/* ── Header ── */}
      <div ref={headerRef} style={{ textAlign: "center", marginBottom: 56 }}>
        <span className="fc-section-label" style={{
          display: "inline-block", fontSize: 11, fontWeight: 800,
          letterSpacing: 3, color: "#6b7280", textTransform: "uppercase",
          background: "#f3f4f6", padding: "6px 20px", borderRadius: 50, marginBottom: 16,
        }}>
          ✦ Curated For You ✦
        </span>

        <h2 className="fc-heading" style={{
          fontSize: 48, fontWeight: 900, color: "#111",
          letterSpacing: -2, margin: "0 0 4px", lineHeight: 1.1,
        }}>
          Featured Collections
        </h2>

        <span className="fc-heading-line" />

        <p className="fc-subtext" style={{ fontSize: 15, color: "#9ca3af", marginTop: 16 }}>
          Handpicked collections tailored to every lifestyle
        </p>
      </div>

      {/* ── Bento Grid ── */}
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridAutoRows: 280, gap: 18 }}>
        {collections.map((c, i) => (
          <div
            key={i}
            ref={el => cardRefs.current[i] = el}
            className="fc-card"
            style={{ gridColumn: `span ${c.span}` }}
          >
            <img src={c.img} alt={c.title} />
            <div className="fc-overlay" />

            {/* Tag */}
            <div className="fc-tag" style={{ background: c.accent }}>
              {c.tag}
            </div>

            {/* Arrow */}
            <button className="fc-arrow">
              <ArrowUpRight size={16} />
            </button>

            {/* Info */}
            <div className="fc-info">
              <p className="fc-subtitle">{c.subtitle}</p>
              <h3 className="fc-title">{c.title}</h3>
              <div className="fc-shop-btn">
                Shop Now <span />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
