import { motion } from "motion/react";
import Container from "../../../components/Container";
import { HashLink } from "react-router-hash-link";
import { STYLES } from "../constants";

export default function ProjectCTA() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-20"
    >
      <Container>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="relative p-12 rounded-3xl border border-[var(--border)] bg-gradient-to-r from-[var(--surface2)]/50 to-[var(--surface)]/50 backdrop-blur-sm overflow-hidden"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-[var(--main-color)] via-[var(--blue)] to-[var(--purple)] rounded-3xl blur-2xl opacity-20 -z-10" />

          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
              هل أعجبك هذا المشروع؟
            </h3>
            <p className="text-[var(--text-muted)] mb-8 text-lg">
              دعنا نناقش كيف يمكنني بناء شيء مشابه لعملك بجودة احترافية وسعر
              عادل
            </p>
            <HashLink
              to="/#contact"
              className={`inline-block ${STYLES.btnPrimary}`}
            >
              ابدأ مشروعك الآن 🚀
            </HashLink>
          </div>
        </motion.div>
      </Container>
    </motion.section>
  );
}
