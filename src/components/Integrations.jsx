import { motion } from 'framer-motion';
import { Zap, Activity, ShieldCheck, Cable, Box } from 'lucide-react';

export default function Integrations() {
  const topNodes = [
    { id: 'Miro', color: '#FFD02F', x: 100, y: 100, img: '/logo-1.png' },
    { id: 'Figma', color: '#F24E1E', x: 260, y: 100, img: '/logo-2.png' },
    { id: 'Cloud', color: '#29B5E8', x: 420, y: 100, img: '/logo-3.png' },
    { id: 'PowerPlatform', color: '#0ACF83', x: 580, y: 100, img: '/logo-4.png' },
    { id: 'PowerBI', color: '#F2C811', x: 740, y: 100, img: '/logo-5.png' },
    { id: 'FabricSQL', color: '#0078d4', x: 900, y: 100, img: '/logo-6.png' },
  ];

  const bottomFeatures = [
    { icon: Zap, text: "Auto-run" },
    { icon: Activity, text: "Live data" },
    { icon: ShieldCheck, text: "Secure scale" },
    { icon: Cable, text: "Plug & play" },
  ];

  return (
    <section id="integrations" className="w-full max-w-5xl mx-auto px-6 mt-24 mb-32 relative flex flex-col items-center">
      
      {/* Header */}
      <div className="text-center mb-0 md:mb-8 px-4 relative z-20">
        <span className="text-[#bfff00] text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] mb-4 inline-block drop-shadow-[0_0_8px_rgba(191,255,0,0.4)]">
          INTEGRACIONES
        </span>
        <h2 className="text-3xl md:text-5xl lg:text-[56px] font-bold text-white tracking-tighter leading-tight max-w-4xl mx-auto">
          Integraciones que impulsan cada etapa de tu solución
        </h2>
      </div>

      {/* Central Graph & Lines */}
      <div className="relative w-full aspect-[2/1] max-w-4xl mx-auto mt-12 mb-12">
        
        {/* SVG Drawing layer: viewbox is exactly corresponding to percentages (1000x500 means 1% = 10 units) */}
        <svg 
          viewBox="0 0 1000 500" 
          className="absolute inset-0 w-full h-full overflow-visible pointer-events-none z-0"
        >
          <defs>
            {topNodes.map((node) => (
              <linearGradient key={`grad-${node.id}`} id={`gradient-${node.id}`} x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#bfff00" stopOpacity="0.8" />
                <stop offset="100%" stopColor={node.color} stopOpacity="0.2" />
              </linearGradient>
            ))}
          </defs>

          {topNodes.map((node, i) => {
            const pathData = `M 500 400 C 500 250, ${node.x} 250, ${node.x} 100`;
            return (
              <g key={i}>
                {/* Background static line */}
                <path
                  d={pathData}
                  fill="transparent"
                  stroke={`${node.color}30`}
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                {/* Flowing electric current line */}
                <motion.path
                  d={pathData}
                  fill="transparent"
                  stroke={`url(#gradient-${node.id})`}
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="15 60"
                  animate={{ strokeDashoffset: [0, 75] }}
                  transition={{
                    duration: 1.5 + (i % 3) * 0.2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ filter: `drop-shadow(0 0 5px ${node.color}80)` }}
                />
              </g>
            );
          })}
        </svg>

        {/* Top Nodes (Accurately positioned by mathematical percentage linked to the SVG viewbox) */}
        {topNodes.map((node, i) => {
          const leftPercent = (node.x / 1000) * 100;
          const topPercent = (node.y / 500) * 100;
          
          return (
            <motion.div 
              key={i} 
              className="absolute w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#111111]/90 backdrop-blur-md border border-white/5 flex items-center justify-center z-10 transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform cursor-pointer overflow-hidden p-1.5" 
              style={{ 
                left: `${leftPercent}%`,
                top: `${topPercent}%`,
                boxShadow: `0 0 30px ${node.color}50`
              }}
            >
              <img src={node.img} alt={node.id} className="w-full h-full object-contain drop-shadow-md" />
            </motion.div>
          );
        })}

        {/* Center Bottom Root Node (500, 400 -> 50%, 80%) */}
        <div 
          className="absolute transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#0a0a0a] border-2 border-[#bfff00]/30 shadow-[0_0_40px_rgba(191,255,0,0.15)] flex items-center justify-center z-10 hover:shadow-[0_0_60px_rgba(191,255,0,0.3)] hover:scale-105 transition-all cursor-pointer"
          style={{ left: '50%', top: '80%' }}
        >
           <Box className="w-8 h-8 sm:w-10 sm:h-10 text-[#bfff00] drop-shadow-[0_0_8px_rgba(191,255,0,0.8)]" />
        </div>
      </div>

      {/* Features Bar */}
      <div className="w-full flex justify-between items-center max-w-4xl mx-auto border-t border-white/10 pt-8 overflow-x-auto pb-4 hide-scrollbar z-20 relative">
        <div className="flex w-full justify-between items-center min-w-[600px] px-2">
          {bottomFeatures.map((feature, i) => (
            <div key={i} className="flex items-center gap-3 relative group">
              <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#bfff00]" />
              <span className="text-sm font-semibold text-white/70 group-hover:text-white transition-colors tracking-wide">
                {feature.text}
              </span>
              {i !== bottomFeatures.length - 1 && (
                <div className="absolute -right-[60px] top-1/2 w-[40px] sm:w-[80px] md:w-[120px] lg:w-[160px] border-b-2 border-dotted border-white/20 transform -translate-y-1/2 pointer-events-none"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
