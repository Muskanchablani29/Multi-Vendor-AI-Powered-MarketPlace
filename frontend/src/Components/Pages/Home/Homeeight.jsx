const brands = [
  { name: "Apple",   logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
  { name: "Nike",    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" },
  { name: "Sony",    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg" },
  { name: "Puma",    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Puma_Logo.svg/320px-Puma_Logo.svg.png" },
  { name: "Dell",    logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg" },
  { name: "HP",      logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg" },
  { name: "Lenovo",  logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Lenovo_logo_2015.svg" },
  { name: "Adidas",  logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg" },
  { name: "LG",      logo: "https://upload.wikimedia.org/wikipedia/commons/b/bf/LG_logo_%282015%29.svg" },
  { name: "Asus",    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/ASUS_Logo.svg" },
  { name: "Canon",   logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/Canon_logo.svg" },
];

const css = `
  @keyframes toLeft  { from { transform: translateX(0); } to { transform: translateX(-50%); } }
  @keyframes toRight { from { transform: translateX(-50%); } to { transform: translateX(0); } }

  @keyframes letterDrop {
    0%   { opacity: 0; transform: translateY(-36px) rotateX(90deg); }
    60%  { transform: translateY(4px) rotateX(-8deg); }
    100% { opacity: 1; transform: translateY(0) rotateX(0deg); }
  }
  @keyframes drawLine {
    from { width: 0; }
    to   { width: 100%; }
  }
  @keyframes bgShine {
    0%   { background-position: -400% center; }
    100% { background-position: 400% center; }
  }
  @keyframes badgePulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(0,0,0,0.10); }
    50%       { box-shadow: 0 0 0 8px rgba(0,0,0,0); }
  }

  .sb-track {
    display: flex;
    width: max-content;
  }
  .sb-track-left  { animation: toLeft  34s linear infinite; }
  .sb-track-right { animation: toRight 24s linear infinite; }
  .sb-track:hover { animation-play-state: paused; }

  .sb-logo-wrap {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0 100px;
    cursor: pointer;
    transition: transform 0.25s;
  }
  .sb-logo-wrap:hover { transform: scale(1.18); }
  .sb-logo-wrap img {
    height: 90px;
    width: auto;
    max-width: 200px;
    object-fit: contain;
    filter: grayscale(1) brightness(0) opacity(0.18);
    transition: filter 0.3s;
  }
  .sb-logo-wrap:hover img {
    filter: grayscale(0) brightness(1) opacity(1);
  }

  .sb-sep {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: #e0e0e0;
    flex-shrink: 0;
    align-self: center;
  }

  /* same tilt direction for both rows */
  .sb-tilt {
    transform: rotate(-3deg) scaleX(1.1);
    transform-origin: center;
  }

  .sb-mask {
    overflow: hidden;
    -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
    mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
  }

  .sb-anim-letter {
    display: inline-block;
    opacity: 0;
    animation: letterDrop 0.55s cubic-bezier(0.22,1,0.36,1) forwards;
  }

  .sb-bg-text {
    font-size: clamp(72px, 13vw, 150px);
    font-weight: 900;
    letter-spacing: -4px;
    white-space: nowrap;
    pointer-events: none;
    user-select: none;
    background: linear-gradient(90deg,
      #555 0%, #555 20%,
      #111 38%, #888 50%, #111 62%,
      #555 80%, #555 100%
    );
    background-size: 300% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: bgShine 4s linear infinite;
    filter: drop-shadow(0 0 18px rgba(0,0,0,0.55)) drop-shadow(0 0 40px rgba(0,0,0,0.35));
  }

  .sb-badge {
    display: inline-block;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 3px;
    color: #666;
    text-transform: uppercase;
    background: #f3f4f6;
    padding: 6px 20px;
    border-radius: 50px;
    animation: badgePulse 2.4s ease-in-out infinite;
  }

  .sb-heading {
    font-size: clamp(32px, 5vw, 56px);
    font-weight: 900;
    color: #111;
    letter-spacing: -2px;
    line-height: 1;
    display: inline-block;
  }
  .sb-underline {
    display: block;
    height: 4px;
    background: #111;
    border-radius: 2px;
    margin-top: 8px;
    animation: drawLine 1s cubic-bezier(0.22,1,0.36,1) 1.3s both;
  }

  .sb-btn {
    background: #111;
    color: #fff;
    border: none;
    border-radius: 50px;
    padding: 15px 44px;
    font-size: 14px;
    font-weight: 800;
    cursor: pointer;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
  }
  .sb-btn:hover {
    background: #333;
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(0,0,0,0.16);
  }
`;

const WORD = "Shop by Brand";

export default function Homeeight() {
  const d1 = [...brands, ...brands];
  const d2 = [...brands.slice(5), ...brands.slice(0, 5), ...brands.slice(5), ...brands.slice(0, 5)];

  return (
    <section style={{ padding: "90px 0 80px", background: "#fff", overflow: "hidden" }}>
      <style>{css}</style>

      {/* ── Stacked layout: sliders behind, text on top ── */}
      <div style={{ position: "relative" }}>

        {/* ── SLIDERS LAYER (z-index 0) ── */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0, display: "flex", flexDirection: "column", justifyContent: "center", gap: 72, pointerEvents: "none" }}>

          {/* Row 1 — scrolls left */}
          <div className="sb-tilt">
            <div className="sb-mask" style={{ padding: "40px 0" }}>
              <div className="sb-track sb-track-left" style={{ pointerEvents: "auto" }}>
                {d1.map((b, i) => (
                  <span key={i} className="sb-logo-wrap">
                    <img src={b.logo} alt={b.name} />
                    {i < d1.length - 1 && <span className="sb-sep" style={{ marginLeft: 56 }} />}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Row 2 — scrolls right, same tilt */}
          <div className="sb-tilt">
            <div className="sb-mask" style={{ padding: "40px 0" }}>
              <div className="sb-track sb-track-right" style={{ pointerEvents: "auto" }}>
                {d2.map((b, i) => (
                  <span key={i} className="sb-logo-wrap">
                    <img src={b.logo} alt={b.name} />
                    {i < d2.length - 1 && <span className="sb-sep" style={{ marginLeft: 56 }} />}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── TEXT LAYER (z-index 1) ── */}
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "80px 20px" }}>

          {/* Giant ghost BG text */}
          <div style={{ marginBottom: 8 }}>
            <span className="sb-bg-text" aria-hidden="true">BRANDS</span>
          </div>

          {/* Badge */}
          <div style={{ marginBottom: 16 }}>
            <span className="sb-badge">✦ Trusted Brands ✦</span>
          </div>

          {/* Letter-drop heading */}
          <h2 className="sb-heading">
            {WORD.split("").map((ch, i) => (
              <span key={i} className="sb-anim-letter" style={{ animationDelay: `${i * 0.055}s` }}>
                {ch === " " ? "\u00A0" : ch}
              </span>
            ))}
            <span className="sb-underline" />
          </h2>

          <p style={{ fontSize: 15, color: "#9ca3af", marginTop: 14 }}>
            Explore the world's top brands — all in one place
          </p>
        </div>
      </div>

      {/* ── CTA ── */}
      <div style={{ textAlign: "center", marginTop: 48 }}>
        <button className="sb-btn">View All Brands</button>
      </div>
    </section>
  );
}
