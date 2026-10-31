import { motion } from "motion/react";
import React from "react";
const ease = [0.22, 1, 0.36, 1];
const itemVariants = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } } };
export default function Stagger({ children, className = "" }) {
  return <motion.div className={className} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.12 }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}>{children}</motion.div>;
}
