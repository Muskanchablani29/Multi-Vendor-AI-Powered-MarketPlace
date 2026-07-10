import { useState, useEffect } from "react";
import { Send, Sparkles, Cpu, ShieldCheck, Zap, Search, Star } from "lucide-react";

/* ── Typing hook ── */
const PHRASES = [
  "Find me a gaming laptop under ₹70k",
  "Best wireless earbuds under ₹2000",
  "Skincare routine for dry skin",
  "Running shoes for beginners",
  "Smartwatch with best battery life",
];
function useTyping() {
  const [pi, setPi]   = useState(0);
  const [txt, setTxt] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const p = PHRASES[pi];
    if (!del && txt.length < p.length) { const t = setTimeout(() => setTxt(p.slice(0, txt.length + 1)), 55); return () => clearTimeout(t); }
    if (!del && txt.length === p.length) { const t = setTimeout(() => setDel(true), 1800); return () => clearTimeout(t); }
    if (del && txt.length > 0) { const t = setTimeout(() => setTxt(txt.slice(0, -1)), 28); return () => clearTimeout(t); }
    if (del && txt.length === 0) { setDel(false); setPi(p => (p + 1) % PHRASES.length); }
  }, [txt, del, pi]);
  return txt;
}

const features = [
  { icon: Zap,         label: "Instant Results",  desc: "Answers in milliseconds"      },
  { icon: Search,      label: "Smart Search",      desc: "Understands natural language" },
  { icon: ShieldCheck, label: "Trusted Picks",     desc: "Verified sellers only"        },
  { icon: Star,        label: "Personalised",      desc: "Learns your preferences"      },
];

const suggestions = [
  "Gaming laptop under ₹70k",
  "Wireless earbuds under ₹2k",
  "Skincare for dry skin",
  "Running shoes for beginners",
];

export default function Homesix() {
  const typed    = useTyping();
  const [query,   setQuery]   = useState("");
  const [focused, setFocused] = useState(false);

  return (
    <section style={{ padding: "96px 40px", background: "#fff", overflow: "hidden", position: "relative" }}>
      <style>{`
        /* ── Spin ── */
        @keyframes spinCW  { from{transform:rotate(0deg)}   to{transform:rotate(360deg)}  }
        @keyframes spinCCW { from{transform:rotate(0deg)}   to{transform:rotate(-360deg)} }

        /* ── Robot float ── */
        @keyframes floatY { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-10px)} }

        /* ── Scan line ── */
        @keyframes scanLine { 0%{top:14%} 100%{top:78%} }

        /* ── Blink ── */
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

        /* ── Badge pop ── */
        @keyframes badgePop { from{opacity:0;transform:scale(.7)} to{opacity:1;transform:scale(1)} }

        /* ── Pulse ring ── */
        @keyframes pulseRing { 0%,100%{transform:scale(1);opacity:.12} 50%{transform:scale(1.08);opacity:.25} }

        /* ── Grid ── */
        @keyframes gridFade { 0%,100%{opacity:.03} 50%{opacity:.06} }

        /* ══════════════════════════════════════════
           RING COLOR ANIMATIONS
           Each ring half cycles through elegant nude
           + pastel colors one-by-one, slowly.
           Ring A (top-right CW) and Ring B (bottom-left CCW)
           use different palettes & durations so they
           never sync — always look different.
        ══════════════════════════════════════════ */

        /* Palette 1 — warm nudes & blush */
        @keyframes colorA1 {
          0%   { border-color: #e8c4b8 transparent transparent #e8c4b8; }
          8%   { border-color: #d4a5a5 transparent transparent #d4a5a5; }
          16%  { border-color: #c9b8e8 transparent transparent #c9b8e8; }
          24%  { border-color: #b8d4e8 transparent transparent #b8d4e8; }
          32%  { border-color: #b8e8c4 transparent transparent #b8e8c4; }
          40%  { border-color: #e8e4b8 transparent transparent #e8e4b8; }
          48%  { border-color: #e8b8d4 transparent transparent #e8b8d4; }
          56%  { border-color: #b8c4e8 transparent transparent #b8c4e8; }
          64%  { border-color: #d4e8b8 transparent transparent #d4e8b8; }
          72%  { border-color: #e8cdb8 transparent transparent #e8cdb8; }
          80%  { border-color: #c4b8e8 transparent transparent #c4b8e8; }
          88%  { border-color: #b8e8e4 transparent transparent #b8e8e4; }
          100% { border-color: #e8c4b8 transparent transparent #e8c4b8; }
        }
        /* Palette 2 — cool pastels & sage */
        @keyframes colorB1 {
          0%   { border-color: transparent #a8c5da #a8c5da transparent; }
          8%   { border-color: transparent #a8dac5 #a8dac5 transparent; }
          16%  { border-color: transparent #c5a8da #c5a8da transparent; }
          24%  { border-color: transparent #dac5a8 #dac5a8 transparent; }
          32%  { border-color: transparent #a8b5da #a8b5da transparent; }
          40%  { border-color: transparent #daa8c5 #daa8c5 transparent; }
          48%  { border-color: transparent #c5daa8 #c5daa8 transparent; }
          56%  { border-color: transparent #a8cada #a8cada transparent; }
          64%  { border-color: transparent #dab8a8 #dab8a8 transparent; }
          72%  { border-color: transparent #b5a8da #b5a8da transparent; }
          80%  { border-color: transparent #a8dab8 #a8dab8 transparent; }
          88%  { border-color: transparent #daa8b5 #daa8b5 transparent; }
          100% { border-color: transparent #a8c5da #a8c5da transparent; }
        }

        /* Ring 2 — slightly different palette & speed */
        @keyframes colorA2 {
          0%   { border-color: #f2d5c4 transparent transparent #f2d5c4; }
          10%  { border-color: #c4d5f2 transparent transparent #c4d5f2; }
          20%  { border-color: #d5f2c4 transparent transparent #d5f2c4; }
          30%  { border-color: #f2c4d5 transparent transparent #f2c4d5; }
          40%  { border-color: #c4f2e8 transparent transparent #c4f2e8; }
          50%  { border-color: #e8c4f2 transparent transparent #e8c4f2; }
          60%  { border-color: #f2e8c4 transparent transparent #f2e8c4; }
          70%  { border-color: #c4e8f2 transparent transparent #c4e8f2; }
          80%  { border-color: #d5c4f2 transparent transparent #d5c4f2; }
          90%  { border-color: #f2c4c4 transparent transparent #f2c4c4; }
          100% { border-color: #f2d5c4 transparent transparent #f2d5c4; }
        }
        @keyframes colorB2 {
          0%   { border-color: transparent #b5cce0 #b5cce0 transparent; }
          10%  { border-color: transparent #cce0b5 #cce0b5 transparent; }
          20%  { border-color: transparent #e0b5cc #e0b5cc transparent; }
          30%  { border-color: transparent #b5e0cc #b5e0cc transparent; }
          40%  { border-color: transparent #ccb5e0 #ccb5e0 transparent; }
          50%  { border-color: transparent #e0ccb5 #e0ccb5 transparent; }
          60%  { border-color: transparent #b5cce0 #b5cce0 transparent; }
          70%  { border-color: transparent #e0b5b5 #e0b5b5 transparent; }
          80%  { border-color: transparent #b5e0b5 #b5e0b5 transparent; }
          90%  { border-color: transparent #ccb5b5 #ccb5b5 transparent; }
          100% { border-color: transparent #b5cce0 #b5cce0 transparent; }
        }

        /* Ring 3 — innermost, deeper pastels */
        @keyframes colorA3 {
          0%   { border-color: #d4a8c7 transparent transparent #d4a8c7; }
          12%  { border-color: #a8c7d4 transparent transparent #a8c7d4; }
          25%  { border-color: #c7d4a8 transparent transparent #c7d4a8; }
          37%  { border-color: #d4c7a8 transparent transparent #d4c7a8; }
          50%  { border-color: #a8d4c7 transparent transparent #a8d4c7; }
          62%  { border-color: #c7a8d4 transparent transparent #c7a8d4; }
          75%  { border-color: #d4a8a8 transparent transparent #d4a8a8; }
          87%  { border-color: #a8a8d4 transparent transparent #a8a8d4; }
          100% { border-color: #d4a8c7 transparent transparent #d4a8c7; }
        }
        @keyframes colorB3 {
          0%   { border-color: transparent #c0b8d8 #c0b8d8 transparent; }
          12%  { border-color: transparent #b8d8c0 #b8d8c0 transparent; }
          25%  { border-color: transparent #d8c0b8 #d8c0b8 transparent; }
          37%  { border-color: transparent #b8c0d8 #b8c0d8 transparent; }
          50%  { border-color: transparent #d8b8c0 #d8b8c0 transparent; }
          62%  { border-color: transparent #c0d8b8 #c0d8b8 transparent; }
          75%  { border-color: transparent #d8d8b8 #d8d8b8 transparent; }
          87%  { border-color: transparent #b8d8d8 #b8d8d8 transparent; }
          100% { border-color: transparent #c0b8d8 #c0b8d8 transparent; }
        }

        /* ── Feature card ── */
        .feat-card {
          display:flex; align-items:flex-start; gap:12px;
          padding:14px 16px; border-radius:16px;
          border:1.5px solid #f0f0f0; background:#fafafa;
          transition:border-color .3s, box-shadow .3s, transform .3s;
        }
        .feat-card:hover {
          border-color:#d4a8c7;
          box-shadow:0 6px 24px rgba(212,168,199,.2);
          transform:translateY(-3px);
        }

        /* ── Ask button ── */
        .ask-btn {
          background:#1a1a1a; color:#fff; border:none;
          border-radius:14px; padding:13px 22px;
          font-weight:800; font-size:14px; cursor:pointer;
          display:flex; align-items:center; gap:8px; flex-shrink:0;
          transition:all .22s;
        }
        .ask-btn:hover { background:#333; transform:translateY(-2px); box-shadow:0 8px 24px rgba(0,0,0,.18); }

        /* ── Suggestion chip ── */
        .sug-chip {
          background:#faf8f6; border:1.5px solid #ede8e3;
          border-radius:50px; padding:6px 14px;
          font-size:12px; font-weight:600; color:#7a6a5a;
          cursor:pointer; transition:all .22s; white-space:nowrap;
        }
        .sug-chip:hover { background:#1a1a1a; color:#e8c4b8; border-color:#1a1a1a; }

        /* ── Grid bg ── */
        .bg-grid {
          position:absolute; inset:0; pointer-events:none;
          background-image:linear-gradient(#ede8e3 1px,transparent 1px),
                           linear-gradient(90deg,#ede8e3 1px,transparent 1px);
          background-size:52px 52px;
          animation:gridFade 5s ease-in-out infinite;
        }
      `}</style>

      <div className="bg-grid" />
      <div style={{ position:"absolute", top:-100, left:-100, width:360, height:360, borderRadius:"50%", background:"radial-gradient(circle,rgba(212,168,199,.08),transparent 70%)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:-80, right:-60, width:300, height:300, borderRadius:"50%", background:"radial-gradient(circle,rgba(168,197,218,.07),transparent 70%)", pointerEvents:"none" }} />

      <div style={{ maxWidth:1200, margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:80, alignItems:"center", position:"relative", zIndex:1 }}>

        {/* ══════════════════════════════
            LEFT — Robot + Rings
        ══════════════════════════════ */}
        <div style={{ display:"flex", justifyContent:"center", alignItems:"center", position:"relative", height:500 }}>

          {/* Fixed 500×500 anchor — everything positioned inside this */}
          <div style={{ position:"relative", width:500, height:500, flexShrink:0, overflow:"visible" }}>

            {/* centre point = 250,250 */}

          {/* ── Ring 1 — outermost 380px ── */}
          <div style={{
            position:"absolute",
            top: (500-380)/2, left: (500-380)/2,
            width:380, height:380, borderRadius:"50%",
            border:"3px solid transparent",
            animation:"spinCW 9s linear infinite, colorA1 8s ease-in-out infinite",
            filter:"drop-shadow(0 0 8px rgba(232,196,184,.7))",
            pointerEvents:"none",
          }} />
          <div style={{
            position:"absolute",
            top: (500-380)/2, left: (500-380)/2,
            width:380, height:380, borderRadius:"50%",
            border:"3px solid transparent",
            animation:"spinCCW 7s linear infinite, colorB1 10s ease-in-out infinite",
            filter:"drop-shadow(0 0 8px rgba(168,197,218,.7))",
            pointerEvents:"none",
          }} />

          {/* ── Ring 2 — 295px ── */}
          <div style={{
            position:"absolute",
            top: (500-295)/2, left: (500-295)/2,
            width:295, height:295, borderRadius:"50%",
            border:"3.5px solid transparent",
            animation:"spinCCW 6s linear infinite, colorA2 11s ease-in-out infinite",
            filter:"drop-shadow(0 0 7px rgba(196,213,242,.7))",
            pointerEvents:"none",
          }} />
          <div style={{
            position:"absolute",
            top: (500-295)/2, left: (500-295)/2,
            width:295, height:295, borderRadius:"50%",
            border:"3.5px solid transparent",
            animation:"spinCW 5s linear infinite, colorB2 9s ease-in-out infinite",
            filter:"drop-shadow(0 0 7px rgba(204,181,224,.7))",
            pointerEvents:"none",
          }} />

          {/* ── Ring 3 — innermost 215px ── */}
          <div style={{
            position:"absolute",
            top: (500-215)/2, left: (500-215)/2,
            width:215, height:215, borderRadius:"50%",
            border:"4px solid transparent",
            animation:"spinCW 4s linear infinite, colorA3 7s ease-in-out infinite",
            filter:"drop-shadow(0 0 9px rgba(212,168,199,.8))",
            pointerEvents:"none",
          }} />
          <div style={{
            position:"absolute",
            top: (500-215)/2, left: (500-215)/2,
            width:215, height:215, borderRadius:"50%",
            border:"4px solid transparent",
            animation:"spinCCW 3.2s linear infinite, colorB3 6s ease-in-out infinite",
            filter:"drop-shadow(0 0 9px rgba(192,184,216,.8))",
            pointerEvents:"none",
          }} />

          {/* ── Soft pulse rings ── */}
          {[185, 220].map((s, i) => (
            <div key={i} style={{
              position:"absolute",
              top: (500-s)/2, left: (500-s)/2,
              width:s, height:s, borderRadius:"50%",
              border:"1px solid rgba(212,168,199,.2)",
              animation:`pulseRing ${2.8 + i}s ease-in-out ${i * .5}s infinite`,
              pointerEvents:"none", zIndex:3,
            }} />
          ))}

          {/* ── Robot circle — centred at 250,250 ── */}
          <div style={{
            position:"absolute",
            top: (500-155)/2, left: (500-155)/2,
            zIndex:5,
            width:155, height:155, borderRadius:"50%",
            background:"linear-gradient(145deg,#fdf6f0,#f0f4fd,#fdf0f8)",
            border:"4px solid #fff",
            boxShadow:"0 0 32px rgba(212,168,199,.2), 0 12px 40px rgba(0,0,0,.08)",
            animation:"floatY 4s ease-in-out infinite",
            display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",
            overflow:"hidden",
          }}>
            <div style={{
              position:"absolute", left:14, right:14, height:1.5,
              background:"linear-gradient(90deg,transparent,#d4a8c7,#a8c5da,transparent)",
              animation:"scanLine 2s ease-in-out infinite alternate",
              opacity:.7, zIndex:6, borderRadius:2,
            }} />
            <Cpu size={50} color="#3a3a3a" strokeWidth={1.4} style={{ zIndex:7 }} />
            <div style={{ display:"flex", gap:10, marginTop:5, zIndex:7 }}>
              {[0, 0.5].map((d, i) => (
                <div key={i} style={{
                  width:7, height:7, borderRadius:"50%",
                  background: i === 0 ? "#d4a8c7" : "#a8c5da",
                  animation:`blink 1.4s ease-in-out ${d}s infinite`,
                  boxShadow:`0 0 5px ${i === 0 ? "#d4a8c7" : "#a8c5da"}`,
                }} />
              ))}
            </div>
          </div>

          {/* ── 3 dark pills — top, bottom-left, bottom-right of outermost ring ──
               Anchor centre = (250, 250), outermost ring r = 190px
               top    → angle   0° → cx=250+0=250,   cy=250-190=60
               left   → angle 210° → cx=250+190·cos(120°)=250-95=155, cy=250+190·sin(120°)=250+164=414  (too low)
               Use clean 120° spacing: 330°, 90°, 210° (top-right, top, top-left area)
               Simpler: place at 0° (top), 130° (bottom-left), 230° (bottom-right)
          ── */}
          {[
            { label:"AI Powered",   emoji:"🤖", angle:   0 },
            { label:"Smart Search", emoji:"🔍", angle: 130 },
            { label:"Personalised", emoji:"⭐", angle: 230 },
          ].map((b, i) => {
            const R   = 190;
            const deg = b.angle - 90;                        // 0° = top
            const rad = deg * (Math.PI / 180);
            const cx  = Math.round(250 + R * Math.cos(rad)); // px from left of anchor
            const cy  = Math.round(250 + R * Math.sin(rad)); // px from top of anchor
            return (
              <div key={i} style={{
                position:"absolute",
                left: cx,
                top:  cy,
                transform:"translate(-50%, -50%)",
                background:"#2a2420",
                border:"1px solid rgba(232,210,196,0.18)",
                borderRadius:50,
                padding:"6px 13px",
                display:"flex", alignItems:"center", gap:5,
                fontSize:10, fontWeight:700,
                color:"#e8ddd6",
                boxShadow:"0 4px 20px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.05)",
                animation:`badgePop .55s cubic-bezier(.22,.68,0,1.2) ${i * .14}s both`,
                whiteSpace:"nowrap", zIndex:8,
                letterSpacing:0.5,
              }}>
                <span style={{ fontSize:13, lineHeight:1 }}>{b.emoji}</span>
                <span>{b.label}</span>
              </div>
            );
          })}

          </div>{/* end fixed anchor */}
        </div>

        {/* ══════════════════════════════
            RIGHT — Content
        ══════════════════════════════ */}
        <div>
          {/* badge */}
          <div style={{ display:"inline-flex", alignItems:"center", gap:7, background:"#fdf6f0", border:"1.5px solid #e8c4b8", borderRadius:50, padding:"6px 16px", marginBottom:20 }}>
            <Sparkles size={13} color="#b87a6a" />
            <span style={{ fontSize:12, fontWeight:700, color:"#8a5a4a", letterSpacing:1.2, textTransform:"uppercase" }}>Powered by Gemini AI</span>
          </div>

          {/* heading */}
          <h2 style={{ fontSize:44, fontWeight:900, color:"#1a1a1a", lineHeight:1.15, letterSpacing:-1.5, marginBottom:14 }}>
            Need help finding<br />
            the{" "}
            <span style={{ background:"linear-gradient(135deg,#c4a0b8 0%,#a0b8c8 50%,#a0c8b8 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
              perfect product?
            </span>
          </h2>
          <p style={{ fontSize:15, color:"#7a6a5a", lineHeight:1.8, marginBottom:32, maxWidth:440 }}>
            Our AI assistant understands plain language and instantly finds the best products from thousands of verified listings — tailored just for you.
          </p>

          {/* feature 2×2 */}
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:36 }}>
            {features.map(({ icon:Icon, label, desc }, i) => (
              <div key={i} className="feat-card">
                <div style={{ width:36, height:36, borderRadius:10, background:"#fdf6f0", border:"1.5px solid #e8c4b8", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                  <Icon size={16} color="#b87a6a" />
                </div>
                <div>
                  <p style={{ fontSize:13, fontWeight:800, color:"#1a1a1a" }}>{label}</p>
                  <p style={{ fontSize:11, color:"#9ca3af", marginTop:2 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* search box */}
          <div style={{
            background:"#faf8f6", borderRadius:18, padding:"5px 5px 5px 18px",
            display:"flex", alignItems:"center", gap:10, marginBottom:16,
            border:`1.5px solid ${focused ? "#d4a8c7" : "#ede8e3"}`,
            boxShadow: focused ? "0 0 0 4px rgba(212,168,199,.12)" : "none",
            transition:"border-color .25s, box-shadow .25s",
          }}>
            <Search size={16} color="#b0a090" style={{ flexShrink:0 }} />
            <div style={{ flex:1, position:"relative" }}>
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                style={{ width:"100%", background:"none", border:"none", outline:"none", color:"#1a1a1a", fontSize:14, padding:"11px 0", fontWeight:500 }}
              />
              {!query && (
                <span style={{ position:"absolute", top:"50%", left:0, transform:"translateY(-50%)", fontSize:14, color:"#b0a090", pointerEvents:"none", whiteSpace:"nowrap" }}>
                  {typed}
                  <span style={{ display:"inline-block", width:2, height:15, background:"#d4a8c7", marginLeft:1, verticalAlign:"middle", borderRadius:1, animation:"blink .7s ease-in-out infinite" }} />
                </span>
              )}
            </div>
            <button className="ask-btn">
              Ask AI <Send size={14} />
            </button>
          </div>

          {/* chips */}
          <div style={{ display:"flex", flexWrap:"wrap", gap:8, alignItems:"center" }}>
            <span style={{ fontSize:12, color:"#b0a090", fontWeight:600 }}>Try:</span>
            {suggestions.map((s, i) => (
              <button key={i} className="sug-chip" onClick={() => setQuery(s)}>{s}</button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
