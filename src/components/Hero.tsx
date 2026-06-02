import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 grid-mesh opacity-60" />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[120vmin] h-[120vmin]">
          <div className="absolute inset-0 animate-spin-slow">
            <svg viewBox="-200 -200 400 400" className="w-full h-full">
              {Array.from({ length: 12 }).map((_, i) => {
                const r = 60 + i * 10;
                return (
                  <polygon
                    key={i}
                    points={Array.from({ length: 6 })
                      .map((_, j) => {
                        const a = (j / 6) * Math.PI * 2 + i * 0.1;
                        return `${Math.cos(a) * r},${Math.sin(a) * r}`;
                      })
                      .join(" ")}
                    fill="none"
                    stroke="#b3d2ef"
                    strokeWidth="0.5"
                    opacity={0.15 + (i % 3) * 0.1}
                  />
                );
              })}
            </svg>
          </div>
          <div className="absolute inset-12 animate-spin-reverse">
            <svg viewBox="-200 -200 400 400" className="w-full h-full">
              {Array.from({ length: 8 }).map((_, i) => {
                const a = (i / 8) * Math.PI * 2;
                return (
                  <line key={i} x1={Math.cos(a) * 80} y1={Math.sin(a) * 80} x2={Math.cos(a) * 180} y2={Math.sin(a) * 180} stroke="#fde52b" strokeWidth="0.4" opacity="0.5" />
                );
              })}
              <circle r="80" fill="none" stroke="#fde52b" strokeWidth="0.5" opacity="0.6" />
              <circle r="180" fill="none" stroke="#b3d2ef" strokeWidth="0.3" opacity="0.4" strokeDasharray="2 4" />
            </svg>
          </div>
        </div>
      </div>

      <div className="absolute top-[15%] left-[12%] w-72 h-72 rounded-full bg-neon-blue/20 blur-[100px] animate-float-orb" />
      <div className="absolute bottom-[10%] right-[10%] w-96 h-96 rounded-full bg-neon-yellow/15 blur-[120px] animate-float-orb" style={{ animationDelay: "-7s" }} />
      <div className="absolute top-[40%] right-[25%] w-64 h-64 rounded-full bg-neon-blue/15 blur-[90px] animate-float-orb" style={{ animationDelay: "-3s" }} />

      {/* Top bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="absolute top-6 left-6 right-6 flex justify-between items-center font-mono text-[10px] uppercase tracking-[0.3em] text-mist/60 z-10"
      >
        <span className="text-mist">◎ Witexpress <span className="text-mist/40">/ Creative Agency</span></span>
        <span className="hidden md:inline">Lagos · London · Remote</span>
        <span className="text-neon-yellow hidden sm:inline">● Accepting briefs — Q3 2026</span>
      </motion.div>

      <div className="relative z-10 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="font-mono text-xs uppercase tracking-[0.4em] text-neon-blue mb-8"
        >
          ⟶ A Digital Creative Agency · est. 2018
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5, type: "spring", stiffness: 180 }}
          className="font-display font-extrabold text-[11.5vw] md:text-[14vw] leading-[0.85] tracking-tighter text-mist animate-pulse-glow-yellow"
        >
          WIT<span className="text-neon-yellow">/</span>EXPRESS
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-10 max-w-2xl mx-auto"
        >
          <p className="text-mist/80 text-base md:text-xl font-light">
            We design <span className="text-neon-blue text-glow-blue">brands, products & digital experiences</span> for ambitious teams ready to break the template.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-3 font-mono text-[11px] uppercase tracking-widest"
        >
          <a href="#contact" data-cursor-hover className="bg-neon-yellow text-base px-6 py-3 rounded-full font-semibold hover:shadow-[0_0_30px_rgba(253,229,43,0.7)] transition-all">
            Start a project ⟶
          </a>
          <a href="#work" data-cursor-hover className="glass px-6 py-3 rounded-full text-mist hover:text-neon-blue transition-all">
            See our work
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t border-mist/10 py-4 overflow-hidden glass">
        <div className="flex gap-12 whitespace-nowrap font-mono text-xs uppercase tracking-widest text-mist/60 justify-center">
          <span>◇ Branding</span>
          <span className="text-neon-yellow">◆ Creative Strategy</span>
          <span>◇ Product Design</span>
          <span className="text-neon-blue">◆ Website Development</span>
          <span>◇ Branding</span>
          <span className="text-neon-yellow">◆ Creative Strategy</span>
        </div>
      </div>
    </section>
  );
}
