import { motion } from "framer-motion";

const clients = [
  "HELION", "LUMEN", "MORI", "FREQUENCY.FM", "ONYX", "PHANTOM CO.", "NORTH/SOUTH", "ARC LABS", "KOSMOS", "FIELD", "VAPOR", "OUTLINE",
];

const testimonials = [
  {
    quote: "Voltcraft didn't redesign our brand — they sharpened how the entire company talks about itself. The work paid for itself in one quarter.",
    name: "Marie Aubert",
    role: "CMO, Helion Labs",
  },
  {
    quote: "Genuinely the most opinionated studio we've worked with. They push hard, ship faster than our internal team, and the craft is absurd.",
    name: "Daniel Kwon",
    role: "Founder, Nocturne",
  },
  {
    quote: "Every deliverable felt like it belonged in a museum and a Stripe dashboard at the same time. Rare combination.",
    name: "Priya Anand",
    role: "Head of Design, Onyx Capital",
  },
];

export function Clients() {
  return (
    <section className="relative py-24 px-6 md:px-12 border-y border-mist/10">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.4em] text-neon-blue mb-10 text-center"
        >
          // Trusted by teams at
        </motion.p>

        <div className="overflow-hidden mb-20">
          <div className="flex gap-12 md:gap-16 animate-[marquee_40s_linear_infinite] whitespace-nowrap">
            {[...clients, ...clients].map((c, i) => (
              <span
                key={i}
                className="font-display font-bold text-2xl md:text-3xl text-mist/40 hover:text-neon-yellow transition-colors tracking-tight"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-7 flex flex-col gap-6 hover:border-neon-yellow/40 hover:shadow-[0_0_24px_rgba(253,229,43,0.15)] transition-all"
            >
              <span className="font-display font-bold text-5xl text-neon-yellow leading-none">"</span>
              <blockquote className="text-mist/90 text-base leading-relaxed flex-1">{t.quote}</blockquote>
              <figcaption className="border-t border-mist/10 pt-4">
                <p className="font-display font-bold text-mist">{t.name}</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-mist/50 mt-1">{t.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
