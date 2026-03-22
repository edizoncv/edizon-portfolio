import { motion } from 'framer-motion';

export default function Header({ isDarkMode, toggleTheme }) {
  return (
    <motion.header 
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 w-full z-50 flex justify-center px-4"
    >
      <nav className="flex bg-card/80 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-border_subtle gap-6 items-center">
        <div className="w-5 h-5 rounded-full bg-text_main opacity-80 shrink-0 flex items-center justify-center text-[8px] text-primary font-bold">E</div>
        <a href="#home" className="text-xs font-semibold text-text_main uppercase tracking-widest hover:text-accent transition-colors">Inicio</a>
        <a href="#about" className="text-xs font-semibold text-text_muted uppercase tracking-widest hover:text-accent transition-colors">Sobre Mí</a>
        <a href="#projects" className="text-xs font-semibold text-text_muted uppercase tracking-widest hover:text-accent transition-colors">Soluciones</a>

        <a 
          href="https://calendly.com/consultorbi-edizon/30min" 
          target="_blank" 
          rel="noreferrer" 
          className="bg-text_main text-primary px-5 py-2 rounded-full text-xs font-bold hover:bg-accent hover:scale-105 transition-all shrink-0 ml-2"
        >
          Let's Talk
        </a>
      </nav>
    </motion.header>
  );
}
