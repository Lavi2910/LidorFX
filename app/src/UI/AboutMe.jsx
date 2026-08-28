import LidorPic2 from "../assets/Lidor-Pic-2.png";
import { Button } from "@/components/ui/button";

export const AboutMe = () => {
  return (
    <>
      <div id="about" className="flex flex-row px-30 py-20 gap-30">
        <div className="w-1/3 relative isolate">
          <div className="absolute inset-0 m-auto w-full h-full rounded-full bg-brand-gold/5 blur-3xl -z-10" />
          <img src={LidorPic2} alt="לידור מלכה" className="relative" />
        </div>
        <div className="w-2/3 flex flex-col justify-center text-right">
          <h2 className="text-brand-text text-[40px]">
            נעים להכיר, <span className="text-brand-gold-dim">לידור</span>
          </h2>
          <p className="text-brand-text-2 leading-relaxed mt-6">
            אני לידור מלכה, בן 22, סוחר מקצועי בשוק ההון כבר <span className="font-bold text-brand-text">6 שנים</span> עם ניסיון של 4
            שנים בלימוד סוחרים. בעל קהילה של <span className="font-bold text-brand-text">2000 סוחרים</span> וכיום מנהל תיקי נוסטרו
            בשווי כולל של <span className="font-bold text-brand-text">1.5 מיליון דולר</span> מהם משכתי <span className="font-bold text-brand-text">מיליון וחצי שקל</span>. בנוסף אני מנהל
            תיק מסחר סווינג של <span className="font-bold text-brand-text">500K₪</span> מתמחה בפרייס אקשן ובהבנה טהורה של הגרף. אני
            אוהב לדבר בתוצאות בלבד. ליוותי מאות תלמידים שהגיעו ל-<span className="font-bold text-brand-text">3.3 מיליון שקל </span>
            במשיכות מחברות נוסטרו (<span className="font-bold text-brand-text">הכי הרבה בישראל</span>). לפני כשנה וחצי בניתי את
            תוכנית הלימודים שלי ועד היום אני ממשיך לשפר אותה על מנת שתהיה תוכנית
            לימודי המסחר <span className="font-bold text-brand-text">הכי טובה שיש</span> כי לתלמידים שלי מגיע <span className="font-bold text-brand-text">הכי טוב</span>! אני מלווה גם
            סוחרים מתחילים וגם סוחרים מתקדמים, אליי בעיקר מגיעים סוחרים מתקדמים
            שמרגישים אבודים אחרי תקופה שבה הם רדפו אחרי הבטחות שקריות, קורסים
            יקרים חסרי תוכן, וסרטוני יוטיוב לא מועילים. הגיע הזמן לעלות לרמה הבאה!
          </p>
          <p className="text-brand-text-2 leading-relaxed mt-4">
            מי שרוצה להכיר אותי יותר לעומק מוזמן לצפות בפודקאסט שעשיתי
          </p>
          <Button asChild className="text-brand-ink bg-brand-gold-dim py-3 h-auto hover:bg-brand-gold rounded-sm px-7 font-bold text-center shadow-[0_0_8px_-2px_rgba(255,201,77,0.15)] w-fit mt-4">
            <a href="https://www.youtube.com/watch?v=4p01DpN24WU" target="_blank" rel="noopener noreferrer">
              <h2 className="m-0">
                לצפייה בפודקאסט
              </h2>
            </a>
          </Button>
        </div>
      </div>
    </>
  );
};
