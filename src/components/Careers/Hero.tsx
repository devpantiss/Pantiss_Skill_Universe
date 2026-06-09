import React from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section className="relative flex min-h-[92vh] w-full items-end overflow-hidden bg-[#070707] pt-36">
      <img
        src="/Homepage/campuses/rise.JPG"
        alt="Pantiss Skill University campus"
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92),rgba(0,0,0,0.72),rgba(42,7,7,0.35))]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#070707] to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 text-white">
        <p className="mb-4 inline-flex border-l-4 border-[#d9a441] bg-black/45 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#f5d38a] backdrop-blur">
          Careers at Pantiss Skill University
        </p>
        <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
          Teach, mentor, and build inside a skill university.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-100 md:text-xl">
          A dark-campus careers experience for faculty, trainers, programme leaders, lab teams, and learner support staff shaping industry-ready education across Odisha.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/careers/jobs"
            className="rounded-md bg-red-600 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5d38a]"
          >
            View Open Roles
          </Link>
          <a
            href="#life-at-pantiss"
            className="rounded-md border border-[#f5d38a]/70 px-6 py-3 text-sm font-bold uppercase tracking-wide text-[#f5d38a] transition hover:bg-[#f5d38a] hover:text-neutral-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5d38a]"
          >
            Explore Campus Life
          </a>
        </div>

        <div className="mt-12 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-3">
          {[
            ["6+", "Skill schools and sector campuses"],
            ["Field + Campus", "Teaching, operations, and research roles"],
            ["Learner First", "Work grounded in student outcomes"],
          ].map(([value, label]) => (
            <div key={value} className="border-l border-[#d9a441]/60 bg-black/50 px-5 py-4 backdrop-blur">
              <div className="text-2xl font-bold text-[#f5d38a]">{value}</div>
              <div className="mt-1 text-sm text-neutral-200">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
