import { motion } from "motion/react";
import Container from "../../../components/Container";

export default function ProjectHero({ project, projectData }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-20"
    >
      <Container className="flex flex-col md:flex-row items-start justify-between gap-8">
        {/* Left - Preview */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--main-color)] via-[var(--blue)] to-[var(--purple)] rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition duration-500" />

            <div
              className={`relative border border-[var(--border)] rounded-3xl overflow-hidden bg-[var(--surface2)]/50 backdrop-blur-sm ${project.bgClass}`}
            >
              <div className="h-80 md:h-96 flex items-center justify-center text-6xl md:text-8xl">
                {project.emoji}
              </div>
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(0,255,136,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />
            </div>

            <motion.div
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="flex gap-2 mt-4"
            >
              {project.badges.map((badge, i) => (
                <span
                  key={i}
                  className={`px-4 py-2 rounded-full text-sm font-medium border ${badge.tone === "green" ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300" : "bg-blue-500/10 border-blue-500/30 text-blue-300"}`}
                >
                  {badge.text}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Right - Info */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="w-full md:w-1/2 flex flex-col justify-start"
        >
          <div className="inline-flex w-fit mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-[var(--main-color)] to-[var(--main-color-dim)] text-[var(--bg)] uppercase tracking-wider">
              {project.type}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--text)] leading-tight">
            {project.title}
          </h1>

          <p className="text-lg text-[var(--text-muted)] mb-6 leading-relaxed">
            {project.description}
          </p>

          <div className="grid grid-cols-3 gap-4 mb-6 p-4 rounded-2xl bg-[var(--surface2)]/50 border border-[var(--border)]">
            {projectData.stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[var(--main-color)] mb-1">
                  {s.value}
                </div>
                <div className="text-xs md:text-sm text-[var(--text-muted)]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3 flex-wrap">
            {projectData.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                className={`px-5 py-2 rounded-lg font-semibold transition duration-200 flex items-center gap-2 ${i === 0 ? "bg-gradient-to-r from-[var(--main-color)] to-[var(--main-color-dim)] text-[var(--bg)]" : "border-2 border-[var(--main-color)] text-[var(--main-color)]"}`}
              >
                <span>{link.icon}</span>
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </Container>
    </motion.section>
  );
}
