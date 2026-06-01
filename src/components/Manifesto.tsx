import { motion } from "framer-motion";

const principles = [
  { n: "01", t: "Strategy before surface", d: "We pressure-test the why before drawing a single pixel. Beauty without intent ages poorly." },
  { n: "02", t: "One team, no hand-offs", d: "Strategists, designers and engineers in the same room from day one. Less translation, sharper work." },
  { n: "03", t: "Ship the weird one", d: "We always present a safe option and a daring one. Most clients choose the daring one — and win." },
  { n: "04", t: "Built to outlast trends", d: "Systems over screenshots. We design brands and products that still feel sharp in five years." },
];

export function Manifesto() {
  return (
    <section id="about" className="relative py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-12 gap-10 items-start mb-20"
        >
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-neon-blue mb-4">// 01 — Studio</p>
            <h2 className="font-display font-bold text-6xl md:text-7xl text-mist leading-none">
              A studio<br />
              <span className="text-neon-yellow text-glow-yellow italic">/built on bets.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-mist/80 text-lg leading-relaxed">
            <p>
              Voltcraft is a <span className="text-neon-blue">22-person creative agency</span> working with founders, CMOs and product leaders who want
              to look — and behave — unmistakable.
            </p>
            <p className="text-mist/60 text-base">
              We've built brands and digital products for companies at every stage: pre-seed startups about to launch, scale-ups rebranding for IPO,
              and cultural institutions reaching new audiences. Same standard, every time.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {principles.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 80 }}
              className="glass rounded-2xl p-8 hover:border-neon-blue/40 hover:shadow-[0_0_30px_rgba(179,210,239,0.2)] transition-all"
            >
              <div className="flex items-start gap-5">
                <span className="font-display font-bold text-5xl text-neon-yellow text-glow-yellow leading-none">{p.n}</span>
                <div>
                  <h3 className="font-display font-bold text-2xl text-mist mb-2">{p.t}</h3>
                  <p className="text-mist/60">{p.d}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
