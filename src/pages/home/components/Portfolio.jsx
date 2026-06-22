import { projects } from "../../../const/sections";
import ScrollReveal from "../../../components/ScrollReveal";
import {Link} from "react-router-dom"
function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative z-10 bg-(--bg2) px-6 py-24 sm:px-8 lg:px-16"
    >
      <div className="mx-auto mb-14 max-w-2xl text-center reveal">
        <h2 className="text-[clamp(1.8rem,3vw,2.8rem)] font-black tracking-[-0.03em]">
          مشاريع قمت بها
        </h2>
        <p className="mx-auto mt-4 max-w-137.5 text-base font-light leading-7 text-(--text-muted)">
          كل مشروع يحمل قصة، تحدياً تقنياً، وعميلاً سعيداً
        </p>
      </div>

      <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ScrollReveal key={project.id}>
            <article
              className="group overflow-hidden rounded-2xl border border-(--border) bg-(--surface) transition duration-300
            hover:-translate-y-1 hover:border-[rgba(0,208,255,0.5)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.5)]"
            >
              <div className="relative flex h-50 items-center justify-center overflow-hidden">
                <div
                  className={`relative flex h-full w-full items-center justify-center text-[4rem] ${project.bgClass}`}
                >
                  {project.emoji}
                  <div
                    className="pointer-events-none absolute inset-0
                  bg-[linear-gradient(rgba(0,255,136,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.03)_1px,transparent_1px)]
                  bg-size-[30px_30px]"
                  />
                </div>
                <div
                  className="absolute inset-0 flex items-center justify-center gap-3
                bg-black/50 opacity-0 transition duration-300 group-hover:opacity-100"
                >
                  <a
                    href="#"
                    className="rounded-lg bg-(--main-color) px-4 py-2 text-sm font-bold text-black transition-transform duration-200 hover:scale-105"
                  >
                    معاينة حية ↗
                  </a>
                  <Link
                    to={`/projects/${project.id}`}
                    className="rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white transition-transform duration-200 hover:scale-105"
                  >
                    تفاصيل
                  </Link>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <span className="text-[0.73rem] font-mono uppercase tracking-[1px] text-(--main-color)">
                    {project.type}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.badges.map((badge) => (
                      <span
                        key={badge.text}
                        className={`rounded-full border px-2.5 py-1 text-[0.65rem] font-bold font-mono ${
                          badge.tone === "green"
                            ? "border-[rgba(0,255,136,.2)] bg-[rgba(0,255,136,.12)] text-(--main-color)"
                            : "border-[rgba(0,102,255,.2)] bg-[rgba(0,102,255,.12)] text-[#6699ff]"
                        }`}
                      >
                        {badge.text}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="mb-2 text-lg font-extrabold">{project.title}</h3>
                <p className="text-sm leading-7 text-(--text-muted)">
                  {project.description}
                </p>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
