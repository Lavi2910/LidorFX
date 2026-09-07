import { MethodGallery } from "./Components/MethodGallery";

const POINTS = [
  {
    title: "קריאת תנועת מחיר",
    text: "הבנה עמוקה של התנהגות המחיר והדרך שבה השוק נע — מבנה שוק, אזורי עניין מתקדמים, אזורי נזילות משמעותיים והקשר ביניהם. עבודה עם גרף נקי, ללא תלות באינדיקטורים, במטרה להבין את תנועת המחיר עצמה ולזהות את הסיפור שהשוק מספר.",
  },
  {
    title: "קביעת כיוון השוק",
    text: "דרך מתקדמת שפיתחתי במהלך שנותיי בתור סוחר שתגרום לכם לדעת לאיזה כיוון השוק מכוון עוד לפני שתחפשו עסקה - אצלנו קודם כל מבינים ורק אחר כך פועלים.",
  },
  {
    title: "מודל כניסה לעסקה",
    text: "לאחר שלמדתם איך לקרוא את תנועת המחיר ולקבוע את כיוון השוק ברמה גבוהה, אתם מגיעים לשלב הסופי שבו תבינו איך לבצע את העסקאות בפועל ולנצל את הידע שלכם לרווחיות. תקבלו ממני מודל כניסה עם אחוז הצלחה גבוה + 40 דוגמאות פרקטיות לעסקאות ובקטסטים מלאים שעולים להכשרה כל הזמן.",
  },
  {
    title: "מנטליות וניהול סיכונים",
    text: "המטרה שלי היא לבנות סוחרים מקצועיים ולכן אני שם דגש על משמעת, ניהול נכון, ניהול סיכונים ומסחר רגוע - ללא לחץ, פחד מעסקאות, מסחר יתר, פחד מלפספס עסקאות או מסחר נקמה. אצלי עובדים על הכל.",
  },
];

export const Method = () => {
  return (
    <section
      id="method"
      className="relative overflow-hidden bg-gradient-to-b from-brand-ink via-brand-abyss to-brand-ink py-8 lg:py-12"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_50%,rgba(244,184,66,0.06),transparent_70%)]" />

      <h2 className="relative z-10 m-0 text-center text-[34px] leading-tight text-brand-text md:text-[46px]">
        <span className="text-brand-gold">השיטה</span> מבוססת על
      </h2>

      <div className="relative z-10 mx-auto mt-9 grid max-w-[1360px] items-stretch gap-12 px-6 md:px-16 lg:grid-cols-[1fr_1.3fr] lg:gap-14 lg:px-8">
        <figure className="relative m-0 w-full">
          <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[26px] bg-brand-gold/10 blur-2xl" />
          <div className="h-full min-h-[320px] overflow-hidden rounded-xl bg-white p-1.5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.75)] ring-1 ring-brand-gold-dim/40">
            <MethodGallery />
          </div>
        </figure>

        <div className="text-right">
          <ul>
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
