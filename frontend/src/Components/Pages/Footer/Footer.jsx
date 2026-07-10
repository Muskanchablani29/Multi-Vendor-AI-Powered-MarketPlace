import { useState } from "react";
import {
  MapPin, Phone, Mail, ArrowRight, ShoppingBag,
  Shield, Truck, RefreshCw, Headphones, ChevronRight,
  CreditCard, Smartphone
} from "lucide-react";

const SvgFacebook  = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const SvgInstagram = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>;
const SvgTwitter   = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
const SvgYoutube   = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12z"/></svg>;
const SvgLinkedin  = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>;

const css = `
  @keyframes footerShine {
    0%   { background-position: -400% center; }
    100% { background-position: 400% center; }
  }
  .ft-link {
    display: flex; align-items: center; gap: 7px;
    font-size: 13.5px; color: #9ca3af;
    text-decoration: none; cursor: pointer;
    transition: color 0.2s, gap 0.2s;
    background: none; border: none; padding: 0;
    font-family: inherit; text-align: left;
  }
  .ft-link:hover { color: #fff; gap: 11px; }
  .ft-link .ft-arr { opacity: 0; transition: opacity 0.2s; flex-shrink: 0; }
  .ft-link:hover .ft-arr { opacity: 1; }

  .ft-social {
    width: 38px; height: 38px; border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.08);
    cursor: pointer; color: #9ca3af;
    transition: background 0.2s, transform 0.2s, border-color 0.2s, color 0.2s;
  }
  .ft-social:hover {
    background: rgba(255,255,255,0.14);
    border-color: rgba(255,255,255,0.22);
    transform: translateY(-3px); color: #fff;
  }

  .ft-input {
    flex: 1; background: rgba(255,255,255,0.07);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 12px; padding: 13px 18px;
    font-size: 13px; color: #fff; outline: none;
    font-family: inherit;
    transition: border-color 0.2s, background 0.2s;
  }
  .ft-input::placeholder { color: #4b5563; }
  .ft-input:focus {
    border-color: rgba(255,255,255,0.28);
    background: rgba(255,255,255,0.1);
  }

  .ft-sub-btn {
    background: #fff; color: #111; border: none;
    border-radius: 12px; padding: 13px 22px;
    font-size: 13px; font-weight: 800; cursor: pointer;
    display: flex; align-items: center; gap: 6px;
    transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
    white-space: nowrap; font-family: inherit;
  }
  .ft-sub-btn:hover {
    background: #e5e7eb; transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.35);
  }

  .ft-trust {
    display: flex; align-items: center; gap: 12px;
    padding: 16px 20px; border-radius: 14px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.07);
    flex: 1; min-width: 200px;
    transition: background 0.2s, border-color 0.2s;
  }
  .ft-trust:hover {
    background: rgba(255,255,255,0.08);
    border-color: rgba(255,255,255,0.13);
  }

  .ft-pay {
    display: inline-flex; align-items: center; justify-content: center;
    padding: 6px 14px; border-radius: 8px;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.09);
    font-size: 11px; font-weight: 700; color: #9ca3af;
    letter-spacing: 0.4px;
    transition: background 0.2s, color 0.2s;
  }
  .ft-pay:hover { background: rgba(255,255,255,0.12); color: #e5e7eb; }

  .ft-bot-link {
    font-size: 12px; color: #4b5563; cursor: pointer;
    background: none; border: none; font-family: inherit;
    transition: color 0.2s; padding: 0;
  }
  .ft-bot-link:hover { color: #9ca3af; }

  .ft-divider {
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(255,255,255,0.09) 20%, rgba(255,255,255,0.09) 80%, transparent);
  }

  .ft-logo-text {
    background: linear-gradient(90deg, #fff 0%, #fff 30%, #aaa 45%, #fff 50%, #aaa 55%, #fff 70%, #fff 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: footerShine 5s linear infinite;
  }
`;

const navLinks = {
  "Shop":             ["New Arrivals", "Best Sellers", "Flash Deals", "Trending Products", "Featured Collections", "All Categories"],
  "Account":          ["My Profile", "My Orders", "Wishlist", "Cart", "Track Order", "Returns & Refunds"],
  "Sell on NovaMart": ["Become a Seller", "Seller Dashboard", "Seller Analytics", "Seller Guidelines", "Seller Support", "Success Stories"],
  "Company":          ["About Us", "Careers", "Press & Media", "Blog", "Investor Relations", "Sustainability"],
};

const socials = [SvgFacebook, SvgInstagram, SvgTwitter, SvgYoutube, SvgLinkedin];

const trust = [
  { icon: Truck,      title: "Free Delivery",  sub: "On orders above ₹499" },
  { icon: RefreshCw,  title: "Easy Returns",    sub: "7-day hassle-free returns" },
  { icon: Shield,     title: "Secure Payments", sub: "100% protected checkout" },
  { icon: Headphones, title: "24/7 Support",    sub: "Always here to help" },
];

const payments = ["Visa", "Mastercard", "UPI", "Razorpay", "Net Banking", "EMI", "COD"];

export default function Footer() {
  const [email, setEmail]           = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const handleSub = () => { if (email.trim()) { setSubscribed(true); setEmail(""); } };

  return (
    <footer style={{ background: "#0a0a0a", color: "#fff", fontFamily: "inherit" }}>
      <style>{css}</style>

      {/* ── Trust strip ── */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "28px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", gap: 14, flexWrap: "wrap" }}>
          {trust.map((t, i) => (
            <div key={i} className="ft-trust">
              <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <t.icon size={18} color="#d1d5db" />
              </div>
              <div>
                <p style={{ fontSize: 13, fontWeight: 800, color: "#f3f4f6", margin: "0 0 2px" }}>{t.title}</p>
                <p style={{ fontSize: 11, color: "#6b7280", margin: 0 }}>{t.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Main body ── */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 40px 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.7fr 1fr 1fr 1fr 1fr", gap: 48 }}>

          {/* Brand column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <div style={{ width: 42, height: 42, borderRadius: 12, background: "linear-gradient(135deg,#fff,#d1d5db)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <ShoppingBag size={20} color="#111" />
              </div>
              <span className="ft-logo-text" style={{ fontSize: 26, fontWeight: 900, letterSpacing: -1 }}>NovaMart</span>
            </div>

            <p style={{ fontSize: 13.5, color: "#6b7280", lineHeight: 1.8, marginBottom: 28, maxWidth: 270 }}>
              AI-powered multi-vendor marketplace connecting buyers and sellers. Shop smarter, sell better.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 11, marginBottom: 32 }}>
              {[
                { Icon: MapPin, text: "Mumbai, Maharashtra, India" },
                { Icon: Phone,  text: "+91 98765 43210" },
                { Icon: Mail,   text: "support@novamart.in" },
              ].map(({ Icon, text }, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <Icon size={14} color="#4b5563" />
                  <span style={{ fontSize: 13, color: "#9ca3af" }}>{text}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 8 }}>
              {socials.map((Icon, i) => (
                <button key={i} className="ft-social"><Icon /></button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(navLinks).map(([heading, items]) => (
            <div key={heading}>
              <p style={{ fontSize: 12, fontWeight: 800, color: "#f9fafb", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 22 }}>
                {heading}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
                {items.map((item, i) => (
                  <button key={i} className="ft-link">
                    <ChevronRight size={11} className="ft-arr" />
                    {item}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Newsletter ── */}
        <div style={{ marginTop: 56 }}>
          <div className="ft-divider" style={{ marginBottom: 40 }} />
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40, flexWrap: "wrap" }}>
            <div>
              <p style={{ fontSize: 19, fontWeight: 900, color: "#f9fafb", margin: "0 0 6px", letterSpacing: -0.5 }}>Stay in the loop</p>
              <p style={{ fontSize: 13, color: "#6b7280", margin: 0 }}>Exclusive deals, AI picks & new arrivals — straight to your inbox.</p>
            </div>
            <div style={{ display: "flex", gap: 10, flex: 1, maxWidth: 460 }}>
              {subscribed ? (
                <div style={{ flex: 1, background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.22)", borderRadius: 12, padding: "13px 20px", fontSize: 13, fontWeight: 700, color: "#4ade80", textAlign: "center" }}>
                  ✓ You're subscribed! Welcome to NovaMart.
                </div>
              ) : (
                <>
                  <input className="ft-input" type="email" placeholder="Enter your email address" value={email} onChange={e => setEmail(e.target.value)} onKeyDown={e => e.key === "Enter" && handleSub()} />
                  <button className="ft-sub-btn" onClick={handleSub}>Subscribe <ArrowRight size={14} /></button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* ── Payment methods ── */}
        <div style={{ marginTop: 36 }}>
          <div className="ft-divider" style={{ marginBottom: 24 }} />
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginRight: 4 }}>
              <CreditCard size={13} color="#4b5563" />
              <span style={{ fontSize: 11, color: "#4b5563", fontWeight: 700, letterSpacing: 0.5, textTransform: "uppercase" }}>We Accept</span>
            </div>
            {payments.map((p, i) => <span key={i} className="ft-pay">{p}</span>)}
            <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 6 }}>
              <Smartphone size={13} color="#4b5563" />
              <span style={{ fontSize: 12, color: "#4b5563" }}>Available on iOS & Android</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", padding: "18px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
          <p style={{ fontSize: 12, color: "#374151", margin: 0 }}>
            © {new Date().getFullYear()} NovaMart Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            {["Privacy Policy", "Terms of Service", "Cookie Policy", "Sitemap"].map((item, i) => (
              <button key={i} className="ft-bot-link">{item}</button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
