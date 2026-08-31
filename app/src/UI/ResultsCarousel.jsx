import { useEffect, useLayoutEffect, useRef, useState } from "react";

const PIXELS_PER_SECOND = 40;
const PRELOAD_MARGIN_PX = 800;

export const ResultsCarousel = ({ images, altPrefix }) => {
  const trackRef = useRef(null);
  const [duration, setDuration] = useState(0);
  const [visibleIdx, setVisibleIdx] = useState(() => new Set());
  const track = [...images, ...images];

  useLayoutEffect(() => {
    const halfWidth = trackRef.current.scrollWidth / 2;
    setDuration(halfWidth / PIXELS_PER_SECOND);
  }, []);

  useEffect(() => {
    const imgs = Array.from(trackRef.current.querySelectorAll("img[data-idx]"));

    const observer = new IntersectionObserver(
      (entries) => {
        const newlyVisible = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => Number(entry.target.dataset.idx));

        if (newlyVisible.length) {
          newlyVisible.forEach((idx) => observer.unobserve(imgs[idx]));
          setVisibleIdx((prev) => {
            const next = new Set(prev);
            newlyVisible.forEach((idx) => next.add(idx));
            return next;
          });
        }
      },
      { rootMargin: `0px ${PRELOAD_MARGIN_PX}px` },
    );

    imgs.forEach((img) => observer.observe(img));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      dir="ltr"
      className="group mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
    >
      <div
        ref={trackRef}
        className={`flex w-max gap-6 ${duration ? "animate-marquee group-hover:[animation-play-state:paused]" : ""}`}
        style={duration ? { animationDuration: `${duration}s` } : undefined}
      >
        {track.map((src, i) => (
          <img
            key={i}
            data-idx={i}
            src={visibleIdx.has(i) ? src : undefined}
            alt={altPrefix}
            decoding="async"
            className="h-[22rem] w-[16.5rem] shrink-0 rounded-xl border border-brand-line object-contain bg-brand-raised"
          />
        ))}
      </div>
    </div>
  );
};
