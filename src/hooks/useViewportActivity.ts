import { useEffect, useRef, useState } from 'react';

/** Keep continuous media and timers idle outside the viewport or in background tabs. */
export function useViewportActivity<T extends Element>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);
  const [foreground, setForeground] = useState(true);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const onVisibility = () => setForeground(!document.hidden);
    onVisibility();
    document.addEventListener('visibilitychange', onVisibility);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    observer.observe(node);
    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return { ref, active: visible && foreground };
}
