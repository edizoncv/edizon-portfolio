import { motion } from 'framer-motion';

const testimonials = [
  {
    text: "Reducimos en 40% el tiempo de análisis gracias a los dashboards creados con DATOS.",
    name: "Sana R",
    role: "Gerente de Operaciones, Retail",
    avatar: "https://i.pravatar.cc/150?u=sana"
  },
  {
    text: "Por primera vez pudimos ver toda la operación en un solo lugar.",
    name: "Kevin T",
    role: "Director de Logística, Construcción",
    avatar: "https://i.pravatar.cc/150?u=kevin"
  },
  {
    text: "El copiloto de datos nos permite entender insights sin depender del equipo de analítica.",
    name: "Natalie S",
    role: "Jefe de Proyectos, Manufactura",
    avatar: "https://i.pravatar.cc/150?u=natalie"
  },
  {
    text: "Transformamos nuestras reuniones: ahora todo tiene data clara, visual y precisa.",
    name: "Jason M",
    role: "CEO, Servicios B2B",
    avatar: "https://i.pravatar.cc/150?u=jason"
  },
  {
    text: "Pasamos de reportes manuales a un sistema totalmente automatizado. El cambio fue inmediato.",
    name: "Priya K",
    role: "Líder de Procesos, Ind. Alimentaria",
    avatar: "https://i.pravatar.cc/150?u=priya"
  },
  {
    text: "El equipo entendió rápido nuestras necesidades y creó una solución que seguimos usando todos los días.",
    name: "Emma R",
    role: "Coord. de Perf., Telecomunicaciones",
    avatar: "https://i.pravatar.cc/150?u=emma"
  }
];

export default function Testimonials() {
  // We duplicate the array to allow for a seamless infinite scroll loop
  const marqueeCards = [...testimonials, ...testimonials];

  return (
    <section className="w-full mx-auto mt-24 mb-32 overflow-hidden relative bg-transparent">
      
      {/* Inject custom CSS for marquee and pause-on-hover */}
      <style>
        {`
          @keyframes marquee-scroll {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            width: fit-content;
            animation: marquee-scroll 45s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <motion.div 
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12 px-6 max-w-7xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-3 text-white">Lo que dicen mis clientes</h2>
        <p className="text-white/60 text-sm md:text-base max-w-xl">Casos de éxito y retroalimentación de líderes de industria sobre nuestras soluciones de datos.</p>
      </motion.div>

      {/* Marquee Container (Strictly transparent, no backgrounds, aligned to title) */}
      <div 
        className="w-full max-w-7xl mx-auto relative flex items-center overflow-hidden py-8 px-0 sm:px-6"
        style={{ 
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
        }}
      >
        <div className="animate-marquee gap-5 sm:gap-6 relative z-0">
          {marqueeCards.map((t, index) => (
            <div 
              key={index}
              className="w-[280px] sm:w-[340px] md:w-[380px] lg:w-[380px] shrink-0 p-6 sm:p-8 rounded-[24px] rounded-br-[24px] bg-[#111111]/40 backdrop-blur-[12px] border border-white/5 flex flex-col justify-between whitespace-normal shadow-[0_0_40px_rgba(0,0,0,0.5)] hover:bg-[#1a1a1a]/60 transition-colors cursor-grab active:cursor-grabbing"
            >
              <div>
                <div className="flex gap-1.5 mb-6">
                  {/* 5 Golden Stars matching Image 2 instruction */}
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#F2C811]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white text-base md:text-lg font-light leading-relaxed mb-8">
                  "{t.text}"
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border border-white/10" />
                <div>
                  <h4 className="text-sm font-bold text-white">{t.name}</h4>
                  <p className="text-xs text-white/50 bg-white/5 inline-block px-2 py-1 rounded-md mt-1">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
