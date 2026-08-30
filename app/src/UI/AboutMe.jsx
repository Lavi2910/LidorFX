import LidorPic2 from "../assets/Lidor-Pic-2.png";
import { Button } from "@/components/ui/button";

export const AboutMe = () => {
  return (
    <>
      <div
        id="about"
        className="flex flex-row items-center px-30 py-20 gap-30 bg-gradient-to-b from-brand-raised to-brand-ink"
      >
        <div className="w-1/3 relative isolate">
          <div className="absolute inset-0 m-auto w-full h-full rounded-full bg-brand-gold/5 blur-3xl -z-10" />
          <img src={LidorPic2} alt="לידור מלכה" className="relative" />
        </div>
        <div className="w-2/3 flex flex-col justify-center text-right">
          <h2 className="text-brand-text text-[40px]">
            נעים להכיר, <span className="text-brand-gold-dim">לידור</span>
          </h2>
          <p className="text-brand-text-2 leading-relaxed mt-6">
            התחלתי לסחור בגיל 16. בתחילת הדרך קניתי קורס באלפי שקלים שלימד אותי
            שיטת מסחר, ורק אחרי חצי שנה של תרגול הבנתי שהיא פשוט לא עובדת עבורי.
          </p>
          <p className="text-brand-text-2 leading-relaxed mt-4">
            משם החלטתי לקחת את הדברים לידיים שלי. חרשתי כמעט כל תוכן לימודי
            שיכולתי למצוא ברחבי הרשת, למדתי פרייס אקשן, ובעיקר ביליתי אינספור
            שעות מול הגרף. עשיתי בקטסטים, חקרתי את תנועת המחיר ולמדתי מהגרף עצמו
            איך השוק באמת זז. עם הזמן התחלתי לבנות ולחבר קונספטים ומודלים משלי.
            בדקתי אותם שוב ושוב, שיפרתי, דייקתי ותרגלתי, עד שבניתי שיטת מסחר
            סיסטמטית שהוכיחה את עצמה לאורך זמן.
          </p>
          <p className="text-brand-text-2 leading-relaxed mt-4">
            היום אני סוחר במשרה מלאה, מנהל תיקי מסחר בפרייס אקשן טהור,
            ומלווה אישית סוחרים שמגיעים אליי בדיוק מהמקום שהייתי בו - אחרי הבטחות
            שקריות, קורסים יקרים וסרטוני יוטיוב שלא הזיזו כלום.
          </p>
          <p className="text-brand-text-2 leading-relaxed mt-4">
            אני לא מבטיח רווחים. אני כן מבטיח לעשות את המקסימום כדי לתת
            לכל סוחר שמגיע אליי את הכלים, הידע והליווי הטובים ביותר שאני יכול
            לתת. אני מטפל בעיקר בסוחרים שכבר עברו קורסים והכשרות בעבר, אבל עדיין
            לא הגיעו לרווחיות בצורה עקבית.
          </p>
          <p className="text-brand-text-2 leading-relaxed mt-4">
            אצלי הדגש הוא פשוט: שיטה ברורה, עבודה סיסטמטית, ליווי אישי ותוצאות אמיתיות.
          </p>
          <p className="text-brand-text-2 leading-relaxed mt-4">
            מי שרוצה להכיר אותי יותר לעומק מוזמן לצפות בפודקאסט שעשיתי
          </p>
          <Button
            asChild
            className="text-brand-ink bg-brand-gold-dim py-3 h-auto hover:bg-brand-gold rounded-sm px-7 font-bold text-center shadow-[0_0_8px_-2px_rgba(255,201,77,0.15)] w-fit mt-4"
          >
            <a
              href="https://www.youtube.com/watch?v=4p01DpN24WU"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="m-0">לצפייה בפודקאסט</h2>
            </a>
          </Button>
        </div>
      </div>
    </>
  );
};
