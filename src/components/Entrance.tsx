"use client";

import { useEffect, useRef, useState } from "react";
import { Great_Vibes } from "next/font/google";

import { wedding } from "@/lib/wedding";

const scriptFont = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

interface EntranceProps {
  onOpen: () => void;
}

export default function Entrance({ onOpen }: EntranceProps) {
  const [opening, setOpening] = useState(false);

  const openingRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleOpen = () => {
    if (openingRef.current) return;

    openingRef.current = true;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      onOpen();
      return;
    }

    setOpening(true);
    timerRef.current = setTimeout(onOpen, 1600);
  };

  return (
    <section
      aria-label="Wedding invitation"
      className={`
        relative isolate flex min-h-svh w-full
        items-center justify-center overflow-hidden
        bg-[#f5eee3] bg-[url('/images/bg.png')]
        bg-cover bg-center bg-no-repeat
        px-5 py-12 text-[#664638]
        transition-opacity duration-500
        sm:px-8 sm:py-16
        ${
          opening
            ? "opacity-0 delay-[1100ms]"
            : "opacity-100 delay-0"
        }
      `}
    >
      {/* Light wash over the decorative background */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          bg-[#faf4e9]/15
        "
      />

      <div
        className="
          relative z-10 mx-auto
          flex w-full max-w-[800px] flex-col items-center
          text-center
        "
      >
        {/* Heading */}
        <header
          className={`
            relative z-0
            transition-[opacity,transform] duration-400
            ${
              opening
                ? "-translate-y-2 opacity-0"
                : "translate-y-0 opacity-100"
            }
          `}
        >
          <p
            className="
              m-0 text-[9px] font-medium uppercase
              tracking-[0.32em] text-[#896c56]
              sm:text-[10px] sm:tracking-[0.4em]
            "
          >
            A celebration of love
          </p>

          <h1
            className={`
              ${scriptFont.className}
              mb-0 mt-4
              text-[clamp(2.7rem,7vw,5.25rem)]
              font-normal leading-[1.15]
              text-[#7f4033]
            `}
          >
            <span className="whitespace-nowrap">
              {wedding.bride}
            </span>

            <span
              className="
                mx-[0.2em] inline-block
                text-[0.6em] text-[#aa795b]
              "
            >
              &amp;
            </span>

            <span className="whitespace-nowrap">
              {wedding.groom}
            </span>
          </h1>

          <p
            className="
              mb-0 mt-3
              text-[9px] font-medium uppercase
              leading-relaxed tracking-[0.22em]
              text-[#896c56]
              sm:mt-4 sm:text-[10px] sm:tracking-[0.3em]
            "
          >
            {wedding.dateLabel}
          </p>
        </header>

        {/* Envelope stage */}
        <div
          className="
            relative z-10 mt-7
            w-full max-w-[720px]
            sm:mt-9
          "
        >
          <button
            type="button"
            onClick={handleOpen}
            disabled={opening}
            aria-busy={opening}
            aria-label={`Open ${wedding.bride} and ${wedding.groom}'s wedding invitation`}
            className="
              relative block aspect-[2.1] w-full
              cursor-pointer border-0 bg-transparent p-0
              focus-visible:outline-2
              focus-visible:outline-offset-8
              focus-visible:outline-[#a67558]
              disabled:cursor-default
            "
          >
            {/*
              The image canvas extends above this shorter button.
              This removes the closed image's empty top padding
              while leaving room for the flap to open upward.
            */}
            <div
              className="
                @container pointer-events-none
                absolute inset-x-0 -top-[44%]
                aspect-[4/3] w-full
                [filter:drop-shadow(0_14px_18px_rgb(82_48_30_/_15%))]
              "
            >
              {/* Closed envelope */}
              <img
                src="/images/envelope-closed.webp"
                alt=""
                draggable={false}
                loading="eager"
                decoding="async"
                className={`
                  absolute inset-0 h-full w-full object-contain
                  transition-[opacity,transform]
                  duration-700 ease-out
                  ${
                    opening
                      ? "scale-[1.025] opacity-0"
                      : "scale-100 opacity-100"
                  }
                `}
              />

              {/* Open envelope */}
              <div
                aria-hidden="true"
                className={`
                  absolute inset-0 h-full w-full
                  transition-[opacity,transform]
                  duration-700 ease-out
                  ${
                    opening
                      ? "opacity-100 [transform:translateY(-8.3%)_scale(1)]"
                      : "opacity-0 [transform:translateY(-8.3%)_scale(0.98)]"
                  }
                `}
              >
                <img
                  src="/images/envelope-open.webp"
                  alt=""
                  draggable={false}
                  loading="eager"
                  decoding="async"
                  className="h-full w-full object-contain"
                />

                {/* Text inside the invitation card */}
                <div
                  className="
                    absolute left-[24%] top-[40%]
                    flex h-[24%] w-[52%] flex-col
                    items-center justify-center
                    overflow-hidden px-[2%] text-center
                  "
                >
                  <p
                    className="
                      m-0 shrink-0
                      text-[1cqw] font-semibold uppercase
                      leading-[1.4] tracking-[0.08em]
                      text-[#95643e]
                    "
                  >
                    Together with our families
                  </p>

                  <div
                    className={`
                      ${scriptFont.className}
                      my-[0.5cqw] w-full min-w-0
                      font-normal text-[#752f27]
                    `}
                  >
                    <p className="m-0 whitespace-nowrap text-[5cqw] leading-[1.15]">
                      {wedding.bride}
                    </p>

                    <span className="block text-[1.8cqw] leading-none text-[#95643e]">
                      &amp;
                    </span>

                    <p className="m-0 whitespace-nowrap text-[5cqw] leading-[1.15]">
                      {wedding.groom}
                    </p>
                  </div>

                  <p
                    className="
                      m-0 shrink-0
                      text-[1.1cqw] font-semibold uppercase
                      leading-[1.4] tracking-[0.08em]
                      text-[#95643e]
                    "
                  >
                    December 03, 2026
                  </p>
                </div>
              </div>
            </div>
          </button>
        </div>

        {/* Open invitation control */}
        <div
          className={`
            relative z-20 mt-5
            transition-[opacity,transform] duration-300
            sm:mt-6
            ${
              opening
                ? "pointer-events-none translate-y-2 opacity-0"
                : "translate-y-0 opacity-100"
            }
          `}
        >
          <button
            type="button"
            onClick={handleOpen}
            disabled={opening}
            className="
              group inline-flex cursor-pointer
              items-center gap-3
              border-0 border-b border-solid
              border-[#a67558]/45
              bg-transparent px-1 pb-2 pt-1
              text-[10px] font-medium uppercase
              tracking-[0.23em] text-[#795540]
              transition-colors duration-200
              hover:border-[#794231] hover:text-[#794231]
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-[#a67558]
              disabled:cursor-default
            "
          >
            Open invitation

            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="
                h-4 w-4
                transition-transform duration-200
                group-hover:translate-x-1
                motion-reduce:transition-none
              "
            >
              <path d="M4 12h16M14 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}