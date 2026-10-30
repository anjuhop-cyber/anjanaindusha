"use client";

import { useEffect, useState } from "react";
import {
  CalendarDays,
  Heart,
  House,
  Images,
  MapPin,
} from "lucide-react";

import { wedding } from "@/lib/wedding";

const desktopLinks = [
  { href: "#story", label: "Our Story" },
  { href: "#details", label: "Details" },
  { href: "#gallery", label: "Gallery" },
  { href: "#location", label: "Location" },
];

const mobileLinks = [
  { href: "#top", label: "Home", icon: House },
  { href: "#details", label: "Details", icon: CalendarDays },
  { href: "#gallery", label: "Photos", icon: Images },
  { href: "#location", label: "Venue", icon: MapPin },
  { href: "#rsvp", label: "RSVP", icon: Heart },
];

const sectionIds = [
  "top",
  "story",
  "details",
  "gallery",
  "location",
  "rsvp",
];

export default function Nav() {
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    let frameId: number | null = null;

    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.35;
      let currentSection = "top";

      for (const id of sectionIds) {
        const section = document.getElementById(id);

        if (section && section.getBoundingClientRect().top <= marker) {
          currentSection = id;
        }
      }

      setActiveSection(currentSection);
      frameId = null;
    };

    const handleScroll = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateActiveSection);
      }
    };

    updateActiveSection();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <>
      {/* Desktop navigation */}
      <nav
        aria-label="Main navigation"
        className="
          fixed left-1/2 top-5 z-[20]
          hidden w-[min(1000px,92%)] -translate-x-1/2
          items-center justify-between gap-6
          rounded-full border border-[var(--terracotta)]/20
          bg-[var(--paper)]/95 px-7 py-3
          text-[var(--brown)]
          shadow-[0_8px_30px_rgba(61,43,36,0.06)]
          backdrop-blur-xl
          min-[901px]:flex
        "
      >
        <a
          href="#top"
          aria-label="Back to the invitation"
          className="
            shrink-0
            font-[family-name:var(--font-cormorant)]
            text-[30px] font-medium leading-none
            text-[var(--rust)]
            transition-opacity hover:opacity-70
          "
        >
          {wedding.initials}
        </a>

        <div className="flex items-center gap-7">
          {desktopLinks.map(({ href, label }) => {
            const isActive = activeSection === href.slice(1);

            return (
              <a
                key={href}
                href={href}
                aria-current={isActive ? "location" : undefined}
                className={`
                  group relative py-2
                  text-[10px] font-medium uppercase tracking-[0.16em]
                  transition-colors duration-200
                  hover:text-[var(--rust)]
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-[var(--rust)]
                  ${
                    isActive
                      ? "text-[var(--rust)]"
                      : "text-[var(--brown)]/75"
                  }
                `}
              >
                {label}

                <span
                  aria-hidden="true"
                  className={`
                    absolute bottom-0 left-1/2 h-px
                    -translate-x-1/2 bg-[var(--terracotta)]
                    transition-all duration-300
                    group-hover:w-5
                    ${isActive ? "w-5" : "w-0"}
                  `}
                />
              </a>
            );
          })}
        </div>

        <a
          href="#rsvp"
          aria-current={activeSection === "rsvp" ? "location" : undefined}
          className="
            shrink-0 rounded-full
            border border-[var(--rust)]
            bg-[var(--rust)] px-6 py-3
            text-[10px] font-medium uppercase tracking-[0.2em]
            text-[var(--paper)]
            transition-colors duration-200
            hover:bg-[var(--brown)]
            focus-visible:outline
            focus-visible:outline-2
            focus-visible:outline-offset-4
            focus-visible:outline-[var(--rust)]
          "
        >
          RSVP
        </a>
      </nav>

      {/* Mobile and tablet navigation */}
      <nav
        aria-label="Mobile navigation"
        className="
          fixed bottom-[calc(12px+env(safe-area-inset-bottom))]
          left-1/2 z-[20]
          w-[calc(100%-24px)] max-w-[460px]
          -translate-x-1/2
          rounded-[24px]
          border border-[var(--terracotta)]/20
          bg-[var(--paper)]/95 p-1.5
          text-[var(--brown)]
          shadow-[0_8px_32px_rgba(61,43,36,0.12)]
          backdrop-blur-xl
          min-[901px]:hidden
        "
      >
        <div className="grid grid-cols-5 gap-1">
          {mobileLinks.map(({ href, label, icon: Icon }) => {
            // Keep Home selected while reading the story.
            const isActive =
              activeSection === href.slice(1) ||
              (href === "#top" && activeSection === "story");

            return (
              <a
                key={href}
                href={href}
                aria-current={isActive ? "location" : undefined}
                className={`
                  flex min-h-[56px] min-w-0
                  flex-col items-center justify-center gap-1.5
                  rounded-[18px] px-1 py-2
                  transition-colors duration-200
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-[var(--rust)]
                  ${
                    isActive
                      ? "bg-[var(--terracotta)]/15 text-[var(--rust)]"
                      : "text-[var(--brown)]/65 hover:bg-[var(--terracotta)]/10 hover:text-[var(--rust)]"
                  }
                `}
              >
                <Icon
                  aria-hidden="true"
                  size={18}
                  strokeWidth={1.5}
                />

                <span className="text-[9px] font-medium uppercase tracking-[0.08em]">
                  {label}
                </span>
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
}