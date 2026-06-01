import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const el = e.target as HTMLElement;
      setHovering(!!el.closest("a, button, input, textarea, [data-cursor-hover]"));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-neon-yellow mix-blend-screen"
        animate={{
          x: pos.x - (hovering ? 24 : 6),
          y: pos.y - (hovering ? 24 : 6),
          width: hovering ? 48 : 12,
          height: hovering ? 48 : 12,
          opacity: hovering ? 0.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 1450, damping: 40, mass: 0.1 }}
        style={{ boxShadow: "0 0 20px rgba(253,229,43,0.9), 0 0 40px rgba(253,229,43,0.5)" }}
      />
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full border border-neon-yellow/40"
        animate={{ x: pos.x - 20, y: pos.y - 20 }}
        transition={{ type: "spring", stiffness: 550, damping: 35 }}
        style={{ width: 40, height: 40 }}
      />
    </>
  );
}
