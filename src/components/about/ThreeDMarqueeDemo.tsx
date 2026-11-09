import SiteImage from "../common/SiteImage";
import type { CSSProperties } from 'react';
import { useViewportActivity } from '../../hooks/useViewportActivity';

export function ThreeDMarquee({ images, speed = 32 }: { images: string[]; speed?: number }) {
  const { ref, active } = useViewportActivity<HTMLDivElement>();
  const columns = [0,1,2,3].map(col => images.filter((_,index) => index % 4 === col));
  return <div ref={ref} className="campus-gallery" aria-label="Life at Pantiss" style={{ '--gallery-duration': `${speed}s`, '--gallery-play': active ? 'running' : 'paused' } as CSSProperties}>
    {columns.map((column,index) => <div className="campus-gallery-column" key={index}>
      {[...column,...column].map((src,i) => <SiteImage key={`${src}-${i}`} src={src} alt={i < column.length ? 'Campus learning and activities at Pantiss' : ''} aria-hidden={i >= column.length ? true : undefined} loading="lazy" decoding="async" width={480} height={350} />)}
    </div>)}
  </div>;
}
