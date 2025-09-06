import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

export interface ChromaItem {
  image: string;
  title: string;
  subtitle: string;
  handle?: string;
  location?: string;
  borderColor?: string;
  gradient?: string;
  url?: string;
}

export interface OurFacultyProps {
  heading?: string;
  items?: ChromaItem[];
  className?: string;
  radius?: number;
  damping?: number;
  fadeOut?: number;
  ease?: string;
}

type SetterFn = (v: number | string) => void;

const OurFaculty: React.FC<OurFacultyProps> = ({
  heading,
  items,
  className = "",
  radius = 300,
  damping = 0.45,
  ease = "power3.out",
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const setX = useRef<SetterFn | null>(null);
  const setY = useRef<SetterFn | null>(null);
  const pos = useRef({ x: 0, y: 0 });

  const demo: ChromaItem[] = [
    {
      image: "https://i.pravatar.cc/300?img=8",
      title: "Alex Rivera",
      subtitle: "Full Stack Developer",
      handle: "@alexrivera",
      borderColor: "#ff3366",
      gradient: "linear-gradient(145deg, #ff3366, #000)",
      url: "https://github.com/",
    },
    {
      image: "https://i.pravatar.cc/300?img=11",
      title: "Jordan Chen",
      subtitle: "DevOps Engineer",
      handle: "@jordanchen",
      borderColor: "#ffbe0b",
      gradient: "linear-gradient(210deg, #ffbe0b, #000)",
      url: "https://linkedin.com/in/",
    },
    {
      image: "https://i.pravatar.cc/300?img=3",
      title: "Morgan Blake",
      subtitle: "UI/UX Designer",
      handle: "@morganblake",
      borderColor: "linear-gradient(165deg, #ff3366, #ffbe0b)",
      gradient: "linear-gradient(165deg, #ff3366, #ffbe0b)",
      url: "https://dribbble.com/",
    },
  ];

  const data = items?.length
    ? items.map((item) => {
        const colorMap: { [key: string]: { borderColor: string; gradient: string } } = {
          "#10B981": { borderColor: "#ff3366", gradient: "linear-gradient(145deg, #ff3366, #000)" },
          "#4F46E5": { borderColor: "#ffbe0b", gradient: "linear-gradient(210deg, #ffbe0b, #000)" },
        };
        if (item.borderColor && colorMap[item.borderColor]) {
          return { ...item, ...colorMap[item.borderColor] };
        }
        return {
          ...item,
          borderColor: item.borderColor?.includes("gradient") ? item.borderColor : "#ff3366",
          gradient: item.gradient?.includes("gradient") ? item.gradient : "linear-gradient(145deg, #ff3366, #000)",
        };
      })
    : demo;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, "--x", "px") as SetterFn;
    setY.current = gsap.quickSetter(el, "--y", "px") as SetterFn;
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x: number, y: number) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true,
    });
  };

  const handleMove = (e: React.PointerEvent) => {
    const r = rootRef.current!.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
  };

  const handleCardClick = (url?: string) => {
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCardMove: React.MouseEventHandler<HTMLElement> = (e) => {
    const c = e.currentTarget as HTMLElement;
    const rect = c.getBoundingClientRect();
    c.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    c.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div className="relative w-full py-12 bg-black overflow-hidden">
      {/* Vibrant Blurred Circles */}
      <div
        className="absolute top-[-15%] left-[-10%] bg-green-500 w-[350px] h-[350px] rounded-full opacity-40 pointer-events-none"
        style={{
          // background: "#ff3366",
          filter: "blur(120px)",
        }}
      ></div>
      <div
        className="absolute bottom-[-20%] right-[-10%] bg-red-600 w-[450px] h-[450px] rounded-full opacity-35 pointer-events-none"
        style={{
          // background: "#ffbe0b",
          filter: "blur(140px)",
        }}
      ></div>
      <div
        className="absolute top-[25%] left-[20%] bg-gradient-to-tr from-red-600 to-green-500 w-[250px] h-[250px] rounded-full opacity-30 pointer-events-none"
        style={{
          // background: "linear-gradient(135deg, #ff3366, #ffbe0b)",
          filter: "blur(100px)",
        }}
      ></div>

      {heading && (
        <h2 className="relative z-10 text-3xl md:text-4xl font-bold text-white mb-10 text-center">
          {heading}
        </h2>
      )}

      <div
        ref={rootRef}
        onPointerMove={handleMove}
        className={`relative z-10 w-full h-full flex flex-wrap justify-center items-start gap-3 ${className}`}
        style={
          {
            "--r": `${radius}px`,
            "--x": "50%",
            "--y": "50%",
          } as React.CSSProperties
        }
      >
        {data.map((c, i) => (
          <article
            key={i}
            onMouseMove={handleCardMove}
            onClick={() => handleCardClick(c.url)}
            className="group relative flex flex-col w-[300px] rounded-[20px] overflow-hidden border-2 border-transparent transition-colors duration-300 cursor-pointer hover:border-[var(--card-border)]"
            style={
              {
                "--card-border": c.borderColor || "transparent",
                background: c.gradient,
                "--spotlight-color": "rgba(255,255,255,0.3)",
              } as React.CSSProperties
            }
          >
            {/* Spotlight hover */}
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)",
              }}
            />
            <div className="relative z-10 flex-1 p-[10px] box-border">
              <img
                src={c.image}
                alt={c.title}
                loading="lazy"
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
            <footer className="relative z-10 p-3 text-white font-sans grid grid-cols-[1fr_auto] gap-x-3 gap-y-1">
              <h3 className="m-0 text-[1.05rem] font-semibold">{c.title}</h3>
              {c.handle && (
                <span className="text-[0.95rem] opacity-80 text-right">
                  {c.handle}
                </span>
              )}
              <p className="m-0 text-[0.85rem] opacity-85">{c.subtitle}</p>
              {c.location && (
                <span className="text-[0.85rem] opacity-85 text-right">
                  {c.location}
                </span>
              )}
            </footer>
          </article>
        ))}
      </div>
    </div>
  );
};

export default OurFaculty;
