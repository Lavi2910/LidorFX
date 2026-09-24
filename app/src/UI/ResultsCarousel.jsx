import { useEffect, useRef, useState } from 'react';
import { useMotionStopped } from '../hooks/useMotionStopped';

export const ResultsCarousel = ({ images, altPrefix }) => {
  const containerRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const motionStopped = useMotionStopped();

  useEffect(() => {
    const el = containerRef.current;
    if (!el || paused || motionStopped || images.length < 2) return;
    let visible = false, hovered = false, focused = false, frame;
    let previous = null, position = el.scrollLeft;
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    observer.observe(el);
    const enter = () => { hovered = true; };
    const leave = () => { hovered = false; position = el.scrollLeft; };
    const focus = () => { focused = true; };
    const blur = (event) => { focused = el.contains(event.relatedTarget); position = el.scrollLeft; };
    el.addEventListener('mouseenter', enter); el.addEventListener('mouseleave', leave);
    el.addEventListener('focusin', focus); el.addEventListener('focusout', blur);
    const tick = (now) => {
      const delta = previous === null ? 0 : Math.min(now - previous, 50);
      previous = now;
      if (visible && !document.hidden && !hovered && !focused) {
        const max = el.scrollWidth - el.clientWidth;
        position += delta * 0.04;
        if (position > max) position = 0;
        el.scrollLeft = position;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame); observer.disconnect();
      el.removeEventListener('mouseenter', enter); el.removeEventListener('mouseleave', leave);
      el.removeEventListener('focusin', focus); el.removeEventListener('focusout', blur);
    };
  }, [images, paused, motionStopped]);

  return (
    <div className="relative mt-8">
      <div ref={containerRef} onPointerDown={() => setPaused(true)} onWheel={() => setPaused(true)} dir="ltr" tabIndex={0} role="region" aria-label="גלריית תוצאות תלמידים — ניתן לגלול לצדדים" className="overflow-x-auto [scrollbar-width:thin]">
        <div className="flex w-max gap-6">
          {images.map((src, i) => <img key={src} src={src} alt={`${altPrefix} ${i + 1}`} loading="lazy" decoding="async" width="528" height="704" className="h-[22rem] w-[16.5rem] shrink-0 rounded-xl border border-brand-line object-contain bg-brand-raised" />)}
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <button type="button" onClick={() => setPaused(v => !v)} disabled={motionStopped} aria-pressed={paused || motionStopped} className="rounded-full border border-brand-line bg-brand-surface/70 px-4 py-2 text-sm text-brand-text-2 hover:border-brand-gold disabled:opacity-70">
          {motionStopped ? 'התנועה נעצרה לפי הגדרות הנגישות' : paused ? 'הפעלת הגלילה' : 'עצירת הגלילה'}
        </button>
      </div>
    </div>
  );
};
