const STATS = [
  { value: "6+", label: "שנות מסחר" },
  { value: "200+", label: "תלמידים בליווי אישי" },
  { value: "3.3M₪", label: "במשיכות של תלמידים", ltr: true },
  { value: "24/6", label: "מענה אישי" },
];

export const Data = () => {
  return (
    <section className="border-y border-brand-gold-dim/25 bg-brand-abyss">
      <div className="grid grid-cols-2 gap-px bg-brand-gold-dim/25 lg:grid-cols-4">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="bg-brand-abyss px-4 py-6 text-center"
          >
            <p
              className="text-[32px] leading-none text-brand-gold md:text-[40px]"
              dir={stat.ltr ? "ltr" : undefined}
            >
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-brand-text-2 md:text-base">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
