import { motion } from 'framer-motion';

const articles = [
  {
    category: "Design Tips",
    title: "The role of typography in user experience design",
    date: "Aug 12, 2024",
    image: "https://images.unsplash.com/photo-1542841791-1925b02a2bfb?q=80&w=800&auto=format&fit=crop"
  },
  {
    category: "Design Process",
    title: "How to effectively manage creative feedback",
    date: "Jul 28, 2024",
    image: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Blog() {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 mt-24 mb-32">
      <motion.div 
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-2 text-text_main">Design Insights & Ideas</h2>
        <p className="text-text_muted text-sm md:text-base max-w-md">Thoughts, tutorials, and insights regarding digital design and creative workflows.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.map((article, index) => (
          <motion.div 
            key={index}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="group cursor-pointer"
          >
            <div className="w-full aspect-video overflow-hidden rounded-2xl mb-4 relative bg-card">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-text_muted mb-2">
              <span className="text-accent">{article.category}</span>
              <span>•</span>
              <span>{article.date}</span>
            </div>
            <h3 className="text-lg font-bold text-text_main transition-colors group-hover:text-accent leading-snug">
              {article.title}
            </h3>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <button className="text-accent text-sm font-bold uppercase tracking-widest hover:text-white transition-colors underline underline-offset-4 decoration-accent/50 hover:decoration-white">
          View All Posts
        </button>
      </div>
    </section>
  );
}
