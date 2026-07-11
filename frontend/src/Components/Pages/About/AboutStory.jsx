import "./About.css";

const timeline = [
  { year: "2024 Q1", title: "Idea Born",         desc: "NovaMart started as a capstone project — a vision to build a smarter, AI-first marketplace for India." },
  { year: "2024 Q2", title: "Planning & Design",  desc: "Defined the tech stack: React, Django, MySQL, Gemini AI, Cloudinary, and Razorpay." },
  { year: "2024 Q3", title: "Development Begins", desc: "Backend APIs, authentication, product management, and seller dashboard built from scratch." },
  { year: "2024 Q4", title: "AI Integration",     desc: "Gemini API integrated for personalized recommendations and intelligent search." },
  { year: "2025",    title: "Launch",             desc: "NovaMart goes live — connecting buyers and sellers across India on a single smart platform." },
];

export default function AboutStory() {
  return (
    <section className="ab-story">
      <div className="ab-section-header light">
        <span className="ab-section-tag dark">Our Story</span>
        <h2>How We Got Here</h2>
        <p>From a classroom idea to a full-stack marketplace — here's the journey.</p>
      </div>
      <div className="ab-timeline">
        {timeline.map((t, i) => (
          <div className="ab-timeline-item" key={i} style={{ animationDelay: `${i * 0.12}s` }}>
            <div className="ab-timeline-dot" />
            <div className="ab-timeline-content">
              <span className="ab-timeline-year">{t.year}</span>
              <h4>{t.title}</h4>
              <p>{t.desc}</p>
            </div>
          </div>
        ))}
        <div className="ab-timeline-line" />
      </div>
    </section>
  );
}
