import { motion } from "framer-motion";

const steps = [
  { n: "01", phase: "Discovery", dur: "Week 1–2", desc: "Deep audit, stakeholder interviews, competitive teardown. We arrive with questions, not slides." },
  { n: "02", phase: "Strategy", dur: "Week 2–3", desc: "Positioning, narrative, creative platform. The thinking that every later decision is anchored to." },
  { n: "03", phase: "Design", dur: "Week 3–7", desc: "Two distinct directions, sharpened to one. Tight feedback loops, no email-attachment cycles." },
  { n: "04", phase: "Build", dur: "Week 6–10", desc: "Engineering ships in parallel with design — React, motion, CMS, infra. Production from day one." },
  { n: "05", phase: "Launch", dur: "Week 10+", desc: "Rollout, comms, performance. We stay close for 30 days post-launch and measure what shipped." },
];

const stats = [
  { num: "08", lbl: "years in business" },
  { num: "124", lbl: "projects shipped" },
  { num: "22", lbl: "people on team" },
  { num: "97%", lbl: "client retention" },
];

export function Process() {
  return (
    <section id="process" className="relative py-16 md:py-24 lg:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-8 md:mb-16 flex items-end justify-between flex-wrap gap-6"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-neon-blue mb-4">// 05 — How we work</p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-mist leading-none">
              A clear<br />
              <span className="text-neon-yellow text-glow-yellow italic">/10-week arc.</span>
            </h2>
          </div>
          <p className="font-mono text-xs text-mist/50 max-w-xs">
            Most engagements run 8–12 weeks. Retainers and sprints available for ongoing partners.
          </p>
        </motion.div>

        <div className="relative mb-10 md:mb-20">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-blue/40 via-neon-yellow/30 to-transparent" />

          <div className="space-y-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.05, type: "spring", stiffness: 200 }}
                className={`relative flex md:grid md:grid-cols-2 gap-6 items-center ${i % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2"}`}
              >
                <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-neon-yellow -translate-x-1/2 shadow-[0_0_16px_rgba(253,229,43,0.8)]" />

                <div className={`ml-14 md:ml-0 glass rounded-2xl p-7 hover:border-neon-blue/40 hover:shadow-[0_0_30px_rgba(179,210,239,0.2)] transition-all duration-150 ${i % 2 === 0 ? "md:mr-12 md:text-right" : "md:ml-12"}`}>
                  <div className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                    <span className="font-display font-bold text-3xl text-neon-yellow text-glow-yellow">{s.n}</span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-mist/50">{s.dur}</span>
                  </div>
                  <h3 className="font-display font-bold text-3xl text-mist mb-2">{s.phase}</h3>
                  <p className="text-mist/70">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="glass-strong rounded-3xl p-8 md:p-16 relative overflow-hidden"
        >
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-neon-blue/15 blur-[100px] animate-float-orb" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-neon-yellow/10 blur-[120px] animate-float-orb" style={{ animationDelay: "-5s" }} />

          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.lbl}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <p className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-neon-yellow text-glow-yellow leading-none">{s.num}</p>
                <p className="mt-3 font-mono text-xs uppercase tracking-widest text-mist/60">{s.lbl}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
