import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

/* ================= TYPES ================= */

type Job = {
  title: string;
  category: string;
  location: string;
  type: string;
  salaryRange: string;
  googleFormLink: string;
  description: string[];
  qualifications: string[];
};

type JobCategory = {
  category: string;
  description: string;
  jobs: Job[];
};

/* ================= DATA ================= */

const jobsData: JobCategory[] = [
  {
    category: "Skill Training & Delivery",
    description:
      "Deliver hands-on, industry-aligned skill training across trades and sectors.",
    jobs: [
      {
        title: "Senior Skill Trainer – Electrical",
        category: "Skill Training & Delivery",
        location: "Angul, Odisha",
        type: "Full-time",
        salaryRange: "As per norms",
        googleFormLink: "https://docs.google.com/forms/",
        description: [
          "Deliver competency-based electrical training",
          "Assess trainee performance and maintain records",
        ],
        qualifications: [
          "Diploma / ITI in Electrical",
          "5+ years training or industry experience",
        ],
      },
      {
        title: "Skill Trainer – Heavy Equipment",
        category: "Skill Training & Delivery",
        location: "Keonjhar, Odisha",
        type: "Full-time",
        salaryRange: "As per norms",
        googleFormLink: "https://docs.google.com/forms/",
        description: [
          "Train candidates on HEMM operations",
          "Ensure safety and simulator-based learning",
        ],
        qualifications: ["ITI / Diploma", "Experience with mining machinery"],
      },
    ],
  },
  {
    category: "Curriculum & Instructional Design",
    description:
      "Design structured, outcome-oriented curricula aligned with NSQF and industry.",
    jobs: [
      {
        title: "Curriculum Designer",
        category: "Curriculum & Instructional Design",
        location: "Bhubaneswar",
        type: "Full-time",
        salaryRange: "As per standards",
        googleFormLink: "https://docs.google.com/forms/",
        description: [
          "Develop training curricula and lesson plans",
          "Align content with industry standards",
        ],
        qualifications: [
          "Master’s in Education / Engineering",
          "Experience in skilling curriculum design",
        ],
      },
    ],
  },
  {
    category: "Industry Partnerships & Placements",
    description:
      "Build employer linkages and ensure meaningful placement outcomes.",
    jobs: [
      {
        title: "Placement & Industry Engagement Officer",
        category: "Industry Partnerships & Placements",
        location: "Bhubaneswar",
        type: "Full-time",
        salaryRange: "As per standards",
        googleFormLink: "https://docs.google.com/forms/",
        description: [
          "Coordinate employer partnerships",
          "Facilitate trainee placements",
        ],
        qualifications: [
          "Graduate with placement experience",
          "Strong industry network",
        ],
      },
    ],
  },
  {
    category: "Assessment, Certification & RPL",
    description:
      "Manage assessments, certification, and Recognition of Prior Learning.",
    jobs: [
      {
        title: "Assessment & RPL Coordinator",
        category: "Assessment, Certification & RPL",
        location: "Bhubaneswar",
        type: "Full-time",
        salaryRange: "As per standards",
        googleFormLink: "https://docs.google.com/forms/",
        description: [
          "Coordinate assessments and certifications",
          "Implement RPL processes",
        ],
        qualifications: [
          "Graduate",
          "Experience in assessment or certification",
        ],
      },
    ],
  },
  {
    category: "Monitoring, Evaluation & Quality",
    description: "Ensure training quality, compliance, and outcome tracking.",
    jobs: [
      {
        title: "M&E Officer – Skilling",
        category: "Monitoring, Evaluation & Quality",
        location: "Bhubaneswar",
        type: "Full-time",
        salaryRange: "As per standards",
        googleFormLink: "https://docs.google.com/forms/",
        description: ["Track training KPIs", "Ensure quality assurance"],
        qualifications: [
          "Master’s in Social Sciences / Management",
          "Experience in skilling M&E",
        ],
      },
    ],
  },
  {
    category: "Skill Lab & Infrastructure Management",
    description:
      "Manage training labs, equipment, and learning infrastructure.",
    jobs: [
      {
        title: "Skill Lab Manager",
        category: "Skill Lab & Infrastructure Management",
        location: "Jharsuguda",
        type: "Full-time",
        salaryRange: "As per standards",
        googleFormLink: "https://docs.google.com/forms/",
        description: [
          "Maintain labs and equipment",
          "Ensure training readiness",
        ],
        qualifications: [
          "Engineering / Diploma",
          "Lab or workshop management experience",
        ],
      },
    ],
  },
  {
    category: "EdTech & Digital Learning Systems",
    description: "Build and manage LMS, MIS, and digital skilling platforms.",
    jobs: [
      {
        title: "EdTech Product Manager",
        category: "EdTech & Digital Learning Systems",
        location: "Bhubaneswar",
        type: "Full-time",
        salaryRange: "As per standards",
        googleFormLink: "https://docs.google.com/forms/",
        description: [
          "Manage LMS and digital tools",
          "Coordinate with tech teams",
        ],
        qualifications: [
          "Engineering / Product background",
          "Experience in LMS or EdTech",
        ],
      },
      {
        title: "Full Stack Developer – EdTech",
        category: "EdTech & Digital Learning Systems",
        location: "Bhubaneswar",
        type: "Full-time",
        salaryRange: "As per standards",
        googleFormLink: "https://docs.google.com/forms/",
        description: [
          "Develop skilling platforms",
          "Maintain MIS and dashboards",
        ],
        qualifications: [
          "React / Node.js experience",
          "2+ years in web development",
        ],
      },
    ],
  },
];

/* ================= COMPONENT ================= */

const JobsListing: React.FC = () => {
  const location = useLocation();
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [filter, setFilter] = useState<string>("All");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get("category");
    if (category) setFilter(category);
  }, [location.search]);

  const filtered =
    filter === "All" ? jobsData : jobsData.filter((c) => c.category === filter);

  return (
    <section className="min-h-screen bg-[#070707] pt-36">
      <div className="max-w-6xl mx-auto px-6 py-14">
        {/* HEADER */}
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#f5d38a]">
          Open Appointments
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
          Join Pantiss Skill University
        </h2>
        <p className="mt-3 mb-8 max-w-3xl text-neutral-300">
          Explore faculty, trainer, campus operations, laboratory, placement, and digital learning roles that support student success.
        </p>

        <div className="mb-10 flex flex-wrap gap-2">
          {["All", ...jobsData.map((category) => category.category)].map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              className={`rounded-md border px-4 py-2 text-sm font-semibold transition ${
                filter === category
                  ? "border-red-600 bg-red-600 text-white"
                  : "border-white/10 bg-[#111111] text-neutral-300 hover:border-[#d9a441] hover:text-[#f5d38a]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* LISTING */}
        {!selectedJob ? (
          filtered.map((cat) => (
            <div key={cat.category} className="mb-14">
              <h3 className="border-l-4 border-[#d9a441] pl-3 text-xl font-bold text-white">
                {cat.category}
              </h3>
              <p className="mb-6 mt-2 text-neutral-400">{cat.description}</p>

              {cat.jobs.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {cat.jobs.map((job) => (
                    <div
                      key={job.title}
                      onClick={() => setSelectedJob(job)}
                      className="
                          cursor-pointer
                          rounded-md border border-white/10
                          bg-[#111111] p-6 shadow-xl shadow-black/20
                          hover:border-[#d9a441] hover:shadow-lg
                          transition-all
                        "
                    >
                      <h4 className="text-lg font-bold text-white">
                        {job.title}
                      </h4>

                      <p className="text-sm text-neutral-400 mt-1">
                        {job.location}
                      </p>

                      <div className="mt-4 flex justify-between border-t border-white/10 pt-4 text-sm text-neutral-400">
                        <span>{job.type}</span>
                        <span>{job.salaryRange}</span>
                      </div>

                      <div className="mt-4 text-sm font-bold text-[#f5d38a]">
                        View appointment details
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-neutral-500 italic">
                  No active positions at the moment.
                </p>
              )}
            </div>
          ))
        ) : (
          /* JOB DETAILS */
          <div
            className="
                rounded-md border border-white/10
                bg-[#111111] p-8 shadow-xl shadow-black/20
              "
          >
            <h3 className="text-2xl font-bold text-white mb-2">
              {selectedJob.title}
            </h3>

            <div className="text-sm text-neutral-400 mb-6">
              {selectedJob.location} • {selectedJob.type}
            </div>

            <h4 className="text-lg font-semibold text-[#f5d38a] mb-2">
              Role Overview
            </h4>
            <ul className="list-disc pl-6 text-neutral-300 mb-6 space-y-1">
              {selectedJob.description.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>

            <h4 className="text-lg font-semibold text-[#f5d38a] mb-2">
              Qualifications
            </h4>
            <ul className="list-disc pl-6 text-neutral-300 mb-8 space-y-1">
              {selectedJob.qualifications.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <button
                className="
                    bg-red-600 hover:bg-red-700
                    text-white px-6 py-3 rounded-md
                    font-semibold transition
                  "
                onClick={() =>
                  window.open(selectedJob.googleFormLink, "_blank")
                }
              >
                Apply Now
              </button>

              <button
                className="
                    border border-white/15 bg-transparent hover:border-[#d9a441]
                    text-neutral-100 px-6 py-3 rounded-md
                    transition
                  "
                onClick={() => setSelectedJob(null)}
              >
                Back to Listings
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default JobsListing;
