import { useEffect, useRef, useState } from "react";

const STATS = [
  { target: 6, decimals: 0, suffix: "+", label: "שנות מסחר" },
  { target: 200, decimals: 0, suffix: "+", label: "תלמידים בליווי אישי" },
  { target: 3.3, decimals: 1, suffix: "M₪", label: "במשיכות של תלמידים", ltr: true },
  { static: "24/6", label: "מענה אישי" },
];

const COUNT_DURATION_MS = 1600;
const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

const useCountUp = (target, decimals, active) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    let frame;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / COUNT_DURATION_MS, 1);
      setValue(target * easeOutExpo(progress));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target]);

  return value.toFixed(decimals);
};

const StatValue = ({ stat, active }) => {
  const count = useCountUp(stat.target ?? 0, stat.decimals ?? 0, active && stat.target != null);

  return (
    <p
      className="text-[32px] leading-none text-brand-gold md:text-[40px]"
      dir={stat.ltr ? "ltr" : undefined}
    >
      {stat.static ?? `${count}${stat.suffix ?? ""}`}
    </p>
  );
};

export const Data = () => {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="border-y border-brand-gold-dim/25 bg-brand-abyss">
      <div className="grid grid-cols-2 gap-px bg-brand-gold-dim/25 lg:grid-cols-4">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="bg-brand-abyss px-4 py-6 text-center"
          >
            <StatValue stat={stat} active={active} />
            <p className="mt-2 text-sm text-brand-text-2 md:text-base">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
