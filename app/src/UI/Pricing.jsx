import { useEffect, useLayoutEffect, useRef, useState } from "react";
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

const INVESTING_CURRICULUM = [
  "איך השווקים הפיננסיים עובדים",
  "איך לנתח מניות/מדדים ברמה הגבוהה ביותר",
  "סיסטם מלא לכניסה לעסקה",
  "התנהלות נכונה - ניהול תיק השקעות וסווינג בצורה חכמה",
  "שיטה מלאה למציאת מניות רלוונטיות",
];

const PLANS = [
  {
    id: "training",
    name: "הכשרת המסחר המקיפה",
    tagline: "כל החומר, בקצב שלך. בלי ליווי ובלי קהילה.",
    launchPrice: "3,250",
    regularPrice: "3,700",
    href: LINKS.checkoutTraining,
    cta: "אני רוצה להתחיל",
    points: [
      "הכשרת מסחר מלאה: 110 שיעורים, מהיסודות ועד חומר מתקדם",
      "קהילה סגורה לתלמידים, עם ניתוחים מוסברים",
      "סקירת שווקים שבועית של 20-30 דקות ותוכנית לשבוע",
      "תוכנית יומית ולייבים: מעבר על השווקים, יומני מסחר ושיעורי חידוד",
      "ליווי אישי מלידור, בלי הגבלת זמן - כל שאלה, כל בעיה",
      "כולל את קורס ההשקעות והסווינג והקהילה שלו",
    ],
    excludedPoints: [
      "קהילה סגורה לתלמידים, עם ניתוחים מוסברים",
      "סקירת שווקים שבועית של 20-30 דקות ותוכנית לשבוע",
      "תוכנית יומית ולייבים: מעבר על השווקים, יומני מסחר ושיעורי חידוד",
      "ליווי אישי מלידור, בלי הגבלת זמן - כל שאלה, כל בעיה",
      "כולל את קורס ההשקעות והסווינג והקהילה שלו",
    ],
    curriculum: CURRICULUM,
    curriculumGapClass: "lg:mt-8",
  },
  {
    id: "flagship",
    featured: true,
    badge: "הכי מקיף",
    name: "תוכנית הדגל",
    tagline: "ההכשרה המלאה, ליווי אישי מלידור וקהילת התלמידים.",
    launchPrice: "6,000",
    regularPrice: "6,500",
    href: LINKS.checkoutFlagship,
    cta: "אני רוצה להתחיל",
    points: [
      "הכשרת מסחר מלאה: 110 שיעורים, מהיסודות ועד חומר מתקדם",
      "קהילה סגורה לתלמידים, עם ניתוחים מוסברים",
      "סקירת שווקים שבועית של 20-30 דקות ותוכנית לשבוע",
      "תוכנית יומית ולייבים: מעבר על השווקים, יומני מסחר ושיעורי חידוד",
      "ליווי אישי מלידור, בלי הגבלת זמן - כל שאלה, כל בעיה",
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
    cta: "אני רוצה להתחיל",
    points: [
      "שיעורים מפורטים: איך משקיעים נכון",
      "מודל הכניסה שלי להשקעות ולמסחר סווינג",
      "קהילה סגורה עם רעיונות ההשקעה והסווינג שלי",
      "מענה לשאלות בקבוצה",
      "ליווי אישי מלידור, בלי הגבלת זמן - כל שאלה, כל בעיה",
    ],
    excludedPoints: ["ליווי אישי מלידור, בלי הגבלת זמן - כל שאלה, כל בעיה"],
    curriculum: INVESTING_CURRICULUM,
    curriculumGapClass: "lg:mt-24",
  },
];

const Check = ({ dim }) => (
  <svg
    viewBox="0 0 20 20"
    aria-hidden="true"
    className={`h-4 w-4 shrink-0 ${dim ? "mt-0.5 text-brand-muted" : "text-brand-gold"}`}
  >
    {dim ? (
      <path
        d="M5 5l10 10M15 5L5 15"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ) : (
      <path
        d="M4 10.5l4 4 8-9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    )}
  </svg>
);

export const Pricing = () => {
  const [now, setNow] = useState(() => Date.now());
  const cardRefs = useRef([]);
  const [cardMinHeight, setCardMinHeight] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 60000);
    return () => clearInterval(id);
  }, []);

  useLayoutEffect(() => {
    const isDesktopGrid = () => window.matchMedia("(min-width: 1024px)").matches;

    const measure = () => {
      if (!isDesktopGrid()) {
        setCardMinHeight(0);
        return;
      }
      const heights = cardRefs.current.map((el) => el?.offsetHeight || 0);
      setCardMinHeight(Math.max(0, ...heights));
    };

    setCardMinHeight(0);
    let cancelled = false;
    const raf1 = requestAnimationFrame(() => {
      measure();
      const fontsReady = document.fonts?.ready ?? Promise.resolve();
      fontsReady.then(() => {
        if (!cancelled) requestAnimationFrame(measure);
      });
    });
    window.addEventListener("resize", measure);
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf1);
      window.removeEventListener("resize", measure);
    };
  }, []);

  const isLaunch = now < LAUNCH_END;

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-brand-ink py-6 lg:py-8"
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

        <div className="mt-8 grid items-start gap-5 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <div
              key={plan.id}
              ref={(el) => (cardRefs.current[i] = el)}
              style={cardMinHeight ? { minHeight: cardMinHeight } : undefined}
              className={`relative flex flex-col rounded-2xl border p-5 text-right md:p-6 ${
                plan.featured
                  ? "border-brand-gold-dim bg-brand-surface shadow-[0_0_60px_-20px_rgba(255,201,77,0.35)] lg:-mt-4 lg:pb-8"
                  : "border-brand-line bg-brand-surface/40"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 end-6 rounded-full bg-brand-gold px-3 py-1 text-xs font-bold text-brand-ink">
                  {plan.badge}
                </span>
              )}

              <h3 className="m-0 text-[20px] font-semibold text-brand-text">
                {plan.name}
              </h3>
              <p className="mt-1.5 text-[14px] leading-snug text-brand-text-2">
                {plan.tagline}
              </p>

              <div className="mt-3 border-y border-brand-line py-3">
                <div className="flex items-baseline justify-start gap-3">
                  <span
                    className="text-[32px] font-bold leading-none text-brand-text"
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
                  <p className="mt-1.5 text-xs text-brand-gold">
                    מחיר השקה - זמין עד {LAUNCH_END_LABEL}
                  </p>
                )}
              </div>

              <ul className="mt-3 space-y-2">
                {plan.points.map((point) => {
                  const dim =
                    point.startsWith("בלי") ||
                    point.includes("ללא ליווי") ||
                    plan.excludedPoints?.includes(point);
                  return (
                    <li
                      key={point}
                      className={`flex items-start gap-2 text-[13.5px] leading-snug ${
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
                <details
                  className={`group mt-3 border-t border-brand-line pt-3 ${plan.curriculumGapClass || ""}`}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between text-[14px] font-medium text-brand-gold-dim transition-colors hover:text-brand-gold">
                    <span>מה נלמד בהכשרה</span>
                    <span className="inline-block transition-transform group-open:rotate-90">
                      ‹
                    </span>
                  </summary>
                  <ul className="mt-3 space-y-2">
                    {plan.curriculum.map((line) => (
                      <li
                        key={line}
                        className="flex gap-2 text-[13px] leading-snug text-brand-text-2"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-gold-dim" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </details>
              )}

              <div className="mt-auto space-y-2 pt-4">
                <CTAButton
                  href={plan.href}
                  external
                  size="sm"
                  variant="primary"
                  className="w-full"
                >
                  {plan.cta}
                </CTAButton>
                {plan.id === "flagship" && (
                  <CTAButton href="#" size="sm" variant="secondary" className="w-full">
                    לדבר עם לידור
                  </CTAButton>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
