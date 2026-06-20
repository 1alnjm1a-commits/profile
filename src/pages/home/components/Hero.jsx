import AnimatedCounter from "../../../components/AnimatedCounter";
function Hero({ className }) {
  return (
    <section
      className={`${className} hero relative min-h-lvh grid place-content-center overflow-hidden`}
    >
      <div className="blob-1 absolute rounded-4xl blur-3xl opacity-15 w-[28em] h-[28em]"></div>
      <div className="blob-2 absolute rounded-4xl blur-3xl opacity-15 w-[24em] h-[24em]"></div>
      <div className="blob-3 absolute rounded-4xl blur-3xl opacity-15 w-[21em] h-[21em]"></div>
      <div className="relative z-1 max-w-225 px-4 text-center sm:px-0">
        <div
          className="inline-flex items-center gap-2 rounded-full border border-(--border)
        bg-[rgba(0,255,136,0.08)] px-5 py-2 text-[0.82rem] font-medium text-(--main-color) mb-8 animate-[fadeUp_0.8s_ease_both]"
        >
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-(--main-color) animate-[pulse_2s_ease_infinite]"></span>
          متاح للمشاريع الجديدة
        </div>
        <h1 className="text-[clamp(2.3rem,4vw,4rem)] font-black leading-[1.15] mb-6 animate-[fadeUp_0.8s_0.15s_ease_both]">
          أصمّم تجارب ويب
        </h1>
        <h1 className="text-[clamp(2.3rem,4vw,4rem)] font-black leading-[1.15] mb-6 animate-[fadeUp_0.8s_0.15s_ease_both]">
          <span
            className="relative inline-block text-(--main-color) after:absolute after:bottom-1 after:left-0
           after:right-0 after:h-0.75 after:bg-(--main-color) after:opacity-30 after:content-['']"
          >
            تبهر عملاءك
          </span>
          <span> وتزيد مبيعاتك</span>
        </h1>
        <p className="mx-auto mb-10 max-w-150 text-[1.15rem] font-light text-(--text-muted) animate-[fadeUp_0.8s_0.3s_ease_both]">
          مطور واجهات أمامي متخصص في React وتحويل تصاميم Figma إلى كود نظيف
          وسريع، مع حركات سلسة تعطي انطباعاً بالجودة العالية.
        </p>
        <div className="flex flex-wrap justify-center gap-4 animate-[fadeUp_0.8s_0.45s_ease_both]">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-2xl bg-(--main-color)
              px-8 py-3 text-base font-extrabold text-black shadow-[0_0_30px_rgba(0,255,136,0.2)]
              transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,255,136,0.4)]"
          >
            ⚡ اطلب مشروعك الآن
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 rounded-2xl border border-[rgba(240,240,245,0.15)] bg-transparent px-8 py-3 text-base
            font-bold text-white transition-colors duration-200 hover:border-(--main-color) hover:bg-[rgba(0,255,136,0.04)] hover:text-(--main-color)"
          >
            🎨 شاهد أعمالي
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-12 border-t border-(--border) mt-16 pt-12 animate-[fadeUp_0.8s_0.6s_ease_both]">
          <div className="text-center">
            +<AnimatedCounter to={12} duration={2} />
            <div className="mt-1 text-sm text-(--text-muted)">
              مشروع مكتمل
            </div>
          </div>
          <div className="text-center">
            <AnimatedCounter to={98} duration={2} />%
            <div className="mt-1 text-sm text-(--text-muted)">
              نقاط PageSpeed
            </div>
          </div>
          <div className="text-center">
            <AnimatedCounter to={100} duration={2} />%
            <div className="mt-1 text-sm text-(--text-muted)">
              رضا العملاء
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
