
import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";

export const AnimatedCounter = ({ to, duration = 2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // 1. إنشاء قيمة متحركة تبدأ من الصفر
  const count = useMotionValue(0);

  // 2. تحويل الرقم إلى رقم صحيح (بدون كسور) تلقائياً أثناء الحركة
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      // 3. تشغيل الأنميشن حتى الرقم النهائي عند ظهور العنصر
      animate(count, to, { duration: duration, ease: "easeOut" });
    }
  }, [isInView, count, to, duration]);

  // 4. طباعة القيمة المتحركة داخل motion.span
  return <motion.span ref={ref}>{rounded}</motion.span>;
};

export default AnimatedCounter;
