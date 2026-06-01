import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    id: "01",
    name: "Brand Identity",
    tagline: "Systems, not just logos.",
    desc: "Naming, visual systems, voice, and guidelines that scale across every surface — from product UI to packaging.",
    deliverables: ["Strategy", "Visual System", "Guidelines", "Rollout"],
  },
  {
    id: "02",
    name: "Web Design & Build",
    tagline: "Sites that earn the scroll.",
    desc: "Marketing sites, landing pages and digital flagships engineered in React with motion-first interaction design.",
    deliverables: ["UX Architecture", "Art Direction", "Build", "CMS"],
  },
  {
    id: "03",
    name: "Product & UX",
    tagline: "Interfaces with a point of view.",
    desc: "Design partnerships for SaaS, fintech, and consumer products — from 0→1 prototypes to mature design systems.",
    deliverables: ["Discovery", "Prototypes", "Design Systems", "Handover"],
  },
  {
    id: "04",
    name: "Motion & 3D",
    tagline: "Pixels with weight.",
    desc: "Brand films, product reveals, interactive 3D and WebGL — choreography for screens of every size.",
    deliverables: ["Storyboards", "Animation", "WebGL", "Sound"],
  },
  {
    id: "05",
    name: "Creative Direction",
    tagline: "Embedded with your team.",
    desc: "Ongoing creative leadership for in-house teams — campaigns, launches, brand evolution and quality control.",
    deliverables: ["Retainer", "Campaigns", "Art Direction", "Mentoring"],
  },
];

function TypedLine({ text, active }: { text: string; active: boolean }) {
  const [out, setOut] = useState("");
  useEffect(() => {
    if (!active) {
      setOut("");
      return;
    }
    let i = 0;
    const t = setInterval(() => {
      i++;
      setOut(text.slice(0, i));
      if (i >= text.length) clearInterval(t);
    }, 8);
    return () => clearInterval(t);
  }, [active, text]);
  return (
    <pre className="font-mono text-xs md:text-sm text-mist/80 whitespace-pre-wrap leading-relaxed">
      {out}
      <span className="animate-pulse text-neon-yellow">▌</span>
    </pre>
  );
}

export function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIdx, setActiveIdx] = useState(0);
  const active = services[activeIdx];

  return (
    <section id="services" className="relative py-32 px-6 md:px-12">
      <div className="absolute inset-0 grid-mesh opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-20 flex items-end justify-between flex-wrap gap-6"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-neon-blue mb-4">// 02 — What we do</p>
            <h2 className="font-display font-bold text-6xl md:text-8xl text-mist leading-none">
              Services<br />
              <span className="text-neon-yellow text-glow-yellow italic">/in five tracks.</span>
            </h2>
          </div>
          <p className="font-mono text-xs text-mist/50 max-w-xs">
            One team, five disciplines, no hand-offs. Brief us on any track — most clients end up working with us across two or three.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 space-y-3">
            {services.map((s, i) => (
              <motion.button
                key={s.id}
                data-cursor-hover
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                onMouseEnter={() => setActiveIdx(i)}
                onClick={() => setActiveIdx(i)}
                className={`w-full text-left glass rounded-xl p-5 flex items-center gap-5 transition-all duration-150 ${
                  activeIdx === i ? "border-neon-blue/60 shadow-[0_0_24px_rgba(179,210,239,0.35)]" : "hover:border-mist/30"
                }`}
              >
                <div className="relative">
                  <div
                    className={`w-3 h-3 rounded-full ${activeIdx === i ? "bg-neon-yellow" : "bg-mist/30"} transition-all`}
                    style={activeIdx === i ? { boxShadow: "0 0 12px #fde52b" } : {}}
                  />
                  {i < services.length - 1 && <div className="absolute left-1/2 top-full w-px h-6 bg-mist/15 -translate-x-1/2" />}
                </div>
                <div className="flex-1">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-mist/50">SVC / {s.id}</p>
                  <p
                    className={`font-display font-bold text-xl md:text-2xl tracking-tight ${
                      activeIdx === i ? "text-neon-blue text-glow-blue" : "text-mist"
                    } transition-all`}
                  >
                    {s.name}
                  </p>
                </div>
                <span className={`font-mono text-xs ${activeIdx === i ? "text-neon-yellow" : "text-mist/30"} transition-all`}>
                  {activeIdx === i ? "◆" : "◇"}
                </span>
              </motion.button>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-7 glass-strong rounded-2xl p-1 self-start"
          >
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-mist/10">
              <div className="w-2.5 h-2.5 rounded-full bg-neon-yellow/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-neon-blue/40" />
              <div className="w-2.5 h-2.5 rounded-full bg-mist/15" />
              <span className="ml-2 font-mono text-[10px] uppercase tracking-widest text-mist/50">
                /services/{active.name.toLowerCase().replace(/[^a-z]+/g, "-")}.md
              </span>
            </div>
            <div className="p-6 md:p-8 min-h-[320px]">
              <p className="font-mono text-[10px] uppercase tracking-widest text-neon-blue mb-2">⟶ SVC / {active.id}</p>
              <h3 className="font-display font-bold text-3xl md:text-4xl text-mist mb-1">{active.name}</h3>
              <p className="font-display italic text-neon-yellow text-lg mb-6">{active.tagline}</p>
              <TypedLine key={activeIdx} text={active.desc} active={inView} />

              <div className="mt-8">
                <p className="font-mono text-[10px] uppercase tracking-widest text-mist/40 mb-3">Deliverables</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {active.deliverables.map((d) => (
                    <div key={d} className="glass rounded-lg p-3 text-center">
                      <p className="font-display font-bold text-sm text-mist">{d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
