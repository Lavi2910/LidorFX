import methodChart from "../assets/method-chart.jpg";

const POINTS = [
  {
    title: "קריאת תנועת מחיר",
    text: "מבנה שוק, אזורי עניין ואזורי נזילות - ככלי עבודה, לא כרשימת מושגים.",
  },
  {
    title: "קביעת כיוון השוק",
    text: "דרך שפיתחתי לקבוע צד לפני שמחפשים עסקה, במקום לרדוף אחרי הגרף.",
  },
  {
    title: "מודל כניסה",
    text: "מגדיר מתי נכנסים - ובאותה מידה מתי מוותרים.",
  },
];

export const Method = () => {
  return (
    <section
      id="method"
      className="relative overflow-hidden bg-gradient-to-b from-brand-ink via-brand-abyss to-brand-ink py-8 lg:py-12"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_50%,rgba(244,184,66,0.06),transparent_70%)]" />

      <div className="relative z-10 mx-auto grid max-w-[1220px] items-center gap-12 px-6 md:px-16 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <figure className="relative m-0 w-full">
          <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[26px] bg-brand-gold/10 blur-2xl" />
          <div className="overflow-hidden rounded-xl bg-white p-1.5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.75)] ring-1 ring-brand-gold-dim/40">
            <img
              src={methodChart}
              alt="גרף מסחר של לידור"
              className="w-full rounded-[8px]"
              loading="lazy"
              width={1608}
              height={922}
            />
          </div>
        </figure>

        <div className="text-right">
          <h2 className="m-0 text-[34px] leading-tight text-brand-text md:text-[46px]">
            <span className="text-brand-gold">השיטה</span>
          </h2>
          <ul className="mt-9">
            {POINTS.map((p, i) => {
              const first = i === 0;
              const last = i === POINTS.length - 1;
              return (
                <li key={p.title} className="flex gap-5">
                  <div className="relative flex w-2.5 shrink-0 justify-center">
                    <span
                      className="absolute w-px bg-brand-line"
                      style={{
                        top: first ? "13px" : 0,
                        bottom: last ? "auto" : 0,
                        height: last ? "13px" : "auto",
                      }}
                    />
                    <span className="relative mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-brand-gold" />
                  </div>
                  <div className={`flex-1 ${last ? "" : "pb-8"}`}>
                    <h3 className="m-0 text-[20px] font-semibold text-brand-text md:text-[22px]">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-[17px] leading-relaxed text-brand-text-2">
                      {p.text}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
