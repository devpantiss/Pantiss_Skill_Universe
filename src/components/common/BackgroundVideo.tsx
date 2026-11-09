import { useEffect, useRef, useState } from 'react';
import { useViewportActivity } from '../../hooks/useViewportActivity';

interface BackgroundVideoProps {
  src: string;
  poster?: string;
  className?: string;
  defer?: boolean;
}

export default function BackgroundVideo({ src, poster, className, defer = false }: BackgroundVideoProps) {
  const { ref, active } = useViewportActivity<HTMLDivElement>();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    const connection = (navigator as Navigator & {
      connection?: EventTarget & { saveData?: boolean; effectiveType?: string };
    }).connection;
    const update = () => setAllowed(!motion.matches && !connection?.saveData &&
      !['slow-2g', '2g', '3g'].includes(connection?.effectiveType ?? ''));
    update();
    motion.addEventListener('change', update);
    connection?.addEventListener('change', update);
    return () => {
      motion.removeEventListener('change', update);
      connection?.removeEventListener('change', update);
    };
  }, []);

  useEffect(() => {
    if (!allowed || !active || ready) return;
    // Let the page's critical content finish before downloading decorative media.
    let timer: number | undefined;
    const schedule = () => { timer = window.setTimeout(() => setReady(true), defer ? 1500 : 0); };
    if (document.readyState === 'complete') schedule();
    else window.addEventListener('load', schedule, { once: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', schedule);
    };
  }, [active, allowed, defer, ready]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (active && allowed && ready) void video.play().catch(() => {});
    else video.pause();
  }, [active, allowed, ready]);

  return (
    <div ref={ref} className={className} aria-hidden="true">
      <video ref={videoRef} className="h-full w-full object-cover" src={ready && allowed ? src : undefined}
        poster={poster} muted loop playsInline preload="none" tabIndex={-1} />
    </div>
  );
}
