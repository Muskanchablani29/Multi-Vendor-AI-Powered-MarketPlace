import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Priya Sharma",    role: "Regular Buyer",    rating: 5, review: "NovaMart's AI recommendations are spot on! Found my dream laptop within minutes. The delivery was super fast too.", avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=priya" },
  { name: "Rahul Verma",     role: "Tech Enthusiast",  rating: 5, review: "The flash deals are insane! Got Sony headphones at 40% off. The AI assistant helped me compare specs instantly.", avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=rahul" },
  { name: "Ananya Patel",    role: "Fashion Lover",    rating: 4, review: "Love the curated collections! The Summer Sale section had exactly what I was looking for. Easy returns too.", avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=ananya" },
  { name: "Karthik Nair",    role: "Seller on NovaMart",rating: 5, review: "As a seller, the analytics dashboard is a game changer. My sales grew 3x in just 2 months after joining.", avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=karthik" },
  { name: "Sneha Gupta",     role: "Student",          rating: 5, review: "Student Essentials collection saved me so much money! Great prices and the AI found budget options I never knew existed.", avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=sneha" },
  { name: "Arjun Mehta",     role: "Fitness Freak",    rating: 4, review: "The Fitness Collection is perfectly curated. Found all my gym gear in one place with the best prices guaranteed.", avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=arjun" },
];

export default function Homethirteen() {
  return (
    <section style={{ padding: "64px 20px", background: "#f8f9fa" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: "#fff", background: "#f97316", display: "inline-block", padding: "4px 14px", borderRadius: 50, marginBottom: 10 }}>HAPPY CUSTOMERS</p>
          <h2 style={{ fontSize: 40, fontWeight: 900, color: "#111", letterSpacing: -1, marginBottom: 8 }}>What Our Customers Say</h2>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
            {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#facc15" color="#facc15" />)}
            <span style={{ fontSize: 15, fontWeight: 700, color: "#111", marginLeft: 6 }}>4.9 / 5 from 50,000+ reviews</span>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 24, padding: "28px", cursor: "default", transition: "transform 0.25s, box-shadow 0.25s", boxShadow: "0 2px 16px rgba(0,0,0,0.06)", position: "relative" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = "0 20px 48px rgba(0,0,0,0.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 16px rgba(0,0,0,0.06)"; }}>
              <Quote size={32} color="#f3f4f6" style={{ position: "absolute", top: 20, right: 20 }} />
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <img src={t.avatar} alt={t.name} style={{ width: 52, height: 52, borderRadius: "50%", background: "#f3f4f6" }} />
                <div>
                  <p style={{ fontSize: 15, fontWeight: 800, color: "#111" }}>{t.name}</p>
                  <p style={{ fontSize: 12, color: "#888" }}>{t.role}</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: 3, marginBottom: 12 }}>
                {[...Array(t.rating)].map((_, j) => <Star key={j} size={14} fill="#facc15" color="#facc15" />)}
              </div>
              <p style={{ fontSize: 14, color: "#555", lineHeight: 1.7 }}>"{t.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
