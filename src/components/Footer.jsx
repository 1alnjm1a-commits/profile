import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-black/95 border-t border-(--border) text-white">
      <Container className="flex flex-col gap-6 py-10 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <p className="text-sm text-(--text-muted)">
          صُنع بـ <span className="text-(--main-color)">❤️</span> وكثير من
          القهوة ☕
        </p>

        <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-center">
          <span className="text-base font-extrabold tracking-tight text-white">
            Ahmed<span className="text-(--main-color)">Dev</span>
          </span>
          <span className="text-sm text-(--text-muted)">
            © 2025 — جميع الحقوق محفوظة
          </span>
        </div>
      </Container>
    </footer>
  );
}
