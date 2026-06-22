import { motion } from "motion/react";
import Container from "../../../components/Container";
import SectionHeader from "./SectionHeader";
import { GALLERY_ITEMS } from "../constants";

export default function ProjectGallery() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-20"
    >
      <Container>
        <SectionHeader title="عرض الصور والملفات" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GALLERY_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative group h-64 rounded-2xl border border-[var(--border)] overflow-hidden bg-gradient-to-br from-[var(--surface2)] to-[var(--surface)] cursor-pointer"
            >
              <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-20 group-hover:opacity-40 transition duration-300">
                {item.icon}
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <button className="px-6 py-2 bg-[var(--main-color)] text-[var(--bg)] rounded-lg font-semibold hover:scale-105 transition">
                  عرض
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </motion.section>
  );
}
