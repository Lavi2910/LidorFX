import { useEffect, useRef } from "react";

const PIXELS_PER_SECOND = 40;
const PRELOAD_MARGIN_PX = 800;
const RETRY_TIMEOUT_MS = 6000;

export const ResultsCarousel = ({ images, altPrefix }) => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const imgRefs = useRef([]);
  const track = [...images, ...images];

  useEffect(() => {
    const container = containerRef.current;
    const trackEl = trackRef.current;
    const imgs = imgRefs.current;
    if (!container || !trackEl || imgs.length < 2) return;

    const cardStep = imgs[1].offsetLeft - imgs[0].offsetLeft;
    const halfWidth = trackEl.scrollWidth / 2;

    const loaded = new Set();
    const startedAt = new Map();
    let hovered = false;

    const startLoad = (idx) => {
      if (startedAt.has(idx)) return;
      startedAt.set(idx, performance.now());
      imgs[idx].src = track[idx];
    };

    const retryLoad = (idx) => {
      startedAt.set(idx, performance.now());
      imgs[idx].src = "";
      imgs[idx].src = track[idx];
    };

    imgs.forEach((img, idx) => {
      img.addEventListener("load", () => loaded.add(idx));
      img.addEventListener("error", () => loaded.add(idx));
    });

    const onMouseEnter = () => (hovered = true);
    const onMouseLeave = () => (hovered = false);
    container.addEventListener("mouseenter", onMouseEnter);
    container.addEventListener("mouseleave", onMouseLeave);

    let x = 0;
    let lastTime = null;
    let rafId;

    const frame = (now) => {
      if (lastTime == null) lastTime = now;
      const dt = Math.min(now - lastTime, 100);
      lastTime = now;

      const containerWidth = container.clientWidth;

      const preloadFrom = Math.max(0, Math.floor((-x - PRELOAD_MARGIN_PX) / cardStep));
      const preloadTo = Math.min(
        track.length - 1,
        Math.ceil((-x + containerWidth + PRELOAD_MARGIN_PX) / cardStep),
      );
      for (let i = preloadFrom; i <= preloadTo; i++) startLoad(i);

      startedAt.forEach((startedTime, idx) => {
        if (!loaded.has(idx) && now - startedTime > RETRY_TIMEOUT_MS) retryLoad(idx);
      });

      const visFrom = Math.max(0, Math.floor(-x / cardStep));
      const visTo = Math.min(track.length - 1, Math.ceil((-x + containerWidth) / cardStep));
      let blocked = hovered;
      for (let i = visFrom; !blocked && i <= visTo; i++) {
        if (!loaded.has(i)) blocked = true;
      }

      if (!blocked) {
        x -= (PIXELS_PER_SECOND * dt) / 1000;
        if (x <= -halfWidth) x += halfWidth;
        trackEl.style.transform = `translateX(${x}px)`;
      }

      rafId = requestAnimationFrame(frame);
    };

    rafId = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(rafId);
      container.removeEventListener("mouseenter", onMouseEnter);
      container.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      dir="ltr"
      className="mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
    >
      <div ref={trackRef} className="flex w-max gap-6">
        {track.map((_, i) => (
          <img
            key={i}
            ref={(el) => (imgRefs.current[i] = el)}
            alt={altPrefix}
            decoding="async"
            className="h-[22rem] w-[16.5rem] shrink-0 rounded-xl border border-brand-line object-contain bg-brand-raised"
          />
        ))}
      </div>
    </div>
  );
};
