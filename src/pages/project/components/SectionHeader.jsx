import { motion } from "motion/react";
import { ANIMATION_CONFIG, STYLES } from "../constants";

export default function SectionHeader({ title }) {
  return (
    <motion.div
      initial={ANIMATION_CONFIG.slideUp.initial}
      whileInView={ANIMATION_CONFIG.slideUp.whileInView}
      viewport={ANIMATION_CONFIG.slideUp.viewport}
      className="mb-12"
    >
      <h2 className={STYLES.sectionTitle}>{title}</h2>
      <div className={STYLES.underline} />
    </motion.div>
  );
}
