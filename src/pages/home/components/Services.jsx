import { services } from "../../../const/sections";
import ScrollReveal from "../../../components/ScrollReveal";
function Services() {
  return (
    <section
      id="services"
      className="relative z-10 bg-(--bg2) px-6 py-24 sm:px-8 lg:px-16"
    >
      <div className="mx-auto mb-14 max-w-2xl text-center reveal">
        <h2 className="text-[clamp(1.8rem,3vw,2.8rem)] font-black tracking-[-0.03em]">
          ماذا أقدم لك؟
        </h2>
        <p className="mx-auto mt-4 max-w-137.5 text-base font-light leading-7 text-(--text-muted)">
          خدمات متخصصة لكل من يريد موقعاً احترافياً يبرز من المنافسين
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <ScrollReveal key={service.title}>
            <article
              className="group relative overflow-hidden rounded-2xl border border-(--border) bg-(--surface) p-8 transition duration-300
            hover:-translate-y-1 hover:border-[rgba(0,255,136,.4)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] reveal"
            >
              <div
                className="pointer-events-none absolute top-0 right-0 h-30 w-30 rounded-full bg-[radial-gradient(circle,rgba(0,255,136,.08),transparent_70%)]
              opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              <div className="relative">
                <div className="mb-6 inline-flex h-13 w-13 items-center justify-center rounded-xl border border-[rgba(0,255,136,.15)] bg-[rgba(0,255,136,.1)] text-2xl">
                  {service.icon}
                </div>
                <h3 className="mb-3 text-lg font-extrabold">{service.title}</h3>
                <p className="text-sm leading-7 text-(--text-muted)">
                  {service.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[rgba(0,255,136,.12)] bg-[rgba(0,255,136,.06)] px-3 py-1 text-[0.72rem] font-mono text-(--main-color)"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

export default Services;
