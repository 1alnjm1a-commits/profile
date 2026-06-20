import ScrollReveal from "../../../components/ScrollReveal";
import { features, skills } from "../../../const/sections";
function WhyMe() {
  return (
    <section className="px-6 py-24 sm:px-8 lg:px-16" id="why">
      <div className="mx-auto mb-14 max-w-2xl text-center reveal">
        <h2 className="text-[clamp(1.8rem,3vw,2.8rem)] font-black tracking-[-0.03em]">
          ما الذي يميزني؟
        </h2>
        <p className="mx-auto mt-4 max-w-137.5 text-base font-light leading-7 text-(--text-muted)">
          ليس فقط كودًا يعمل — بل تجربة كاملة من التواصل حتى التسليم
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-center">
        <div className="flex flex-col gap-6">
          {features.map((feature) => (
            <ScrollReveal key={feature.title} >
              <article className="group flex gap-5 items-start rounded-2xl border border-(--border) bg-(--surface) p-6 transition-colors duration-300 hover:border-[rgba(0,255,136,.3)] reveal">
                <div className="text-2xl mt-1">{feature.icon}</div>
                <div>
                  <h4 className="mb-2 font-bold">{feature.title}</h4>
                  <p className="text-sm leading-7 text-(--text-muted)">
                    {feature.description}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-[1.25rem] border border-(--border) bg-(--surface) p-8 reveal">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,255,136,.06),transparent_60%)]" />
          <div className="relative z-10">
            <p className="mb-8 text-sm font-semibold uppercase tracking-[0.18em] text-(--text-muted)">
              التقنيات
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {skills.map((skill) => (
                <ScrollReveal key={skill.label}>
                  <article
                    key={skill.label}
                    className="rounded-3xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-sm font-semibold">{skill.label}</h4>
                        <p className="mt-3 text-xs leading-6 text-(--text-muted)">
                          {skill.description}
                        </p>
                      </div>
                      <div className="mt-1 text-2xl">⚡</div>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyMe;
