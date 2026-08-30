import LidorPic2 from "../assets/Lidor-Pic-2.png";
import { CTAButton } from "./Components/CTAButton";
import { LINKS } from "@/lib/links";

const PROOF_STATS = [
  {
    value: "75%",
    label: "מהתלמידים בליווי אישי משכו רווחים מחשבון המסחר לחשבון הבנק שלהם",
  },
];

export const AboutMe = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-brand-raised to-brand-ink"
    >
      <div className="mx-auto flex max-w-[1500px] flex-col items-start gap-10 px-6 py-16 md:px-16 lg:flex-row lg:gap-24 lg:px-30 lg:py-24">
        <div className="mx-auto w-full max-w-[340px] lg:sticky lg:top-24 lg:mx-0 lg:w-2/5 lg:max-w-none">
          <div className="relative isolate">
            <div className="absolute inset-0 -z-10 m-auto h-full w-full rounded-full bg-brand-gold/5 blur-3xl" />
            <img
              src={LidorPic2}
              alt="לידור מלכה"
              className="relative w-full"
              loading="lazy"
            />
          </div>

          <div className="mt-5 space-y-3">
            {PROOF_STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-4 rounded-lg border border-brand-gold-dim/30 bg-brand-surface/60 px-5 py-4 text-right"
              >
                <p
                  className="shrink-0 text-[38px] font-semibold leading-none text-brand-gold"
                  dir="ltr"
                >
                  {stat.value}
                </p>
                <p className="text-[18px] leading-snug text-brand-text">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full text-right lg:w-3/5">
          <h2 className="text-brand-text text-[30px] leading-tight md:text-[40px]">
            נעים להכיר, <span className="text-brand-gold-dim">לידור</span>
          </h2>

          <div className="mt-6 max-w-[62ch] space-y-4 leading-relaxed text-brand-text-2">
            <p>
              התחלתי לסחור בגיל 16. בתחילת הדרך קניתי קורס באלפי שקלים שלימד אותי
              שיטת מסחר, ורק אחרי חצי שנה של תרגול הבנתי שהיא פשוט לא עובדת
              עבורי.
            </p>
            <p>
              משם החלטתי לקחת את הדברים לידיים שלי. חרשתי כמעט כל תוכן לימודי
              שיכולתי למצוא, למדתי פרייס אקשן, ובעיקר ביליתי אינספור שעות מול
              הגרף. עשיתי בקטסטים, חקרתי את תנועת המחיר ולמדתי מהגרף עצמו איך
              השוק באמת זז. עם הזמן התחלתי לבנות ולחבר קונספטים ומודלים משלי.
              בדקתי אותם שוב ושוב, שיפרתי, דייקתי ותרגלתי, עד שבניתי שיטת מסחר
              סיסטמטית שהוכיחה את עצמה לאורך זמן.
            </p>
            <p>
              היום אני סוחר במשרה מלאה, מנהל תיקי מסחר בפרייס אקשן טהור, ומלווה
              אישית סוחרים שמגיעים אליי בדיוק מהמקום שהייתי בו – אחרי הבטחות
              שקריות, קורסים יקרים וסרטוני יוטיוב שלא הזיזו כלום.
            </p>
          </div>

          <blockquote className="my-8 max-w-[62ch] border-s-2 border-brand-gold-dim ps-5">
            <p className="text-[20px] font-medium leading-snug text-brand-text md:text-[24px]">
              אני לא מבטיח רווחים. אני מבטיח שיטה ברורה, ליווי אישי, ותשובה ממני
              כשקשה.
            </p>
          </blockquote>

          <p className="max-w-[62ch] leading-relaxed text-brand-text-2">
            אני מלווה בעיקר סוחרים שכבר עברו קורסים והכשרות בעבר, אבל עדיין לא
            הגיעו לרווחיות בצורה עקבית.
          </p>

          <div className="mt-10 flex flex-col items-start gap-5">
            <CTAButton href={LINKS.pricing}>אני רוצה להתחיל</CTAButton>

            <p className="text-sm text-brand-muted">
              מי שרוצה להכיר אותי יותר לעומק מוזמן{" "}
              <a
                href={LINKS.podcast}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-text-2 underline decoration-brand-gold-dim/50 underline-offset-4 transition-colors hover:text-brand-gold"
              >
                לצפות בפודקאסט שעשיתי
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
