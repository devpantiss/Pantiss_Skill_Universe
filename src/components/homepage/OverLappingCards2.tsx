import React, { useRef, useEffect, useState } from "react";

const OverLappingCards3: React.FC = React.memo(() => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Lazy-load and play video only when section scrolls into view
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (videoRef.current) {
            videoRef.current.play().catch(() => {});
          }
        } else {
          if (videoRef.current) {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative bg-transparent">
      {/* Background Video — lazy loaded */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        loop
        muted
        playsInline
        aria-hidden="true"
        preload="none"
      >
        {isVisible && (
          <source
            src="https://res.cloudinary.com/dxzhnns58/video/upload/v1762160507/12791129_1920_1080_30fps_iwboue.mp4"
            type="video/mp4"
          />
        )}
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for Text Visibility */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="hidden lg:block relative max-w-6xl h-[900px] bg-transparent mx-auto p-8">
        <div className="text-center lg:text-left mb-10">
          <h1 className="text-3xl lg:text-5xl font-bold text-white leading-snug">
            Shape Your Future with <br />
            <span className="text-red-500">
              OUR INHOUSE <br />
              ENTERPRISES
            </span>
          </h1>
        </div>

        {/* Card 1 */}
        <div className="absolute top-0 right-0 bg-red-600 text-white p-6 rounded-bl-lg rounded-br-lg shadow-lg w-[400px] h-[350px]">
          <h3 className="text-lg font-bold mb-4">LMS Solution</h3>
          <h4 className="text-xl font-semibold mb-2">
            Empowering Student Learning
          </h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Access structured mining curriculum</li>
            <li>Interactive learning modules & quizzes</li>
            <li>Track progress & performance analytics</li>
          </ul>
          <div className="relative">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2920/2920244.png"
              alt="lms-icon"
              className="absolute right-4 -bottom-28 w-24 h-24"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Card 2 - Job Search Portal */}
        <div className="absolute top-64 right-60 bg-orange-500/60 text-white p-6 rounded-lg shadow-lg w-[400px] h-[350px]">
          <h3 className="text-lg font-bold mb-4">Job Search Portal</h3>
          <h4 className="text-xl font-semibold mb-2">
            Find Opportunities & Get Hired
          </h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Curated job listings</li>
            <li>Resume builder & profile boost</li>
            <li>Smart job alerts</li>
            <li>Placement & career support</li>
          </ul>

          <div className="relative">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png"
              alt="job-portal-icon"
              className="absolute right-4 -bottom-32 w-24 h-24"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Card 3 */}
        <div className="absolute top-[500px] right-[500px] bg-green-600 text-gray-50 p-6 rounded-lg shadow-lg w-[400px] h-[350px]">
          <h3 className="text-lg font-bold mb-4">Govt. Serv. Prep.</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Targeted coaching for competitive exams</li>
            <li>Study materials and mock tests</li>
            <li>Experienced faculty mentorship</li>
            <li>Regular performance evaluation</li>
            <li>Career guidance & exam strategies</li>
          </ul>
          <div className="relative">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2913/2913460.png"
              alt="govt-prep-icon"
              className="absolute right-4 -bottom-28 w-24 h-24"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </div>
  );
});

OverLappingCards3.displayName = "OverLappingCards3";

export default OverLappingCards3;
