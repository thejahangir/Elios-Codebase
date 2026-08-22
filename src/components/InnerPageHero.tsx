import { motion } from 'framer-motion';

interface InnerPageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const InnerPageHero = ({ title, subtitle, backgroundImage }: InnerPageHeroProps) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#0B1F3A] overflow-hidden flex items-center justify-center min-h-[40vh]">
      {/* Background elements to match HomePage vibe */}
      <div className="absolute inset-0 pointer-events-none">
        {backgroundImage && (
          <div className="absolute inset-0">
            <img 
              src={backgroundImage} 
              alt="Background" 
              className="w-full h-full object-cover opacity-40"
            />
          </div>
        )}
        <div className="absolute inset-0 bg-[#0B1F3A]/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#051020]/90 via-[#0B1F3A]/50 to-[#0B1F3A]" />
        
        {/* Glows */}
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-600/20 blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#C9A227]/20 blur-[150px] mix-blend-screen" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight mb-6"
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default InnerPageHero;
