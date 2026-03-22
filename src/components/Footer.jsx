import { motion } from 'framer-motion';
import { ArrowUpRight, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full relative mt-auto pt-20 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-6 pb-20 grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10 items-center">
        <div className="flex justify-center md:justify-end pr-0 md:pr-4">
           {/* Profile shot in Footer matching reference */}
           <div className="w-32 h-40 md:w-48 md:h-64 rounded-2xl overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl">
             <img 
                src="/profile-edizon.png" 
                alt="Profile Footer" 
                className="w-full h-full object-cover"
             />
             <div className="absolute -bottom-4 -left-4 bg-accent w-10 h-10 rounded-full flex items-center justify-center text-black border-4 border-primary shadow-lg animate-bounce-slow">
                <span className="w-2 h-2 rounded-full bg-black"></span>
             </div>
           </div>
        </div>

        <div className="flex flex-col items-start text-left max-w-lg">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4 text-text_main">
            ¿TIENES UN RETO DE DATOS?
          </h2>
          <p className="text-text_muted text-base md:text-lg mb-10 leading-relaxed max-w-sm">
            Hagamos que tu información trabaje para ti. Estoy disponible para proyectos y consultoría estratégica en Business Intelligence.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center w-full">
            {/* Primary Button: Calendly */}
            <a 
              href="https://calendly.com/consultorbi-edizon/30min" 
              target="_blank" 
              rel="noreferrer" 
              className="group flex items-center justify-between bg-[#bfff00] rounded-full py-2.5 pl-8 pr-2.5 min-w-[280px] hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(191,255,0,0.2)]"
            >
              <span className="text-black font-black uppercase tracking-widest text-[13px]">
                Agendar Reunión
              </span>
              <div className="bg-black w-11 h-11 rounded-full flex items-center justify-center text-[#bfff00] transition-transform duration-500 group-hover:rotate-45">
                <ArrowUpRight size={22} strokeWidth={3} />
              </div>
            </a>

            {/* Secondary Button: WhatsApp */}
            <a 
              href="https://wa.me/51964614140" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-3 text-[#bfff00] font-bold uppercase tracking-widest text-xs py-3 px-6 hover:opacity-80 transition-opacity group"
            >
              <div className="p-2 rounded-full border border-white/10 group-hover:border-[#bfff00]/30 transition-colors">
                <MessageCircle size={20} />
              </div>
              <span>Chat Directo</span>
            </a>
          </div>
        </div>
      </div>

      {/* Extreme Lime Footer Bottom matching image perfectly */}
      <div className="w-full bg-accent text-primary pt-8 pb-4 px-6 md:px-12 relative z-10 flex flex-col md:flex-row justify-between items-end md:items-center text-xs font-bold gap-4 uppercase tracking-widest">
        <div className="flex flex-col gap-1 w-full md:w-auto text-left">
          <span>Edizon · Data Leader</span>
          <span className="text-primary/60 font-medium">©2024 All rights reserved</span>
        </div>
        
        <div className="flex gap-8 w-full md:w-auto justify-between md:justify-end">
          <a href="https://www.linkedin.com/in/edizoncv/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="https://www.linkedin.com/in/edizoncv/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Twitter (X)</a>
          <a href="https://www.linkedin.com/in/edizoncv/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
