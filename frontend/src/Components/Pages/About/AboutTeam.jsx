import "./About.css";

const team = [
  { name: "Aryan Mehta",   role: "Full Stack Developer",  avatar: "seed=aryan",   tag: "React · Django"    },
  { name: "Priya Sharma",  role: "UI/UX Designer",        avatar: "seed=priya",   tag: "Figma · Tailwind"  },
  { name: "Rohan Das",     role: "AI & Backend Engineer", avatar: "seed=rohan",   tag: "Python · Gemini"   },
  { name: "Sneha Patel",   role: "Database Architect",    avatar: "seed=sneha",   tag: "MySQL · REST APIs" },
];

export default function AboutTeam() {
  return (
    <section className="ab-team">
      <div className="ab-section-header">
        <span className="ab-section-tag">The People</span>
        <h2>Meet the Team</h2>
        <p>A passionate group of developers and designers building the future of e-commerce.</p>
      </div>
      <div className="ab-team-grid">
        {team.map((m, i) => (
          <div className="ab-team-card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="ab-team-avatar-wrap">
              <img
                src={`https://api.dicebear.com/7.x/adventurer/svg?${m.avatar}`}
                alt={m.name}
                className="ab-team-avatar"
              />
              <div className="ab-team-glow" />
            </div>
            <h4>{m.name}</h4>
            <p className="ab-team-role">{m.role}</p>
            <span className="ab-team-tag">{m.tag}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
