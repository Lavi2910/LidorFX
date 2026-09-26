import { useEffect, useRef, useState } from 'react';
import { useMotionStopped } from '../../hooks/useMotionStopped';

const IMAGES = Object.values(import.meta.glob('../../assets/method/*.{jpg,jpeg,JPG,JPEG,png,PNG}', { eager: true, import: 'default' }));

export const MethodGallery = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const motionStopped = useMotionStopped();
  const container = useRef(null);
  useEffect(() => {
    if (paused || motionStopped || IMAGES.length < 2) return;
    let visible = false;
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    observer.observe(container.current);
    const timer = setInterval(() => {
      if (visible && !document.hidden) setIndex(i => (i + 1) % IMAGES.length);
    }, 10000);
    return () => { observer.disconnect(); clearInterval(timer); };
  }, [paused, motionStopped]);
  return (
    <div ref={container} className="flex h-full min-h-[308px] w-full flex-col">
      <div className="relative min-h-0 flex-1">
        <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[26px] bg-brand-gold/10 blur-2xl" />
        <div className="absolute inset-0 overflow-hidden rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.75)] ring-1 ring-brand-gold-dim/40">
          <img src={IMAGES[index]} alt={`דוגמה ${index + 1} לניתוח גרף מסחר של לידור`} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
        </div>
      </div>
      <div className="mt-4 flex shrink-0 items-center justify-center gap-2 text-sm text-brand-text">
        <button type="button" aria-label="גרף קודם" onClick={() => setIndex(i => (i - 1 + IMAGES.length) % IMAGES.length)} className="min-h-10 min-w-10">→</button>
        <button type="button" disabled={motionStopped} aria-pressed={paused || motionStopped} onClick={() => setPaused(v => !v)} className="min-h-10 rounded-full border border-brand-line bg-brand-surface/70 px-4 py-2 text-sm text-brand-text-2 hover:border-brand-gold disabled:opacity-70">{motionStopped ? 'תנועה מופחתת' : paused ? 'הפעלת המצגת' : 'עצירת המצגת'}</button>
        <button type="button" aria-label="גרף הבא" onClick={() => setIndex(i => (i + 1) % IMAGES.length)} className="min-h-10 min-w-10">←</button>
      </div>
    </div>
  );
};
