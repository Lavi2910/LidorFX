import { SocialLinks } from "./Components/SocialLinks";
import logo from "../assets/optimized/Logo.webp";

const BASE = import.meta.env.BASE_URL;

const LEGAL_DOCS = [
  { label: "תקנון ותנאי שימוש", href: `${BASE}legal/terms.html` },
  { label: "מדיניות פרטיות", href: `${BASE}legal/privacy.html` },
  { label: "מדיניות ביטולים והחזרים", href: `${BASE}legal/terms.html#מדיניות-ביטול` },
  { label: "הצהרת נגישות", href: `${BASE}legal/accessibility.html` },
];

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

        <nav aria-label="מסמכי האתר" className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-brand-line pt-6 lg:justify-start">
          {LEGAL_DOCS.map((doc) => (
            <a
              key={doc.label}
              href={doc.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-brand-muted transition-colors hover:text-brand-gold"
            >
              {doc.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};
