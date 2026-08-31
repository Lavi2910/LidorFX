const GROUPS = [
  {
    title: "אם כבר התנסית",
    items: [
      "למדת המון - קורסים, יוטיוב, קבוצות - ועדיין אין תוצאות",
      "אתה מכיר קונספטים ותיאוריות אבל אין לך מודל ברור",
      "אתה מוכן לשנות הרגלים",
    ],
  },
  {
    title: "אם אתה רק מתחיל",
    items: [
      "עולם המסחר מסקרן אותך ואתה רוצה להיכנס אליו נכון",
      "אתה חושש להיכנס לבד ולא יודע במי לבטוח",
      "אתה מעדיף ללמוד מהיסוד מאשר לתקן הרגלים אחר כך",
    ],
  },
];

const Check = () => (
  <svg
    viewBox="0 0 20 20"
    aria-hidden="true"
    className="mt-1 h-5 w-5 shrink-0 text-brand-gold"
  >
    <path
      d="M4 10.5l4 4 8-9"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ForWho = () => {
  return (
    <section id="for-who" className="bg-brand-ink py-8 lg:py-12">
      <div className="mx-auto max-w-[1200px] px-6 md:px-16 lg:px-30">
        <h2 className="m-0 text-center text-[30px] text-brand-text md:text-[40px]">
          זה <span className="text-brand-gold">בשבילך</span>?
        </h2>

        <div className="mt-10 grid gap-5 lg:grid-cols-2 lg:gap-6">
          {GROUPS.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-brand-gold-dim/40 bg-brand-surface/60 p-6 text-right md:p-8"
            >
              <h3 className="m-0 text-[22px] font-semibold text-brand-text">
                {group.title}
              </h3>
              <ul className="mt-5 space-y-4">
                {group.items.map((line) => (
                  <li
                    key={line}
                    className="flex gap-3 leading-relaxed text-brand-text-2"
                  >
                    <Check />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
