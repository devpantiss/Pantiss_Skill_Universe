import { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';
import SiteImage from './SiteImage';

export default function ProgramOverviewVideo({ videoId }: { videoId: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <section className="programme-video-section" aria-labelledby="programme-video-title">
      <div className="programme-video-heading">
        <div><p className="site-eyebrow">See learning in action</p><h2 id="programme-video-title">Inside the programme</h2></div>
        <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noopener noreferrer">Watch on YouTube <ExternalLink size={16} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
      </div>
      <div className="programme-video-player">
        {playing ? <iframe src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title="Programme overview" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen /> :
          <button className="programme-video-preview" onClick={() => setPlaying(true)} aria-label="Play programme overview video">
            <SiteImage src="/Homepage/announcements_bg.webp" loading="lazy" decoding="async" alt="" width={1600} height={1000} />
            <span className="programme-video-play"><Play size={24} fill="currentColor" aria-hidden="true" /></span>
            <span className="programme-video-caption">Discover hands-on learning<span>Play programme overview</span></span>
          </button>}
      </div>
    </section>
  );
}
