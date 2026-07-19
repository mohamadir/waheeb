import { Reveal, Icons, WHATSAPP, PHONE } from "../shared";

export default function CtaBanner({ title = "מוכנים להתחיל את הפרויקט הבא?", subtitle = "צרו איתנו קשר היום לייעוץ ראשוני ללא עלות והצעת מחיר מותאמת אישית" }) {
  return (
    <section className="py-20 md:py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 wood-gradient opacity-90" />
      <div className="absolute inset-0" style={{ background: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
      <Reveal>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-5" style={{ fontFamily: "Georgia, serif", color: "#fff" }}>
            {title}
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">{subtitle}</p>
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
  );
}
