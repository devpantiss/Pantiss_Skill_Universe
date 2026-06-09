import React, { useEffect, useRef, useState } from "react";

interface LazyMountProps {
  children: React.ReactNode;
  className?: string;
  fallbackHeight?: string;
  rootMargin?: string;
}

const LazyMount: React.FC<LazyMountProps> = ({
  children,
  className,
  fallbackHeight = "min-h-[360px]",
  rootMargin = "600px 0px",
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || shouldRender) return;

    if (!("IntersectionObserver" in window)) {
      setShouldRender(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin, shouldRender]);

  return (
    <div ref={ref} className={className}>
      {shouldRender ? children : <div className={fallbackHeight} aria-hidden="true" />}
    </div>
  );
};

export default React.memo(LazyMount);
