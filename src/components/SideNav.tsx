import { motion } from "framer-motion";
import { Home, Sparkles, Layers, Workflow, Radio } from "lucide-react";

const items = [
  { icon: Home, label: "Top", href: "#hero", color: "yellow" },
  { icon: Sparkles, label: "Studio", href: "#about", color: "blue" },
  { icon: Layers, label: "Services", href: "#services", color: "yellow" },
  { icon: Workflow, label: "Work", href: "#work", color: "blue" },
  { icon: Radio, label: "Contact", href: "#contact", color: "yellow" },
];

export function SideNav() {
  return (
    <motion.nav
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
      className="hidden md:block fixed right-6 top-1/2 -translate-y-1/2 z-50"
    >
      <div className="glass-strong rounded-full p-3 flex flex-col gap-2">
        {items.map((it, i) => {
          const Icon = it.icon;
          const isYellow = it.color === "yellow";
          return (
            <a key={it.label} href={it.href} className="group relative" data-cursor-hover>
              <motion.div
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className={`w-11 h-11 rounded-full flex items-center justify-center text-mist/60 transition-all duration-300 ${
                  isYellow
                    ? "hover:text-neon-yellow hover:bg-neon-yellow/10 hover:shadow-[0_0_20px_rgba(253,229,43,0.6)]"
                    : "hover:text-neon-blue hover:bg-neon-blue/10 hover:shadow-[0_0_20px_rgba(179,210,239,0.6)]"
                }`}
              >
                <Icon size={18} strokeWidth={1.5} />
              </motion.div>
              <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1 rounded-full glass text-[10px] font-mono uppercase tracking-widest text-mist whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {String(i).padStart(2, "0")} / {it.label}
              </span>
            </a>
          );
        })}
      </div>
    </motion.nav>
  );
}
