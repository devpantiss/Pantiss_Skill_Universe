import React, { useEffect, useRef, useState } from "react";

interface ProgramOverviewVideoProps {
  videoId: string; // YouTube video ID
}

const ProgramOverviewVideo: React.FC<ProgramOverviewVideoProps> = ({
  videoId,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5, // 50% visible before autoplay
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=${
    isVisible ? 1 : 0
  }&mute=1&loop=1&controls=0&modestbranding=1&rel=0&playsinline=1&playlist=${videoId}`;

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-black overflow-hidden"
    >
      {/* Video */}
      <iframe
        src={videoSrc}
        title="Program Overview Video"
        className="absolute inset-0 w-full h-full"
        frameBorder="0"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Heading */}
      <div
        className="
          absolute top-6 left-6 z-20
          bg-black/70 backdrop-blur-md
          border border-neutral-700
          px-5 py-3 rounded-xl
        "
      >
        <span className="text-sm font-semibold tracking-wide text-white">
          Program Overview
        </span>
      </div>
    </section>
  );
};

export default ProgramOverviewVideo;
