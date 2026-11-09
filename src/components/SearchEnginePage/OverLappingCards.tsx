import SiteImage from "../common/SiteImage";
import BackgroundVideo from "../common/BackgroundVideo";
import React from "react";

const OverLappingCards: React.FC = () => {
  return (
    <div className="relative bg-transparent">
      {/* Background Video */}
      <BackgroundVideo src="https://res.cloudinary.com/dgtc2fvgu/video/upload/q_auto,w_1280/v1742994000/16498883-hd_1920_1080_24fps_zb7mxr.mp4" className="absolute top-0 left-0 w-full h-full object-cover" defer />

      {/* Dark Overlay for Text Visibility */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Existing Content */}
      <div className="hidden lg:block relative max-w-6xl h-screen bg-transparent mx-auto p-8">
        <div className="text-center lg:text-left mb-10">
          <h1 className="text-3xl lg:text-5xl font-bold text-white leading-snug">
            Build your Business <br />
            on LabourNet’s <span className="text-red-500">WORK CLOUD</span>
          </h1>
        </div>
        {/* Card 1 */}
        <div className="absolute top-0 right-0 bg-red-900 text-white p-6 rounded-bl-lg rounded-br-lg shadow-lg w-[400px] h-[350px]">
          <h3 className="text-lg font-bold mb-4">WCaaS</h3>
          <h4 className="text-xl font-semibold mb-2">
            Work Completion as a Service
          </h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Pre-Built, Plug-and-Play Work Processes</li>
            <li>Bespoke Gigification of Work</li>
            <li>Pay-per-Task</li>
          </ul>
          <div className="relative">
            <SiteImage decoding="async" loading="lazy"
              src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1733829181/Screenshot_2024-12-10_at_4.40.50_PM-removebg-preview_jxbped.png"
              alt="logo"
              className="absolute right-4 -bottom-32"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="absolute top-64 right-60 bg-orange-500 text-white p-6 rounded-lg shadow-lg w-[400px] h-[350px]">
          <h3 className="text-lg font-bold mb-4">Gig-Talent</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Hiring for Gig Workforces</li>
            <li>Gig-Worker Performance Analysis</li>
            <li>Gig-Worker Skill Assessments</li>
            <li>Field Force Management</li>
          </ul>
          <div className="relative">
            <SiteImage decoding="async" loading="lazy"
              src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1733829181/Screenshot_2024-12-10_at_4.41.18_PM-removebg-preview_gezxml.png"
              alt="logo"
              className="absolute right-4 -bottom-32"
            />
          </div>
        </div>

        {/* Card 3 */}
        <div className="absolute top-[500px] right-[500px] bg-red-200 text-gray-800 p-6 rounded-lg shadow-lg w-[400px] h-[350px]">
          <h3 className="text-lg font-bold mb-4">Talent</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Contract and Temp Staffing</li>
            <li>Payroll Support and Compliance</li>
            <li>Hire-to-Retire Payroll Automation</li>
            <li>Onboarding at Scale</li>
            <li>Apprenticeship Programs</li>
          </ul>
          <div className="relative">
            <SiteImage decoding="async" loading="lazy"
              src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1733829181/Screenshot_2024-12-10_at_4.41.31_PM-removebg-preview_q4xvel.png"
              alt="logo"
              className="absolute right-4 -bottom-32"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverLappingCards;
