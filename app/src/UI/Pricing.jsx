import { useEffect, useState } from "react";
import { CTAButton } from "./Components/CTAButton";
import { LINKS } from "@/lib/links";

// TODO: update the date the sale ends
const SALE_END_DATE = "2026-09-14T09:00:00+03:00";
const LAUNCH_END = new Date(SALE_END_DATE).getTime();
const LAUNCH_END_LABEL = new Date(LAUNCH_END).toLocaleDateString("he-IL", {
  day: "numeric",
  month: "long",
});

const CURRICULUM = [
  "קריאת גרפים בפרייס אקשן בלבד, בלי אינדיקטורים",
  "אזורי עניין, אזורי נזילות ומגמות",
  "מציאת ביאס יומי ושבועי ברמה מתקדמת",
  "שיעורים מנטליים, ניהול סיכונים וניהול עסקי לסוחרי נוסטרו",
  "סיסטם מלא לביצוע עסקאות, כולל 30 סרטונים של עסקאות אמיתיות",
  "הדרכות על חברות נוסטרו ומיסוי לסוחרים",
];

const PLANS = [
  {
    id: "training",
    name: "הכשרת המסחר המקיפה",
    tagline: "כל החומר, בקצב שלך. בלי ליווי ובלי קהילה.",
    launchPrice: "3,250",
    regularPrice: "3,700",
    href: LINKS.checkoutTraining,
    cta: "לרכישת ההכשרה",
    points: [
      "110 שיעורים מפורטים, מהיסודות ועד חומר מתקדם",
      "כל השיטה חשופה, מ-0",
      "מתאים למי שמעדיף ללמוד לבד",
      "בלי ליווי אישי ובלי גישה לקהילה",
    ],
    curriculum: CURRICULUM,
  },
  {
    id: "flagship",
    badge: "הכי מקיף",
    featured: true,
    name: "תוכנית הדגל",
    tagline: "ההכשרה המלאה, ליווי אישי מלידור וקהילת התלמידים.",
    launchPrice: "6,000",
    regularPrice: "6,500",
    href: LINKS.checkoutFlagship,
    cta: "אני רוצה להתחיל",
    points: [
      "ליווי אישי מלידור, בלי הגבלת זמן - כל שאלה, כל בעיה",
      "הכשרת מסחר מלאה: 110 שיעורים, מהיסודות ועד חומר מתקדם",
      "קהילה סגורה לתלמידים, עם ניתוחים מוסברים בכל יום מסחר",
      "סקירת שווקים שבועית של 20-30 דקות ותוכנית לשבוע",
      "תוכנית יומית ולייבים: מעבר על השווקים, יומני מסחר ושיעורי חידוד",
      "כולל את קורס ההשקעות והסווינג והקהילה שלו",
    ],
    curriculum: CURRICULUM,
  },
  {
    id: "investing",
    name: "השקעות ומסחר סווינג",
    tagline: "להשקיע נכון לטווח ארוך, ומודל הסווינג שלי.",
    launchPrice: "999",
    regularPrice: "1,500",
    href: LINKS.checkoutInvesting,
    cta: "לרכישת הקורס",
    points: [
      "30 שיעורים מפורטים: איך משקיעים נכון, מ-0",
      "מודל הכניסה שלי להשקעות ולמסחר סווינג",
      "קהילה סגורה עם רעיונות ההשקעה והסווינג שלי",
      "מענה לשאלות בקבוצה - ללא ליווי אישי",
    ],
  },
];

const Check = ({ dim }) => (
  <svg
    viewBox="0 0 20 20"
    aria-hidden="true"
    className={`mt-1 h-4 w-4 shrink-0 ${dim ? "text-brand-muted" : "text-brand-gold"}`}
  >
    <path
      d="M4 10.5l4 4 8-9"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Pricing = () => {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 60000);
    return () => clearInterval(id);
  }, []);

  const isLaunch = now < LAUNCH_END;

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-brand-ink py-8 lg:py-12"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_50%_38%,rgba(244,184,66,0.055),transparent_72%)]" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-16 lg:px-30">
        <div className="text-center">
          <h2 className="m-0 text-[30px] text-brand-text md:text-[42px]">
            <span className="text-brand-gold">מסלולים</span>
          </h2>
          {isLaunch && (
            <p className="mx-auto mt-5 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-brand-gold-dim/40 bg-brand-surface px-5 py-2 text-[15px] text-brand-text">
              <span className="font-semibold text-brand-gold">מחירי השקה</span>
              <span className="text-brand-text-2">זמין עד {LAUNCH_END_LABEL}</span>
            </p>
          )}
        </div>

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex h-full flex-col rounded-2xl border p-6 text-right md:p-8 ${
                plan.featured
                  ? "border-brand-gold-dim bg-brand-surface shadow-[0_0_60px_-20px_rgba(255,201,77,0.35)] lg:-mt-4 lg:pb-10"
                  : "border-brand-line bg-brand-surface/40"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 end-6 rounded-full bg-brand-gold px-3 py-1 text-xs font-bold text-brand-ink">
                  {plan.badge}
                </span>
              )}

              <h3 className="m-0 text-[24px] font-semibold text-brand-text">
                {plan.name}
              </h3>
              <p className="mt-2 min-h-[3rem] text-[15px] leading-relaxed text-brand-text-2">
                {plan.tagline}
              </p>

              <div className="mt-5 border-y border-brand-line py-5">
                <div className="flex items-baseline justify-start gap-3">
                  <span
                    className="text-[40px] font-bold leading-none text-brand-text"
                    dir="ltr"
                  >
                    ₪{isLaunch ? plan.launchPrice : plan.regularPrice}
                  </span>
                  {isLaunch && (
                    <span className="text-brand-muted line-through" dir="ltr">
                      ₪{plan.regularPrice}
                    </span>
                  )}
                </div>
                {isLaunch && (
                  <p className="mt-2 text-xs text-brand-gold">
                    מחיר השקה - זמין עד {LAUNCH_END_LABEL}
                  </p>
                )}
              </div>

              <ul className="mt-6 space-y-3">
                {plan.points.map((point) => {
                  const dim = point.startsWith("בלי") || point.includes("ללא ליווי");
                  return (
                    <li
                      key={point}
                      className={`flex gap-2.5 text-[15px] leading-relaxed ${
                        dim ? "text-brand-muted" : "text-brand-text-2"
                      }`}
                    >
                      <Check dim={dim} />
                      <span>{point}</span>
                    </li>
                  );
                })}
              </ul>

              {plan.curriculum && (
                <details className="group mt-5 border-t border-brand-line pt-4">
                  <summary className="cursor-pointer list-none text-[15px] font-medium text-brand-gold-dim transition-colors hover:text-brand-gold">
                    מה נלמד בהכשרה
                    <span className="inline-block ps-2 transition-transform group-open:rotate-90">
                      ‹
                    </span>
                  </summary>
                  <ul className="mt-4 space-y-2.5">
                    {plan.curriculum.map((line) => (
                      <li
                        key={line}
                        className="flex gap-2.5 text-[14px] leading-relaxed text-brand-text-2"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-gold-dim" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </details>
              )}

              <div className="mt-8 pt-2">
                <CTAButton
                  href={plan.href}
                  external
                  size="sm"
                  variant={plan.featured ? "primary" : "secondary"}
                  className="w-full"
                >
                  {plan.cta}
                </CTAButton>
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-[70ch] text-center text-xs leading-relaxed text-brand-muted">
          התוכן הוא חינוכי בלבד ואינו מהווה ייעוץ השקעות. מסחר כרוך בסיכון להפסד
          ההון. תוצאות עבר אינן מעידות על תוצאות עתידיות.
        </p>
      </div>
    </section>
  );
};
