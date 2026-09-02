import { CTAButton } from "./Components/CTAButton";
import { LINKS, NAV_ITEMS } from "@/lib/links";
import logo from "../assets/Logo.png";

export const NavBar = () => {
  return (
    <header
      dir="rtl"
      className="sticky top-0 z-50 flex items-center justify-between border-b border-brand-gold-dim/25 bg-brand-ink px-6 py-3 md:px-16 lg:px-30"
    >
      <nav className="flex items-center gap-2 md:gap-5">
        <CTAButton href={LINKS.pricing} size="sm">
          להתחיל עכשיו
        </CTAButton>
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
      </nav>

      <a href="#" className="h-12 w-12 shrink-0">
        <img src={logo} alt="לוגו LidorFX" className="h-full w-full object-contain" />
      </a>
    </header>
  );
};
