import { motion } from 'framer-motion';
import { Sparkles, Compass, Code2, GitMerge, Cpu, BarChart3, ArrowRight } from 'lucide-react';

const processCards = [
  {
    icon: <Sparkles className="w-6 h-6 text-[#bfff00]" />,
    title: "Co-creación guiada",
    desc: "Transformamos necesidades en soluciones claras mediante workshops estratégicos."
  },
  {
    icon: <Compass className="w-6 h-6 text-[#bfff00]" />,
    title: "Diseño a medida",
    desc: "Construimos interfaces intuitivas que facilitan decisiones rápidas."
  },
  {
    icon: <Code2 className="w-6 h-6 text-[#bfff00]" />,
    title: "Modelos robustos",
    desc: "Arquitectura moderna de datos lista para escalar desde el día uno."
  },
  {
    icon: <GitMerge className="w-6 h-6 text-[#bfff00]" />,
    title: "Automatización inteligente",
    desc: "Operaciones que funcionan solas, sin pasos manuales ni fricción."
  },
  {
    icon: <Cpu className="w-6 h-6 text-[#bfff00]" />,
    title: "IA aplicada",
    desc: "Agentes y copilotos que aceleran tareas clave y elevan la eficiencia."
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-[#bfff00]" />,
    title: "Insights accionables",
    desc: "Dashboards claros que convierten datos en decisiones reales."
  }
];

export default function FAQ() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 mt-32 mb-32 bg-transparent relative z-10">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-16 items-center">
        
        {/* LEFT COLUMN: Text Block */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start"
        >
          <span className="text-[#bfff00] text-xs font-bold uppercase tracking-[0.2em] mb-6">
            Valor
          </span>
          <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight mb-8">
            Impulsando el éxito a través de los datos
          </h2>
          <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-10 max-w-lg font-light">
            Creamos ecosistemas digitales que combinan inteligencia de negocios, diseño intuitivo y automatización avanzada para que tomes decisiones precisas con la máxima claridad.
          </p>
          <button className="group flex items-center gap-3 border border-white/20 text-white rounded-full px-8 py-3.5 hover:bg-white/5 transition-all duration-300">
            <span className="text-sm font-semibold tracking-wide">Descubrir más</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* RIGHT COLUMN: Graphics Block */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="w-full backdrop-blur-[12px] bg-white/[0.02] border border-white/10 rounded-[32px] p-6 lg:p-8 shadow-2xl relative overflow-hidden"
        >
          {/* Faint technical grid background inside the container */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
               style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
          </div>
          
          {/* Subtle Glow Behind Cards */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#bfff00]/5 blur-[120px] pointer-events-none rounded-full"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
            {processCards.map((card, i) => (
              <div 
                key={i} 
                className="bg-[#111111]/60 border border-white/5 rounded-[20px] p-6 flex flex-col items-center text-center hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
              >
                <div className="mb-5 flex items-center justify-center p-3 rounded-xl bg-black/50 border border-white/5">
                  {card.icon}
                </div>
                <h3 className="text-white text-base font-semibold mb-2.5">{card.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed font-light">{card.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
