import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

// Custom Animated Counter Component driven by scroll
function AnimatedCounter({ from, to, scrollProgress }) {
  // Map the 0-1 scroll progress to the number range
  const countValue = useTransform(scrollProgress, [0.3, 0.7], [from, to]);
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    return countValue.on("change", (latest) => {
      // Clamp values and round
      const clamped = Math.min(Math.max(latest, from), to);
      setDisplayValue(Math.floor(clamped));
    });
  }, [countValue, from, to]);

  return <span>{displayValue}</span>;
}

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Adding continuous slight movement tied to scroll for the card
  const rotateY = useTransform(scrollYProgress, [0, 1], [-25, -5]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 5]);
  const yOffset = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={containerRef} id="about" className="w-full max-w-7xl mx-auto px-6 mt-24 mb-32 relative">
      <div className="flex flex-col-reverse md:flex-row items-center gap-16 md:gap-24">
        
        {/* Left Column: Text and Counters */}
        <motion.div 
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:w-[55%] flex flex-col"
        >
          <h2 className="text-4xl md:text-5xl lg:text-[64px] font-black uppercase tracking-tighter mb-4 text-text_main">Sobre Mí</h2>
          <p className="text-[#cccccc] text-sm md:text-base leading-relaxed mb-10 max-w-lg">
            Soy Edizon, y mi misión es eliminar la fricción entre los datos y las personas. No solo construyo reportes; diseño herramientas de decisión que permiten a los líderes entender su negocio al primer vistazo, combinando robustez técnica con una visualización centrada en el usuario.
          </p>
          
          <div className="flex flex-wrap gap-x-12 gap-y-8 mb-10">
            <div className="flex flex-col">
              <div className="text-5xl md:text-[64px] font-bold text-accent mb-1 drop-shadow-[0_0_15px_rgba(204,255,0,0.2)] flex items-center tracking-tighter">
                <span>+</span>
                <AnimatedCounter from={0} to={32} scrollProgress={scrollYProgress} />
                <span>%</span>
              </div>
              <div className="text-xs md:text-sm font-bold text-text_main tracking-wide">Velocidad en decisiones</div>
            </div>
            
            <div className="flex flex-col">
               <div className="text-5xl md:text-[64px] font-bold text-accent mb-1 drop-shadow-[0_0_15px_rgba(204,255,0,0.2)] flex items-center tracking-tighter">
                 <AnimatedCounter from={0} to={48} scrollProgress={scrollYProgress} />
                 <span>%</span>
               </div>
               <div className="text-xs md:text-sm font-bold text-text_main tracking-wide">Reducción de tareas autom.</div>
            </div>

            <div className="flex flex-col">
               <div className="text-5xl md:text-[64px] font-bold text-accent mb-1 drop-shadow-[0_0_15px_rgba(204,255,0,0.2)] flex items-center tracking-tighter">
                 <AnimatedCounter from={0} to={27} scrollProgress={scrollYProgress} />
                 <span>%</span>
               </div>
               <div className="text-xs md:text-sm font-bold text-text_main tracking-wide">Precisión en modelos.</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 sm:gap-20 mb-10">
              <div className="flex flex-col gap-1">
                  <span className="text-text_main font-bold text-sm md:text-base">Contacto :</span>
                  <span className="text-text_muted text-sm md:text-base">+51 964614140</span>
              </div>
              <div className="flex flex-col gap-1">
                  <span className="text-text_main font-bold text-sm md:text-base">Email :</span>
                  <span className="text-text_muted text-sm md:text-base">consultorbi.edizon@gmail.com</span>
              </div>
          </div>

          <div className="flex gap-6 mb-12 items-center">
             <a href="https://www.linkedin.com/in/edizoncv/" target="_blank" rel="noreferrer" className="text-text_main hover:text-accent transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                </svg>
             </a>
             <a href="https://www.linkedin.com/in/edizoncv/" target="_blank" rel="noreferrer" className="text-text_main hover:text-accent transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
             </a>
             <a href="https://www.linkedin.com/in/edizoncv/" target="_blank" rel="noreferrer" className="text-text_main hover:text-accent transition-colors">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                   <path d="M8.22 17c2.09 0 3.19-.94 3.19-2.91 0-1.61-1-2.48-2.61-2.48H5.16v5.39h3.06zM5.16 7.42h2.77c1.47 0 2.36.7 2.36 2.05 0 1.55-1.12 2.05-2.58 2.05H5.16V7.42zm11.02 5.03c0-.98-.67-1.46-1.55-1.46-.88 0-1.58.55-1.58 1.46h3.13zm.14-3.41h-2.94V7.93h2.94v1.11zm-4.39 5.86c0 2.05 1.49 3.09 3.26 3.09 1.47 0 2.66-.59 3.16-1.89h-1.45c-.32.61-.92.89-1.69.89-1.07 0-1.78-.59-1.78-1.55h4.94v-.44c0-2.31-1.39-3.26-3.15-3.26-1.92 0-3.3 1.25-3.3 3.16zm-7.64-7.48H2v10.58h6.58c2.95 0 5.02-1.47 5.02-4.13 0-1.52-.94-2.7-2.36-3.23 1.05-.51 1.76-1.49 1.76-2.69 0-2.38-1.87-3.66-4.59-3.66H4.29v3.13z"></path>
                </svg>
             </a>
             <a href="https://www.linkedin.com/in/edizoncv/" target="_blank" rel="noreferrer" className="text-text_main hover:text-accent transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path></svg>
             </a>
          </div>

          <button className="flex items-center justify-center text-sm lg:text-base font-bold uppercase tracking-widest text-accent border border-[#333333] rounded-full px-8 py-3 w-fit hover:bg-accent hover:border-accent hover:text-black transition-all shadow-sm">
            My Story
          </button>
        </motion.div>

        {/* Right Column: 3D Floating Card */}
        <div className="w-full md:w-1/2 flex justify-center perspective-[1000px]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ 
              rotateY, 
              rotateX,
              y: yOffset,
              transformStyle: "preserve-3d"
            }}
            className="relative w-64 h-[22rem] sm:w-80 sm:h-[28rem] rounded-3xl shadow-2xl border border-border_subtle/20 bg-card/5"
          >
            <img 
               src="/profile-edizon.png" 
               alt="Edizon CV. - Data Leader" 
               className="w-full h-full object-cover rounded-3xl"
            />
            
            {/* 3D absolute sticker floating slightly in front of the image */}
            <div 
              style={{ transform: "translateZ(30px)" }}
              className="absolute -bottom-6 -left-6 bg-accent text-primary px-6 py-3 rounded-full font-bold shadow-xl border-4 border-[#111111] rotate-[-5deg]"
            >
              Hi there!
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
