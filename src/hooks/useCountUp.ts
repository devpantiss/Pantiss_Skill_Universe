import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

/** One short count-up per mount; cap React updates and cancel the current frame. */
export function useCountUp(end: number, enabled: boolean, duration = 1200) {
  const [count, setCount] = useState(end);
  const completed = useRef(false);
  const reducedMotion = useReducedMotion();
  useEffect(() => {
    if (!enabled || reducedMotion || completed.current) return;
    let frame = 0;
    let lastUpdate = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      if (now - lastUpdate >= 50 || progress === 1) {
        setCount(progress === 1 ? end : Math.round(end * (1 - (1 - progress) ** 3)));
        lastUpdate = now;
      }
      if (progress < 1) frame = requestAnimationFrame(tick);
      else completed.current = true;
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [end, enabled, duration, reducedMotion]);
  return reducedMotion ? end : count;
}
