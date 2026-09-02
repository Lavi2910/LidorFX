import { SocialLinks } from "./Components/SocialLinks";
import logo from "../assets/Logo.png";

export const Footer = () => {
  return (
    <footer className="border-t border-brand-gold-dim/25 bg-brand-abyss py-12">
      <div className="mx-auto max-w-[1400px] px-6 md:px-16 lg:px-30">
        <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:items-center lg:justify-between lg:text-right">
          <a href="#" aria-label="LidorFX">
            <img
              src={logo}
              alt="לוגו LidorFX"
              className="h-12 w-12 object-contain"
            />
          </a>

          <SocialLinks />
        </div>

        <p className="m-0 mt-8 text-center text-xs text-red-500 lg:text-right">
          להוסיף מסמכים
        </p>
      </div>
    </footer>
  );
};
