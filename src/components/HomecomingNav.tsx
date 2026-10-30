"use client";

import { useEffect, useState } from "react";
import { CalendarDays, Heart, House, MapPin } from "lucide-react";

const links = [
  {
    id: "homecoming-top",
    label: "Home",
    icon: House,
  },
  {
    id: "homecoming-countdown",
    label: "Countdown",
    icon: CalendarDays,
  },
  {
    id: "homecoming-venue",
    label: "Venue",
    icon: MapPin,
  },
  {
    id: "homecoming-rsvp",
    label: "RSVP",
    icon: Heart,
  },
];

export default function HomecomingNav() {
  const [activeSection, setActiveSection] =
    useState("homecoming-top");

  useEffect(() => {
    let frameId: number | null = null;

    function updateActiveSection() {
      const marker = window.innerHeight * 0.35;
      let current = links[0].id;

      for (const { id } of links) {
        const section = document.getElementById(id);

        if (section && section.getBoundingClientRect().top <= marker) {
          current = id;
        }
      }

      setActiveSection(current);
      frameId = null;
    }

    function scheduleUpdate() {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateActiveSection);
      }
    }

    updateActiveSection();

    window.addEventListener("scroll", scheduleUpdate, {
      passive: true,
    });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <nav
      aria-label="Homecoming mobile navigation"
      className="
        fixed bottom-[calc(10px+env(safe-area-inset-bottom))]
        left-1/2 z-40
        w-[calc(100%_-_24px)] max-w-[460px]
        -translate-x-1/2 rounded-[22px]
        border border-[#c9a44c]/35
        bg-[#250914]/95 p-1.5
        shadow-[0_8px_32px_rgba(0,0,0,0.35)]
        backdrop-blur-xl
        min-[768px]:hidden
      "
    >
      <div className="grid grid-cols-4 gap-1">
        {links.map(({ id, label, icon: Icon }) => {
          const active = activeSection === id;

          return (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active ? "location" : undefined}
              onClick={(event) => {
                const section = document.getElementById(id);

                if (!section) return;

                event.preventDefault();

                const reducedMotion = window.matchMedia(
                  "(prefers-reduced-motion: reduce)",
                ).matches;

                section.scrollIntoView({
                  behavior: reducedMotion ? "instant" : "smooth",
                  block: "start",
                });
              }}
              className={`
                flex min-h-[52px] min-w-0 flex-col
                items-center justify-center gap-1.5
                rounded-[16px] px-1 py-2
                transition-colors duration-200
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-[#c9a44c]
                ${
                  active
                    ? "bg-[#c9a44c]/15 text-[#e6c777]"
                    : "text-[#cdb5ba] hover:bg-[#c9a44c]/10 hover:text-[#e6c777]"
                }
              `}
            >
              <Icon
                size={18}
                strokeWidth={1.5}
                aria-hidden="true"
              />

              <span className="text-[8px] font-medium uppercase tracking-[0.06em]">
                {label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}