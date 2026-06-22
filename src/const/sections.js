const services = [
  {
    icon: "⚛️",
    title: "تطوير تطبيقات React",
    description:
      "بناء واجهات تفاعلية وسريعة بـ React مع إدارة حالة احترافية وأداء عالي من اليوم الأول.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    icon: "🎨",
    title: "تحويل Figma إلى كود",
    description:
      "أحوّل تصميمك من Figma إلى كود حقيقي بدقة بكسل لبكسل، مع دعم كامل للغة العربية RTL.",
    tags: ["Figma", "RTL", "Tailwind"],
  },
  {
    icon: "✨",
    title: "حركات وتفاعلات Animations",
    description:
      'إضافة حركات سلسة وتفاعلية تعطي موقعك "الروح" وتجعل الزوار يقضون وقتاً أطول.',
    tags: ["Framer Motion", "GSAP", "CSS Animations"],
  },
  {
    icon: "📱",
    title: "تصميم متجاوب Responsive",
    description:
      "موقعك يبدو مثالياً على كل الشاشات من الهاتف للكمبيوتر بدون أي تنازل في الجودة.",
    tags: ["Mobile First", "CSS Grid", "Flexbox"],
  },
  {
    icon: "🚀",
    title: "تحسين الأداء والسرعة",
    description:
      "مواقع تحصل على 95+ في PageSpeed، تحميل في ثوانٍ، وتجربة مستخدم خالية من التأخير.",
    tags: ["Lighthouse", "Optimization", "SEO"],
  },
  {
    icon: "🛒",
    title: "متاجر إلكترونية",
    description:
      "بناء متاجر احترافية بتجربة شراء سلسة وتصميم يزيد من معدل التحويل والمبيعات.",
    tags: ["E-commerce", "Shopify", "WooCommerce"],
  },
];

const projects = [
  {
    id: 1,
    emoji: "🛒",
    type: "متجر إلكتروني",
    badges: [
      { text: "RTL ✓", tone: "green" },
      { text: "98 🚀", tone: "blue" },
    ],
    title: "متجر أزياء نسائي",
    description:
      "تصميم متجر كامل بتجربة شراء سلسة، دعم عربي كامل، وسرعة تحميل استثنائية.",
    bgClass: "bg-[linear-gradient(135deg,_#0a1628,_#0d2137)]",
  },
  {
    id: 2,
    emoji: "📊",
    type: "لوحة تحكم SaaS",
    badges: [
      { text: "Dark Mode ✓", tone: "green" },
      { text: "96 🚀", tone: "blue" },
    ],
    title: "Dashboard تحليلات بيانات",
    description:
      "لوحة تحكم تفاعلية مع رسوم بيانية حية، فلاتر متقدمة، وتصدير تقارير PDF.",
    bgClass: "bg-[linear-gradient(135deg,_#1a0a28,_#2d1045)]",
  },
  {
    id: 3,
    emoji: "🏥",
    type: "موقع شركة",
    badges: [
      { text: "Animations ✓", tone: "green" },
      { text: "99 🚀", tone: "blue" },
    ],
    title: "موقع عيادة طبية",
    description:
      "موقع احترافي مع نظام حجز مواعيد، صور طبية عالية الجودة، ونتيجة 99 في PageSpeed.",
    bgClass: "bg-[linear-gradient(135deg,_#0a1f1a,_#0d3028)]",
  },
];

const navItems = [
  { label: "الخدمات", href: "#services" },
  { label: "أعمالي", href: "#portfolio" },
  { label: "لماذا انا", href: "#why" },
  { label: "آراء العملاء", href: "#testimonials" },
  { label: "تواصل معي", href: "#contact" },
];
const features = [
  {
    icon: "⚡",
    title: "تسليم سريع بدون تأخير",
    description:
      "أحترم وقتك. مواعيد التسليم ليست اقتراحات، هي التزامات. معظم مشاريعي تُسلَّم قبل الموعد.",
  },
  {
    icon: "🔒",
    title: "موثوقية تامة وتواصل مستمر",
    description:
      "تحديثات دورية عن سير المشروع، وردود سريعة. لن تُترك في الظلام أبداً.",
  },
  {
    icon: "🎯",
    title: "تركيز على النتائج لا الكود",
    description:
      "هدفي أن يحقق موقعك نتائجك التجارية، ليس فقط أن يبدو جميلاً. كل قرار تصميمي له سبب.",
  },
  {
    icon: "📞",
    title: "دعم ما بعد التسليم",
    description:
      "لا تختفي بعد تسليم المشروع. متاح للتعديلات الطارئة والأسئلة حتى بعد إطلاق الموقع.",
  },
];

const skills = [
  {
    label: "React / Next.js",
    description: "بناء واجهات مستخدم تفاعلية وسريعة الاستجابة",
  },
  {
    label: "HTML / CSS / Tailwind",
    description: "تصميم واجهات جميلة ومتناغمة مع تجربة مستخدم سلسة",
  },
  {
    label: "JavaScript / TypeScript",
    description: "كود منظم وقابل للتوسع باستخدام أفضل الممارسات",
  },
  {
    label: "Figma / UI Design",
    description: "تصميم بصري احترافي يركز على تجربة المستخدم",
  },
  {
    label: "Performance / SEO",
    description: "تحسين سرعة التحميل والأداء لنتائج بحث أفضل",
  },
];
const reviews = [
  {
    emoji: "خ",
    name: "خالد المنصور",
    role: "صاحب متجر أزياء",
    text: "صراحة تجاوز توقعاتي بكثير. الموقع سريع جداً، التصميم احترافي، والتواصل كان ممتاز طول المشروع. أنصح به بشدة.",
  },
  {
    emoji: "ر",
    name: "ريم الشمري",
    role: "مؤسسة شركة ناشئة",
    text: "أخذت الديزاين من ديزاينر وأعطيته له، وجابه كود نظيف 100%. المشروع اتسلّم في الوقت المحدد بالضبط. سأتعامل معه مرة أخرى.",
  },
  {
    emoji: "أ",
    name: "أحمد العتيبي",
    role: "مدير تقنية — شركة SaaS",
    text: "لوحة التحكم اللي بناها شغلتنا بشكل مجنون. الفريق الكامل مبسوط من التصميم والأداء. ما توقعنا نلاقي مطور بمستواه.",
  },
];
const projectTechs = {
  1: {
    tools: ["React", "Next.js", "Tailwind CSS", "E-commerce API"],
    stats: [
      { label: "رضا العملاء", value: "98%" },
      { label: "معدل التحويل", value: "+42%" },
      { label: "سرعة التحميل", value: "0.8s" },
    ],
    features: [
      "🛒 نظام سلة تسوق متقدم",
      "💳 معالجة دفع آمنة",
      "📦 إدارة المخزون",
      "⭐ نظام التقييمات والمراجعات",
      "🔍 بحث وفلترة متقدمة",
      "📱 تطبيق موبايل متكامل",
    ],
    links: [
      { label: "الموقع الحي", icon: "🌐", url: "#" },
      { label: "الكود المصدري", icon: "💻", url: "#" },
    ],
  },
  2: {
    tools: ["React", "Chart.js", "D3.js", "Node.js", "MongoDB"],
    stats: [
      { label: "عدد المستخدمين", value: "5K+" },
      { label: "معدل الأداء", value: "96" },
      { label: "وقت الاستجابة", value: "150ms" },
    ],
    features: [
      "📊 رسوم بيانية تفاعلية",
      "🎨 Dark Mode و Light Mode",
      "🔔 إشعارات فورية",
      "📥 تصدير التقارير",
      "🔐 مصادقة آمنة",
      "⚙️ إعدادات متقدمة",
    ],
    links: [
      { label: "الموقع الحي", icon: "🌐", url: "#" },
      { label: "الكود المصدري", icon: "💻", url: "#" },
    ],
  },
  3: {
    tools: ["React", "Headless CMS", "Framer Motion", "SEO Optimization"],
    stats: [
      { label: "ترتيب SEO", value: "#1" },
      { label: "سرعة الموقع", value: "99" },
      { label: "التفاعل", value: "+85%" },
    ],
    features: [
      "📅 نظام حجز مواعيد آلي",
      "👨‍⚕️ معرض الأطباء والتخصصات",
      "📰 مقالات طبية موثوقة",
      "💬 نماذج اتصال ذكية",
      "🎥 معرض صور وفيديو",
      "✉️ نشرة بريدية تفاعلية",
    ],
    links: [
      { label: "الموقع الحي", icon: "🌐", url: "#" },
      { label: "الكود المصدري", icon: "💻", url: "#" },
    ],
  },
};
export {
  services,
  projects,
  navItems,
  features,
  skills,
  reviews,
  projectTechs,
};
