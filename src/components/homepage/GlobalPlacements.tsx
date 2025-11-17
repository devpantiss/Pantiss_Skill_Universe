import React from "react";
import { ArrowRight } from "lucide-react";

const GlobalPlacements: React.FC = () => {
  return (
    <section
      className="relative w-full overflow-hidden flex items-center justify-center"
      style={{ minHeight: "520px" }}
    >
      {/* --- Background Video --- */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://res.cloudinary.com/dxzhnns58/video/upload/v1762412314/3125427-uhd_3840_2160_25fps_goajqw.mp4" // 🔁 replace with your hosted video link
        autoPlay
        loop
        muted
        playsInline
      />

      {/* --- Overlay for readability --- */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" aria-hidden />

      {/* --- Foreground Content --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24 text-white">
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-10">
          {/* --- Left: Text Section --- */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
              Global Placements
            </h2>
            <p className="text-gray-200 mb-6 text-base md:text-lg leading-relaxed">
              At <span className="text-green-400 font-semibold">Pantiss Skill Universe</span>, we
              prepare and place skilled professionals in blue-collar roles across
              the globe — connecting trained talent with high-demand industries in
              Mining, Infrastructure, Logistics, and Energy sectors.
            </p>

            <ul className="text-sm text-gray-300 space-y-2 mb-8">
              <li>• Global employer partnerships & international certifications</li>
              <li>• Tailored training aligned with industry demand</li>
              <li>• Migration, visa, and onboarding support</li>
            </ul>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/global-placements"
                className="inline-flex items-center px-5 py-3 bg-green-600 hover:bg-green-500 text-white rounded-full font-semibold shadow-md transition"
              >
                Explore Opportunities
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>

              <a
                href="/contact-us"
                className="text-sm text-gray-300 underline underline-offset-2 hover:text-white transition"
              >
                Partner with us
              </a>
            </div>

            {/* Stats */}
            <div className="mt-10 flex gap-8 flex-wrap">
              <div>
                <div className="text-3xl font-bold">+1,200</div>
                <div className="text-xs text-gray-300">Placed Graduates</div>
              </div>
              <div>
                <div className="text-3xl font-bold">18</div>
                <div className="text-xs text-gray-300">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-bold">45+</div>
                <div className="text-xs text-gray-300">Industry Partners</div>
              </div>
            </div>
          </div>

          {/* --- Right: Map or Visual Section --- */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="h-[400px] rounded-2xl bg-white/10 backdrop-blur-sm border border-green-600 p-4 flex flex-col md:flex-row items-center gap-6">
              {/* Replace image with your own SVG/map */}
              <img
                src="https://res.cloudinary.com/dxzhnns58/image/upload/v1762413812/ChatGPT_Image_Nov_6_2025_12_53_13_PM_ngcmc0.png"
                alt="World map showing placement regions"
                className="h-full rounded-2xl ring-2 ring-red-600 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPlacements;
