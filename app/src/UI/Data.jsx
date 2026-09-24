

const STATS = [
  { target: 6, decimals: 0, suffix: "+", label: "שנות מסחר" },
  { target: 200, decimals: 0, suffix: "+", label: "תלמידים בליווי אישי" },
  { target: 3.3, decimals: 1, suffix: "M₪", label: "במשיכות של תלמידים", ltr: true },
  { static: "24/6", label: "מענה אישי" },
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
            <p className="text-[32px] leading-none text-brand-gold md:text-[40px]" dir="ltr">{stat.static ?? `${stat.target.toFixed(stat.decimals)}${stat.suffix}`}</p>
            <p className="mt-2 text-sm text-brand-text-2 md:text-base">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
