"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "../../../lib/utils";

interface HeroLampProps {
  backgroundImage: string;
  lightColor: string;
  title: string;
  className?: string;
}

export const HeroLamp: React.FC<HeroLampProps> = ({
  backgroundImage,
  lightColor,
  title,
  className,
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden w-full z-0",
        className
      )}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Lamp Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1 }}
        className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[550px] h-[350px] rounded-full blur-[150px] z-10"
        style={{ backgroundColor: lightColor }}
      />

      {/* Light Bar */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "320px", opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute top-[14%] left-1/2 -translate-x-1/2 h-[3px] rounded-full z-10"
        style={{
          background: `linear-gradient(to right, transparent, ${lightColor}, transparent)`,
        }}
      />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-20 mt-20 text-center text-4xl md:text-6xl font-semibold"
        style={{
          backgroundImage: `linear-gradient(to bottom, white, rgba(255,255,255,0.6))`,
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        {title}
      </motion.h1>
    </div>
  );
};
