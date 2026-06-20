import ScrollReveal from "../../../components/ScrollReveal";
import { reviews } from "../../../const/sections";
function Testimonials() {


  return (
    <section id="testimonials" className="px-6 py-24 sm:px-8 lg:px-16">
      <div className="mx-auto mb-14 max-w-2xl text-center reveal">
        <h2 className="text-[clamp(1.8rem,3vw,2.8rem)] font-black tracking-[-0.03em]">
          ماذا يقول العملاء؟
        </h2>
        <p className="mx-auto mt-4 max-w-137.5 text-base font-light leading-7 text-(--text-muted)">
          الكلام الحقيقي من أصحاب مشاريع حقيقية
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {reviews.map((review) => (
          <ScrollReveal key={review.name}>
            <article
              className="relative overflow-hidden rounded-2xl border border-(--border) bg-(--surface) p-8"
            >
              <div className="pointer-events-none absolute left-6 top-4 select-none text-[5rem] font-serif text-(--main-color) opacity-[0.15]">
              "
            </div>
            <div className="relative z-10">
              <div className="mb-4 text-sm text-amber-400">★★★★★</div>
              <p className="mb-8 text-sm leading-7 text-(--text-muted)">
                {review.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--main-color),var(--blue))] text-lg font-black text-black">
                  {review.emoji}
                </div>
                <div>
                  <div className="font-extrabold text-sm">{review.name}</div>
                  <div className="text-xs text-(--text-muted)">
                    {review.role}
                  </div>
                </div>
              </div>
            </div>
          </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
