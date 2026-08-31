import { useEffect, useState } from "react";

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

const Lightbox = ({ item, onClose, onPrev, onNext }) => {
  const [fullSrc, setFullSrc] = useState(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onPrev();
      if (e.key === "ArrowLeft") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
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
      role="dialog"
      aria-modal="true"
      aria-label="תוצאה מוגדלת"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="סגירה"
        className="absolute top-5 left-5 text-3xl leading-none text-brand-text-2 hover:text-brand-gold"
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
  title = "תוצאות שלי",
  subtitle,
  count = items.length,
}) => {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section id="lidor-results" className="bg-brand-ink py-8 lg:py-12">
      <div className="mx-auto max-w-[1500px] px-6 md:px-16 lg:px-30">
        <div className="text-center">
          <h2 className="m-0 text-[30px] text-brand-text md:text-[40px]">
            {title}
          </h2>
          <p className="mt-3 text-[22px] font-medium text-brand-gold md:text-[26px]">
            {count} תוצאות ואישורי משיכה מתועדים
          </p>
          {subtitle && (
            <p className="mx-auto mt-3 max-w-[60ch] text-brand-text-2">
              {subtitle}
            </p>
          )}
        </div>

        <div className="mt-10 grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 lg:gap-3">
          {items.map((item, i) => {
            const isFeatured = FEATURED.includes(item.name);
            return (
              <button
                key={item.name}
                onClick={() => setOpenIdx(i)}
                className={`group relative overflow-hidden rounded-md border border-brand-line/60 bg-brand-surface transition-all hover:z-10 hover:border-brand-gold-dim focus:outline-none focus-visible:border-brand-gold ${
                  isFeatured ? "col-span-2 row-span-2" : ""
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

        <p className="mt-6 text-center text-sm text-brand-muted">
          לחיצה על תמונה מגדילה אותה
        </p>
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
