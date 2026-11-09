import DeferredSection from "../../components/common/DeferredSection";
import React, { lazy } from "react";
import AboutHero from "../../components/about/AboutHero";
const VisionMissionGoal = React.lazy(() => import("../../components/about/VisionMissionGoal"));
// import ScrollVelocity from "../../components/common/ScrollVelocity";
const AboutImpact = React.lazy(() => import("../../components/about/AboutImpact"));
const HeroInfoSection = React.lazy(() => import("../../components/about/FoundersSection"));

const ThreeDMarquee = lazy(() => import("../../components/about/ThreeDMarqueeDemo").then(module => ({ default: module.ThreeDMarquee })));

// import OurFaculty from "../../components/about/OurFaculty";
// import OurFacilities from "../../components/about/OurFacilities";
// import ScrollVelocityImages from "../../components/common/ScrollVelocityImages";
const Certifications = React.lazy(() => import("../../components/about/Certifications/Certifications"));
const Milestones = React.lazy(() => import("../../components/about/Milestones/Milestones"));
const Awards = React.lazy(() => import("../../components/about/Awards"));

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
    "/optimized/About/carousel/Gallery_.JPG.webp",
    "/optimized/About/carousel/Gallery_1.JPG.webp",
    "/optimized/About/carousel/Gallery_2.jpg.webp",
    "/optimized/About/carousel/Gallery_3.JPG.webp",
    "/About/carousel/Gallery_4.JPG",
    "/optimized/About/carousel/Gallery_5.JPG.webp",
    "/optimized/About/carousel/Gallery_6.JPG.webp",
    "/optimized/About/carousel/Gallery_7.JPG.webp",
    "/optimized/About/carousel/Gallery_8.JPG.webp",
    "/optimized/About/carousel/Gallery_9.JPG.webp",
    "/optimized/About/carousel/Gallery_10.JPG.webp",
    "/optimized/About/carousel/Gallery_11.jpg.webp",
    "/optimized/About/carousel/Gallery_12.JPG.webp",
    "/About/carousel/Gallery_13.jpg",
    "/optimized/About/carousel/Gallery_14.jpg.webp",
    "/optimized/About/carousel/Gallery_15.jpeg.webp",
    "/optimized/About/carousel/Gallery_16.jpeg.webp",
    "/optimized/About/carousel/Gallery_17.jpg.webp",
    "/optimized/About/carousel/Gallery_18.jpg.webp",
    "/About/carousel/Gallery_19.webp",
    "/optimized/About/carousel/Gallery_22.JPG.webp",
  ];
  // const Faculty = [
  //   {
  //     image:
  //       "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760095558/jalandhar_2_1_b8x99s.jpg",
  //     title: "Mr. Jalandhar Mohanty",
  //     subtitle: "Lead, CoE, Mining",
  //     handle: "@alexrivera",
  //     borderColor: "#10B981", // emerald accent
  //     gradient: "linear-gradient(145deg, #1F2937, #111827)", // subtle gray blend
  //     url: "https://github.com/",
  //   },
  //   {
  //     image:
  //       "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760619794/Sudarshan_2_geimdd.jpg",
  //     title: "Mr. Sudarshan Barik",
  //     subtitle: "Lead, CoE, Steel & Aluminium",
  //     handle: "@jordanchen",
  //     borderColor: "#10B981",
  //     gradient: "linear-gradient(145deg, #1F2937, #111827)",
  //     url: "https://linkedin.com/in/",
  //   },
  //   {
  //     image:
  //       "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760096195/bikram_2_ufeeka.jpg",
  //     title: "Mr. Bikram K. Gouda",
  //     subtitle: "Lead, CoE, Shipping & Logistics",
  //     handle: "@morganblake",
  //     borderColor: "#10B981",
  //     gradient: "linear-gradient(145deg, #1F2937, #111827)",
  //     url: "https://dribbble.com/",
  //   },
  //   {
  //     image:
  //       "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760096329/yagnesh_2_lmjxag.jpg",
  //     title: "Mr. Yagnesh K. Nanda",
  //     subtitle: "Lead, CoE, Power & Green Energy",
  //     handle: "@morganblake",
  //     borderColor: "#10B981",
  //     gradient: "linear-gradient(145deg, #1F2937, #111827)",
  //     url: "https://dribbble.com/",
  //   },
  //   {
  //     image:
  //       "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760097703/mukessh_2_p4kfmr.jpg",
  //     title: "Mr. Mukesh Singh",
  //     subtitle: "Lead, CoE, Construction & Infrastructure Equipment",
  //     handle: "@morganblake",
  //     borderColor: "#10B981",
  //     gradient: "linear-gradient(145deg, #1F2937, #111827)",
  //     url: "https://dribbble.com/",
  //   },
  //   {
  //     image:
  //       "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760618334/basanta_2_adg0rh.jpg",
  //     title: "Mr. Basant K. Sahoo",
  //     subtitle: "Lead, CoE, Water & Waste Water Treatment",
  //     handle: "@morganblake",
  //     borderColor: "#10B981",
  //     gradient: "linear-gradient(145deg, #1F2937, #111827)",
  //     url: "https://dribbble.com/",
  //   },
  // ];

  // const AdvisoryBoard = [
  //   {
  //     image: "/teams/jalandhar.png",
  //     title: "Mr. Jalandhar Mohanty",
  //     subtitle: "Lead, CoE, Mining",
  //     handle: "@alexrivera",
  //     borderColor: "#10B981", // emerald accent
  //     gradient: "linear-gradient(145deg, #1F2937, #111827)", // subtle gray blend
  //     url: "https://github.com/",
  //   },
  //   {
  //     image: "/teams/sudarshan.png",
  //     title: "Mr. Sudarshan Barik",
  //     subtitle: "Lead, CoE, Steel & Aluminium",
  //     handle: "@jordanchen",
  //     borderColor: "#10B981",
  //     gradient: "linear-gradient(145deg, #1F2937, #111827)",
  //     url: "https://linkedin.com/in/",
  //   },
  //   {
  //     image: "/teams/bikram.png",
  //     title: "Mr. Bikram K. Gouda",
  //     subtitle: "Lead, CoE, Shipping & Logistics",
  //     handle: "@morganblake",
  //     borderColor: "#10B981",
  //     gradient: "linear-gradient(145deg, #1F2937, #111827)",
  //     url: "https://dribbble.com/",
  //   },
  //   {
  //     image: "/teams/yagnesh.png",
  //     title: "Mr. Yagnesh K. Nanda",
  //     subtitle: "Lead, CoE, Power & Green Energy",
  //     handle: "@morganblake",
  //     borderColor: "#10B981",
  //     gradient: "linear-gradient(145deg, #1F2937, #111827)",
  //     url: "https://dribbble.com/",
  //   },
  //   {
  //     image: "/teams/mukessh.png",
  //     title: "Mr. Mukesh Singh",
  //     subtitle: "Lead, CoE, Construction & Infrastructure Equipment",
  //     handle: "@morganblake",
  //     borderColor: "#10B981",
  //     gradient: "linear-gradient(145deg, #1F2937, #111827)",
  //     url: "https://dribbble.com/",
  //   },
  //   // {
  //   //   image:
  //   //     "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760618334/basanta_2_adg0rh.jpg",
  //   //   title: "Mr. Basant K. Sahoo",
  //   //   subtitle: "Lead, CoE, Water & Waste Water Treatment",
  //   //   handle: "@morganblake",
  //   //   borderColor: "#10B981",
  //   //   gradient: "linear-gradient(145deg, #1F2937, #111827)",
  //   //   url: "https://dribbble.com/",
  //   // },
  // ];

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
      <DeferredSection><VisionMissionGoal /></DeferredSection>
      <DeferredSection height="min-h-[280px]"><AboutImpact /></DeferredSection>
      <div id="founders">
        <DeferredSection><HeroInfoSection /></DeferredSection>
      </div>
      <div className="w-full h-[700px] bg-black p-2 ring-1 ring-neutral-700/10 dark:bg-gradient-to-b dark:from-black dark:via-red-600 dark:to-black border border-white/10 rounded-xl relative">
        <DeferredSection height="min-h-[700px]">
          <ThreeDMarquee images={images} />
        </DeferredSection>
      </div>
      <DeferredSection><Milestones /></DeferredSection>
      {/* <div id="faculty" className="h-full relative">
        <OurFaculty
          heading="Our Advisory Board"
          items={AdvisoryBoard}
          radius={300}
          damping={0.45}
          fadeOut={0.6}
          ease="power3.out"
        />
      </div> */}
      <DeferredSection><Awards /></DeferredSection>
      <DeferredSection><Certifications /></DeferredSection>
      {/* <div id="faculty" className="h-full relative">
        <OurFaculty
          heading="Our Faculties"
          items={Faculty}
          radius={300}
          damping={0.45}
          fadeOut={0.6}
          ease="power3.out"
        />
      </div> */}
      {/* <ScrollVelocityImages
        images={[
          "https://res.cloudinary.com/dxzhnns58/image/upload/v1761928459/SCHOOL_FOR_WASH-removebg-preview_s8wofi.png",
          "https://res.cloudinary.com/dxzhnns58/image/upload/v1761928459/SCHOOL_FOR_STEEL___ALUMINIUM-removebg-preview_lqtpri.png",
          "https://res.cloudinary.com/dxzhnns58/image/upload/v1761928459/SCHOOL_FOR_SHIPPING___LOGISTICS-removebg-preview_ktlsje.png",
          "https://res.cloudinary.com/dxzhnns58/image/upload/v1761928458/SCHOOL_FOR_POWER___GREEN_ENERGY-removebg-preview_tinr0w.png",
          "https://res.cloudinary.com/dxzhnns58/image/upload/v1761928458/SCHOOL_FOR_MINES-removebg-preview_airmxv.png",
          "https://res.cloudinary.com/dxzhnns58/image/upload/v1761928458/SCHOOL_FOR_CONSTRUCTION___INFRA_EQUIPMENT-removebg-preview_rpgnjo.png",
        ]}
        velocity={150}
        imageClassName="w-full h-24 object-cover rounded-xl"
        containerClassName="max-w-full"
      /> */}
    </div>
  );
};

export default AboutPage;
