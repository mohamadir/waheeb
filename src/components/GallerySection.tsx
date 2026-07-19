import { useState } from "react";
import { Reveal, Lightbox } from "../shared";

export default function GallerySection({ id = "gallery", eyebrow = "גלריה", title, images }) {
  const [lightbox, setLightbox] = useState(null);
  return (
    <section id={id} className="py-20 md:py-28 px-6" style={{ background: "#0a0a0a" }}>
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-gold text-sm tracking-widest uppercase" style={{ letterSpacing: "0.2em" }}>{eyebrow}</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4" style={{ fontFamily: "Georgia, serif" }}>{title}</h2>
          </div>
        </Reveal>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((item, i) => (
            <Reveal key={i} delay={(i % 3) * 0.1}>
              <div className="gallery-item relative overflow-hidden rounded-2xl cursor-pointer break-inside-avoid" onClick={() => setLightbox(item)}>
                <img src={item.src} alt={item.alt} className="w-full object-cover transition-transform duration-700" loading="lazy" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white text-sm font-medium z-10 opacity-0 translate-y-2 transition-all duration-400" style={{ opacity: 0 }}
                  onMouseEnter={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.opacity = "0"; e.currentTarget.style.transform = "translateY(8px)"; }}>
                  {item.alt}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      {lightbox && <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />}
    </section>
  );
}
