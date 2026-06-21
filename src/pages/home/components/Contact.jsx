import ScrollReveal from "../../../components/ScrollReveal";

function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 bg-(--bg2) px-6 py-24 sm:px-8 lg:px-16"
    >
      <div className="mx-auto max-w-xl text-center">
        <div className="reveal">
          <h2 className="text-[clamp(1.8rem,3vw,2.8rem)] font-black">
            لنبدأ مشروعك اليوم
          </h2>
          <p className="mx-auto mt-4 max-w-137.5 text-base font-light leading-7 text-(--text-muted)">
            أخبرني عن مشروعك وسأرد عليك خلال 24 ساعة بعرض سعر مجاني
          </p>
        </div>

        <div className="mt-8 reveal">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-[1.25rem] border border-(--border) bg-(--surface) p-8">
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 h-75 w-75 rounded-full bg-[radial-gradient(circle,rgba(0,255,136,.07),transparent_70%)] pointer-events-none" />

              <form className="relative z-10">
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="flex flex-col text-right gap-2">
                    <span className="text-sm font-semibold text-(--text-muted)">
                      اسمك
                    </span>
                    <input
                      className="rounded-md border border-(--border) bg-(--bg) px-4 py-3
                    text-(--text) placeholder:text-(--text-muted) outline-none focus:border-(--main-color)"
                      type="text"
                      placeholder="محمد العمري"
                    />
                  </label>

                  <label className="flex flex-col text-right gap-2">
                    <span className="text-sm font-semibold text-(--text-muted)">
                      البريد الإلكتروني
                    </span>
                    <input
                      className="rounded-md border border-(--border) bg-(--bg) px-4 py-3 text-(--text)
                    placeholder:text-(--text-muted) outline-none focus:border-(--main-color)"
                      type="email"
                      placeholder="m@example.com"
                    />
                  </label>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <label className="flex flex-col text-right gap-2">
                    <span className="text-sm font-semibold text-(--text-muted)">
                      نوع المشروع
                    </span>
                    <select className="rounded-md border border-(--border) bg-(--bg) px-4 py-3 text-(--text) outline-none focus:border-(--main-color)">
                      <option value="">اختر نوع المشروع</option>
                      <option>متجر إلكتروني</option>
                      <option>موقع شركة</option>
                      <option>تطبيق ويب / SaaS</option>
                      <option>تحويل Figma لكود</option>
                      <option>تحسين موقع قائم</option>
                      <option>أخرى</option>
                    </select>
                  </label>

                  <label className="flex flex-col text-right gap-2">
                    <span className="text-sm font-semibold text-(--text-muted)">
                      الميزانية التقريبية
                    </span>
                    <select className="rounded-md border border-(--border) bg-(--bg) px-4 py-3 text-(--text) outline-none focus:border-(--main-color)">
                      <option value="">اختر الميزانية</option>
                      <option>أقل من 250$</option>
                      <option>250$ - 500$</option>
                      <option>500$ - 1500$</option>
                      <option>1500$ - 5000$</option>
                      <option>أكثر من 5000$</option>
                    </select>
                  </label>
                </div>

                <div className="mt-4">
                  <label className="flex flex-col text-right gap-2">
                    <span className="text-sm font-semibold text-(--text-muted)">
                      وصف مشروعك
                    </span>
                    <textarea
                      rows={4}
                      placeholder="أخبرني عن مشروعك، ماذا تحتاج، وما الهدف منه..."
                      className="min-h-27.5 resize-none rounded-md border border-(--border) bg-(--bg) px-4
                    py-3 text-(--text) placeholder:text-(--text-muted) outline-none focus:border-(--main-color)"
                    />
                  </label>
                </div>

                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full rounded-md bg-(--main-color) px-4 py-3 text-base font-extrabold text-black
                  shadow-[0_0_30px_rgba(0,255,136,.2)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_40px_var(--shadow-hov)]"
                  >
                    ⚡ أرسل طلبك الآن — مجاناً
                  </button>
                </div>
              </form>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 reveal">
          <ScrollReveal>
            <a
              href="https://wa.me/966500000000"
              className="inline-flex items-center gap-2 rounded-md border border-(--border) bg-(--surface)
             px-4 py-2 text-sm text-(--text-muted) hover:border-(--main-color) hover:text-(--main-color) transition"
            >
              💬 واتساب
            </a>
          </ScrollReveal>
          <ScrollReveal>
            <a
              href="mailto:m@dev.com"
              className="inline-flex items-center gap-2 rounded-md border border-(--border) bg-(--surface)
               px-4 py-2 text-sm text-(--text-muted) hover:border-(--main-color) hover:text-(--main-color) transition"
            >
              📧 إيميل
            </a>
          </ScrollReveal>
          <ScrollReveal>
            <a
              href="https://linkedin.com"
              className="inline-flex items-center gap-2 rounded-md border border-(--border) bg-(--surface) px-4 py-2
               text-sm text-(--text-muted) hover:border-(--main-color) hover:text-(--main-color) transition"
            >
              🔗 LinkedIn
            </a>
          </ScrollReveal>
          <ScrollReveal>
            <a
              href="https://github.com"
              className="inline-flex items-center gap-2 rounded-md border border-(--border) bg-(--surface)
               px-4 py-2 text-sm text-(--text-muted) hover:border-(--main-color) hover:text-(--main-color) transition"
            >
              🐙 GitHub
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;
