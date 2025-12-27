import React, { useState, useEffect, useMemo } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Award,
  Wrench,
  BookOpen,
  Zap,
  // Heart,
  CheckCircle,
  GraduationCap,
  // Building,
  Target,
  TrendingUp,
  // Briefcase,
  UserCheck,
  Globe,
} from "lucide-react";

interface TimelineEvent {
  id: number;
  title: string;
  description: string;
  date: string;
  duration: string;
  location: string;
  participants: string;
  category: "theory" | "practical" | "assessment" | "certification";
}

interface Program {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  timeline: TimelineEvent[];
}

const programs: Program[] = [
  {
    id: "diploma-polytechnic",
    name: "Diploma / Polytechnic Programs",
    icon: <GraduationCap className="w-5 h-5" />,
    color: "from-green-500 to-green-500",
    description:
      "Three-year technical diploma programs aligned with AICTE and NSQF Level 5–6 framework for middle-level technical roles.",
    timeline: [
      {
        id: 1,
        title: "Semester 1–2: Foundation Studies",
        description:
          "Core studies in applied mathematics, physics, engineering fundamentals, and workshop practices.",
        date: "Month 1–6",
        duration: "300 hours",
        location: "Academic Block",
        participants: "30–35",
        category: "theory",
      },
      {
        id: 2,
        title: "Semester 3–4: Technical Specialization",
        description:
          "Discipline-specific modules (Mechanical, Electrical, Civil, etc.) including laboratory sessions and project work.",
        date: "Month 7–12",
        duration: "400 hours",
        location: "Technical Labs",
        participants: "30–35",
        category: "practical",
      },
      {
        id: 3,
        title: "Semester 5: Industrial Exposure",
        description:
          "Mandatory industrial training and internship under supervision of industry mentors, aligned to Skill India partnership models.",
        date: "Month 13–15",
        duration: "240 hours",
        location: "Industry Partner Site",
        participants: "30–35",
        category: "practical",
      },
      {
        id: 4,
        title: "Semester 6: Major Project & Assessment",
        description:
          "Capstone project evaluation, viva-voce, and internal assessments as per State Technical Education Board guidelines.",
        date: "Month 16–18",
        duration: "200 hours",
        location: "Project Lab",
        participants: "30–35",
        category: "assessment",
      },
      {
        id: 5,
        title: "Diploma Certification & Placement",
        description:
          "Award of Diploma Certificate and facilitation of placement through campus recruitment drives.",
        date: "Month 19–20",
        duration: "60 hours",
        location: "Placement Cell",
        participants: "30–35",
        category: "certification",
      },
    ],
  },
  {
    id: "iti",
    name: "Industrial Training Institute (ITI) Programs",
    icon: <CheckCircle className="w-5 h-5" />,
    color: "from-green-500 to-green-500",
    description:
      "NSQF Level 3–5 training programs aligned with NCVT/SCVT standards for technical trades.",
    timeline: [
      {
        id: 1,
        title: "Trade Foundation & Orientation",
        description:
          "Introduction to the selected trade, basic safety training, and familiarization with tools and machinery as per DGT curriculum.",
        date: "Month 1–2",
        duration: "160 hours",
        location: "ITI Campus",
        participants: "25–30",
        category: "theory",
      },
      {
        id: 2,
        title: "Core Trade Training",
        description:
          "Comprehensive instruction covering trade theory, drawing, and practical skills based on NCVT standards.",
        date: "Month 3–8",
        duration: "480 hours",
        location: "Workshop Block",
        participants: "25–30",
        category: "practical",
      },
      {
        id: 3,
        title: "Employability & Soft Skills",
        description:
          "Training in communication, digital literacy, entrepreneurship, and work ethics in accordance with Skill India guidelines.",
        date: "Month 9–10",
        duration: "120 hours",
        location: "Skill Development Lab",
        participants: "25–30",
        category: "theory",
      },
      {
        id: 4,
        title: "Trade Test & Internal Assessment",
        description:
          "Periodic assessments and internal practical evaluations as per DGT evaluation framework.",
        date: "Month 11",
        duration: "80 hours",
        location: "Assessment Workshop",
        participants: "25–30",
        category: "assessment",
      },
      {
        id: 5,
        title: "NCVT Final Examination & Certification",
        description:
          "Final All India Trade Test (AITT) conducted by NCVT/SCVT and issuance of National Trade Certificate (NTC).",
        date: "Month 12",
        duration: "40 hours",
        location: "Examination Center",
        participants: "25–30",
        category: "certification",
      },
    ],
  },
  // {
  //   id: "advanced-diploma",
  //   name: "Advanced Diploma Programs",
  //   icon: <Award className="w-5 h-5" />,
  //   color: "from-green-500 to-green-500",
  //   description:
  //     "NSQF Level 6–7 courses for advanced specialization and supervisory roles under AICTE–NSDC collaboration.",
  //   timeline: [
  //     {
  //       id: 1,
  //       title: "Advanced Technical Theory",
  //       description:
  //         "In-depth theoretical modules on automation, mechatronics, process control, and applied design principles.",
  //       date: "Month 1–3",
  //       duration: "240 hours",
  //       location: "Academic Block",
  //       participants: "25–30",
  //       category: "theory",
  //     },
  //     {
  //       id: 2,
  //       title: "Applied Practical Laboratory",
  //       description:
  //         "Hands-on learning in advanced simulation labs, using CNC, PLC, and industrial automation setups.",
  //       date: "Month 4–6",
  //       duration: "300 hours",
  //       location: "Advanced Technical Lab",
  //       participants: "25–30",
  //       category: "practical",
  //     },
  //     {
  //       id: 3,
  //       title: "Industry Internship (AICTE–NSDC)",
  //       description:
  //         "Field exposure under Skill India partner industries to understand live systems and modern production lines.",
  //       date: "Month 7–9",
  //       duration: "360 hours",
  //       location: "Industry Partner Unit",
  //       participants: "25–30",
  //       category: "practical",
  //     },
  //     {
  //       id: 4,
  //       title: "Capstone Project & Assessment",
  //       description:
  //         "Final design project, industrial case study, and external evaluation by industry and academic experts.",
  //       date: "Month 10–11",
  //       duration: "120 hours",
  //       location: "Project Evaluation Center",
  //       participants: "25–30",
  //       category: "assessment",
  //     },
  //     {
  //       id: 5,
  //       title: "Advanced Diploma Certification",
  //       description:
  //         "Joint certification by AICTE–NSDC with employability support under Skill India Mission.",
  //       date: "Month 12",
  //       duration: "40 hours",
  //       location: "Certification Hall",
  //       participants: "25–30",
  //       category: "certification",
  //     },
  //   ],
  // },
  // {
  //   id: "apprenticeship-dual",
  //   name: "Apprenticeship & Dual Training Programs",
  //   icon: <Building className="w-5 h-5" />,
  //   color: "from-green-500 to-green-500",
  //   description:
  //     "On-the-job training under the Apprentices Act, blending institutional learning with industrial exposure.",
  //   timeline: [
  //     {
  //       id: 1,
  //       title: "Basic Training (BT)",
  //       description:
  //         "Fundamental theoretical and practical training at designated Basic Training Providers (BTPs) under DGT norms.",
  //       date: "Week 1–8",
  //       duration: "320 hours",
  //       location: "Training Institute",
  //       participants: "15–20",
  //       category: "theory",
  //     },
  //     {
  //       id: 2,
  //       title: "On-the-Job Training Phase I",
  //       description:
  //         "Initial workplace exposure focusing on real-time task performance under qualified supervisors.",
  //       date: "Week 9–20",
  //       duration: "480 hours",
  //       location: "Industry Partner Site",
  //       participants: "15–20",
  //       category: "practical",
  //     },
  //     {
  //       id: 3,
  //       title: "Intermediate Evaluation",
  //       description:
  //         "Performance review and feedback as per Apprenticeship Monitoring Portal (APM) guidelines.",
  //       date: "Week 21",
  //       duration: "40 hours",
  //       location: "Assessment Center",
  //       participants: "15–20",
  //       category: "assessment",
  //     },
  //     {
  //       id: 4,
  //       title: "On-the-Job Training Phase II",
  //       description:
  //         "Advanced industrial training, independent task handling, and exposure to real projects.",
  //       date: "Week 22–40",
  //       duration: "720 hours",
  //       location: "Industry Partner Site",
  //       participants: "15–20",
  //       category: "practical",
  //     },
  //     {
  //       id: 5,
  //       title: "Final Assessment & NAPS Certification",
  //       description:
  //         "Final evaluation and certification under National Apprenticeship Promotion Scheme (NAPS).",
  //       date: "Week 41–44",
  //       duration: "80 hours",
  //       location: "Regional Board Office",
  //       participants: "15–20",
  //       category: "certification",
  //     },
  //   ],
  // },
  {
    id: "industry-certification",
    name: "Industry-Aligned Skill Certification & Apprenticeship Programs",
    icon: <Target className="w-5 h-5" />,
    color: "from-green-500 to-green-500",
    description:
      "Jointly designed programs with sector skill councils and industry partners ensuring job-readiness.",
    timeline: [
      {
        id: 1,
        title: "Sector-Specific Orientation",
        description:
          "Orientation on job roles, industry standards, and occupational health and safety as per SSC norms.",
        date: "Week 1–2",
        duration: "60 hours",
        location: "Industry Training Center",
        participants: "18–22",
        category: "theory",
      },
      {
        id: 2,
        title: "Hands-On Training Module",
        description:
          "Skill development under industry mentors with use of sector-approved equipment.",
        date: "Week 3–5",
        duration: "120 hours",
        location: "Industry Lab",
        participants: "18–22",
        category: "practical",
      },
      {
        id: 3,
        title: "Assessment by SSC",
        description:
          "Third-party skill evaluation conducted by respective Sector Skill Council (SSC).",
        date: "Week 6",
        duration: "40 hours",
        location: "SSC Assessment Center",
        participants: "18–22",
        category: "assessment",
      },
      {
        id: 4,
        title: "Certification & Employment Drive",
        description:
          "Award of industry-recognized certificate and participation in Skill India Rozgar Melas.",
        date: "Week 7–8",
        duration: "30 hours",
        location: "Industry Partner Premises",
        participants: "18–22",
        category: "certification",
      },
    ],
  },
  {
    id: "upskilling-reskilling",
    name: "Workmen Upskilling & Reskilling Programs",
    icon: <TrendingUp className="w-5 h-5" />,
    color: "from-green-500 to-green-500",
    description:
      "Targeted interventions under PMKVY and DDU-GKY to enhance existing workforce competencies.",
    timeline: [
      {
        id: 1,
        title: "Skills Gap Identification",
        description:
          "Diagnostic assessment to map existing worker capabilities to NSQF occupational standards.",
        date: "Week 1",
        duration: "30 hours",
        location: "Skill Assessment Center",
        participants: "20–25",
        category: "assessment",
      },
      {
        id: 2,
        title: "Technology Orientation",
        description:
          "Awareness training on emerging technologies and digital tools relevant to industry needs.",
        date: "Week 2–3",
        duration: "60 hours",
        location: "Digital Learning Lab",
        participants: "20–25",
        category: "theory",
      },
      {
        id: 3,
        title: "Practical Upskilling Sessions",
        description:
          "Hands-on retraining in updated methods, equipment, and sector-specific innovations.",
        date: "Week 4–6",
        duration: "90 hours",
        location: "Skill Workshop",
        participants: "20–25",
        category: "practical",
      },
      {
        id: 4,
        title: "Performance Evaluation",
        description:
          "Competency-based testing as per NSDC sector skill council (SSC) framework.",
        date: "Week 7",
        duration: "30 hours",
        location: "Assessment Center",
        participants: "20–25",
        category: "assessment",
      },
      {
        id: 5,
        title: "Certification & Placement Linkage",
        description:
          "Issuance of NSDC skill certificate and facilitation of employment or self-employment linkage.",
        date: "Week 8",
        duration: "20 hours",
        location: "Skill India Center",
        participants: "20–25",
        category: "certification",
      },
    ],
  },
  // {
  //   id: "witp",
  //   name: "Work Integrated Training Programs (WITP)",
  //   icon: <Briefcase className="w-5 h-5" />,
  //   color: "from-green-500 to-green-500",
  //   description:
  //     "Programs integrating academic learning with workplace exposure, aligned to NSQF Level 5–7.",
  //   timeline: [
  //     {
  //       id: 1,
  //       title: "Academic Foundation",
  //       description:
  //         "Structured theoretical learning through partner universities and training institutes.",
  //       date: "Month 1–3",
  //       duration: "240 hours",
  //       location: "Partner Institute",
  //       participants: "20–25",
  //       category: "theory",
  //     },
  //     {
  //       id: 2,
  //       title: "Industry Attachment",
  //       description:
  //         "Continuous on-the-job learning under industry mentors with structured task logs.",
  //       date: "Month 4–6",
  //       duration: "360 hours",
  //       location: "Industry Partner Facility",
  //       participants: "20–25",
  //       category: "practical",
  //     },
  //     {
  //       id: 3,
  //       title: "Workplace Project & Review",
  //       description:
  //         "Live project based on industrial problems evaluated jointly by academic and industry experts.",
  //       date: "Month 7–8",
  //       duration: "120 hours",
  //       location: "Workplace/Institute",
  //       participants: "20–25",
  //       category: "assessment",
  //     },
  //     {
  //       id: 4,
  //       title: "Final Evaluation & Certification",
  //       description:
  //         "Final viva-voce, academic credits issuance, and award of Work Integrated Diploma.",
  //       date: "Month 9",
  //       duration: "40 hours",
  //       location: "Certification Center",
  //       participants: "20–25",
  //       category: "certification",
  //     },
  //   ],
  // },
  {
    id: "bootcamp",
    name: "Skill Development Bootcamp",
    icon: <Zap className="w-5 h-5" />,
    color: "from-green-500 to-green-500",
    description:
      "Short-term intensive programs under PMKVY focusing on rapid employability skills.",
    timeline: [
      {
        id: 1,
        title: "Orientation & Pre-Training Counseling",
        description:
          "Mobilization, counseling, and orientation on job role and training outcomes as per NSDC guidelines.",
        date: "Week 1",
        duration: "20 hours",
        location: "Training Center",
        participants: "25–30",
        category: "theory",
      },
      {
        id: 2,
        title: "Skill Training Module",
        description:
          "Hands-on skill sessions focusing on industry-relevant competencies as defined by NSQF Level 3–4.",
        date: "Week 2–4",
        duration: "90 hours",
        location: "Skill Lab",
        participants: "25–30",
        category: "practical",
      },
      {
        id: 3,
        title: "Assessment & Certification",
        description:
          "Third-party assessment under NSDC Sector Skill Council and issuance of digital skill certificate.",
        date: "Week 5",
        duration: "30 hours",
        location: "Assessment Hub",
        participants: "25–30",
        category: "assessment",
      },
      {
        id: 4,
        title: "Placement Facilitation",
        description:
          "Career counseling, interview preparation, and job placement through Rozgar Mela linkage.",
        date: "Week 6",
        duration: "20 hours",
        location: "Placement Cell",
        participants: "25–30",
        category: "certification",
      },
    ],
  },
  // {
  //   id: "bridge-foundation",
  //   name: "Bridge & Foundation Program",
  //   icon: <Heart className="w-5 h-5" />,
  //   color: "from-green-500 to-green-500",
  //   description:
  //     "Preparatory programs for school dropouts and marginalized youth to enter formal skilling pathways.",
  //   timeline: [
  //     {
  //       id: 1,
  //       title: "Basic Literacy & Numeracy",
  //       description:
  //         "Functional literacy, arithmetic, and digital literacy training under PMKVY Special Projects.",
  //       date: "Week 1–3",
  //       duration: "90 hours",
  //       location: "Foundation Center",
  //       participants: "25–30",
  //       category: "theory",
  //     },
  //     {
  //       id: 2,
  //       title: "Life Skills & Work Ethics",
  //       description:
  //         "Soft skills, teamwork, discipline, and communication development as per NSDC modules.",
  //       date: "Week 4–6",
  //       duration: "75 hours",
  //       location: "Skill Development Hall",
  //       participants: "25–30",
  //       category: "theory",
  //     },
  //     {
  //       id: 3,
  //       title: "Introductory Trade Exposure",
  //       description:
  //         "Familiarization with basic trades such as electrical, tailoring, or plumbing to identify interest areas.",
  //       date: "Week 7–9",
  //       duration: "90 hours",
  //       location: "Basic Skills Workshop",
  //       participants: "25–30",
  //       category: "practical",
  //     },
  //     {
  //       id: 4,
  //       title: "Assessment & Pathway Counseling",
  //       description:
  //         "Assessment of learning outcomes and guidance for progression into formal NSQF-aligned training.",
  //       date: "Week 10",
  //       duration: "30 hours",
  //       location: "Assessment Center",
  //       participants: "25–30",
  //       category: "assessment",
  //     },
  //   ],
  // },
  {
    id: "international-mobility",
    name: "International Mobility Program",
    icon: <Globe className="w-5 h-5" />,
    color: "from-green-500 to-green-500",
    description:
      "Skill programs designed for overseas employment under India International Skill Centers (IISCs).",
    timeline: [
      {
        id: 1,
        title: "Pre-Departure Orientation",
        description:
          "Training on cross-cultural adaptation, language basics, and international work ethics.",
        date: "Week 1–2",
        duration: "40 hours",
        location: "IISC Campus",
        participants: "20–25",
        category: "theory",
      },
      {
        id: 2,
        title: "Sector-Specific Technical Training",
        description:
          "Skill enhancement aligned with international qualification frameworks for targeted destination countries.",
        date: "Week 3–6",
        duration: "120 hours",
        location: "International Skill Lab",
        participants: "20–25",
        category: "practical",
      },
      {
        id: 3,
        title: "Language & Employability Enhancement",
        description:
          "Training in English and destination-country languages with employability modules.",
        date: "Week 7–8",
        duration: "60 hours",
        location: "Language Lab",
        participants: "20–25",
        category: "theory",
      },
      {
        id: 4,
        title: "Assessment & Certification",
        description:
          "Joint certification by NSDC and international partner organizations for global placement eligibility.",
        date: "Week 9",
        duration: "30 hours",
        location: "Assessment Hub",
        participants: "20–25",
        category: "certification",
      },
    ],
  },
];


const categoryConfig = {
  theory: {
    icon: <BookOpen className="w-4 h-4" />,
    label: "Theory",
  },
  practical: {
    icon: <Wrench className="w-4 h-4" />,
    label: "Practical",
  },
  assessment: {
    icon: <UserCheck className="w-4 h-4" />,
    label: "Assessment",
  },
  certification: {
    icon: <Award className="w-4 h-4" />,
    label: "Certification",
  },
};

// Custom hook for intersection observer
const useIntersectionObserver = (options = {}) => {
  const [visibleElements, setVisibleElements] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("data-id");
          if (entry.isIntersecting && id) {
            setVisibleElements((prev) => new Set([...prev, id]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
        ...options,
      }
    );

    const elements = document.querySelectorAll('[data-animate="true"]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return visibleElements;
};

export default function ProgramTimeline() {
  const [activeTab, setActiveTab] = useState(programs[0].id);
  const visibleElements = useIntersectionObserver();

  const activeProgram = useMemo(
    () => programs.find((p) => p.id === activeTab),
    [activeTab]
  );

  // Calculate program stats
  const programStats = useMemo(() => {
    if (!activeProgram) return null;

    const totalHours = activeProgram.timeline.reduce(
      (acc, event) => acc + parseInt(event.duration),
      0
    );

    const categoryCount = activeProgram.timeline.reduce((acc, event) => {
      acc[event.category] = (acc[event.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return { totalHours, categoryCount, phases: activeProgram.timeline.length };
  }, [activeProgram]);

  const handleTabChange = (programId: string) => {
    setActiveTab(programId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-black text-white relative overflow-hidden">
      {/* Blurry Scattered Colorful Circles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating circles */}
        <div className="absolute top-10 left-20 w-80 h-80 bg-rose-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-96 h-96 bg-green-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-40 w-72 h-72 bg-rose-500/25 rounded-full blur-3xl animate-bounce delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-green-500/20 rounded-full blur-3xl animate-pulse delay-3000"></div>

        {/* Medium floating circles */}
        <div className="absolute top-60 left-1/3 w-48 h-48 bg-green-500/30 rounded-full blur-2xl animate-bounce delay-4000"></div>
        <div className="absolute top-32 right-1/3 w-56 h-56 bg-rose-500/25 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute bottom-60 left-1/4 w-40 h-40 bg-green-500/35 rounded-full blur-2xl animate-bounce delay-1500"></div>
        <div className="absolute top-2/3 right-1/4 w-52 h-52 bg-rose-500/20 rounded-full blur-2xl animate-pulse delay-2500"></div>

        {/* Small accent circles */}
        <div className="absolute top-20 left-1/2 w-32 h-32 bg-green-500/40 rounded-full blur-xl animate-ping delay-1000"></div>
        <div className="absolute bottom-40 right-1/2 w-28 h-28 bg-rose-500/35 rounded-full blur-xl animate-ping delay-3500"></div>
        <div className="absolute top-1/3 left-10 w-24 h-24 bg-green-500/45 rounded-full blur-lg animate-ping delay-2000"></div>
        <div className="absolute bottom-80 right-10 w-36 h-36 bg-rose-500/30 rounded-full blur-xl animate-bounce delay-4500"></div>

        {/* Extra scattered circles */}
        <div className="absolute top-1/4 left-3/4 w-44 h-44 bg-green-500/25 rounded-full blur-2xl animate-pulse delay-3000"></div>
        <div className="absolute bottom-1/4 left-1/5 w-60 h-60 bg-rose-500/15 rounded-full blur-3xl animate-bounce delay-5000"></div>
        <div className="absolute top-3/4 right-3/4 w-32 h-32 bg-green-500/30 rounded-full blur-xl animate-ping delay-4000"></div>
        <div className="absolute top-1/6 right-1/6 w-48 h-48 bg-rose-500/20 rounded-full blur-2xl animate-pulse delay-6000"></div>
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <header className="px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-6xl lg:text-7xl font-black tracking-tight">
              <p className="">
                Our <span className="text-green-500">Training</span>
              </p>
              <span className="text-white">Timeline</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Comprehensive skill development programs designed to launch your
              career in high-demand industries
            </p>
          </div>
        </header>

        {/* Program Selector */}
        <section className="px-4 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {programs.map((program) => (
                <button
                  key={program.id}
                  onClick={() => handleTabChange(program.id)}
                  className={`group relative flex items-center gap-3 px-4 py-4 rounded-2xl transition-all duration-300 font-semibold text-left ${
                    activeTab === program.id
                      ? `bg-gradient-to-r ${program.color} text-white shadow-2xl scale-105`
                      : "bg-gray-800/50 text-gray-200 hover:bg-gray-700/50 hover:text-white backdrop-blur-sm border border-gray-700/50"
                  }`}
                  aria-label={`Select ${program.name} program`}
                >
                  <div
                    className={`p-2 rounded-lg flex-shrink-0 ${
                      activeTab === program.id
                        ? "bg-red-600"
                        : "bg-green-500 group-hover:bg-gray-500/50"
                    } transition-colors`}
                  >
                    {program.icon}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-sm line-clamp-2">{program.name}</div>
                    <div
                      className={`text-xs mt-1 line-clamp-2 ${
                        activeTab === program.id
                          ? "text-white/80"
                          : "text-gray-400"
                      }`}
                    >
                      {program.description}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Program Stats Overview */}
        {programStats && (
          <section className="px-4 mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-900/80 backdrop-blur-sm border border-rose-500/30 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-black text-rose-500 mb-2">
                    {programStats.totalHours}
                  </div>
                  <div className="text-gray-200 font-medium">Total Hours</div>
                </div>
                <div className="bg-gray-900/80 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-black text-green-500 mb-2">
                    {programStats.phases}
                  </div>
                  <div className="text-gray-200 font-medium">
                    Training Phases
                  </div>
                </div>
                <div className="bg-gray-900/80 backdrop-blur-sm border border-rose-500/30 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-black text-rose-500 mb-2">
                    {activeProgram?.id === 'diploma-advanced' ? '20' : 
                     activeProgram?.id === 'apprenticeship-dual-training' ? '16' : 
                     activeProgram?.id === 'bridge-foundation' ? '12' : 
                     activeProgram?.id === 'cpd' ? '9' : '5-8'}
                  </div>
                  <div className="text-gray-200 font-medium">
                    {activeProgram?.id === 'diploma-advanced' ? 'Months Duration' : 'Weeks Duration'}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Timeline Section */}
        <section className="px-4 pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Central Timeline Line */}
              <div className="absolute -z-20 left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-red-600 via-green-500 to-red-600 rounded-full"></div>

              <div className="space-y-16">
                {activeProgram?.timeline.map((event, index) => {
                  const isEven = index % 2 === 0;
                  const isVisible = visibleElements.has(event.id.toString());
                  const categoryInfo = categoryConfig[event.category];
                  const isRedCard = index % 2 === 0; // Alternate between red and green
                  const cardColor = isRedCard ? "bg-red-600/80" : "bg-green-500/80";
                  const iconColor = isRedCard ? "text-green-500" : "text-red-600";

                  return (
                    <div
                      key={event.id}
                      data-animate="true"
                      data-id={event.id}
                      className={`relative flex ${
                        isEven ? "justify-start" : "justify-end"
                      } items-center z-10`}
                    >
                      {/* Timeline Card */}
                      <div
                        className={`relative w-full max-w-lg transform transition-all duration-700 delay-${
                          index * 100
                        } ${
                          isVisible
                            ? "translate-x-0 opacity-100"
                            : isEven
                            ? "-translate-x-20 opacity-0"
                            : "translate-x-20 opacity-0"
                        }`}
                      >
                        <div
                          className={`group ${cardColor} backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl shadow-black/30`}
                        >
                          {/* Category Badge */}
                          <div
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm ${isRedCard ? "bg-green-500/90" : "bg-red-600/90"} text-white border border-white/20`}
                          >
                            {categoryInfo.icon}
                            {categoryInfo.label}
                          </div>

                          {/* Content */}
                          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white/90 transition-colors">
                            {event.title}
                          </h3>
                          <p className="text-white/90 mb-6 leading-relaxed">
                            {event.description}
                          </p>

                          {/* Event Details Grid */}
                          <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-3 text-white/90">
                              <div className={`p-2 ${isRedCard ? "bg-green-500/20" : "bg-red-600/20"} rounded-lg backdrop-blur-sm border border-white/10`}>
                                <Calendar className={`w-4 h-4 ${iconColor}`} />
                              </div>
                              <div>
                                <div className="text-xs font-medium text-white/70">
                                  Duration
                                </div>
                                <div className="text-sm font-semibold text-white">
                                  {event.date}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 text-white/90">
                              <div className={`p-2 ${isRedCard ? "bg-green-500/20" : "bg-red-600/20"} rounded-lg backdrop-blur-sm border border-white/10`}>
                                <Clock className={`w-4 h-4 ${iconColor}`} />
                              </div>
                              <div>
                                <div className="text-xs font-medium text-white/70">
                                  Hours
                                </div>
                                <div className="text-sm font-semibold text-white">
                                  {event.duration}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 text-white/90">
                              <div className={`p-2 ${isRedCard ? "bg-green-500/20" : "bg-red-600/20"} rounded-lg backdrop-blur-sm border border-white/10`}>
                                <MapPin className={`w-4 h-4 ${iconColor}`} />
                              </div>
                              <div>
                                <div className="text-xs font-medium text-white/70">
                                  Location
                                </div>
                                <div className="text-sm font-semibold text-white">
                                  {event.location}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 text-white/90">
                              <div className={`p-2 ${isRedCard ? "bg-green-500/20" : "bg-red-600/20"} rounded-lg backdrop-blur-sm border border-white/10`}>
                                <Users className={`w-4 h-4 ${iconColor}`} />
                              </div>
                              <div>
                                <div className="text-xs font-medium text-white/70">
                                  Participants
                                </div>
                                <div className="text-sm font-semibold text-white">
                                  {event.participants}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Timeline Node */}
                        <div
                          className={`absolute top-1/2 transform -translate-y-1/2 ${
                            isEven ? "-right-6" : "-left-6"
                          } w-12 h-12 ${isRedCard ? "bg-green-500" : "bg-red-600"} rounded-full flex items-center justify-center shadow-lg z-20 border-4 border-gray-900 backdrop-blur-sm`}
                        >
                          <span className="text-white">
                            {categoryInfo.icon}
                          </span>
                        </div>

                        {/* Connecting Line */}
                        <div
                          className={`absolute top-1/2 transform -translate-y-0.5 ${
                            isEven ? "-right-3" : "-left-3"
                          } w-6 h-1 ${isRedCard ? "bg-green-500" : "bg-red-600"} z-10`}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Completion Badge */}
              <div className="flex justify-center mt-16 z-10">
                <div
                  className="
      relative bg-gray-900/30 backdrop-blur-md rounded-3xl p-8 text-center
      border border-green-500/20 shadow-[0_4px_30px_rgba(20,184,166,0.2)]
      hover:bg-gray-900/40 hover:shadow-[0_4px_30px_rgba(20,184,166,0.3)]
      transition-all duration-300
      before:absolute before:inset-0 before:bg-gradient-to-r before:from-rose-500/10 before:to-green-500/10
      before:rounded-3xl before:opacity-0 before:transform before:scale-95
      before:transition-all before:duration-500
      hover:before:opacity-100 hover:before:scale-100
    "
                  aria-label="Program completion badge"
                >
                  <div className="text-5xl mb-4">🎓</div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Program Complete
                  </h3>
                  <p className="text-gray-200">
                    Ready for industry placement and career growth
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-black to-red-600"></div>

    </div>
  );
}