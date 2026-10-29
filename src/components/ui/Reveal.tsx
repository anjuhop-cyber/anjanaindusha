"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

export default function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal opacity-[0] [transform:translateY(22px)] [transition:opacity_0.8s_ease,_transform_0.8s_ease] [&.visible]:opacity-[1] [&.visible]:[transform:none] motion-reduce:opacity-[1] motion-reduce:[transform:none] ${visible ? "visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
