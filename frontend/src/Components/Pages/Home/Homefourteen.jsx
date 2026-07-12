import { useEffect, useRef } from "react";
import { ArrowUpRight, TrendingUp, Users, Package, DollarSign, BarChart2, Star } from "lucide-react";

const benefits = [
  { icon: Users,      text: "Reach thousands of active buyers" },
  { icon: TrendingUp, text: "AI-powered analytics & insights" },
  { icon: Package,    text: "Easy inventory management" },
  { icon: DollarSign, text: "Low commission — keep more profit" },
];

const stats = [
  { value: "500+",   label: "Active Sellers" },
  { value: "50K+",   label: "Happy Buyers" },
  { value: "1M+",    label: "Products Listed" },
  { value: "₹10Cr+", label: "GMV Processed" },
];

const metrics = [
  { label: "Revenue",  value: "₹1,24,500", change: "+12%",  up: true },
  { label: "Orders",   value: "342",        change: "+8%",   up: true },
  { label: "Products", value: "89",         change: "Stable",up: false },
  { label: "Rating",   value: "4.8 ★",     change: "+0.2",  up: true },
];

const bars = [40, 65, 45, 80, 55, 90, 70];
const days  = ["M","T","W","T","F","S","S"];

const css = `
  @keyframes f14CountUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes f14BarGrow {
    from { height: 0%; }
  }
  @keyframes f14FadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes f14LineGrow {
    from { width: 0; }
    to   { width: 48px; }
  }

  .f14-stat {
    text-align: center;
    padding: 28px 20px;
    border-right: 1px solid #f3f4f6;
    opacity: 0;
  }
  .f14-stat:last-child { border-right: none; }
  .f14-stat.vis { animation: f14CountUp 0.6s cubic-bezier(0.22,1,0.36,1) forwards; }

  .f14-benefit {
    display: flex; align-items: center; gap: 14px;
    opacity: 0;
  }
  .f14-benefit.vis { animation: f14FadeUp 0.55s cubic-bezier(0.22,1,0.36,1) forwards; }

  .f14-metric {
    background: #f9fafb;
    border: 1px solid #f3f4f6;
    border-radius: 16px;
    padding: 18px 16px;
    opacity: 0;
  }
  .f14-metric.vis { animation: f14FadeUp 0.55s cubic-bezier(0.22,1,0.36,1) forwards; }
  .f14-metric:hover { background: #f3f4f6; }

  .f14-bar {
    flex: 1;
    border-radius: 4px 4px 0 0;
    height: 0%;
    transition: height 0s;
  }
  .f14-bar.vis { animation: f14BarGrow 1s cubic-bezier(0.22,1,0.36,1) forwards; }

  .f14-btn-primary {
    background: #111; color: #fff; border: none;
    border-radius: 50px; padding: 15px 32px;
    font-weight: 800; font-size: 15px; cursor: pointer;
    display: flex; align-items: center; gap: 8px;
    transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
    font-family: inherit;
  }
  .f14-btn-primary:hover {
    background: #222; transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(0,0,0,0.18);
  }

  .f14-btn-secondary {
    background: #fff; color: #111;
    border: 1.5px solid #e5e7eb;
    border-radius: 50px; padding: 15px 32px;
    font-weight: 700; font-size: 15px; cursor: pointer;
    transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
    font-family: inherit;
  }
  .f14-btn-secondary:hover {
    border-color: #111; transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.08);
  }

  .f14-section-in {
    opacity: 0;
    animation: f14FadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards;
  }
`;

export default function Homefourteen() {
  const sectionRef  = useRef(null);
  const statRefs    = useRef([]);
  const benefitRefs = useRef([]);
  const metricRefs  = useRef([]);
  const barRefs     = useRef([]);
  const headRef     = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("vis");
        else e.target.classList.remove("vis");
      });
    }, { threshold: 0.15 });

    [...statRefs.current, ...benefitRefs.current, ...metricRefs.current, ...barRefs.current]
      .forEach(el => el && io.observe(el));
    if (headRef.current) io.observe(headRef.current);

    return () => io.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={{ padding: "40px 40px", background: "#fff" }}>
      <style>{css}</style>

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* ── Stats bar ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", background: "#f9fafb", borderRadius: 20, border: "1px solid #f3f4f6", marginBottom: 72, overflow: "hidden" }}>
          {stats.map((s, i) => (
            <div key={i} ref={el => statRefs.current[i] = el} className="f14-stat" style={{ animationDelay: `${i * 0.1}s` }}>
              <p style={{ fontSize: 34, fontWeight: 900, color: "#111", lineHeight: 1, margin: "0 0 6px" }}>{s.value}</p>
              <p style={{ fontSize: 13, color: "#9ca3af", margin: 0 }}>{s.label}</p>
            </div>
          ))}
        </div>

        {/* ── Main 2-col ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>

          {/* Left — copy */}
          <div>
            <div ref={headRef} className="f14-section-in">
              <span style={{ display: "inline-block", fontSize: 11, fontWeight: 800, letterSpacing: 2, color: "#6b7280", textTransform: "uppercase", background: "#f3f4f6", padding: "5px 16px", borderRadius: 50, marginBottom: 20 }}>
                For Sellers
              </span>
              <h2 style={{ fontSize: 50, fontWeight: 900, color: "#111", lineHeight: 1.1, letterSpacing: -2, margin: "0 0 16px" }}>
                Start Selling on<br />
                <span style={{ background: "linear-gradient(135deg,#111,#555)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>NovaMart</span> Today
              </h2>
              <div style={{ width: 0, height: 4, background: "#111", borderRadius: 2, marginBottom: 24, animation: "f14LineGrow 0.8s cubic-bezier(0.22,1,0.36,1) 0.5s forwards" }} />
              <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.75, marginBottom: 36 }}>
                Join hundreds of successful sellers and grow your business with AI-powered tools, real-time analytics, and access to thousands of buyers.
              </p>
            </div>

            {/* Benefits */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
              {benefits.map(({ icon: Icon, text }, i) => (
                <div key={i} ref={el => benefitRefs.current[i] = el} className="f14-benefit" style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
                  <div style={{ width: 40, height: 40, background: "#f3f4f6", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={17} color="#111" />
                  </div>
                  <span style={{ fontSize: 15, color: "#374151", fontWeight: 500 }}>{text}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 14 }}>
              <button className="f14-btn-primary">Start Selling Free <ArrowUpRight size={16} /></button>
              <button className="f14-btn-secondary">Learn More</button>
            </div>
          </div>

          {/* Right — dashboard preview */}
          <div style={{ background: "#f9fafb", border: "1px solid #f3f4f6", borderRadius: 28, padding: 28 }}>

            {/* Header */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
              <div>
                <p style={{ fontSize: 15, fontWeight: 800, color: "#111", margin: "0 0 2px" }}>Seller Dashboard</p>
                <p style={{ fontSize: 12, color: "#9ca3af", margin: 0 }}>This month's overview</p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, background: "#fff", border: "1px solid #f3f4f6", borderRadius: 50, padding: "5px 12px" }}>
                <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e" }} />
                <span style={{ fontSize: 11, fontWeight: 700, color: "#374151" }}>Live</span>
              </div>
            </div>

            {/* Metric cards */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
              {metrics.map((m, i) => (
                <div key={i} ref={el => metricRefs.current[i] = el} className="f14-metric" style={{ animationDelay: `${i * 0.1}s`, transition: "background 0.2s" }}>
                  <p style={{ fontSize: 11, color: "#9ca3af", margin: "0 0 6px", fontWeight: 600 }}>{m.label}</p>
                  <p style={{ fontSize: 20, fontWeight: 900, color: "#111", margin: "0 0 4px" }}>{m.value}</p>
                  <p style={{ fontSize: 11, fontWeight: 700, color: m.up ? "#16a34a" : "#6b7280", margin: 0 }}>
                    {m.up ? "↑" : "→"} {m.change}
                  </p>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div style={{ background: "#fff", border: "1px solid #f3f4f6", borderRadius: 16, padding: "16px 16px 10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 14 }}>
                <BarChart2 size={14} color="#9ca3af" />
                <p style={{ fontSize: 11, fontWeight: 700, color: "#9ca3af", margin: 0, letterSpacing: 1, textTransform: "uppercase" }}>Weekly Sales</p>
              </div>
              <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 64 }}>
                {bars.map((h, i) => (
                  <div
                    key={i}
                    ref={el => barRefs.current[i] = el}
                    className="f14-bar"
                    style={{
                      background: i === 5 ? "#111" : "#e5e7eb",
                      animationDelay: `${0.3 + i * 0.07}s`,
                      animationFillMode: "forwards",
                    }}
                    // inline style for target height via CSS var trick
                    onAnimationStart={e => e.currentTarget.style.setProperty("--h", `${h}%`)}
                  />
                ))}
              </div>
              <div style={{ display: "flex", marginTop: 8 }}>
                {days.map((d, i) => (
                  <span key={i} style={{ flex: 1, textAlign: "center", fontSize: 10, color: i === 5 ? "#111" : "#9ca3af", fontWeight: i === 5 ? 800 : 400 }}>{d}</span>
                ))}
              </div>
            </div>

            {/* Seller rating row */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 14, padding: "12px 14px", background: "#fff", border: "1px solid #f3f4f6", borderRadius: 14 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#f3f4f6", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Star size={14} color="#111" fill="#111" />
                </div>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 800, color: "#111", margin: 0 }}>Top Seller Badge</p>
                  <p style={{ fontSize: 11, color: "#9ca3af", margin: 0 }}>Earned this month</p>
                </div>
              </div>
              <span style={{ fontSize: 11, fontWeight: 800, color: "#16a34a", background: "#f0fdf4", padding: "4px 10px", borderRadius: 50 }}>Active</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
