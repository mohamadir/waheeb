import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Icons, WHATSAPP, LOGO } from "../shared";

const NAV_ITEMS = [
  { label: "ראשי", to: "/" },
  { label: "שיפוצים", to: "/renovations" },
  { label: "דקים", to: "/decks" },
  { label: "גלריה", hash: "#gallery" },
  { label: "למה אנחנו", hash: "#why-us" },
  { label: "צור קשר", hash: "#contact" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const goHash = (hash) => {
    setMenuOpen(false);
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/" + hash);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 transition-all duration-500" style={{ background: scrolled ? "rgba(10,10,10,0.92)" : "transparent", backdropFilter: scrolled ? "blur(20px)" : "none", borderBottom: scrolled ? "1px solid rgba(201,149,107,0.1)" : "1px solid transparent" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between" style={{ height: scrolled ? 64 : 80, transition: "height 0.4s" }}>
        <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-3">
          <img src={LOGO} alt="והיב גבר" className="rounded-md" style={{ height: scrolled ? 48 : 60, width: "auto", transition: "height 0.4s" }} />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => item.to ? (
            <Link key={item.label} to={item.to} onClick={() => setMenuOpen(false)} className="text-sm text-white/60 hover:text-gold transition-colors duration-300">{item.label}</Link>
          ) : (
            <a key={item.label} href={item.hash} onClick={(e) => { e.preventDefault(); goHash(item.hash); }} className="text-sm text-white/60 hover:text-gold transition-colors duration-300">{item.label}</a>
          ))}
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-2">{Icons.whatsapp} דברו איתנו</a>
        </div>
        <button className="md:hidden text-white/80" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? Icons.close : Icons.menu}</button>
      </div>
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/5" style={{ animation: "slideDown 0.3s ease" }}>
          <div className="px-6 py-6 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => item.to ? (
              <Link key={item.label} to={item.to} onClick={() => setMenuOpen(false)} className="text-lg text-white/70 hover:text-gold py-2 transition-colors">{item.label}</Link>
            ) : (
              <a key={item.label} href={item.hash} onClick={(e) => { e.preventDefault(); goHash(item.hash); }} className="text-lg text-white/70 hover:text-gold py-2 transition-colors">{item.label}</a>
            ))}
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary px-5 py-3 rounded-full text-center font-medium flex items-center justify-center gap-2 mt-2">{Icons.whatsapp} דברו איתנו</a>
          </div>
        </div>
      )}
    </nav>
  );
}
