import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "DIGITAL IDENTITY CAMPAIGN",
    category: "Branding",
    description: "Análisis integral de campañas y conversión de usuarios. Monitoreo en tiempo real del impacto de marca, consolidando múltiples fuentes de datos en un solo panel de Business Intelligence interactivo.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    iframeSrc: "https://app.fabric.microsoft.com/view?r=eyJrIjoiN2EwZjE1MTAtM2U5ZC00Njg0LTliODUtODI1ODMwMWY5MjFhIiwidCI6IjZhNjUzMTg4LWFlYmYtNGNlNi04MDc5LTdlYmQ1YzE3Yzg4ZiJ9"
  },
  {
    id: 2,
    title: "GLOBAL SPATIAL ABSTRACT",
    category: "Web Design",
    description: "Dashboard espacial y estratégico diseñado para evaluar métricas de operaciones globales. Interfaz oscura optimizada para resaltar patrones geográficos y facilitar la toma de decisiones internacionales.",
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1200&auto=format&fit=crop",
    iframeSrc: "https://app.fabric.microsoft.com/view?r=eyJrIjoiYmZmMWZmNjctNDhiOC00OTQwLTlkZDEtOTRjMjRjYjczZGRmIiwidCI6IjZhNjUzMTg4LWFlYmYtNGNlNi04MDc5LTdlYmQ1YzE3Yzg4ZiJ9"
  },
  {
    id: 3,
    title: "Dashboard Gerencial con IA: decisiones 32% más rápidas",
    category: "Development",
    description: "Diseñamos un panel ejecutivo conectado a Microsoft Fabric que centraliza ventas, operaciones y finanzas en un solo lugar. Además, integramos un agente de IA entrenado con tus datos, capaz de responder preguntas, explicar variaciones y generar insights accionables en segundos.",
    image: "/project3.jpg"
  },
  {
    id: 4,
    title: "Modelo predictivo con 27% más precisión en la demanda",
    category: "3D Art",
    description: "Construimos un modelo de predicción usando Fabric + ML para estimar demanda y optimizar producción. El modelo integra históricos, estacionalidad y variables externas para entregar cálculos confiables a tiempo.",
    image: "/project4-fixed.png"
  }
];

export default function Projects() {
  const navigate = useNavigate();
  return (
    <section id="projects" className="w-full max-w-7xl mx-auto px-6 mt-32 mb-16 relative">
      <motion.div 
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-20"
      >
        <h2 className="text-4xl md:text-5xl lg:text-[64px] font-black uppercase tracking-tighter mb-4 text-white">SOLUCIONES DE IMPACTO</h2>
        <p className="text-white/60 text-sm md:text-base max-w-lg leading-relaxed font-light">Casos de éxito y dashboards interactivos. Explora cómo los datos transforman productos digitales en experiencias medibles.</p>
      </motion.div>

      <div className="flex flex-col gap-24 lg:gap-32">
        {projects.map((project, index) => {
          const isReversed = index % 2 !== 0;

          return (
            <motion.div 
              key={project.id}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${isReversed ? 'lg:flex-row-reverse' : ''}`}
            >
              
              {/* Text Description Column */}
              <div className="w-full lg:w-[40%] flex flex-col items-start text-left">
                <span className="bg-[#bfff00]/10 border border-[#bfff00]/20 text-[#bfff00] px-4 py-1.5 rounded-full text-[10px] xl:text-xs font-bold uppercase tracking-widest mb-6 shadow-[0_0_15px_rgba(191,255,0,0.1)]">
                  {project.category}
                </span>
                
                <h3 className="text-[#bfff00] text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-6 leading-[1.05] drop-shadow-md">
                  {project.title}
                </h3>
                
                <p className="text-white/70 text-base md:text-lg leading-relaxed font-light max-w-lg">
                  {project.description}
                </p>
                
                {/* Optional interactive button or tag */}
                {project.id === 2 ? (
                  <button
                    onClick={() => navigate('/demo/inmobiliaria')}
                    className="mt-8 flex items-center gap-2 text-[#bfff00] font-semibold text-sm tracking-widest uppercase hover:text-white transition-colors group border border-[#bfff00]/30 hover:border-white/30 px-5 py-2.5 rounded-full hover:bg-[#bfff00]/5"
                  >
                    EXPLORAR
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                ) : (
                  <button className="mt-8 flex items-center gap-2 text-white font-semibold text-sm tracking-widest uppercase hover:text-[#bfff00] transition-colors group">
                    EXPLORAR
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                )}
              </div>

              {/* Graphics / Dashboard Column */}
              <div className="w-full lg:w-[60%] group">
                <div className="w-full overflow-hidden rounded-[24px] xl:rounded-[32px] shadow-2xl border border-white/10 bg-black/40 backdrop-blur-md transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_40px_rgba(191,255,0,0.1)] relative">
                  
                  {project.iframeSrc ? (
                    <div className="w-full aspect-video relative">
                       <iframe 
                         title={`${project.title} - Power BI`}
                         src={project.iframeSrc}
                         frameBorder="0" 
                         allowFullScreen={true}
                         className="w-full h-full absolute inset-0 z-10"
                       />
                    </div>
                  ) : (
                    <div className="w-full aspect-video md:aspect-[16/10] relative cursor-pointer">
                       <img 
                         src={project.image} 
                         alt={project.title} 
                         className="w-full h-full object-cover transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-80 z-10" />
                    </div>
                  )}

                </div>
              </div>

            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
