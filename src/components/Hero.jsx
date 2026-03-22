import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero({ isDarkMode }) {
  // -- ORIGINAL HERO LOGIC (UNTOUCHED) --
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.65]);
  const imageBorderRadius = useTransform(scrollYProgress, [0, 1], ["24px", "120px"]);

  const digitalX = useTransform(scrollYProgress, [0, 0.3], [0, -250]);
  const digitalOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const designerX = useTransform(scrollYProgress, [0, 0.3], [0, 250]);
  const designerOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const sectionOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
  };

  // -- NEW STRATEGIC PHRASE LOGIC --
  const phraseRef = useRef(null);
  const { scrollYProgress: phraseProgress } = useScroll({
    target: phraseRef,
    offset: ["start end", "end start"]
  });

  // Fade In and Scale Up when entering, Fade Out when leaving
  // The screen is black as it enters, so it fades in smoothly
  const phraseOpacity = useTransform(phraseProgress, [0.3, 0.5, 0.6, 0.8], [0, 0.8, 0.8, 0]);
  const phraseScale = useTransform(phraseProgress, [0.3, 0.5], [0.95, 1]);

  return (
    <>
      <section ref={containerRef} id="home" className="h-[250vh] relative w-full z-20">
        <motion.div 
          style={{ opacity: sectionOpacity }} 
          className="sticky top-0 h-screen w-full flex flex-col items-center justify-center pt-24 px-6 overflow-hidden"
        >
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative w-full max-w-7xl mx-auto flex flex-col items-center"
          >
            <motion.div variants={itemVariants} className="text-text_muted text-xs md:text-sm mb-4 tracking-[0.2em] uppercase font-semibold">
              EDIZON CV.
            </motion.div>

            <div className="relative flex items-center justify-center w-full mt-4">
              <motion.h1 
                variants={itemVariants}
                style={{ x: digitalX, opacity: digitalOpacity }}
                className="text-[12vw] sm:text-6xl md:text-8xl xl:text-[140px] font-bold tracking-tighter text-text_main z-10 mr-[-5%] mix-blend-difference select-none"
              >
                DATA.
              </motion.h1>

              <motion.div 
                variants={itemVariants}
                style={{ scale: imageScale }}
                className="relative z-20 w-[45vw] h-[60vw] sm:w-48 sm:h-64 md:w-64 md:h-[350px] shrink-0"
              >
                <motion.div 
                  style={{ borderRadius: imageBorderRadius }} 
                  className="w-full h-full overflow-hidden absolute inset-0"
                >
                  <img 
                    src="/profile-edizon.png" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                {/* Spinning accent circle */}
                <div className={`absolute -bottom-6 -left-6 z-30 w-16 h-16 rounded-full flex items-center justify-center text-primary shadow-lg border-4 transition-transform cursor-pointer hover:scale-105 ${isDarkMode ? 'bg-accent border-[#111111]' : 'bg-accent border-[#F1F4F9]'}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="19" x2="19" y2="5"></line>
                    <polyline points="9 5 19 5 19 15"></polyline>
                  </svg>
                </div>
                
                <div className="absolute top-4 right-4 z-30 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-xs font-semibold text-white shadow-sm flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  Hi
                </div>
              </motion.div>

              <motion.h1 
                variants={itemVariants}
                style={{ x: designerX, opacity: designerOpacity }}
                className="text-[12vw] sm:text-6xl md:text-8xl xl:text-[140px] font-bold tracking-tighter text-text_main z-10 ml-[-5%] mix-blend-difference select-none"
              >
                LEADER
              </motion.h1>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* STRATEGIC PHRASE SECTION */}
      <section ref={phraseRef} className="h-[200vh] relative w-full z-10 -mt-[100vh]">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center px-4 overflow-hidden pointer-events-auto">
          <motion.div 
            style={{ opacity: phraseOpacity, scale: phraseScale }}
            className="flex flex-col items-center justify-center text-center relative w-full h-full max-w-5xl pt-16"
          >
            {/* Soft Green Light Ray */}
            <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[120%] bg-gradient-to-br from-[#bfff00]/15 via-transparent to-transparent pointer-events-none transform -skew-x-12 blur-[100px] rounded-full"></div>

            {/* Title */}
            <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-semibold tracking-tight leading-[1.05] mb-8 lg:mb-12 drop-shadow-lg z-10">
              Tus datos tienen una historia.<br className="hidden sm:block" />
              Nosotros la convertimos en<br className="hidden sm:block" />
              acción.
            </h2>

            {/* Sub-phrase */}
            <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-12 sm:mb-16 z-10 px-4">
              Potenciamos tu negocio con soluciones de Business Intelligence, automatización y experiencias digitales centradas en UX/UI para que entiendas, actúes y crezcas con claridad.
            </p>

            {/* Green Button */}
            <a 
              href="https://calendly.com/consultorbi-edizon/30min" 
              target="_blank" 
              rel="noreferrer" 
              className="group flex items-center gap-3 bg-[#bfff00] text-black rounded-full pl-6 pr-2 py-2 hover:bg-[#bfff00]/95 transition-all hover:scale-105 z-10 shadow-[0_0_30px_rgba(191,255,0,0.2)] hover:shadow-[0_0_40px_rgba(191,255,0,0.4)] cursor-pointer decoration-0 no-underline"
            >
              <span className="text-sm font-bold tracking-tight">Hablemos de tu proyecto</span>
              <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-[#bfff00] transition-transform group-hover:rotate-45">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
