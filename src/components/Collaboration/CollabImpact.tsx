import React from "react";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";

const CollabImpact: React.FC = () => {
  const highlights = [
    {
      title: "1st in India",
      description: "to feature Learn & Earn during Degree",
      border: "border-green-500",
      badge: "bg-green-500",
    },
    {
      title: "1st in India",
      description: "to promote NEP2020 with Industry Integration",
      border: "border-red-600",
      badge: "bg-red-600",
    },
    {
      title: "1st in India",
      description: "to promote Overseas Mobility",
      border: "border-green-500",
      badge: "bg-green-500",
    },
    {
      title: "1st in India",
      description: "to be the Awarding Body of UGC & NCVET, MSDE, GoI",
      border: "border-red-600",
      badge: "bg-red-600",
    },
  ];

  const stats = [
    { value: "14000+", number: 14000, label: "Trainees" },
    { value: "80+", number: 80, label: "Programmes" },
    { value: "300+", number: 300, label: "Industry/Skill Partners" },
    { value: "2", number: 2, label: "Campuses" },
    { value: "10", number: 10, label: "Schools" },
    { value: "100+", number: 100, label: "Industry Experts" },
  ];

  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background image with parallax */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/website-images/banner-msu/industry-msu.webp')",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />

      {/* Content wrapper */}
      <div className="relative z-10 flex justify-center">
        <div className="w-full max-w-7xl bg-gray-900/70 backdrop-blur-lg rounded-xl border border-green-500/30 shadow-xl p-10">
          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white text-center mb-6 tracking-tight">
            Collaboration Impact
          </h2>
          <p className="text-lg text-gray-200 text-center mb-16 max-w-4xl mx-auto font-medium">
            Pioneering skill development through innovative partnerships and industry integration.
          </p>

          {/* Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className={`relative bg-gray-800/70 backdrop-blur-md rounded-xl border-l-4 ${item.border} p-6 shadow-lg hover:scale-[1.03] hover:shadow-xl transition-all duration-300 ease-in-out animate-fade-in w-full lg:w-72 mx-auto text-center ${
                  idx % 2 === 0 ? "lg:translate-y-2" : ""
                }`}
                style={{ animationDelay: `${idx * 150}ms` }}
                aria-label={item.title}
                tabIndex={0}
              >
                {/* Badge */}
                <div className={`absolute top-[-1.5rem] left-1/2 -translate-x-1/2 ${item.badge} text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md`}>
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <h3 className="text-2xl font-extrabold text-white">{item.title}</h3>
                <p className="text-base text-gray-200 mt-3 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Stats Section with Count-Up Animation */}
          <InView triggerOnce>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 bg-gray-800/70 rounded-xl border border-gray-700/30 p-6"
              >
                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col items-center justify-center text-center p-4 rounded-lg border min-h-[100px] ${
                      idx % 2 === 0 ? "border-green-500/30" : "border-red-600/30"
                    } hover:bg-gray-700/70 hover:scale-[1.03] transition-all duration-300 ease-in-out animate-slide-up focus-visible:ring-2 focus-visible:ring-green-500`}
                    style={{ animationDelay: `${idx * 100}ms` }}
                    aria-label={`${stat.value} ${stat.label}`}
                    tabIndex={0}
                  >
                    <p className={`text-3xl font-extrabold ${
                      idx % 2 === 0 ? "text-green-500" : "text-red-600"
                    }`}>
                      {inView ? (
                        <CountUp
                          end={stat.number}
                          duration={2}
                          suffix={stat.value.includes("+") ? "+" : ""}
                          formattingFn={(value) => value.toLocaleString()}
                        />
                      ) : (
                        "0"
                      )}
                    </p>
                    <p className="text-sm text-gray-200 mt-3">{stat.label}</p>
                  </div>
                ))}
              </div>
            )}
          </InView>

          {/* Decorative Divider */}
          <div className="mx-auto mt-16 w-64 h-1 bg-gradient-to-r from-green-500 to-red-600 rounded-full opacity-90" />
        </div>
      </div>

      {/* Inline CSS for animations */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-in-out forwards;
        }
        .animate-slide-up {
          animation: slide-up 0.6s ease-in-out forwards;
        }
      `}</style>
    </section>
  );
};

export default CollabImpact;