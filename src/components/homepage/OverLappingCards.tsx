import React from "react";

const OverLappingCards: React.FC = () => {
  return (
    <div className="relative bg-transparent">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      >
        <source
          src="https://res.cloudinary.com/dgtc2fvgu/video/upload/v1742994000/16498883-hd_1920_1080_24fps_zb7mxr.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for Text Visibility */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="hidden lg:block relative max-w-6xl h-screen bg-transparent mx-auto p-8">
        <div className="text-center lg:text-left mb-10">
          <h1 className="text-3xl lg:text-5xl font-bold text-white leading-snug">
            Unlock Talent with LabourNet’s <br />
            <span className="text-orange-500">SKILL CLOUD</span>
          </h1>
        </div>

        {/* Card 1 – Skilling */}
        <div className="absolute top-0 right-0 bg-green-100 text-gray-800 p-6 rounded-lg shadow-lg w-[400px] h-[350px]">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            Skilling
          </h3>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Recognition of Prior Learning (RPL)</li>
            <li>Bridge Courses and Certification</li>
            <li>Source–Hire–Train</li>
            <li>Training the Trainer</li>
            <li>Aspiration Mapping</li>
          </ul>
        </div>

        {/* Card 2 – Vocational Ed-tech */}
        <div className="absolute top-64 right-60 bg-orange-600 text-white p-6 rounded-lg shadow-lg w-[400px] h-[350px]">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            Vocational Ed-tech
          </h3>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Learning Experience Platform</li>
            <li>Mobile Micro-learning for Skilled Trades</li>
            <li>Instructor-led Blended Training (ILBT)</li>
            <li>AI Skill Assessment</li>
          </ul>
        </div>

        {/* Card 3 – HSCoE */}
        <div className="absolute top-[500px] right-[500px] bg-red-900 text-white p-6 rounded-lg shadow-lg w-[400px] h-[350px]">
          <h3 className="text-xl font-bold mb-2">HSCoE</h3>
          <h4 className="text-lg font-semibold mb-4">
            Hybrid Skill Center of Excellence
          </h4>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Multi-skill, Multi-sector Training Center</li>
            <li>Managed University Campus</li>
            <li>School-level Skilling Program</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OverLappingCards;
