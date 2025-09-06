import React, { useRef, useLayoutEffect, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "motion/react";

interface VelocityMapping {
  input: [number, number];
  output: [number, number];
}

interface ScrollVelocityImagesProps {
  images: string[];
  velocity?: number;
  scrollContainerRef?: React.RefObject<HTMLElement>;
  imageClassName?: string;
  damping?: number;
  stiffness?: number;
  numCopies?: number; // how many times the set of images repeats
  velocityMapping?: VelocityMapping;
  containerClassName?: string;
  scrollerClassName?: string;
  containerStyle?: React.CSSProperties;
  scrollerStyle?: React.CSSProperties;
}

function useElementWidth<T extends HTMLElement>(ref: React.RefObject<T | null>): number {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [ref]);

  return width;
}

const VelocityImages: React.FC<{
  images: string[];
  baseVelocity: number;
  scrollContainerRef?: React.RefObject<HTMLElement>;
  imageClassName?: string;
  damping?: number;
  stiffness?: number;
  numCopies?: number;
  velocityMapping?: VelocityMapping;
  containerClassName?: string;
  scrollerClassName?: string;
  containerStyle?: React.CSSProperties;
  scrollerStyle?: React.CSSProperties;
}> = ({
  images,
  baseVelocity,
  scrollContainerRef,
  imageClassName = "w-40 h-40 object-cover rounded-lg",
  damping = 50,
  stiffness = 400,
  numCopies = 4,
  velocityMapping = { input: [0, 1000], output: [0, 5] },
  containerClassName,
  scrollerClassName,
  containerStyle,
  scrollerStyle,
}) => {
  const baseX = useMotionValue(0);
  const scrollOptions = scrollContainerRef ? { container: scrollContainerRef } : {};
  const { scrollY } = useScroll(scrollOptions);
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping, stiffness });
  const velocityFactor = useTransform(
    smoothVelocity,
    velocityMapping.input,
    velocityMapping.output,
    { clamp: false }
  );

  const copyRef = useRef<HTMLDivElement>(null);
  const copyWidth = useElementWidth(copyRef);

  function wrap(min: number, max: number, v: number): number {
    const range = max - min;
    const mod = (((v - min) % range) + range) % range;
    return mod + min;
  }

  const x = useTransform(baseX, (v) => {
    if (copyWidth === 0) return "0px";
    return `${wrap(-copyWidth, 0, v)}px`;
  });

  const directionFactor = useRef<number>(1);
  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  const imageRows = [];
  for (let i = 0; i < numCopies; i++) {
    imageRows.push(
      <div
        key={i}
        ref={i === 0 ? copyRef : null}
        className="flex gap-4 flex-shrink-0"
      >
        {images.map((src, idx) => (
          <img key={`${i}-${idx}`} src={src} alt={`scroll-img-${idx}`} className={imageClassName} />
        ))}
      </div>
    );
  }

  return (
    <div className={`${containerClassName} relative overflow-hidden`} style={containerStyle}>
      <motion.div
        className={`${scrollerClassName} flex whitespace-nowrap`}
        style={{ x, ...scrollerStyle }}
      >
        {imageRows}
      </motion.div>
    </div>
  );
};

export const ScrollVelocityImages: React.FC<ScrollVelocityImagesProps> = ({
  images,
  velocity = 100,
  scrollContainerRef,
  imageClassName,
  damping = 50,
  stiffness = 400,
  numCopies = 4,
  velocityMapping = { input: [0, 1000], output: [0, 5] },
  containerClassName,
  scrollerClassName,
  containerStyle,
  scrollerStyle,
}) => {
  return (
    <VelocityImages
      images={images}
      baseVelocity={velocity}
      scrollContainerRef={scrollContainerRef}
      imageClassName={imageClassName}
      damping={damping}
      stiffness={stiffness}
      numCopies={numCopies}
      velocityMapping={velocityMapping}
      containerClassName={containerClassName}
      scrollerClassName={scrollerClassName}
      containerStyle={containerStyle}
      scrollerStyle={scrollerStyle}
    />
  );
};

export default ScrollVelocityImages;
