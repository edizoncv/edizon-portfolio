import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Dev:        /api-proxy/pbiAgent → Vite proxy → Azure   (sin CORS)
// Producción: /api/pbi-agent      → Cloudflare Function → Azure (sin CORS)
const API_URL = import.meta.env.DEV
  ? '/api-proxy/pbiAgent'
  : '/api/pbi-agent';

const KPIS = [
  { label: 'Unidades vendidas', value: '4,821' },
  { label: 'Precio promedio', value: 'S/ 312K' },
  { label: 'Distritos activos', value: '38' },
];

const CHIPS = ['Top distritos', 'Mejor mes', 'Resumen ejecutivo'];

function RobotIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-7 h-7"
    >
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M12 2a3 3 0 0 1 3 3v6H9V5a3 3 0 0 1 3-3z" />
      <circle cx="9" cy="16" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="15" cy="16" r="1.5" fill="currentColor" stroke="none" />
      <path d="M8 20h8" />
      <line x1="12" y1="2" x2="12" y2="5" />
    </svg>
  );
}

function TypingDots() {
  return (
    <div className="flex items-center gap-1 py-2 px-1">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-2 h-2 rounded-full bg-[#bfff00]/60"
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -4, 0] }}
          transition={{ duration: 0.9, delay: i * 0.2, repeat: Infinity }}
        />
      ))}
    </div>
  );
}

export default function DatotAgent() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'ai',
      content:
        '<b>¡Hola!</b> Soy el agente IA del dashboard inmobiliario. Puedo ayudarte a analizar métricas, tendencias y patrones del mercado. ¿Qué deseas saber?',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open, loading]);

  const sendMessage = async (text) => {
    const question = text.trim();
    if (!question || loading) return;
    setMessages((prev) => [...prev, { role: 'user', content: question }]);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, dataContext: '' }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: 'ai', content: data.answer || 'Sin respuesta.' },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'ai',
          content:
            '<b>Error</b> al conectar con el agente. Intenta de nuevo.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="w-[340px] rounded-2xl overflow-hidden border border-[#1e1e1e] shadow-2xl flex flex-col"
            style={{ background: '#111', maxHeight: '72vh' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#1e1e1e] shrink-0">
              <div className="flex items-center gap-2">
                <span className="text-white font-bold text-sm tracking-wide">
                  datot{' '}
                  <span className="text-[#bfff00]">| agente ia</span>
                </span>
                <span className="flex items-center gap-1 bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  LIVE
                </span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white/40 hover:text-white transition-colors"
                aria-label="Cerrar chat"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* KPIs Strip */}
            <div className="flex gap-2 px-3 py-2.5 border-b border-[#1e1e1e] shrink-0">
              {KPIS.map((kpi) => (
                <button
                  key={kpi.label}
                  onClick={() => sendMessage(`Dame más detalle sobre ${kpi.label}`)}
                  className="flex-1 bg-[#161616] hover:bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#bfff00]/30 rounded-lg px-2 py-1.5 text-center transition-all duration-200 group"
                >
                  <div className="text-[#bfff00] font-bold text-xs group-hover:scale-105 transition-transform">
                    {kpi.value}
                  </div>
                  <div className="text-white/40 text-[9px] mt-0.5 leading-tight">
                    {kpi.label}
                  </div>
                </button>
              ))}
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-3 py-3 flex flex-col gap-3 scroll-smooth"
              style={{ scrollbarWidth: 'thin', scrollbarColor: '#2a2a2a #111' }}>
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[88%] rounded-xl px-3 py-2 text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'text-[#bfff00] rounded-br-sm'
                        : 'text-[#ccc] rounded-bl-sm'
                    }`}
                    style={{
                      background: msg.role === 'user' ? '#1a1f0a' : '#161616',
                    }}
                    dangerouslySetInnerHTML={{ __html: msg.content }}
                  />
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-[#161616] rounded-xl rounded-bl-sm px-3">
                    <TypingDots />
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Suggestion Chips */}
            <div className="flex gap-2 px-3 py-2 border-t border-[#1e1e1e] overflow-x-auto shrink-0"
              style={{ scrollbarWidth: 'none' }}>
              {CHIPS.map((chip) => (
                <button
                  key={chip}
                  onClick={() => sendMessage(chip)}
                  disabled={loading}
                  className="whitespace-nowrap text-[10px] font-semibold text-[#bfff00]/70 hover:text-[#bfff00] border border-[#bfff00]/20 hover:border-[#bfff00]/50 bg-[#bfff00]/5 hover:bg-[#bfff00]/10 px-3 py-1.5 rounded-full transition-all duration-200 disabled:opacity-40"
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="flex items-center gap-2 px-3 py-3 border-t border-[#1e1e1e] shrink-0">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={loading}
                placeholder="Pregunta algo al agente..."
                className="flex-1 bg-[#161616] text-white text-sm rounded-lg px-3 py-2 outline-none border border-[#2a2a2a] focus:border-[#bfff00] transition-colors placeholder:text-white/25 disabled:opacity-50"
              />
              <button
                onClick={() => sendMessage(input)}
                disabled={loading || !input.trim()}
                className="w-9 h-9 rounded-lg bg-[#bfff00] hover:bg-[#d4ff33] disabled:opacity-40 flex items-center justify-center shrink-0 transition-all duration-200 hover:scale-105"
                aria-label="Enviar mensaje"
              >
                <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Robot / Close Button */}
      <div className="relative">
        {/* Tooltip */}
        <AnimatePresence>
          {!open && (
            <motion.div
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 8 }}
              transition={{ delay: 1.5, duration: 0.3 }}
              className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap bg-[#1a1a1a] border border-[#2a2a2a] text-white text-xs px-3 py-1.5 rounded-lg pointer-events-none"
            >
              Pregunta a tu agente IA
              <span className="absolute right-[-5px] top-1/2 -translate-y-1/2 border-4 border-transparent border-l-[#2a2a2a]" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse ring (only when closed) */}
        {!open && (
          <>
            <span className="absolute inset-0 rounded-full bg-[#bfff00]/25 animate-ping" style={{ animationDuration: '1.8s' }} />
            <span className="absolute -inset-1.5 rounded-full bg-[#bfff00]/10 animate-ping" style={{ animationDuration: '2.4s', animationDelay: '0.4s' }} />
          </>
        )}

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.93 }}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Cerrar agente IA' : 'Abrir agente IA'}
          className="relative w-[58px] h-[58px] rounded-full flex items-center justify-center shadow-xl transition-colors duration-300 focus:outline-none"
          style={{
            background: open ? '#1a1a1a' : '#bfff00',
            border: open ? '2px solid #bfff00' : '2px solid transparent',
          }}
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.svg
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-6 h-6 text-[#bfff00]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </motion.svg>
            ) : (
              <motion.div
                key="robot"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-black"
              >
                <RobotIcon />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Global style for .hl in AI responses */}
      <style>{`
        .hl { color: #bfff00; font-weight: 600; }
      `}</style>
    </div>
  );
}
