import React from "react";
import AboutHero from "../../components/about/AboutHero";
import VisionMissionGoal from "../../components/about/VisionMissionGoal";
import ScrollVelocity from "../../components/common/ScrollVelocity";
import AboutImpact from "../../components/about/AboutImpact";
import HeroInfoSection from "../../components/about/FoundersSection";
import { ThreeDMarquee } from "../../components/about/ThreeDMarqueeDemo";
import OurFaculty from "../../components/about/OurFaculty";
// import OurFacilities from "../../components/about/OurFacilities";
import ScrollVelocityImages from "../../components/common/ScrollVelocityImages";

const AboutPage: React.FC = () => {
  // const images = [
  //   "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
  //   "https://assets.aceternity.com/animated-modal.png",
  //   "https://assets.aceternity.com/animated-testimonials.webp",
  //   "https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png",
  //   "https://assets.aceternity.com/github-globe.png",
  //   "https://assets.aceternity.com/glare-card.png",
  //   "https://assets.aceternity.com/layout-grid.png",
  //   "https://assets.aceternity.com/flip-text.png",
  //   "https://assets.aceternity.com/hero-highlight.png",
  //   "https://assets.aceternity.com/carousel.webp",
  //   "https://assets.aceternity.com/placeholders-and-vanish-input.png",
  //   "https://assets.aceternity.com/shooting-stars-and-stars-background.png",
  //   "https://assets.aceternity.com/signup-form.png",
  //   "https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png",
  //   "https://assets.aceternity.com/spotlight-new.webp",
  //   "https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png",
  // ];

  const images = [
    "https://res.cloudinary.com/dxzhnns58/image/upload/v1762166427/WhatsApp_Image_2025-04-30_at_5.49.15_PM_xnmamh_2_ma665l.jpg",
    "https://res.cloudinary.com/dxzhnns58/image/upload/v1762167481/Gemini_Generated_Image_dm4793dm4793dm47_obiynh.png",
    "https://res.cloudinary.com/dxzhnns58/image/upload/v1762160341/WhatsApp_Image_2025-11-03_at_2.21.32_PM_cepy4c.jpg",
    "https://res.cloudinary.com/dxzhnns58/image/upload/v1762157793/welder_wtwqhs.webp",
    "https://res.cloudinary.com/dxzhnns58/image/upload/v1761819881/WhatsApp_Image_2025-10-30_at_3.38.18_PM_avyast.jpg",
    "https://res.cloudinary.com/dxzhnns58/image/upload/v1761819875/WhatsApp_Image_2025-10-30_at_3.34.59_PM_tiduhn.jpg",
    "https://res.cloudinary.com/dxzhnns58/image/upload/v1761819867/WhatsApp_Image_2025-10-30_at_3.30.36_PM_viv2to.jpg",
    "https://res.cloudinary.com/dxzhnns58/image/upload/v1761819859/WhatsApp_Image_2025-10-30_at_3.30.06_PM_mhnoko.jpg",
    "https://res.cloudinary.com/dxzhnns58/image/upload/v1761815148/GMC10092024_162547_jhwc3q.jpg",
    "https://res.cloudinary.com/dxzhnns58/image/upload/v1761813985/WhatsApp_Image_2025-09-03_at_7.27.27_PM_hnzywi.jpg",
    "https://res.cloudinary.com/dxzhnns58/image/upload/v1761813875/GMC06072025_170825_qsx9f7.jpg",
    "https://res.cloudinary.com/dxzhnns58/image/upload/v1761769356/Theoryofchange_deta48.jpg",
    "https://res.cloudinary.com/dxzhnns58/image/upload/v1761745317/vocational_x4fu5b.jpg",
    "https://res.cloudinary.com/dxzhnns58/image/upload/v1761740136/blogs_oulxwa.jpg",
    
  ];
  const Faculty = [
    {
      image:
        "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760095558/jalandhar_2_1_b8x99s.jpg",
      title: "Mr. Jalandhar Mohanty",
      subtitle: "Lead, CoE, Mining",
      handle: "@alexrivera",
      borderColor: "#10B981", // emerald accent
      gradient: "linear-gradient(145deg, #1F2937, #111827)", // subtle gray blend
      url: "https://github.com/",
    },
    {
      image:
        "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760619794/Sudarshan_2_geimdd.jpg",
      title: "Mr. Sudarshan Barik",
      subtitle: "Lead, CoE, Steel & Aluminium",
      handle: "@jordanchen",
      borderColor: "#10B981",
      gradient: "linear-gradient(145deg, #1F2937, #111827)",
      url: "https://linkedin.com/in/",
    },
    {
      image:
        "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760096195/bikram_2_ufeeka.jpg",
      title: "Mr. Bikram K. Gouda",
      subtitle: "Lead, CoE, Shipping & Logistics",
      handle: "@morganblake",
      borderColor: "#10B981",
      gradient: "linear-gradient(145deg, #1F2937, #111827)",
      url: "https://dribbble.com/",
    },
    {
      image:
        "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760096329/yagnesh_2_lmjxag.jpg",
      title: "Mr. Yagnesh K. Nanda",
      subtitle: "Lead, CoE, Power & Green Energy",
      handle: "@morganblake",
      borderColor: "#10B981",
      gradient: "linear-gradient(145deg, #1F2937, #111827)",
      url: "https://dribbble.com/",
    },
    {
      image:
        "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760097703/mukessh_2_p4kfmr.jpg",
      title: "Mr. Mukesh Singh",
      subtitle: "Lead, CoE, Construction & Infrastructure Equipment",
      handle: "@morganblake",
      borderColor: "#10B981",
      gradient: "linear-gradient(145deg, #1F2937, #111827)",
      url: "https://dribbble.com/",
    },
    {
      image:
        "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760618334/basanta_2_adg0rh.jpg",
      title: "Mr. Basant K. Sahoo",
      subtitle: "Lead, CoE, Water & Waste Water Treatment",
      handle: "@morganblake",
      borderColor: "#10B981",
      gradient: "linear-gradient(145deg, #1F2937, #111827)",
      url: "https://dribbble.com/",
    },
  ];
  
  
  
  // const Faculty = [
  //   {
  //     image: "https://i.pravatar.cc/300?img=1",
  //     title: "Sarah Johnson",
  //     subtitle: "Frontend Developer",
  //     handle: "@sarahjohnson",
  //     borderColor: "#3B82F6",
  //     gradient: "linear-gradient(145deg, #3B82F6, #000)",
  //     url: "https://github.com/sarahjohnson",
  //   },
  //   {
  //     image: "https://i.pravatar.cc/300?img=2",
  //     title: "Mike Chen",
  //     subtitle: "Backend Engineer",
  //     handle: "@mikechen",
  //     borderColor: "#10B981",
  //     gradient: "linear-gradient(180deg, #10B981, #000)",
  //     url: "https://linkedin.com/in/mikechen",
  //   },
  //   {
  //     image: "https://i.pravatar.cc/300?img=1",
  //     title: "Sarah Johnson",
  //     subtitle: "Frontend Developer",
  //     handle: "@sarahjohnson",
  //     borderColor: "#3B82F6",
  //     gradient: "linear-gradient(145deg, #3B82F6, #000)",
  //     url: "https://github.com/sarahjohnson",
  //   },
  //   {
  //     image: "https://i.pravatar.cc/300?img=2",
  //     title: "Mike Chen",
  //     subtitle: "Backend Engineer",
  //     handle: "@mikechen",
  //     borderColor: "#10B981",
  //     gradient: "linear-gradient(180deg, #10B981, #000)",
  //     url: "https://linkedin.com/in/mikechen",
  //   },
  //   {
  //     image: "https://i.pravatar.cc/300?img=1",
  //     title: "Sarah Johnson",
  //     subtitle: "Frontend Developer",
  //     handle: "@sarahjohnson",
  //     borderColor: "#3B82F6",
  //     gradient: "linear-gradient(145deg, #3B82F6, #000)",
  //     url: "https://github.com/sarahjohnson",
  //   },
  //   {
  //     image: "https://i.pravatar.cc/300?img=2",
  //     title: "Mike Chen",
  //     subtitle: "Backend Engineer",
  //     handle: "@mikechen",
  //     borderColor: "#10B981",
  //     gradient: "linear-gradient(180deg, #10B981, #000)",
  //     url: "https://linkedin.com/in/mikechen",
  //   },
  //   {
  //     image: "https://i.pravatar.cc/300?img=1",
  //     title: "Sarah Johnson",
  //     subtitle: "Frontend Developer",
  //     handle: "@sarahjohnson",
  //     borderColor: "#3B82F6",
  //     gradient: "linear-gradient(145deg, #3B82F6, #000)",
  //     url: "https://github.com/sarahjohnson",
  //   },
  //   {
  //     image: "https://i.pravatar.cc/300?img=2",
  //     title: "Mike Chen",
  //     subtitle: "Backend Engineer",
  //     handle: "@mikechen",
  //     borderColor: "#10B981",
  //     gradient: "linear-gradient(180deg, #10B981, #000)",
  //     url: "https://linkedin.com/in/mikechen",
  //   },
  // ];

  return (
    <div className="bg-black">
      <AboutHero />
      <ScrollVelocity
        texts={[
          "Odisha's First Institution Focused on Blue Collar Industry",
          "Pantiss Skill Universe",
        ]}
        velocity={120}
        className="text-4xl md:text-6xl"
        colors={["text-green-600", "text-red-600"]}
        parallaxClassName="bg-black py-4"
        scrollerClassName="tracking-tight"
      />
      <VisionMissionGoal />
      <AboutImpact />
      <div id="founders">
        <HeroInfoSection />
      </div>
      <div
        className="w-full h-[700px] bg-black p-2 ring-1 ring-neutral-700/10 dark:bg-gradient-to-b dark:from-black dark:via-green-600 dark:to-black"
      >
        <ThreeDMarquee images={images} />
      </div>
      <div id="faculty" className="h-full relative">
        <OurFaculty
          heading="Our Faculties"
          items={Faculty}
          radius={300}
          damping={0.45}
          fadeOut={0.6}
          ease="power3.out"
        />
      </div>
      <ScrollVelocityImages 
        images={[
          "https://res.cloudinary.com/dxzhnns58/image/upload/v1761928459/SCHOOL_FOR_WASH-removebg-preview_s8wofi.png",
          "https://res.cloudinary.com/dxzhnns58/image/upload/v1761928459/SCHOOL_FOR_STEEL___ALUMINIUM-removebg-preview_lqtpri.png",
          "https://res.cloudinary.com/dxzhnns58/image/upload/v1761928459/SCHOOL_FOR_SHIPPING___LOGISTICS-removebg-preview_ktlsje.png",
          "https://res.cloudinary.com/dxzhnns58/image/upload/v1761928458/SCHOOL_FOR_POWER___GREEN_ENERGY-removebg-preview_tinr0w.png",
          "https://res.cloudinary.com/dxzhnns58/image/upload/v1761928458/SCHOOL_FOR_MINES-removebg-preview_airmxv.png",
          "https://res.cloudinary.com/dxzhnns58/image/upload/v1761928458/SCHOOL_FOR_CONSTRUCTION___INFRA_EQUIPMENT-removebg-preview_rpgnjo.png"
        ]}
        velocity={150}
        imageClassName="w-full h-24 object-cover rounded-xl"
        containerClassName="max-w-full"
      />

      {/* <OurFacilities /> */}
    </div>
  );
};

export default AboutPage;