import { useEffect, useRef, useState } from "react";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

const thumbMap = import.meta.glob(
  "../assets/LidorResultsThumbs/*.{jpg,jpeg,JPG,JPEG,png,PNG}",
  { eager: true, import: "default" },
);
const fullMap = import.meta.glob(
  "../assets/LidorResults/*.{jpg,jpeg,JPG,JPEG,png,PNG}",
  { import: "default" },
);

const nameOf = (path) => path.split("/").pop();

const FEATURED = [
  "IMG_2678.jpg",
  "IMG_2679.jpg",
  "IMG_2671.jpg",
  "IMG_2660.jpg",
];

const fullLoaderByName = new Map(
  Object.entries(fullMap).map(([path, load]) => [nameOf(path), load]),
);

const items = Object.entries(thumbMap)
  .map(([path, thumb]) => {
    const name = nameOf(path);
    return { name, thumb, loadFull: fullLoaderByName.get(name) };
  })
  .sort((a, b) => {
    const ai = FEATURED.indexOf(a.name);
    const bi = FEATURED.indexOf(b.name);
    if (ai !== -1 || bi !== -1) {
      if (ai === -1) return 1;
      if (bi === -1) return -1;
      return ai - bi;
    }
    return a.name.localeCompare(b.name);
  });

const INITIAL_COUNT = 24;

const Lightbox = ({ item, onClose, onPrev, onNext }) => {
  const [fullSrc, setFullSrc] = useState(null);
  const dialogRef = useRef(null);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    closeBtnRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      previouslyFocused?.focus?.();
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "ArrowRight") onPrev();
      if (e.key === "ArrowLeft") onNext();

      if (e.key === "Tab") {
        const focusable = Array.from(
          dialogRef.current?.querySelectorAll(FOCUSABLE_SELECTOR) ?? [],
        );
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
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    setFullSrc(null);
    let cancelled = false;
    item?.loadFull?.().then((src) => {
      if (!cancelled) setFullSrc(src);
    });
    return () => {
      cancelled = true;
    };
  }, [item]);

  if (!item) return null;

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="תוצאה מוגדלת"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <button
        ref={closeBtnRef}
        onClick={onClose}
        aria-label="סגירה"
        className="absolute top-5 left-5 text-3xl leading-none text-brand-text-2 hover:text-brand-gold focus-visible:outline-2 focus-visible:outline-brand-gold"
      >
        ×
      </button>
      <img
        src={fullSrc ?? item.thumb}
        alt="תוצאה של לידור"
        onClick={(e) => e.stopPropagation()}
        className="max-h-[88vh] max-w-[92vw] rounded-lg object-contain shadow-2xl"
      />
    </div>
  );
};

export const ResultsWall = ({
  title = (
    <>
      <span className="text-brand-gold">תוצאות</span> שלי
    </>
  ),
  subtitle,
  count = items.length,
}) => {
  const [openIdx, setOpenIdx] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? items : items.slice(0, INITIAL_COUNT);

  return (
    <section id="lidor-results" className="bg-brand-ink py-8 lg:py-12">
      <div className="mx-auto max-w-[1500px] px-6 md:px-16 lg:px-30">
        <div className="text-center">
          <h2 className="m-0 text-[30px] text-brand-text md:text-[40px]">
            {title}
          </h2>
          <p className="mt-3 text-[22px] font-medium text-brand-text md:text-[26px]">
            {count} הישגים ואישורי משיכה מתועדים
          </p>
          {subtitle && (
            <p className="mx-auto mt-3 max-w-[60ch] text-brand-text-2">
              {subtitle}
            </p>
          )}
  <p className="mt-6 text-center text-sm text-brand-muted">
    לחיצה על תמונה מגדילה אותה
  </p>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 lg:gap-3">
          {visibleItems.map((item, i) => {
            const isFeatured = FEATURED.includes(item.name);
            return (
              <button
                key={item.name}
                onClick={() => setOpenIdx(i)}
                className={`group relative overflow-hidden rounded-md border border-brand-line/60 bg-brand-surface transition-all hover:z-10 hover:border-brand-gold-dim focus:outline-none focus-visible:border-brand-gold ${
                  isFeatured ? "sm:col-span-2 sm:row-span-2" : ""
                }`}
              >
                <img
                  src={item.thumb}
                  alt="תוצאה של לידור"
                  loading="lazy"
                  className={`aspect-square w-full object-cover transition duration-300 ${
                    isFeatured
                      ? "opacity-100"
                      : "opacity-70 group-hover:opacity-100"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {!showAll && items.length > INITIAL_COUNT && (
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="rounded-md border border-brand-text-2 px-6 py-2.5 text-[15px] font-medium text-brand-text-2 transition-colors hover:border-brand-gold hover:text-brand-gold"
            >
              הצג עוד
            </button>
          </div>
        )}
      </div>

      {openIdx !== null && (
        <Lightbox
          item={items[openIdx]}
          onClose={() => setOpenIdx(null)}
          onPrev={() => setOpenIdx((v) => (v - 1 + items.length) % items.length)}
          onNext={() => setOpenIdx((v) => (v + 1) % items.length)}
        />
      )}
    </section>
  );
};
