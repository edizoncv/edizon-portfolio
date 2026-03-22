import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const servicesList = [
  { 
    id: '01', 
    title: 'Business Intelligence Avanzado', 
    content: 'Arquitectura de datos y dashboards en Power BI orientados a resultados, no solo a métricas.',
    image: '/service-1.jpg'
  },
  { 
    id: '02', 
    title: 'Entornos Intuitivos de Decisión', 
    content: 'Diseño de interfaces funcionales donde la prioridad es la interpretación rápida y correcta de los KPIs.',
    image: '/service-2.jpg'
  },
  { 
    id: '03', 
    title: 'Automatización Inteligente', 
    content: 'Optimización de flujos de trabajo con Power Platform para ganar eficiencia y eliminar errores manuales.',
    image: '/service-3.jpg'
  },
  { 
    id: '04', 
    title: 'Consultoría de Co-creación', 
    content: 'Acompañamiento estratégico para alinear tu tecnología con los objetivos reales de tu empresa.',
    image: '/service-4.jpg'
  }
];

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section className="w-full max-w-7xl mx-auto px-6 mt-12 mb-32 relative">
      <div className="flex flex-col md:flex-row gap-16 md:gap-8">
        
        {/* Left Column (60%) */}
        <div className="w-full md:w-[60%] flex flex-col pt-12">
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4 text-text_main">Lo que puedo hacer<br/>por ti</h2>
            <p className="text-text_muted text-sm md:text-base max-w-sm">Servicios que ofrezco para ayudar a que tu negocio crezca y destaque en el entorno digital.</p>
          </motion.div>

          <div className="w-full flex flex-col border-t border-border_subtle">
            {servicesList.map((service, index) => {
              const isActive = index === activeService;
              
              return (
                <div 
                  key={service.id}
                  onMouseEnter={() => setActiveService(index)}
                  className="border-b border-border_subtle py-8 group relative flex flex-col justify-center cursor-pointer"
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-8">
                      <span className={`text-sm font-mono transition-colors duration-300 ${isActive ? 'text-accent' : 'text-text_muted group-hover:text-text_main'}`}>{service.id}</span>
                      <h3 className={`text-2xl lg:text-4xl font-bold uppercase tracking-tight transition-colors duration-300 ${isActive ? 'text-text_main' : 'text-text_muted group-hover:text-text_main'}`}>{service.title}</h3>
                    </div>
                    
                    {/* Rotational arrow icon revealing on hover/active */}
                    <div className={`transition-all duration-300 ${isActive ? 'opacity-100 rotate-45 text-accent' : 'opacity-0 -rotate-45 text-text_main group-hover:opacity-100 group-hover:rotate-45'}`}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Subtle reveal of text definition below title */}
                  <motion.div 
                    initial={false}
                    animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0, marginTop: isActive ? '16px' : '0px' }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden pl-14"
                  >
                    <p className="max-w-md text-text_muted text-sm leading-relaxed">
                      {service.content}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column (40%) - Sticky Image Reveal */}
        <div className="hidden md:block w-[40%] relative">
          <div className="sticky top-[20vh] w-full aspect-[3/4] rounded-[24px] overflow-hidden bg-card/5 border border-border_subtle/30 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeService}
                src={servicesList[activeService].image}
                alt={servicesList[activeService].title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full object-cover absolute inset-0"
              />
            </AnimatePresence>
          </div>
        </div>
        
      </div>
    </section>
  );
}
