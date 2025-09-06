import React from "react";
import AboutHero from "../../components/about/AboutHero";
import VisionMissionGoal from "../../components/about/VisionMissionGoal";
import ScrollVelocity from "../../components/common/ScrollVelocity";
import AboutImpact from "../../components/about/AboutImpact";
import HeroInfoSection from "../../components/about/FoundersSection";
import { ThreeDMarquee } from "../../components/about/ThreeDMarqueeDemo";
import OurFaculty from "../../components/about/OurFaculty";
import OurFacilities from "../../components/about/OurFacilities";
import ScrollVelocityImages from "../../components/common/ScrollVelocityImages";

const AboutPage: React.FC = () => {
  const images = [
    "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
    "https://assets.aceternity.com/animated-modal.png",
    "https://assets.aceternity.com/animated-testimonials.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png",
    "https://assets.aceternity.com/github-globe.png",
    "https://assets.aceternity.com/glare-card.png",
    "https://assets.aceternity.com/layout-grid.png",
    "https://assets.aceternity.com/flip-text.png",
    "https://assets.aceternity.com/hero-highlight.png",
    "https://assets.aceternity.com/carousel.webp",
    "https://assets.aceternity.com/placeholders-and-vanish-input.png",
    "https://assets.aceternity.com/shooting-stars-and-stars-background.png",
    "https://assets.aceternity.com/signup-form.png",
    "https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png",
    "https://assets.aceternity.com/spotlight-new.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png",
  ];

  const Faculty = [
    {
      image: "https://i.pravatar.cc/300?img=1",
      title: "Sarah Johnson",
      subtitle: "Frontend Developer",
      handle: "@sarahjohnson",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "https://github.com/sarahjohnson",
    },
    {
      image: "https://i.pravatar.cc/300?img=2",
      title: "Mike Chen",
      subtitle: "Backend Engineer",
      handle: "@mikechen",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url: "https://linkedin.com/in/mikechen",
    },
    {
      image: "https://i.pravatar.cc/300?img=1",
      title: "Sarah Johnson",
      subtitle: "Frontend Developer",
      handle: "@sarahjohnson",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "https://github.com/sarahjohnson",
    },
    {
      image: "https://i.pravatar.cc/300?img=2",
      title: "Mike Chen",
      subtitle: "Backend Engineer",
      handle: "@mikechen",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url: "https://linkedin.com/in/mikechen",
    },
    {
      image: "https://i.pravatar.cc/300?img=1",
      title: "Sarah Johnson",
      subtitle: "Frontend Developer",
      handle: "@sarahjohnson",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "https://github.com/sarahjohnson",
    },
    {
      image: "https://i.pravatar.cc/300?img=2",
      title: "Mike Chen",
      subtitle: "Backend Engineer",
      handle: "@mikechen",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url: "https://linkedin.com/in/mikechen",
    },
    {
      image: "https://i.pravatar.cc/300?img=1",
      title: "Sarah Johnson",
      subtitle: "Frontend Developer",
      handle: "@sarahjohnson",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "https://github.com/sarahjohnson",
    },
    {
      image: "https://i.pravatar.cc/300?img=2",
      title: "Mike Chen",
      subtitle: "Backend Engineer",
      handle: "@mikechen",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url: "https://linkedin.com/in/mikechen",
    },
  ];

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
          heading="Meet Our Board of Directors"
          items={Faculty}
          radius={300}
          damping={0.45}
          fadeOut={0.6}
          ease="power3.out"
        />
      </div>
      <ScrollVelocityImages 
        images={[
          "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1754995492/Pantiss_School__9_-removebg-preview_fdnur9.png",
          "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1754649629/Pantiss_School__6_-removebg-preview_esbuhn.png",
          "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1754649629/Pantiss_School__5_-removebg-preview_sqdizv.png",
          "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1754649629/Pantiss_School__7_-removebg-preview_hmbcvw.png",
          "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1754649630/Pantiss_School__8_-removebg-preview_ieapit.png",
        ]}
        velocity={150}
        imageClassName="w-full h-24 object-cover rounded-xl"
        containerClassName="max-w-full"
      />

      <OurFacilities />
    </div>
  );
};

export default AboutPage;