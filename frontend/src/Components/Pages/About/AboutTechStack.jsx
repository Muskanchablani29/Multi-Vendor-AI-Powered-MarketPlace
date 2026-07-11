import "./About.css";

const stack = [
  { name: "React.js",     color: "#61dafb", desc: "Frontend UI"          },
  { name: "Tailwind CSS", color: "#38bdf8", desc: "Styling"              },
  { name: "Redux",        color: "#764abc", desc: "State Management"     },
  { name: "Django",       color: "#092e20", desc: "Backend Framework"    },
  { name: "DRF",          color: "#a30000", desc: "REST APIs"            },
  { name: "MySQL",        color: "#f29111", desc: "Database"             },
  { name: "Gemini AI",    color: "#4285f4", desc: "AI Recommendations"   },
  { name: "Cloudinary",   color: "#3448c5", desc: "Media Storage"        },
  { name: "Razorpay",     color: "#072654", desc: "Payments"             },
];

export default function AboutTechStack() {
  return (
    <section className="ab-tech">
      <div className="ab-section-header light">
        <span className="ab-section-tag dark">Tech Stack</span>
        <h2>Built With the Best</h2>
        <p>Every tool was chosen for performance, scalability, and developer experience.</p>
      </div>
      <div className="ab-tech-grid">
        {stack.map((t, i) => (
          <div
            className="ab-tech-card"
            key={i}
            style={{ animationDelay: `${i * 0.07}s`, "--accent": t.color }}
          >
            <div className="ab-tech-dot" style={{ background: t.color }} />
            <div>
              <p className="ab-tech-name">{t.name}</p>
              <p className="ab-tech-desc">{t.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
