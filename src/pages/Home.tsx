import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Reveal, Icons, WHATSAPP, REAL_IMAGES, TRUST } from "../shared";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import CtaBanner from "../components/CtaBanner";
import GallerySection from "../components/GallerySection";

const img = (w, h, seed) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

const SERVICES = [
  { icon: "renovation", title: "שיפוצים", desc: "שיפוצים כלליים מקצה לקצה — הריסה, בנייה, חיפויים וגימור ברמה הגבוהה ביותר", to: "/renovations" },
  { icon: "deck", title: "דקים", desc: "דקים מעץ טבעי ומרוכב בעיצוב מותאם אישית לכל חלל ותנאי מזג אוויר", to: "/decks" },
  { icon: "pergola", title: "פרגולות", desc: "פרגולות יוקרתיות המשלבות אסתטיקה עם פונקציונליות להצללה מושלמת" },
  { icon: "custom", title: "נגרות בהתאמה", desc: "ריהוט ופתרונות עץ בהתאמה אישית — מהחזון שלכם למציאות" },
];

const WHY_US = [
  "חומרי גלם פרימיום בלבד",
  "אחריות מלאה על כל פרויקט",
  "עיצוב מותאם אישית",
  "עמידה בלוחות זמנים",
  "ליווי צמוד מתחילת התכנון ועד הגמר",
  "מחירים הוגנים ושקופים",
];

export default function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 200);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Nav />

      {/* Hero */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={img(1920, 1080, "renovationhero")} alt="" className="w-full h-full object-cover" style={{ opacity: heroLoaded ? 0.4 : 0, transition: "opacity 1.5s ease", filter: "brightness(0.5)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.8) 70%, #0a0a0a 100%)" }} />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10 md:gap-0" style={{ opacity: heroLoaded ? 1 : 0, transform: heroLoaded ? "translateY(0)" : "translateY(30px)", transition: "all 1.2s cubic-bezier(.16,1,.3,1) 0.3s" }}>

          <div className="flex-shrink-0 flex justify-center md:justify-end w-full md:w-1/2" style={{ animation: "float 4s ease-in-out infinite" }}>
            <img
              src="./waheeb_profile.png"
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

          <div className="w-full md:w-1/2 text-center md:text-right flex flex-col items-center md:items-end">
            <div className="inline-block mb-6">
              <span className="text-gold text-sm md:text-base tracking-widest uppercase" style={{ letterSpacing: "0.25em" }}>שיפוצים ועבודות עץ ברמה אחרת</span>
              <div className="h-px bg-gold mt-3 mr-auto" style={{ width: 60, opacity: 0.5 }} />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: "Georgia, serif", lineHeight: 1.15 }}>
              משפצים את הבית <br /><span className="text-gold">שלכם</span>, מהיסוד
            </h1>
            <p className="text-base md:text-xl text-white/50 max-w-lg mb-10 leading-relaxed">
              עבודות שיפוצים כלליות, דקים ופרגולות, נגרות יוקרתית וחיפויי עץ ברמה הגבוהה ביותר.
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
              <p className="text-white/40 max-w-xl mx-auto">פתרונות שיפוץ ועץ מקצה לקצה, עם תשומת לב לכל פרט</p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((s, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="service-card rounded-2xl p-7 md:p-8 h-full flex flex-col">
                  <div className="text-gold mb-5">{Icons[s.icon]}</div>
                  <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed flex-1">{s.desc}</p>
                  {s.to ? (
                    <Link to={s.to} className="text-gold text-sm mt-5 flex items-center gap-2 hover:gap-3 transition-all">
                      פרטים נוספים {Icons.arrow}
                    </Link>
                  ) : (
                    <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-gold text-sm mt-5 flex items-center gap-2 hover:gap-3 transition-all">
                      פרטים נוספים {Icons.arrow}
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <GallerySection eyebrow="גלריה" title={<>העבודות <span className="text-gold">שלנו</span></>} images={REAL_IMAGES} />

      {/* Why Us */}
      <section id="why-us" className="py-20 md:py-28 px-6" style={{ background: "#111" }}>
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

      <CtaBanner />
      <ContactSection />
      <Footer />
    </>
  );
}
