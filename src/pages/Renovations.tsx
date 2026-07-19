import { Reveal, Icons, WHATSAPP, REAL_IMAGES } from "../shared";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import CtaBanner from "../components/CtaBanner";
import GallerySection from "../components/GallerySection";

const img = (w, h, seed) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

const RENOVATION_SERVICES = [
  { icon: "wall", title: "הריסה ובנייה", desc: "הריסת קירות, בנייה מחדש והתאמת חללים לצרכים שלכם — עם עמידה מלאה בתקנים" },
  { icon: "kitchen", title: "שיפוץ מטבחים", desc: "תכנון והקמת מטבחים מהיסוד — עד לפרטים הקטנים ביותר, בשילוב חיפויים וגימורים מודרניים" },
  { icon: "paint", title: "חיפוי וגימור", desc: "חיפויי קירות, טיח, צבע וגבס לתוצאה אסתטית ועמידה לאורך זמן" },
  { icon: "floor", title: "ריצוף והחלפת רצפות", desc: "פירוק והתקנת ריצוף בכל חלל בבית, כולל התאמת מפלסים וניקוז" },
  { icon: "renovation", title: "שיפוץ כללי", desc: "שיפוצים כלליים לדירה, בית פרטי או משרד — ליווי מלא מהתכנון ועד המסירה" },
  { icon: "pool", title: "הכנות תשתית לג'קוזי ובריכות", desc: "עבודות תשתית, אינסטלציה וביסוס לקראת התקנת ג'קוזי או בריכת שחייה" },
];

const PROCESS = [
  { step: "01", title: "פגישת ייעוץ", desc: "מגיעים לבית שלכם, מבינים את הצרכים ונותנים הצעת מחיר מפורטת" },
  { step: "02", title: "תכנון מדויק", desc: "בונים תכנית עבודה מלאה עם לוחות זמנים וחומרים מוסכמים מראש" },
  { step: "03", title: "ביצוע מקצועי", desc: "צוות מקצועי מבצע את העבודה תוך שמירה על ניקיון וסדר באתר" },
  { step: "04", title: "מסירה ואחריות", desc: "מסירת הפרויקט המוגמר עם אחריות מלאה על כל העבודה שבוצעה" },
];

export default function Renovations() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0">
          <img src={img(1920, 1080, "renovationinterior")} alt="" className="w-full h-full object-cover" style={{ opacity: 0.35, filter: "brightness(0.5)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.85) 70%, #0a0a0a 100%)" }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <span className="text-gold text-sm md:text-base tracking-widest uppercase" style={{ letterSpacing: "0.25em" }}>עבודות שיפוצים</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mt-6 mb-6" style={{ fontFamily: "Georgia, serif" }}>
              שיפוצים <span className="text-gold">מהיסוד ועד הגמר</span>
            </h1>
            <p className="text-base md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
              מהריסת קירות ועד גימור אחרון — אנחנו מלווים אתכם בכל שלב של השיפוץ, עם חומרים איכותיים, צוות מנוסה ועמידה בלוחות זמנים.
            </p>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-4 rounded-full text-base font-medium inline-flex items-center gap-3">
              {Icons.whatsapp} לקבלת הצעת מחיר לשיפוץ
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
              <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-4" style={{ fontFamily: "Georgia, serif" }}>שירותי <span className="text-gold">שיפוצים</span></h2>
              <p className="text-white/40 max-w-xl mx-auto">כל סוגי עבודות השיפוץ תחת קורת גג אחת</p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {RENOVATION_SERVICES.map((s, i) => (
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

      {/* Process */}
      <section className="py-20 md:py-28 px-6" style={{ background: "#0a0a0a" }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-gold text-sm tracking-widest uppercase" style={{ letterSpacing: "0.2em" }}>תהליך העבודה</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4" style={{ fontFamily: "Georgia, serif" }}>איך <span className="text-gold">זה עובד</span></h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="p-6">
                  <div className="text-gold text-4xl font-bold mb-4" style={{ fontFamily: "Georgia, serif", opacity: 0.5 }}>{p.step}</div>
                  <h3 className="text-lg font-bold mb-2">{p.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <GallerySection eyebrow="גלריה" title={<>עבודות <span className="text-gold">שיפוצים</span></>} images={REAL_IMAGES} />

      <CtaBanner title="רוצים לשפץ את הבית שלכם?" subtitle="השאירו פרטים ונחזור אליכם עם הצעת מחיר מפורטת לשיפוץ תוך 24 שעות" />
      <ContactSection />
      <Footer />
    </>
  );
}
