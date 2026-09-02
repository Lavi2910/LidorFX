import LidorProfile from "../assets/Lidor-Pic-1.png"
import { CTAButton } from "./Components/CTAButton"
import { SocialLinks } from "./Components/SocialLinks"
import { LINKS } from "@/lib/links"

export const MainSection = () => {
    return (
        <section className="relative bg-gradient-to-b from-brand-abyss via-brand-surface to-brand-ink">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_100%_100%_at_50%_0%,rgba(244,184,66,0.08),transparent_85%)]" />

            <div className="relative z-10 mx-auto flex max-w-[1500px] flex-col items-center gap-10 px-6 pt-12 pb-6 md:px-16 lg:flex-row lg:gap-16 lg:px-30 lg:pt-16 lg:pb-8">
                <div className="w-full text-right lg:w-3/5">
                    <h1 className="m-0 text-brand-text">
                        שיטה שמייצרת <span className="text-brand-gold">תוצאות</span>
                        <br />
                        <span className="text-brand-gold">ליווי אישי</span> בשוק ההון ובקריפטו
                    </h1>

                    <div className="mt-8 space-y-1 text-brand-text-2">
                        <p>שיטה ברורה, ליווי אישי, וקהילה שעובדת יחד.</p>
                        <p>בלי הבטחות מיותרות – עם תוצאות שאפשר לבדוק.</p>
                    </div>

                    <div className="mt-10 flex flex-wrap gap-4 lg:gap-7">
                        <CTAButton href={LINKS.pricing}>לראות את המסלולים</CTAButton>
                        <CTAButton href={LINKS.testimonials} variant="secondary">
                            תלמידים מספרים
                        </CTAButton>
                    </div>

                    <SocialLinks className="mt-7" />
                </div>

                <div className="relative isolate mx-auto w-full max-w-[320px] lg:mx-0 lg:w-2/5 lg:max-w-none">
                    <div className="absolute inset-0 -z-10 m-auto h-full w-full rounded-full bg-brand-gold/5 blur-3xl" />
                    <img
                        src={LidorProfile}
                        alt="תמונת הפרופיל של לידור מלכה"
                        className="relative w-full"
                        width={1234}
                        height={1126}
                        fetchPriority="high"
                    />
                </div>
            </div>
        </section>
    )
}
