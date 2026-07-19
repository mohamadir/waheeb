import { Reveal, Icons, WHATSAPP, PHONE } from "../shared";

export default function ContactSection() {
  return (
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
                      <div className="text-white/80 group-hover:text-gold transition-colors" dir="ltr">054-527-0102</div>
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
  );
}
