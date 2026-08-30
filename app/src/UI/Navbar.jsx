import { CTAButton } from "./Components/CTAButton";
import { LINKS } from "@/lib/links";
import logo from "../assets/Logo.png";

const NAV_ITEMS = [
  { label: "מי אני", href: LINKS.about },
  { label: "תוצאות", href: LINKS.results },
  { label: "מסלולים", href: LINKS.pricing },
  { label: "המלצות", href: LINKS.testimonials },
];

export const NavBar = () => {
  return (
    <header className="flex items-center justify-between border-b border-brand-gold-dim/25 bg-brand-ink px-6 py-3 md:px-16 lg:px-30">
      <a href="#" className="h-12 w-12 shrink-0">
        <img src={logo} alt="לוגו LidorFX" className="h-full w-full object-contain" />
      </a>

      <nav className="flex items-center gap-2 md:gap-5">
        <div className="hidden items-center gap-2 md:flex md:gap-5">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-1 text-[17px] font-medium text-brand-muted transition-colors hover:text-brand-gold"
            >
              {item.label}
            </a>
          ))}
        </div>
        <CTAButton href={LINKS.pricing} size="sm">
          להתחיל עכשיו
        </CTAButton>
      </nav>
    </header>
  );
};
