import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "lidorfx-a11y";

const DEFAULTS = {
  textSize: 100,
  highContrast: false,
  spacing: false,
  underlineLinks: false,
  readableFont: false,
  stopAnimations: false,
};

const TEXT_SIZES = [100, 110, 125, 150];

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

const setBoolAttr = (el, attr, value) => {
  if (value) el.setAttribute(attr, "true");
  else el.removeAttribute(attr);
};

const applySettings = (settings) => {
  const root = document.documentElement;
  root.setAttribute("data-a11y-text-size", String(settings.textSize));
  setBoolAttr(root, "data-a11y-contrast", settings.highContrast);
  setBoolAttr(root, "data-a11y-spacing", settings.spacing);
  setBoolAttr(root, "data-a11y-underline-links", settings.underlineLinks);
  setBoolAttr(root, "data-a11y-readable-font", settings.readableFont);
  setBoolAttr(root, "data-a11y-stop-animations", settings.stopAnimations);
};

const loadSettings = () => {
  if (typeof window === "undefined") return { ...DEFAULTS };
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULTS };
    const saved = JSON.parse(raw);
    return Object.fromEntries(Object.entries(DEFAULTS).map(([key, fallback]) => [
      key, key === "textSize"
        ? (TEXT_SIZES.includes(saved?.[key]) ? saved[key] : fallback)
        : (typeof saved?.[key] === "boolean" ? saved[key] : fallback),
    ]));
  } catch {
    return { ...DEFAULTS };
  }
};

// Applied immediately at module evaluation (App.jsx imports this before
// first paint) so a returning visitor doesn't see a flash of un-adjusted
// styles before React's effects run.
if (typeof document !== "undefined") {
  applySettings(loadSettings());
}

const AccessibilityIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-6 w-6">
    <circle cx="12" cy="4.5" r="2" />
    <path d="M4 8.2c-.5.15-.8.7-.65 1.2.15.5.7.8 1.2.65L10 8.4V11l-3.3 8.4c-.2.5.05 1.1.55 1.3.5.2 1.1-.05 1.3-.55L11 14h2l2.45 6.15c.2.5.8.75 1.3.55.5-.2.75-.8.55-1.3L14 11V8.4l5.45 1.65c.5.15 1.05-.15 1.2-.65.15-.5-.15-1.05-.65-1.2L14 6.4c-.65-.2-1.35-.2-2 0L4 8.2Z" />
  </svg>
);

const StepButton = ({ label, active, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    aria-pressed={active}
    className={`flex-1 rounded-md border px-2 py-1.5 text-sm font-medium transition-colors ${
      active
        ? "border-brand-gold bg-brand-gold text-brand-ink"
        : "border-brand-line bg-transparent text-brand-text-2 hover:border-brand-gold-dim hover:text-brand-gold"
    }`}
  >
    {label}
  </button>
);

const ToggleRow = ({ label, pressed, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    aria-pressed={pressed}
    className="flex w-full items-center justify-between gap-3 rounded-lg border border-brand-line px-3 py-2.5 text-right text-sm text-brand-text transition-colors hover:border-brand-gold-dim"
  >
    <span
      aria-hidden="true"
      className={`relative h-5 w-9 shrink-0 rounded-full transition-colors ${
        pressed ? "bg-brand-gold" : "bg-brand-line"
      }`}
    >
      <span
        className={`absolute top-0.5 h-4 w-4 rounded-full bg-brand-ink transition-all ${
          pressed ? "start-[18px]" : "start-0.5"
        }`}
      />
    </span>
    <span className="flex-1">{label}</span>
  </button>
);

export const AccessibilityMenu = () => {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState(loadSettings);
  const panelRef = useRef(null);
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    applySettings(settings);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch {
      // localStorage unavailable (private mode / disabled) — settings still
      // apply for this page view, they just won't persist.
    }
  }, [settings]);

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement;
    const getFocusable = () =>
      Array.from(panelRef.current?.querySelectorAll(FOCUSABLE_SELECTOR) ?? []);
    getFocusable()[0]?.focus();

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab") return;
      const focusable = getFocusable();
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    const onPointerDown = (e) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target) &&
        !toggleBtnRef.current?.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
      previouslyFocused?.focus?.();
    };
  }, [open]);

  const update = (patch) => setSettings((prev) => ({ ...prev, ...patch }));
  const reset = () => setSettings({ ...DEFAULTS });

  return (
    <>
      <button
        ref={toggleBtnRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="תפריט נגישות"
        aria-expanded={open}
        aria-controls="a11y-panel"
        className="fixed bottom-5 start-5 z-[999] flex h-14 w-14 items-center justify-center rounded-full bg-brand-gold text-brand-ink shadow-[0_10px_30px_-8px_rgba(0,0,0,0.6)] transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
      >
        <AccessibilityIcon />
      </button>

      {open && (
        <div
          id="a11y-panel"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="תפריט נגישות"
          className="fixed bottom-[5.75rem] start-5 z-[999] max-h-[75vh] w-[calc(100vw-2.5rem)] max-w-sm overflow-y-auto rounded-2xl border border-brand-line bg-brand-surface p-5 text-right shadow-2xl"
        >
          <div className="flex items-center justify-between gap-3">
            <h2 className="m-0 text-lg font-semibold text-brand-text">נגישות</h2>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="סגירת תפריט נגישות"
              className="text-2xl leading-none text-brand-text-2 hover:text-brand-gold"
            >
              ×
            </button>
          </div>

          <div role="group" aria-label="גודל טקסט" className="mt-5">
            <p className="m-0 mb-2 text-sm font-medium text-brand-text-2">גודל טקסט</p>
            <div className="grid grid-cols-2 gap-2 sm:flex">
              {TEXT_SIZES.map((size) => (
                <StepButton
                  key={size}
                  label={`${size}%`}
                  active={settings.textSize === size}
                  onClick={() => update({ textSize: size })}
                />
              ))}
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <ToggleRow
              label="ניגודיות גבוהה"
              pressed={settings.highContrast}
              onClick={() => update({ highContrast: !settings.highContrast })}
            />
            <ToggleRow
              label="מרווחי שורות ואותיות מוגדלים"
              pressed={settings.spacing}
              onClick={() => update({ spacing: !settings.spacing })}
            />
            <ToggleRow
              label="הדגשת קישורים"
              pressed={settings.underlineLinks}
              onClick={() => update({ underlineLinks: !settings.underlineLinks })}
            />
            <ToggleRow
              label="פונט קריא"
              pressed={settings.readableFont}
              onClick={() => update({ readableFont: !settings.readableFont })}
            />
            <ToggleRow
              label="עצירת אנימציות"
              pressed={settings.stopAnimations}
              onClick={() => update({ stopAnimations: !settings.stopAnimations })}
            />
          </div>

          <button
            type="button"
            onClick={reset}
            className="mt-5 w-full rounded-md border border-brand-line px-3 py-2 text-sm font-medium text-brand-text-2 transition-colors hover:border-brand-gold hover:text-brand-gold"
          >
            איפוס הגדרות
          </button>
        </div>
      )}
    </>
  );
};
