const brands = [
  { name: "Apple",   color: "#f5f5f7", text: "#111", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { name: "Samsung", color: "#1428a0", text: "#fff", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
  { name: "Nike",    color: "#111",    text: "#fff", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" },
  { name: "Sony",    color: "#000",    text: "#fff", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg" },
  { name: "Puma",    color: "#e11d48", text: "#fff", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Puma_Logo.svg/320px-Puma_Logo.svg.png" },
  { name: "Dell",    color: "#007db8", text: "#fff", logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg" },
  { name: "HP",      color: "#0096d6", text: "#fff", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg" },
  { name: "Lenovo",  color: "#e2231a", text: "#fff", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Lenovo_logo_2015.svg" },
  { name: "boAt",    color: "#111",    text: "#c8f135", logo: null },
  { name: "Realme",  color: "#f5a623", text: "#111", logo: null },
];

export default function Homeeight() {
  return (
    <section style={{ padding: "48px 20px", background: "#fff" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: "#fff", background: "#4f8ef7", display: "inline-block", padding: "4px 14px", borderRadius: 50, marginBottom: 10 }}>TRUSTED BRANDS</p>
          <h2 style={{ fontSize: 36, fontWeight: 900, color: "#111", letterSpacing: -1 }}>Shop by Brand</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
          {brands.map((b, i) => (
            <div key={i} style={{ background: b.color, borderRadius: 20, padding: "28px 20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12, cursor: "pointer", transition: "transform 0.25s, box-shadow 0.25s", minHeight: 110, boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px) scale(1.03)"; e.currentTarget.style.boxShadow = "0 20px 48px rgba(0,0,0,0.15)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0) scale(1)"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.08)"; }}>
              {b.logo ? (
                <img src={b.logo} alt={b.name} style={{ height: 32, maxWidth: 100, objectFit: "contain", filter: b.text === "#fff" ? "brightness(0) invert(1)" : "none" }} />
              ) : (
                <span style={{ fontSize: 22, fontWeight: 900, color: b.text }}>{b.name}</span>
              )}
              {b.logo && <span style={{ fontSize: 13, fontWeight: 700, color: b.text, opacity: 0.85 }}>{b.name}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
