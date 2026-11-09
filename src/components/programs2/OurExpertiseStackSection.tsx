import SiteImage from "../common/SiteImage";
import { useRef, useState, type KeyboardEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

/* ===================== TYPES ===================== */

type JobRole = {
  title: string;
  image: string;
};

type Programme = {
  title: string;
  description: string;
  image: string;
  duration: string;
  mode: string;
  certification: string;
  idealFor: string;
  jobRoles: JobRole[];
  path: string;
};

/* ===================== DATA ===================== */

const PROGRAMMES: Programme[] = [
  {
    title: "Diploma/Polytechnic",
    description:
      "Comprehensive training in technical and applied sciences, preparing students for supervisory and technician roles.",
    image:
      "/optimized/programs/programs_image/diploma.jpg.webp",
    duration: "2–3 Years",
    mode: "Full-Time / Hybrid",
    certification: "State & Industry Recognised",
    idealFor: "12th Pass Students",
    jobRoles: [
      {
        title: "Technical Proficiency",
        image:
          "https://images.unsplash.com/photo-1565608438257-fac3c27beb36?q=80&w=1176&auto=format&fit=crop",
      },
      {
        title: "Career-Ready Skills",
        image:
          "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
      },
      {
        title: "Lab-Based Learning",
        image:
          "https://5.imimg.com/data5/SELLER/Default/2024/6/423853848/ZY/IF/OL/195628478/electrical-labour-contractor-service-500x500.jpg",
      },
    ],
    path: "/our-programmes/diploma-programs",
  },

  {
    title: "Industrial Training Institute (ITI)",
    description:
      "Hands-on skill development programs designed to create industry-ready technicians for blue-collar sectors.",
    image:
      "/optimized/programs/programs_image/iti.jpg.webp",
    duration: "6–24 Months",
    mode: "Full-Time",
    certification: "NCVT / SCVT",
    idealFor: "10th / 12th Pass",
    jobRoles: [
      {
        title: "Hands-On Workshops",
        image:
          "https://images.unsplash.com/photo-1581092160607-ee22621dd758",
      },
      {
        title: "Industry Tools",
        image:
          "https://www.flyability.com/hs-fs/hubfs/mining-industry-flyability-4.jpg",
      },
      {
        title: "Placement Assistance",
        image:
          "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
      },
    ],
    path: "/our-programmes/iti-program",
  },

  {
    title: "Industry-Aligned Skill Certification",
    description:
      "Training and certification designed with direct input from industry partners to maximize employability.",
    image:
      "/optimized/programs/programs_image/industry.jpg.webp",
    duration: "3–12 Months",
    mode: "Blended",
    certification: "Industry Certified",
    idealFor: "Students & Job Seekers",
    jobRoles: [
      {
        title: "Industry Endorsed",
        image:
          "https://www.flyability.com/hs-fs/hubfs/mining-industry-flyability-4.jpg",
      },
      {
        title: "High Employability",
        image:
          "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0",
      },
      {
        title: "Global Standards",
        image:
          "https://www.stratospherenetworks.com/blog/wp-content/uploads/2019/11/global-network-concept-photo.jpg",
      },
    ],
    path: "/our-programmes/industry-alligned-certification",
  },

  {
    title: "Workmen Upskilling & Reskilling Programs",
    description:
      "Helping the workforce adapt to evolving technologies, processes, and global industrial standards.",
    image:
      "/optimized/programs/programs_image/upskilling.jpg.webp",
    duration: "1–6 Months",
    mode: "Blended",
    certification: "Industry Aligned",
    idealFor: "Working Professionals",
    jobRoles: [
      {
        title: "Technology Adaptation",
        image:
          "https://unity.com/_next/image?url=https%3A%2F%2Fcdn.bfldr.com%2FS5BC9Y64%2Fat%2Fnjr7gk7np252t24pgmbnhqt%2FAdobeStock_786731786.jpeg",
      },
      {
        title: "Skill Enhancement",
        image:
          "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
      },
      {
        title: "Career Longevity",
        image:
          "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0",
      },
    ],
    path: "/our-programmes/upskilling-and-reskilling-program",
  },

  {
    title: "Skill Development Bootcamps",
    description:
      "Intensive short-term programs for rapid job entry.",
    image:
      "/optimized/programs/programs_image/bootcamp.jpg.webp",
    duration: "4–12 Weeks",
    mode: "Full-Time / Intensive",
    certification: "Industry Recognised",
    idealFor: "Job Seekers",
    jobRoles: [
      {
        title: "Short-Term",
        image:
          "https://media.assettype.com/deccanherald%2F2025-07-13%2Fzb5djuly%2Ffile702siqlkphi18ln8wf8i.jpg",
      },
      {
        title: "Job-Focused",
        image:
          "https://images.click.in/classifieds/images/177/27_09_2021_04_36_52_cb914eb0da350294ca7d6954be700c5d_s.jpg",
      },
      {
        title: "Latest Tech",
        image:
          "https://storage.googleapis.com/ureify-strapi-assets/ar_vr_resume_3a465d9ba3.jpeg",
      },
    ],
    path: "/our-programmes/skill-development-boot-camp-program",
  },

  {
    title: "International Mobility Programs",
    description:
      "Global-standard training for overseas job opportunities.",
    image:
      "https://cdn.prod.website-files.com/67139b4944f3d6b890cda082/6720a95f025dc22684bab942_64f07126f5659751e457ca5a_workforce-management-system-mining-industry.jpeg",
    duration: "18–24 Weeks",
    mode: "Hybrid",
    certification: "Global Standards",
    idealFor: "International Aspirants",
    jobRoles: [
      {
        title: "Global Standards",
        image:
          "https://www.stratospherenetworks.com/blog/wp-content/uploads/2019/11/global-network-concept-photo.jpg",
      },
      {
        title: "Overseas Opportunities",
        image:
          "https://static.themoscowtimes.com/image/article_1360/47/TASS26212748.jpg",
      },
      {
        title: "International Partnerships",
        image:
          "https://www.n-able.com/wp-content/uploads/2021/04/Blog-Merger_header.jpeg",
      },
    ],
    path: "/our-programmes/international-mobility-program",
  },
];

export default function ProgrammeExplorer() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const programme = PROGRAMMES[active];
  const onKey = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next = index;
    if (['ArrowDown','ArrowRight'].includes(event.key)) next = (index + 1) % PROGRAMMES.length;
    else if (['ArrowUp','ArrowLeft'].includes(event.key)) next = (index + PROGRAMMES.length - 1) % PROGRAMMES.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = PROGRAMMES.length - 1;
    else return;
    event.preventDefault(); setActive(next); refs.current[next]?.focus();
  };
  return <section id="programme-explorer" className="programme-explorer" aria-labelledby="programme-explorer-title">
    <div className="site-shell"><header className="programme-explorer-heading"><div><p className="site-eyebrow">Find your pathway</p><h2 id="programme-explorer-title">Built for your next step.</h2></div><p>Compare our training pathways and find the programme that fits your ambitions.</p></header>
      <div className="programme-explorer-layout"><div role="tablist" aria-label="Training pathways" aria-orientation="vertical" className="programme-explorer-tabs">
        {PROGRAMMES.map((item,index) => <button key={item.path} ref={el => {refs.current[index]=el;}} type="button" role="tab" id={`pathway-${index}`} aria-selected={index===active} aria-controls="pathway-panel" tabIndex={index===active?0:-1} onKeyDown={event=>onKey(event,index)} onClick={()=>setActive(index)}><span aria-hidden="true">0{index+1}</span>{item.title}<ArrowUpRight size={16} aria-hidden="true" /></button>)}
      </div><article role="tabpanel" id="pathway-panel" aria-labelledby={`pathway-${active}`} tabIndex={0} className="programme-explorer-panel">
        <SiteImage src={programme.image} alt={programme.title} width={900} height={500} loading="lazy" decoding="async" />
        <div className="programme-explorer-detail"><h3>{programme.title}</h3><p>{programme.description}</p><dl>{[['Duration',programme.duration],['Learning mode',programme.mode],['Certification',programme.certification],['Ideal for',programme.idealFor]].map(([label,value])=><div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
        <div className="programme-explorer-skills">{programme.jobRoles.map(role=><span key={role.title}>{role.title}</span>)}</div><Link className="site-button" to={programme.path}>Explore this programme<ArrowUpRight size={16} aria-hidden="true" /></Link></div>
      </article></div>
    </div>
  </section>;
}
