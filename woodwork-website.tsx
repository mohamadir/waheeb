import { useState, useEffect, useRef } from "react";

const PHONE = "972501234567";
const WHATSAPP = `https://wa.me/${PHONE}`;

// Intersection Observer hook
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

// Animated section wrapper
function Reveal({ children, className = "", delay = 0 }) {
  const [ref, inView] = useInView(0.1);
  return (
    <div ref={ref} className={className} style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(40px)", transition: `opacity 0.8s cubic-bezier(.16,1,.3,1) ${delay}s, transform 0.8s cubic-bezier(.16,1,.3,1) ${delay}s` }}>
      {children}
    </div>
  );
}

// SVG Icons
const Icons = {
  phone: <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>,
  whatsapp: <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>,
  star: <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
  check: <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>,
  arrow: <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>,
  menu: <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16"/></svg>,
  close: <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" d="M6 18L18 6M6 6l12 12"/></svg>,
  deck: <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="10" width="20" height="3" rx="0.5"/><line x1="4" y1="13" x2="4" y2="21"/><line x1="20" y1="13" x2="20" y2="21"/><line x1="12" y1="13" x2="12" y2="21"/><line x1="2" y1="11" x2="22" y2="11"/><line x1="6" y1="10" x2="6" y2="13"/><line x1="10" y1="10" x2="10" y2="13"/><line x1="14" y1="10" x2="14" y2="13"/><line x1="18" y1="10" x2="18" y2="13"/></svg>,
  pergola: <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="5" y1="4" x2="5" y2="9"/><line x1="19" y1="4" x2="19" y2="9"/><line x1="5" y1="9" x2="5" y2="22"/><line x1="19" y1="9" x2="19" y2="22"/><line x1="8" y1="4" x2="8" y2="6"/><line x1="12" y1="4" x2="12" y2="6"/><line x1="16" y1="4" x2="16" y2="6"/></svg>,
  renovation: <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6M9 10h.01M15 10h.01"/></svg>,
  custom: <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>,
};

// Placeholder image URLs with warm wood tones
const img = (w, h, seed) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

const REAL_IMAGES = [
  { src: "./assets/469072085_914339717455485_584447339133527914_n.jpg", alt: "עבודת עץ" },
  { src: "./assets/480164609_966084215614368_3032582353773392662_n.jpg", alt: "עבודת עץ" },
  { src: "./assets/469141292_914339520788838_1965705342429879214_n.jpg", alt: "עבודת עץ" },
  { src: "./assets/468821339_914339730788817_2834655601956945151_n.jpg", alt: "עבודת עץ" },
  { src: "./assets/480297975_966084195614370_3285452858965210655_n.jpg", alt: "עבודת עץ" },
  { src: "./assets/480597210_968085852080871_734977252039354232_n.jpg", alt: "עבודת עץ" },
  { src: "./assets/469122433_914339404122183_4078743555936696940_n.jpg", alt: "עבודת עץ" },
  { src: "./assets/480435003_965807902308666_4731608544437405450_n.jpg", alt: "עבודת עץ" },
];

const NAV_ITEMS = [
  { label: "ראשי", href: "#hero" },
  { label: "שירותים", href: "#services" },
  { label: "גלריה", href: "#gallery" },
  { label: "עבודות", href: "#before-after" },
  { label: "למה אנחנו", href: "#why-us" },
  { label: "צור קשר", href: "#contact" },
];

const SERVICES = [
  { icon: "deck", title: "דקים", desc: "דקים מעץ טבעי ומרוכב בעיצוב מותאם אישית לכל חלל ותנאי מזג אוויר" },
  { icon: "pergola", title: "פרגולות", desc: "פרגולות יוקרתיות המשלבות אסתטיקה עם פונקציונליות להצללה מושלמת" },
  { icon: "renovation", title: "שיפוצים", desc: "שיפוצים כלליים ברמה הגבוהה ביותר עם תשומת לב לכל פרט ופרט" },
  { icon: "custom", title: "נגרות בהתאמה", desc: "ריהוט ופתרונות עץ בהתאמה אישית — מהחזון שלכם למציאות" },
];

const GALLERY = REAL_IMAGES;

const TRUST = [
  { num: "15+", label: "שנות ניסיון" },
  { num: "500+", label: "פרויקטים שהושלמו" },
  { num: "100%", label: "שביעות רצון" },
  { num: "5★", label: "דירוג ממוצע" },
];

const WHY_US = [
  "חומרי גלם פרימיום בלבד",
  "אחריות מלאה על כל פרויקט",
  "עיצוב מותאם אישית",
  "עמידה בלוחות זמנים",
  "ליווי צמוד מתחילת התכנון ועד הגמר",
  "מחירים הוגנים ושקופים",
];


// Lightbox
function Lightbox({ src, alt, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4" onClick={onClose}>
      <button className="absolute top-6 left-6 text-white/80 hover:text-white transition-colors" onClick={onClose}>{Icons.close}</button>
      <img src={src} alt={alt} className="max-w-full max-h-[85vh] rounded-xl object-contain" style={{ animation: "scaleIn 0.3s ease" }} />
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div dir="rtl" style={{ fontFamily: "'Segoe UI', Tahoma, Arial, sans-serif", background: "#0a0a0a", color: "#fff" }}>
      <style>{`
        @keyframes scaleIn { from { opacity:0; transform:scale(0.95) } to { opacity:1; transform:scale(1) } }
        @keyframes slideDown { from { opacity:0; transform:translateY(-10px) } to { opacity:1; transform:translateY(0) } }
        @keyframes shimmer { 0% { background-position: -200% 0 } 100% { background-position: 200% 0 } }
        @keyframes float { 0%,100% { transform: translateY(0px) } 50% { transform: translateY(-8px) } }
        @keyframes grain { 0%,100% { transform: translate(0,0) } 10% { transform: translate(-5%,-10%) } 30% { transform: translate(3%,-15%) } 50% { transform: translate(12%,9%) } 70% { transform: translate(9%,4%) } 90% { transform: translate(-1%,7%) } }
        ::selection { background: #c9956b; color: #fff }
        * { scrollbar-width: thin; scrollbar-color: #c9956b33 transparent; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        .wood-gradient { background: linear-gradient(135deg, #c9956b, #8b6914, #c9956b); background-size: 200% auto; }
        .text-gold { color: #c9956b; }
        .bg-gold { background-color: #c9956b; }
        .border-gold { border-color: #c9956b; }
        .gallery-item:hover img { transform: scale(1.08); }
        .gallery-item::after { content: ''; position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%); opacity: 0; transition: opacity 0.4s; }
        .gallery-item:hover::after { opacity: 1; }
        .service-card { background: linear-gradient(145deg, #141414, #1a1a1a); border: 1px solid #222; transition: all 0.4s cubic-bezier(.16,1,.3,1); }
        .service-card:hover { border-color: #c9956b44; transform: translateY(-6px); box-shadow: 0 20px 60px rgba(201,149,107,0.08); }
        .btn-primary { background: linear-gradient(135deg, #c9956b 0%, #a07548 100%); color: #fff; transition: all 0.3s; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(201,149,107,0.35); }
        .btn-outline { border: 1.5px solid #c9956b; color: #c9956b; transition: all 0.3s; }
        .btn-outline:hover { background: #c9956b; color: #fff; }
        .counter-num { background: linear-gradient(135deg, #c9956b, #e8c49a); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .grain::before { content: ''; position: fixed; top: -50%; left: -50%; right: -50%; bottom: -50%; width: 200%; height: 200%; background: transparent url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E") repeat; animation: grain 8s steps(10) infinite; pointer-events: none; z-index: 100; }
      `}</style>

      <div className="grain" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 transition-all duration-500" style={{ background: scrolled ? "rgba(10,10,10,0.92)" : "transparent", backdropFilter: scrolled ? "blur(20px)" : "none", borderBottom: scrolled ? "1px solid rgba(201,149,107,0.1)" : "1px solid transparent" }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between" style={{ height: scrolled ? 64 : 80, transition: "height 0.4s" }}>
          <a href="#hero" onClick={(e) => { e.preventDefault(); scrollTo("#hero"); }} className="text-xl md:text-2xl font-bold tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
            <span className="text-gold">והיב גבר</span> <span className="text-white/90">— שיפוץ ועבודות עץ</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} onClick={(e) => { e.preventDefault(); scrollTo(item.href); }} className="text-sm text-white/60 hover:text-gold transition-colors duration-300">{item.label}</a>
            ))}
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-2">{Icons.whatsapp} דברו איתנו</a>
          </div>
          <button className="md:hidden text-white/80" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? Icons.close : Icons.menu}</button>
        </div>
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/5" style={{ animation: "slideDown 0.3s ease" }}>
            <div className="px-6 py-6 flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <a key={item.href} href={item.href} onClick={(e) => { e.preventDefault(); scrollTo(item.href); }} className="text-lg text-white/70 hover:text-gold py-2 transition-colors">{item.label}</a>
              ))}
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary px-5 py-3 rounded-full text-center font-medium flex items-center justify-center gap-2 mt-2">{Icons.whatsapp} דברו איתנו</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={img(1920, 1080, "woodhero")} alt="" className="w-full h-full object-cover" style={{ opacity: heroLoaded ? 0.4 : 0, transition: "opacity 1.5s ease", filter: "brightness(0.5)" }} onLoad={() => {}} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.8) 70%, #0a0a0a 100%)" }} />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10 md:gap-0" style={{ opacity: heroLoaded ? 1 : 0, transform: heroLoaded ? "translateY(0)" : "translateY(30px)", transition: "all 1.2s cubic-bezier(.16,1,.3,1) 0.3s" }}>

          {/* Profile Image — right side (RTL first child) */}
          <div className="flex-shrink-0 flex justify-center md:justify-end w-full md:w-1/2" style={{ animation: "float 4s ease-in-out infinite" }}>
            <img
              src="/waheeb_profile.png"
              alt="והיב גבר"
              style={{
                height: "min(75vh, 600px)",
                width: "auto",
                objectFit: "contain",
                objectPosition: "bottom center",
                filter: "drop-shadow(0 0 60px rgba(201,149,107,0.30))",
              }}
            />
          </div>

          {/* Text — left side */}
          <div className="w-full md:w-1/2 text-center md:text-right flex flex-col items-center md:items-end">
            <div className="inline-block mb-6">
              <span className="text-gold text-sm md:text-base tracking-widest uppercase" style={{ letterSpacing: "0.25em" }}>מלאכת עץ ברמה אחרת</span>
              <div className="h-px bg-gold mt-3 mr-auto" style={{ width: 60, opacity: 0.5 }} />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: "Georgia, serif", lineHeight: 1.15 }}>
              יוצרים לכם<br /><span className="text-gold">סביבת חיים</span> מעץ
            </h1>
            <p className="text-base md:text-xl text-white/50 max-w-lg mb-10 leading-relaxed">
              נגרות יוקרתית, דקים, פרגולות ושיפוצים ברמה הגבוהה ביותר.
              <br />מעל 15 שנות ניסיון ביצירת חללים שמדברים בעד עצמם.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-end gap-4">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-4 rounded-full text-base font-medium flex items-center gap-3 w-full sm:w-auto justify-center">
                {Icons.whatsapp} לקבלת הצעת מחיר
              </a>
              <a href="#gallery" onClick={(e) => { e.preventDefault(); scrollTo("#gallery"); }} className="btn-outline px-8 py-4 rounded-full text-base font-medium flex items-center gap-3 w-full sm:w-auto justify-center">
                צפו בעבודות שלנו {Icons.arrow}
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2" style={{ animation: "float 3s ease-in-out infinite" }}>
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#c9956b" strokeWidth="1.5" opacity="0.5"><path strokeLinecap="round" d="M12 5v14M5 12l7 7 7-7"/></svg>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-10 -mt-1" style={{ background: "linear-gradient(180deg, #0a0a0a, #111)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12 md:py-16" style={{ borderTop: "1px solid rgba(201,149,107,0.15)" }}>
            {TRUST.map((item, i) => (
              <Reveal key={i} delay={i * 0.1} className="text-center">
                <div className="counter-num text-3xl md:text-4xl font-bold mb-1" style={{ fontFamily: "Georgia, serif" }}>{item.num}</div>
                <div className="text-white/40 text-sm">{item.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 md:py-28 px-6" style={{ background: "#111" }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-gold text-sm tracking-widest uppercase" style={{ letterSpacing: "0.2em" }}>השירותים שלנו</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-4" style={{ fontFamily: "Georgia, serif" }}>מומחיות <span className="text-gold">שמשנה</span> חללים</h2>
              <p className="text-white/40 max-w-xl mx-auto">פתרונות עץ ושיפוץ מקצה לקצה, עם תשומת לב לכל פרט</p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((s, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="service-card rounded-2xl p-7 md:p-8 h-full flex flex-col">
                  <div className="text-gold mb-5">{Icons[s.icon]}</div>
                  <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed flex-1">{s.desc}</p>
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-gold text-sm mt-5 flex items-center gap-2 hover:gap-3 transition-all">
                    פרטים נוספים {Icons.arrow}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 md:py-28 px-6" style={{ background: "#0a0a0a" }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-gold text-sm tracking-widest uppercase" style={{ letterSpacing: "0.2em" }}>גלריה</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4" style={{ fontFamily: "Georgia, serif" }}>העבודות <span className="text-gold">שלנו</span></h2>
            </div>
          </Reveal>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {GALLERY.map((item, i) => (
              <Reveal key={i} delay={(i % 3) * 0.1}>
                <div className="gallery-item relative overflow-hidden rounded-2xl cursor-pointer break-inside-avoid" onClick={() => setLightbox(item)}>
                  <img src={item.src} alt={item.alt} className="w-full object-cover transition-transform duration-700" loading="lazy" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white text-sm font-medium z-10 opacity-0 translate-y-2 transition-all duration-400" style={{ opacity: 0 }}
                    onMouseEnter={(e) => { e.currentTarget.style.opacity = 1; e.currentTarget.style.transform = "translateY(0)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.opacity = 0; e.currentTarget.style.transform = "translateY(8px)"; }}>
                    {item.alt}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Works */}
      <section id="before-after" className="py-20 md:py-28 px-6" style={{ background: "#111" }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-gold text-sm tracking-widest uppercase" style={{ letterSpacing: "0.2em" }}>עבודות</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4" style={{ fontFamily: "Georgia, serif" }}>הפרויקטים <span className="text-gold">שלנו</span></h2>
            </div>
          </Reveal>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {REAL_IMAGES.map((item, i) => (
              <Reveal key={i} delay={(i % 3) * 0.1}>
                <div className="gallery-item relative overflow-hidden rounded-2xl cursor-pointer break-inside-avoid" onClick={() => setLightbox(item)}>
                  <img src={item.src} alt={item.alt} className="w-full object-cover transition-transform duration-700" loading="lazy" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why-us" className="py-20 md:py-28 px-6" style={{ background: "#0a0a0a" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <Reveal>
              <div>
                <span className="text-gold text-sm tracking-widest uppercase" style={{ letterSpacing: "0.2em" }}>למה לבחור בנו</span>
                <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-8" style={{ fontFamily: "Georgia, serif" }}>
                  מחויבות <span className="text-gold">לאיכות</span>
                  <br />ללא פשרות
                </h2>
                <div className="space-y-4">
                  {WHY_US.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-gold" style={{ background: "rgba(201,149,107,0.1)", border: "1px solid rgba(201,149,107,0.2)" }}>
                        {Icons.check}
                      </div>
                      <span className="text-white/70 group-hover:text-white transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="relative">
                <img src={img(700, 900, "craftsman")} alt="אומנות" className="w-full rounded-2xl object-cover" style={{ maxHeight: 550 }} loading="lazy" />
                <div className="absolute -bottom-6 -right-4 md:-right-8 bg-gold p-5 md:p-7 rounded-2xl shadow-2xl" style={{ maxWidth: 220 }}>
                  <div className="flex gap-1 mb-2">{[...Array(5)].map((_, i) => <span key={i} className="text-white">{Icons.star}</span>)}</div>
                  <p className="text-sm text-white/90 font-medium leading-relaxed">"התוצאה עלתה על כל הציפיות שלנו. מקצועיות ברמה הגבוהה ביותר."</p>
                  <p className="text-xs text-white/60 mt-2">— דני ומיכל, הרצליה</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 md:py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 wood-gradient opacity-90" />
        <div className="absolute inset-0" style={{ background: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <Reveal>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-5" style={{ fontFamily: "Georgia, serif", color: "#fff" }}>
              מוכנים להתחיל את הפרויקט הבא?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">צרו איתנו קשר היום לייעוץ ראשוני ללא עלות והצעת מחיר מותאמת אישית</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="bg-white text-black px-8 py-4 rounded-full font-bold text-base flex items-center gap-3 hover:bg-white/90 transition-colors w-full sm:w-auto justify-center">
                {Icons.whatsapp} WhatsApp
              </a>
              <a href={`tel:+${PHONE}`} className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-base flex items-center gap-3 hover:bg-white/10 transition-colors w-full sm:w-auto justify-center">
                {Icons.phone} חייגו עכשיו
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 md:py-28 px-6" style={{ background: "#0a0a0a" }}>
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <span className="text-gold text-sm tracking-widest uppercase" style={{ letterSpacing: "0.2em" }}>צור קשר</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4" style={{ fontFamily: "Georgia, serif" }}>נשמח <span className="text-gold">לשמוע</span> מכם</h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl p-8 md:p-12" style={{ background: "linear-gradient(145deg, #141414, #1a1a1a)", border: "1px solid #222" }}>
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-xl font-bold mb-6">פרטי התקשרות</h3>
                  <div className="space-y-5">
                    <a href={`tel:+${PHONE}`} className="flex items-center gap-4 text-white/60 hover:text-gold transition-colors group">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center text-gold" style={{ background: "rgba(201,149,107,0.1)" }}>{Icons.phone}</div>
                      <div>
                        <div className="text-xs text-white/30 mb-1">טלפון</div>
                        <div className="text-white/80 group-hover:text-gold transition-colors" dir="ltr">050-123-4567</div>
                      </div>
                    </a>
                    <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white/60 hover:text-gold transition-colors group">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center text-gold" style={{ background: "rgba(201,149,107,0.1)" }}>{Icons.whatsapp}</div>
                      <div>
                        <div className="text-xs text-white/30 mb-1">וואטסאפ</div>
                        <div className="text-white/80 group-hover:text-gold transition-colors">שלחו הודעה עכשיו</div>
                      </div>
                    </a>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center text-gold" style={{ background: "rgba(201,149,107,0.1)" }}>
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                      </div>
                      <div>
                        <div className="text-xs text-white/30 mb-1">אזור שירות</div>
                        <div className="text-white/80">מרכז והשרון</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 pt-8" style={{ borderTop: "1px solid #222" }}>
                    <p className="text-white/30 text-sm">שעות פעילות</p>
                    <p className="text-white/60 text-sm mt-1">א׳ — ה׳: 08:00 — 18:00</p>
                    <p className="text-white/60 text-sm">ו׳: 08:00 — 13:00</p>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center text-center p-8 rounded-2xl" style={{ background: "rgba(201,149,107,0.05)", border: "1px solid rgba(201,149,107,0.1)" }}>
                  <div className="text-gold mb-4">
                    <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                  </div>
                  <h4 className="text-lg font-bold mb-3">ייעוץ ראשוני חינם</h4>
                  <p className="text-white/40 text-sm mb-6 leading-relaxed">ספרו לנו על הפרויקט שלכם ונחזור אליכם עם הצעה מפורטת תוך 24 שעות</p>
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-3.5 rounded-full font-medium flex items-center gap-3">
                    {Icons.whatsapp} שלחו הודעה
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center" style={{ borderTop: "1px solid #1a1a1a" }}>
        <p className="text-white/20 text-sm">
          © 2026 והיב גבר — שיפוץ ועבודות עץ — כל הזכויות שמורות
        </p>
      </footer>

      {/* Sticky WhatsApp CTA */}
      <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 left-6 z-30 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:scale-110 transition-transform" style={{ boxShadow: "0 4px 20px rgba(37,211,102,0.4)" }}>
        <svg width="28" height="28" fill="#fff" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>

      {/* Lightbox */}
      {lightbox && <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />}
    </div>
  );
}
