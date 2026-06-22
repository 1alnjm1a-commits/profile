// Animation configurations
export const ANIMATION_CONFIG = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  slideInLeft: {
    initial: { x: -50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.6 },
  },
  slideInRight: {
    initial: { x: 50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.6, delay: 0.2 },
  },
  slideUp: {
    initial: { y: 20, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
  },
  scaleUp: {
    initial: { scale: 0.9, opacity: 0 },
    whileInView: { scale: 1, opacity: 1 },
    viewport: { once: true },
  },
};

// Tailwind utility classes
export const STYLES = {
  gradient:
    "bg-gradient-to-r from-[var(--main-color)] via-[var(--blue)] to-[var(--purple)]",
  glowEffect:
    "absolute -inset-1 bg-gradient-to-r from-[var(--main-color)] via-[var(--blue)] to-[var(--purple)] rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition duration-500",
  gridPattern:
    "absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(0,255,136,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.03)_1px,transparent_1px)] bg-[size:30px_30px]",
  card: "p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface2)]/30 backdrop-blur-sm",
  cardHover:
    "hover:border-[var(--main-color)] hover:bg-[var(--surface2)]/50 transition duration-300",
  sectionTitle: "text-3xl md:text-4xl font-bold text-[var(--text)] mb-4",
  underline:
    "h-1 w-20 bg-gradient-to-r from-[var(--main-color)] to-[var(--main-color-dim)] rounded-full",
  btnPrimary:
    "px-8 py-4 bg-gradient-to-r from-[var(--main-color)] to-[var(--main-color-dim)] text-[var(--bg)] rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-[var(--main-color)]/40 transition duration-300",
  badge: "px-4 py-2 rounded-full text-sm font-medium border",
};

// Badge tone styles
export const BADGE_TONES = {
  green: "bg-emerald-500/10 border-emerald-500/30 text-emerald-300",
  blue: "bg-blue-500/10 border-blue-500/30 text-blue-300",
};

// Gallery items
export const GALLERY_ITEMS = [
  { icon: "📱", label: "Mobile" },
  { icon: "🖥️", label: "Desktop" },
  { icon: "🎨", label: "Design" },
  { icon: "⚙️", label: "Features" },
];
