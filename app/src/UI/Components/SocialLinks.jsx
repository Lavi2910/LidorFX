import { LINKS } from "@/lib/links";

const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0">
        <path
            d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
        />
        <path
            d="M8.7 8.3c.2-.5.5-.5.8-.5h.6c.2 0 .4 0 .6.5.2.5.7 1.7.7 1.8.1.1.1.3 0 .4-.1.2-.1.3-.3.4-.1.2-.3.3-.4.5-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.5 1.5.3.1.5.1.6-.1.2-.2.7-.8.9-1 .2-.2.4-.2.6-.1l1.7.8c.2.1.4.2.4.4.1.5-.1 1.1-.4 1.5-.4.5-1.4.9-2 1-.6.1-1.2.1-1.9-.1a12 12 0 0 1-5.1-3.6 8.3 8.3 0 0 1-1.8-3.8c-.1-.7 0-1.4.4-1.9z"
            fill="currentColor"
        />
    </svg>
);

const SOCIALS = [
    {
        label: "אינסטגרם",
        href: LINKS.instagram,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px]">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
            </svg>
        ),
    },
    {
        label: "יוטיוב",
        href: LINKS.youtube,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px]">
                <rect x="2.5" y="5.5" width="19" height="13" rx="4" stroke="currentColor" strokeWidth="1.8" />
                <path d="M10.5 9.3v5.4l4.6-2.7-4.6-2.7z" fill="currentColor" />
            </svg>
        ),
    },
];

export const SocialLinks = ({ className = "", stacked = false }) => (
    <div
        className={`flex ${
            stacked
                ? "flex-col items-center gap-4 lg:items-start"
                : "flex-wrap items-center gap-x-5 gap-y-4"
        } ${className}`}
    >
        <a
            href={LINKS.whatsappCommunity}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[15px] text-brand-text-2 transition-colors hover:text-brand-gold"
        >
            <span className="text-brand-gold">
                <WhatsAppIcon />
            </span>
            <span className="underline decoration-brand-gold-dim/40 underline-offset-4">
                לקהילת המסחר החינמית
            </span>
        </a>

        {!stacked && <span className="hidden h-5 w-px bg-brand-line sm:block" />}

        <div className="flex items-center gap-2">
            {SOCIALS.map((social) => (
                <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-line text-brand-muted transition-colors hover:border-brand-gold-dim hover:text-brand-gold"
                >
                    {social.icon}
                </a>
            ))}
        </div>
    </div>
);
