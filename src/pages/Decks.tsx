import { Reveal, Icons, WHATSAPP, REAL_IMAGES } from "../shared";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import CtaBanner from "../components/CtaBanner";
import GallerySection from "../components/GallerySection";

const img = (w, h, seed) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

const DECK_SERVICES = [
  { icon: "deck", title: "דקים מעץ טבעי", desc: "דקים מעץ אורן, טיק וארז — עמידים, טבעיים ומתאימים לכל סטייל בית" },
  { icon: "custom", title: "דקים מרוכבים (קומפוזיט)", desc: "דקים מחומרים מרוכבים בתחזוקה נמוכה ועמידות גבוהה לתנאי חוץ" },
  { icon: "pergola", title: "פרגולות ודקים משולבים", desc: "שילוב דק ופרגולה ליצירת פינת ישיבה מוצללת ונעימה בכל שעות היום" },
  { icon: "pool", title: "דקים לבריכה ולג'קוזי", desc: "דקים אנטי סליפ סביב בריכות שחייה וג'קוזי, כולל הכנת תשתית מלאה" },
  { icon: "wall", title: "חיפוי קירות עץ", desc: "חיפויי עץ לקירות חוץ ופנים להשלמת המראה הטבעי והחם של הדק" },
  { icon: "renovation", title: "שיפוץ ותחזוקת דקים קיימים", desc: "שיקום, החלפת קרשים וטיפול משמר לדקים ישנים כדי להחזיר אותם לחיים" },
];

const MATERIALS = [
  { title: "עץ טיק", desc: "עמידות גבוהה, מראה יוקרתי ואינו רגיש ללחות" },
  { title: "עץ אורן מחוגן", desc: "פתרון כלכלי ואיכותי לדקים ולפרגולות" },
  { title: "קומפוזיט", desc: "תחזוקה מינימלית, עמיד בפני קורוזיה וקרינת UV" },
  { title: "עץ ארז", desc: "ריח טבעי, קלילות ועמידות מצוינת בתנאי חוץ" },
];

export default function Decks() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0">
          <img src={img(1920, 1080, "deckhero2")} alt="" className="w-full h-full object-cover" style={{ opacity: 0.4, filter: "brightness(0.5)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.85) 70%, #0a0a0a 100%)" }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <span className="text-gold text-sm md:text-base tracking-widest uppercase" style={{ letterSpacing: "0.25em" }}>עבודות דקים</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mt-6 mb-6" style={{ fontFamily: "Georgia, serif" }}>
              דקים <span className="text-gold">שהופכים חצר לחלל חיים</span>
            </h1>
            <p className="text-base md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
              תכנון והקמת דקים מעץ טבעי ומרוכב, פרגולות משולבות ותשתיות לבריכות וג'קוזי — בהתאמה מלאה לחצר ולסטייל הבית שלכם.
            </p>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-4 rounded-full text-base font-medium inline-flex items-center gap-3">
              {Icons.whatsapp} לקבלת הצעת מחיר לדק
            </a>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 px-6" style={{ background: "#111" }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-gold text-sm tracking-widest uppercase" style={{ letterSpacing: "0.2em" }}>מה אנחנו מציעים</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-4" style={{ fontFamily: "Georgia, serif" }}>שירותי <span className="text-gold">דקים</span></h2>
              <p className="text-white/40 max-w-xl mx-auto">מהתכנון ועד ההתקנה — כל מה שהחצר שלכם צריכה</p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {DECK_SERVICES.map((s, i) => (
              <Reveal key={i} delay={(i % 3) * 0.1}>
                <div className="service-card rounded-2xl p-7 md:p-8 h-full flex flex-col">
                  <div className="text-gold mb-5">{Icons[s.icon]}</div>
                  <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed flex-1">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-20 md:py-28 px-6" style={{ background: "#0a0a0a" }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-gold text-sm tracking-widest uppercase" style={{ letterSpacing: "0.2em" }}>חומרים</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4" style={{ fontFamily: "Georgia, serif" }}>איזה <span className="text-gold">עץ</span> מתאים לכם?</h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MATERIALS.map((m, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="p-6 rounded-2xl text-center" style={{ background: "linear-gradient(145deg, #141414, #1a1a1a)", border: "1px solid #222" }}>
                  <h3 className="text-lg font-bold mb-2 text-gold">{m.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{m.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <GallerySection eyebrow="גלריה" title={<>עבודות <span className="text-gold">דקים</span></>} images={REAL_IMAGES} />

      <CtaBanner title="רוצים דק חדש לחצר?" subtitle="השאירו פרטים ונחזור אליכם עם הצעת מחיר מפורטת לדק תוך 24 שעות" />
      <ContactSection />
      <Footer />
    </>
  );
}
