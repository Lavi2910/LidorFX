import { useSyncExternalStore } from 'react';

const getSnapshot = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
  document.documentElement.dataset.a11yStopAnimations === 'true';
const subscribe = (notify) => {
  const media = window.matchMedia('(prefers-reduced-motion: reduce)');
  media.addEventListener('change', notify);
  const observer = new MutationObserver(notify);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-a11y-stop-animations'] });
  return () => { media.removeEventListener('change', notify); observer.disconnect(); };
};
export const useMotionStopped = () => useSyncExternalStore(subscribe, getSnapshot, () => false);
