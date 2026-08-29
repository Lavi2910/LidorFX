import LidorProfile from "../assets/Lidor-Pic-1.png"
import { Button } from "@/components/ui/button"

export const MainSection = () => {
    return (
        <div className="relative bg-gradient-to-b from-brand-abyss via-brand-surface to-brand-ink pb-10">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_100%_100%_at_50%_0%,rgba(244,184,66,0.08),transparent_85%)]" />
            <div className="relative z-10 flex flex-row px-30 mt-10 py-3">
                <div className="w-2/3 text-right flex flex-col justify-center">
                    <h1 className="text-brand-text">
                        שיטה שמייצרת <span className="text-brand-gold">תוצאות</span>
                    </h1>
                    <h1 className="text-brand-text">
                        <span className="text-brand-gold">ליווי אישי</span> בשוק ההון ובקריפטו
                    </h1>
                    <p className="text-brand-text-2 mt-10">
                        שיטה מוכחת, ליווי אישי, וקהילת סוחרים שמרוויחה יחד.
                    </p>
                    <p className="text-brand-text-2">
                        בלי הבטחות באוויר - עם תוצאות שאפשר לראות.
                    </p>
                    <div className="flex flex-row mt-10 gap-7">
                        <Button className="text-brand-ink bg-brand-gold-dim py-3 h-auto hover:bg-brand-gold rounded-sm px-7 font-bold text-center shadow-[0_0_35px_-5px_rgba(255,201,77,0.35)]">
                            <h2 className="m-0">
                                בחר מסלול
                            </h2>
                        </Button>
                        <Button className="text-brand-text-2 bg-transparent py-3 h-auto hover:bg-transparent border border-brand-text-2 rounded-sm px-3 text-center hover:border-brand-gold hover:text-brand-gold">
                            <h2 className="m-0 font-light">
                                תלמידים מספרים
                            </h2>
                        </Button>
                    </div>
                </div>
                <div className="w-1/3 relative isolate">
                    <div className="absolute inset-0 m-auto w-full h-full rounded-full bg-brand-gold/5 blur-3xl -z-10" />
                    <img src={LidorProfile} alt="תמונת הפרופיל של לידור מלכה" className="relative" />
                </div>
            </div>
        </div>
    )
}