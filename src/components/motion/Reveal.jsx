import { motion } from "motion/react";
import React from "react";
const ease = [0.22, 1, 0.36, 1];
export default function Reveal({ children, className = "", delay = 0, y = 28 }) {
  return <motion.div className={className} initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.65, delay, ease }}>{children}</motion.div>;
}
