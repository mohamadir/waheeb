import { useState, useEffect, useRef } from "react";

export const PHONE = "972545270102";
export const WHATSAPP = `https://wa.me/${PHONE}`;
export const LOGO = "./assets/logo.jpg";

// Intersection Observer hook
export function useInView(threshold = 0.15) {
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
export function Reveal({ children, className = "", delay = 0 }) {
  const [ref, inView] = useInView(0.1);
  return (
    <div ref={ref} className={className} style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(40px)", transition: `opacity 0.8s cubic-bezier(.16,1,.3,1) ${delay}s, transform 0.8s cubic-bezier(.16,1,.3,1) ${delay}s` }}>
      {children}
    </div>
  );
}

// SVG Icons
export const Icons = {
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
  wall: <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M3 4h18v16H3V4zM3 12h18M9 4v8M15 12v8M3 20h18"/></svg>,
  paint: <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M19 11l-6-6-9 9v6h6l9-9zM13 5l3 3M3 21h18"/></svg>,
  kitchen: <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M4 3h16v10H4V3zM4 13v8h16v-8M8 17h.01M12 17h.01M16 17h.01"/></svg>,
  pool: <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M2 17c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0 3-1 4.5 0M4 12V6a2 2 0 012-2h12a2 2 0 012 2v6M2 21c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0 3-1 4.5 0"/></svg>,
  floor: <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M3 9h18M3 15h18M9 3v18M15 3v18" /></svg>,
};

export const REAL_IMAGES = [
  { src: "./assets/469072085_914339717455485_584447339133527914_n.jpg", alt: "עבודת עץ" },
  { src: "./assets/480164609_966084215614368_3032582353773392662_n.jpg", alt: "עבודת עץ" },
  { src: "./assets/469141292_914339520788838_1965705342429879214_n.jpg", alt: "עבודת עץ" },
  { src: "./assets/468821339_914339730788817_2834655601956945151_n.jpg", alt: "עבודת עץ" },
  { src: "./assets/480297975_966084195614370_3285452858965210655_n.jpg", alt: "עבודת עץ" },
  { src: "./assets/480597210_968085852080871_734977252039354232_n.jpg", alt: "עבודת עץ" },
  { src: "./assets/469122433_914339404122183_4078743555936696940_n.jpg", alt: "עבודת עץ" },
  { src: "./assets/480435003_965807902308666_4731608544437405450_n.jpg", alt: "עבודת עץ" },
];

export const TRUST = [
  { num: "15+", label: "שנות ניסיון" },
  { num: "500+", label: "פרויקטים שהושלמו" },
  { num: "100%", label: "שביעות רצון" },
  { num: "5★", label: "דירוג ממוצע" },
];

export const GLOBAL_STYLES = `
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
`;

// Lightbox
export function Lightbox({ src, alt, onClose }) {
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
