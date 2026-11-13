"use client";

import * as React from "react";

type RevealDirection = "up" | "left" | "right" | "zoom";

type RevealProps = React.ComponentPropsWithoutRef<"div"> & {
  children: React.ReactNode;
  /** Direction of the entrance animation */
  direction?: RevealDirection;
  /** Extra delay in ms */
  delay?: number;
};

const dirClass = {
  up: "",
  left: "reveal-left",
  right: "reveal-right",
  zoom: "reveal-zoom",
} as const;

/**
 * Fades/slides children in when they enter the viewport.
 * Dependency-free (IntersectionObserver), respects prefers-reduced-motion.
 * Forwards all extra props (onClick, role, aria-*, tabIndex, …) to the wrapper.
 */
export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
  ...rest
}: RevealProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
      className={`reveal ${dirClass[direction]} ${visible ? "is-visible" : ""} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
