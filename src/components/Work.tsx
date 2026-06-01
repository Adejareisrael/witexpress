import { motion } from "framer-motion";

const projects = [
  { id: "01", title: "Helion Protocol", client: "Helion Labs", tag: "BRAND / WEB", year: "2026", result: "+312% sign-ups in 90 days", span: "md:col-span-7 md:row-span-2", h: "h-[420px] md:h-[560px]", grad: "from-neon-blue/30 via-accolade to-base" },
  { id: "02", title: "Nocturne OS", client: "Lumen", tag: "PRODUCT / UX", year: "2025", result: "Series B raised post-relaunch", span: "md:col-span-5", h: "h-[280px]", grad: "from-neon-yellow/20 via-accolade to-base" },
  { id: "03", title: "Kinetic Atlas", client: "Mori Studio", tag: "CAMPAIGN", year: "2025", result: "Cannes Bronze · 2025", span: "md:col-span-5", h: "h-[260px]", grad: "from-accolade via-base to-neon-blue/20" },
  { id: "04", title: "Signal/03", client: "Frequency.fm", tag: "IDENTITY", year: "2025", result: "Rebrand → 4.1M new users", span: "md:col-span-4", h: "h-[340px]", grad: "from-neon-yellow/30 via-base to-accolade" },
  { id: "05", title: "Vapor Index", client: "Onyx Capital", tag: "WEB / DATA", year: "2024", result: "Awwwards SOTD", span: "md:col-span-4", h: "h-[340px]", grad: "from-accolade to-neon-blue/30" },
  { id: "06", title: "Echo Garden", client: "Phantom Co.", tag: "WEB / MOTION", year: "2024", result: "FWA of the Day", span: "md:col-span-4", h: "h-[340px]", grad: "from-base via-accolade to-neon-yellow/20" },
];

export function Work() {
  return (
    <section id="work" className="relative py-32 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto mb-16"
      >
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-neon-blue mb-4">// 03 — Case studies</p>
            <h2 className="font-display font-bold text-6xl md:text-8xl text-mist leading-none">
              Recent<br />
              <span className="text-neon-yellow text-glow-yellow italic">/work.</span>
            </h2>
          </div>
          <p className="font-mono text-xs text-mist/50 max-w-xs">
            A short selection from the last two years. Full archive on request — drop us a line.
          </p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
        {projects.map((p, i) => (
          <motion.a
            key={p.id}
            href="#"
            data-cursor-hover
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            whileHover={{ scale: 1.015 }}
            className={`group relative ${p.span} ${p.h} glass rounded-2xl overflow-hidden transition-all duration-500 hover:border-neon-blue/60 hover:shadow-[0_0_40px_rgba(179,210,239,0.4)]`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${p.grad} opacity-80`} />

            <div className="absolute inset-0 mix-blend-screen opacity-70">
              <svg viewBox="0 0 400 400" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                {Array.from({ length: 30 }).map((_, j) => (
                  <circle
                    key={j}
                    cx={200 + Math.cos(j * 0.4 + i) * (60 + j * 4)}
                    cy={200 + Math.sin(j * 0.4 + i) * (60 + j * 4)}
                    r={1 + (j % 4)}
                    fill={j % 3 === 0 ? "#fde52b" : "#b3d2ef"}
                    opacity={0.4 + (j % 5) * 0.1}
                  />
                ))}
                <path d={`M 50 ${200 + i * 20} Q 200 ${50 + i * 10}, 350 ${200 - i * 15} T 600 200`} fill="none" stroke="#b3d2ef" strokeWidth="0.5" opacity="0.5" />
              </svg>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-base/90 via-base/30 to-transparent" />

            <div className="absolute top-5 left-5 right-5 flex justify-between font-mono text-[10px] uppercase tracking-widest text-mist/70">
              <span>CASE / {p.id}</span>
              <span>{p.year}</span>
            </div>

            <div className="absolute top-1/2 -right-32 group-hover:right-5 -translate-y-1/2 transition-all duration-500 ease-out">
              <span className="bg-neon-yellow text-base px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-widest font-semibold shadow-[0_0_24px_rgba(253,229,43,0.7)]">
                {p.tag}
              </span>
            </div>

            <div className="absolute bottom-5 left-5 right-5">
              <p className="font-mono text-[10px] uppercase tracking-widest text-neon-blue mb-2">{p.client}</p>
              <h3 className="font-display font-bold text-2xl md:text-4xl text-mist leading-tight group-hover:text-glow-blue transition-all">
                {p.title}
              </h3>
              <p className="mt-2 font-mono text-[11px] text-neon-yellow">↗ {p.result}</p>
              <div className="mt-4 h-px bg-mist/20 relative overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-0 group-hover:w-full bg-neon-blue transition-all duration-700" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto mt-12 flex justify-between items-center font-mono text-xs text-mist/50"
      >
        <span>// Showing 6 of 124 projects</span>
        <a href="#contact" data-cursor-hover className="text-neon-yellow hover:text-glow-yellow transition-all">Request full archive ⟶</a>
      </motion.div>
    </section>
  );
}
