import { motion } from "framer-motion";
import { useState } from "react";

export function Contact() {
  const [hover, setHover] = useState(false);

  return (
    <section id="contact" className="relative pt-32 pb-12 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 h-[60vh] bg-gradient-to-t from-neon-blue/10 to-transparent pointer-events-none" />

      <div className="max-w-[1600px] mx-auto relative">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="font-display font-extrabold text-[22vw] md:text-[18vw] leading-[0.85] tracking-tighter text-mist text-center"
        >
          LET'S<br />
          <span className="text-neon-yellow text-glow-yellow italic">BUILD.</span>
        </motion.h2>

        <div className="mt-20 grid lg:grid-cols-12 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-neon-blue">// 06 — Start a project</p>
            <p className="font-display text-2xl md:text-3xl text-mist leading-tight">
              Send a transmission. We respond within <span className="text-neon-yellow">48h</span>, in clear language, with no decks attached.
            </p>

            <div className="space-y-4 font-mono text-sm">
              <div className="flex justify-between glass rounded-lg p-4">
                <span className="text-mist/50 uppercase text-xs tracking-widest">Signal</span>
                <span className="text-mist">hello@witexpress.com</span>
              </div>
              <div className="flex justify-between glass rounded-lg p-4">
                <span className="text-mist/50 uppercase text-xs tracking-widest">Coordinates</span>
                <span className="text-mist">Berlin · DE</span>
              </div>
              <div className="flex justify-between glass rounded-lg p-4">
                <span className="text-mist/50 uppercase text-xs tracking-widest">Status</span>
                <span className="text-neon-yellow">● Open Q3 / 2026</span>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onSubmit={(e) => e.preventDefault()}
            className="lg:col-span-7 glass-strong rounded-2xl p-8 md:p-10 animate-pulse-glow-blue"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="01 / Name" placeholder="Your name" />
              <Field label="02 / Studio" placeholder="Company (optional)" />
              <Field label="03 / Channel" placeholder="email@domain.com" full type="email" />
              <Field label="04 / Vector" placeholder="Brand · Web · Installation" full />
              <div className="md:col-span-2">
                <label className="font-mono text-[10px] uppercase tracking-widest text-mist/50 mb-2 block">05 / Brief</label>
                <textarea
                  rows={4}
                  data-cursor-hover
                  placeholder="Describe the artifact you want to forge..."
                  className="w-full bg-transparent border border-mist/15 rounded-lg p-4 text-mist placeholder:text-mist/30 font-sans text-sm focus:border-neon-blue focus:shadow-[0_0_16px_rgba(179,210,239,0.4)] focus:outline-none transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              data-cursor-hover
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className={`mt-8 w-full font-display font-bold text-2xl md:text-3xl uppercase tracking-tight py-6 rounded-xl transition-all duration-300 ${
                hover
                  ? "bg-accolade text-neon-yellow border border-neon-yellow shadow-[0_0_40px_rgba(253,229,43,0.7)]"
                  : "bg-neon-yellow text-base shadow-[0_0_24px_rgba(253,229,43,0.5)]"
              }`}
            >
              ⟶ Transmit Signal
            </button>
          </motion.form>
        </div>

        <div className="mt-24 pt-8 border-t border-mist/10 flex flex-wrap justify-between items-center gap-4 font-mono text-[10px] uppercase tracking-widest text-mist/50">
          <span>© Witexpress / 2026 — All wavelengths reserved.</span>
          <span className="flex gap-6">
            <a href="#" data-cursor-hover className="hover:text-neon-yellow transition-colors">Instagram</a>
            <a href="#" data-cursor-hover className="hover:text-neon-yellow transition-colors">Are.na</a>
            <a href="#" data-cursor-hover className="hover:text-neon-yellow transition-colors">Read.cv</a>
          </span>
          <span className="text-neon-blue">v4.20 / Berlin · 22:47 CET</span>
        </div>
      </div>
    </section>
  );
}

function Field({ label, placeholder, full, type = "text" }: { label: string; placeholder: string; full?: boolean; type?: string }) {
  return (
    <div className={full ? "md:col-span-2" : ""}>
      <label className="font-mono text-[10px] uppercase tracking-widest text-mist/50 mb-2 block">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        data-cursor-hover
        className="w-full bg-transparent border border-mist/15 rounded-lg px-4 py-3 text-mist placeholder:text-mist/30 font-sans text-sm focus:border-neon-blue focus:shadow-[0_0_16px_rgba(179,210,239,0.4)] focus:outline-none transition-all"
      />
    </div>
  );
}
