import { motion } from "motion/react";
import Container from "../../../components/Container";
import SectionHeader from "./SectionHeader";
import { ANIMATION_CONFIG, STYLES } from "../constants";

export default function ProjectSections({ features, tools }) {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <Container>
          <SectionHeader title="المميزات الرئيسية" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={ANIMATION_CONFIG.slideUp.initial}
                whileInView={ANIMATION_CONFIG.slideUp.whileInView}
                viewport={ANIMATION_CONFIG.slideUp.viewport}
                transition={{ delay: i * 0.08 }}
                className={`${STYLES.card} ${STYLES.cardHover} group cursor-pointer`}
              >
                <div className="text-3xl mb-3">{feature.split(" ")[0]}</div>
                <p className="text-[var(--text-muted)] group-hover:text-[var(--text)] transition duration-300">
                  {feature.split(" ").slice(1).join(" ")}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16"
      >
        <Container>
          <SectionHeader title="التقنيات المستخدمة" />

          <div className="flex flex-wrap gap-3">
            {tools.map((tool, i) => (
              <motion.div
                key={i}
                initial={ANIMATION_CONFIG.scaleUp.initial}
                whileInView={ANIMATION_CONFIG.scaleUp.whileInView}
                viewport={ANIMATION_CONFIG.scaleUp.viewport}
                transition={{ delay: i * 0.04 }}
                className="px-5 py-3 rounded-xl font-medium bg-gradient-to-r from-[var(--surface2)] to-[var(--surface2)]/50 border border-[var(--border)] text-[var(--text)] hover:border-[var(--main-color)] hover:shadow-lg hover:shadow-[var(--main-color)]/20 transition duration-300 cursor-pointer"
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </Container>
      </motion.section>
    </>
  );
}
