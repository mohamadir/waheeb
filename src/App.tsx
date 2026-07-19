import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { GLOBAL_STYLES } from "./shared";
import Home from "./pages/Home";
import Renovations from "./pages/Renovations";
import Decks from "./pages/Decks";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) { el.scrollIntoView({ behavior: "smooth" }); return; }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <div dir="rtl" style={{ fontFamily: "'Segoe UI', Tahoma, Arial, sans-serif", background: "#0a0a0a", color: "#fff" }}>
      <style>{GLOBAL_STYLES}</style>
      <div className="grain" />
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/renovations" element={<Renovations />} />
          <Route path="/decks" element={<Decks />} />
        </Routes>
      </HashRouter>
    </div>
  );
}
