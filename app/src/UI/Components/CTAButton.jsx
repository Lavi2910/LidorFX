import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const BASE =
  "font-[family-name:var(--heading)] font-medium tracking-[-0.24px] leading-none rounded-sm h-auto text-center transition-colors";

const SIZES = {
  sm: "px-5 py-2.5 text-[17px]",
  lg: "px-7 py-3.5 text-[24px]",
};

const VARIANTS = {
  primary:
    "bg-brand-gold-dim text-brand-ink hover:bg-brand-gold shadow-[0_0_35px_-5px_rgba(255,201,77,0.35)]",
  secondary:
    "bg-transparent hover:bg-transparent border border-brand-text-2 text-brand-text-2 hover:border-brand-gold hover:text-brand-gold",
};

export const CTAButton = ({
  href,
  children,
  variant = "primary",
  size = "lg",
  external = false,
  className,
}) => (
  <Button
    asChild
    className={cn(BASE, SIZES[size], VARIANTS[variant], className)}
  >
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  </Button>
);
