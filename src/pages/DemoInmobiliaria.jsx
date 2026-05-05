import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import DatotAgent from '../components/DatotAgent';

const PBI_EMBED_URL =
  'https://app.fabric.microsoft.com/view?r=eyJrIjoiYmZmMWZmNjctNDhiOC00OTQwLTlkZDEtOTRjMjRjYjczZGRmIiwidCI6IjZhNjUzMTg4LWFlYmYtNGNlNi04MDc5LTdlYmQ1YzE3Yzg4ZiJ9';

export default function DemoInmobiliaria() {
  useEffect(() => {
    document.title = 'Demo Inmobiliaria | DATOT';
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div
      className="flex flex-col w-screen h-screen overflow-hidden"
      style={{ background: '#0d0d0d' }}
    >
      {/* ── TOP BAR ── */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center justify-between px-5 py-3 border-b shrink-0"
        style={{ borderColor: '#1e1e1e', background: '#111' }}
      >
        {/* Logo + título */}
        <div className="flex items-center gap-3">
          {/* Logotipo DATOT */}
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-black text-sm tracking-tighter select-none"
              style={{ background: '#bfff00' }}
            >
              D
            </div>
            <span className="text-white font-bold text-sm tracking-widest uppercase hidden sm:block">
              DATOT
            </span>
          </div>

          {/* Separador */}
          <div className="w-px h-5 bg-white/10 hidden sm:block" />

          {/* Etiqueta de demo */}
          <div className="flex items-center gap-2">
            <span
              className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border"
              style={{
                color: '#bfff00',
                borderColor: '#bfff00',
                background: 'rgba(191,255,0,0.06)',
              }}
            >
              Demo
            </span>
            <span className="text-white/70 text-sm font-medium hidden md:block">
              Inmobiliaria · Global Spatial Abstract
            </span>
          </div>
        </div>

        {/* Acciones */}
        <div className="flex items-center gap-3">
          <a
            href={PBI_EMBED_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-white/50 hover:text-white transition-colors text-xs font-medium"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Abrir en Power BI
          </a>

          <Link
            to="/"
            className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full border transition-all duration-200 hover:scale-105"
            style={{
              color: '#bfff00',
              borderColor: '#bfff00',
              background: 'rgba(191,255,0,0.06)',
            }}
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
            <span className="hidden sm:inline">Cerrar</span>
          </Link>
        </div>
      </motion.div>

      {/* ── POWER BI IFRAME ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="flex-1 relative overflow-hidden"
        style={{ background: '#0d0d0d' }}
      >
        <iframe
          title="Global Spatial Abstract - Power BI"
          src={PBI_EMBED_URL}
          frameBorder="0"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          loading="lazy"
        />
      </motion.div>

      {/* ── DATOT AGENT (floating) ── */}
      <DatotAgent />
    </div>
  );
}
