import React from "react";
import { Sparkles } from "lucide-react";

const ProgrammesBanner: React.FC = () => {
  return (
    <section className="relative h-[75vh] w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/06/12/Pictures/student-pradesh-education-pradeep-meerut-development-vocational_f33699a6-4f71-11e7-8a38-d46223a68388.JPG')",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Premium Overlay System */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/55 to-black/95" />

      {/* Sci-fi Grid Overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.10] [background-image:linear-gradient(rgba(147,51,234,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.35)_1px,transparent_1px)] [background-size:72px_72px]" />

      {/* Ambient Glow Orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-10 w-[420px] h-[420px] bg-purple-600/25 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-120px] right-10 w-[520px] h-[520px] bg-green-500/15 rounded-full blur-[160px]" />
        <div className="absolute top-1/2 left-1/2 w-[520px] h-[520px] bg-purple-600/10 rounded-full blur-[180px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/75 backdrop-blur-xl">
          <span className="h-2 w-2 rounded-full bg-purple-600 animate-pulse" />
          Skill Development • Industry Ready • Outcome Driven
          <Sparkles className="h-4 w-4 text-purple-300" />
        </div>

        {/* Title */}
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-lg">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-600 to-green-400">
            Skill Development
          </span>{" "}
          Programmes
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-3xl mx-auto text-base md:text-xl text-gray-200/90 leading-relaxed drop-shadow">
          Empowering individuals with practical skills and hands-on training
          across industries like Mines, Power, Steel, Shipping, Infrastructure,
          and more — building a workforce ready for tomorrow.
        </p>

        {/* CTA Buttons */}
        {/* <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#programmes"
            className="group inline-flex items-center justify-center gap-2 px-7 py-3 rounded-2xl
                       bg-purple-600 hover:bg-purple-700 text-white font-semibold
                       shadow-xl shadow-purple-600/30 transition-all duration-300
                       hover:scale-[1.03]"
          >
            Explore Programmes
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <a
            href="/apply"
            className="inline-flex items-center justify-center px-7 py-3 rounded-2xl
                       border border-white/15 bg-black/40 backdrop-blur-xl
                       text-white/85 hover:text-white hover:border-white/25
                       transition-all duration-300 hover:scale-[1.02]"
          >
            Admission Enquiry
          </a>
        </div> */}

        {/* Mini stats */}
        <div className="mt-10 flex flex-wrap justify-center gap-3 text-xs text-white/70">
          {[
            "Hands-on Labs",
            "Simulator Training",
            "Industry Certifications",
            "Placement Enablement",
          ].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Top & Bottom Accent Lines */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-green-500 via-black to-purple-600 opacity-90" />
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-600 via-black to-green-500 opacity-90" />
    </section>
  );
};

export default ProgrammesBanner;