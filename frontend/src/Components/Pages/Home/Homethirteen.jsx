import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Priya Sharma",  role: "Regular Buyer",      rating: 5, review: "NovaMart's AI recommendations are spot on! Found my dream laptop within minutes. The delivery was super fast too.", avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=priya",   location: "Mumbai" },
  { name: "Rahul Verma",   role: "Tech Enthusiast",    rating: 5, review: "The flash deals are insane! Got Sony headphones at 40% off. The AI assistant helped me compare specs instantly.",    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=rahul",   location: "Bangalore" },
  { name: "Ananya Patel",  role: "Fashion Lover",      rating: 4, review: "Love the curated collections! The Summer Sale section had exactly what I was looking for. Easy returns too.",        avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=ananya",  location: "Ahmedabad" },
  { name: "Karthik Nair",  role: "Seller on NovaMart", rating: 5, review: "As a seller, the analytics dashboard is a game changer. My sales grew 3x in just 2 months after joining.",         avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=karthik", location: "Chennai" },
  { name: "Sneha Gupta",   role: "Student",            rating: 5, review: "Student Essentials collection saved me so much money! AI found budget options I never knew existed.",               avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=sneha",   location: "Delhi" },
  { name: "Arjun Mehta",   role: "Fitness Freak",      rating: 4, review: "The Fitness Collection is perfectly curated. Found all my gym gear in one place with the best prices guaranteed.",   avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=arjun",   location: "Pune" },
];

const stats = [
  { value: "50K+",  label: "Verified Reviews" },
  { value: "4.9",   label: "Average Rating"   },
  { value: "98%",   label: "Satisfaction Rate" },
  { value: "200K+", label: "Happy Customers"  },
];

function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function StarRow({ count }) {
  return (
    <div style={{ display: "flex", gap: 3 }}>
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={13} fill={i < count ? "#facc15" : "#e5e7eb"} color={i < count ? "#facc15" : "#e5e7eb"} />
      ))}
    </div>
  );
}

function TestimonialCard({ t, index }) {
  const [ref, visible] = useInView(0.15);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        border: `1.5px solid ${hovered ? "#0f0f0f" : "#f0f0f0"}`,
        borderRadius: 24,
        padding: "32px",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        cursor: "default",
        position: "relative",
        overflow: "hidden",
        transition: "border-color 0.3s, box-shadow 0.3s, transform 0.4s cubic-bezier(.22,.68,0,1.2)",
        boxShadow: hovered ? "0 24px 60px rgba(0,0,0,0.1)" : "0 2px 12px rgba(0,0,0,0.04)",
        transform: hovered
          ? "translateY(-6px)"
          : visible
          ? "translateY(0)"
          : "translateY(32px)",
        opacity: visible ? 1 : 0,
        transitionDelay: `${index * 0.08}s`,
      }}
    >
      {/* Accent top bar on hover */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 3,
        background: "linear-gradient(90deg, #c8f135, #0f0f0f)",
        transform: hovered ? "scaleX(1)" : "scaleX(0)",
        transformOrigin: "left",
        transition: "transform 0.4s ease",
        borderRadius: "24px 24px 0 0",
      }} />

      {/* Quote icon */}
      <div style={{
        width: 40, height: 40, borderRadius: 12,
        background: hovered ? "#0f0f0f" : "#f8f9fa",
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "background 0.3s",
        flexShrink: 0,
      }}>
        <Quote size={18} color={hovered ? "#c8f135" : "#aaa"} style={{ transition: "color 0.3s" }} />
      </div>

      {/* Review text */}
      <p style={{ fontSize: 14, color: "#444", lineHeight: 1.8, margin: 0, flex: 1 }}>
        "{t.review}"
      </p>

      {/* Divider */}
      <div style={{ height: 1, background: "#f3f4f6" }} />

      {/* Footer */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img
            src={t.avatar}
            alt={t.name}
            style={{ width: 44, height: 44, borderRadius: "50%", background: "#f3f4f6", border: "2px solid #f0f0f0" }}
          />
          <div>
            <p style={{ fontSize: 14, fontWeight: 800, color: "#111", margin: 0 }}>{t.name}</p>
            <p style={{ fontSize: 12, color: "#888", margin: "2px 0 0" }}>{t.role} · {t.location}</p>
          </div>
        </div>
        <StarRow count={t.rating} />
      </div>
    </div>
  );
}

export default function Homethirteen() {
  const [headerRef, headerVisible] = useInView(0.3);
  const [statsRef, statsVisible] = useInView(0.3);

  return (
    <section style={{ padding: "20px 20px", background: "#fff" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* ── Header ── */}
        <div
          ref={headerRef}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 64,
            flexWrap: "wrap",
            gap: 24,
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <div>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: "#f3f4f6", borderRadius: 50, padding: "5px 14px", marginBottom: 16,
            }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#c8f135", display: "inline-block" }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: "#555", letterSpacing: 1.5, textTransform: "uppercase" }}>
                Customer Reviews
              </span>
            </div>
            <h2 style={{ fontSize: 48, fontWeight: 900, color: "#0f0f0f", letterSpacing: -2, lineHeight: 1.05, margin: 0 }}>
              Loved by Thousands<br />
              <span style={{ color: "#888", fontWeight: 400, fontSize: 40 }}>of Shoppers</span>
            </h2>
          </div>

          {/* Overall rating pill */}
          <div style={{
            display: "flex", alignItems: "center", gap: 16,
            background: "#0f0f0f", borderRadius: 20, padding: "20px 28px",
          }}>
            <div>
              <p style={{ fontSize: 36, fontWeight: 900, color: "#c8f135", margin: 0, lineHeight: 1 }}>4.9</p>
              <div style={{ display: "flex", gap: 3, marginTop: 6 }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#facc15" color="#facc15" />)}
              </div>
            </div>
            <div style={{ width: 1, height: 48, background: "#2a2a2a" }} />
            <div>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#fff", margin: 0 }}>50,000+</p>
              <p style={{ fontSize: 12, color: "#666", margin: "3px 0 0" }}>Verified Reviews</p>
            </div>
          </div>
        </div>

        {/* ── Stats row ── */}
        <div
          ref={statsRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
            marginBottom: 56,
            opacity: statsVisible ? 1 : 0,
            transform: statsVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
          }}
        >
          {stats.map((s, i) => (
            <div key={i} style={{
              background: "#f8f9fa",
              borderRadius: 16,
              padding: "24px",
              textAlign: "center",
              border: "1.5px solid #f0f0f0",
            }}>
              <p style={{ fontSize: 28, fontWeight: 900, color: "#0f0f0f", margin: 0 }}>{s.value}</p>
              <p style={{ fontSize: 12, color: "#888", margin: "6px 0 0", fontWeight: 600, letterSpacing: 0.5 }}>{s.label}</p>
            </div>
          ))}
        </div>

        {/* ── Cards grid ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
