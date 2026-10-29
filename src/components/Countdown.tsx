"use client";

import { useEffect, useState } from "react";

import { useCountdown } from "@/hooks/useCountdown";
import { wedding } from "@/lib/wedding";

const units = [
  { key: "d", label: "Days" },
  { key: "h", label: "Hours" },
  { key: "m", label: "Minutes" },
  { key: "s", label: "Seconds" },
] as const;

export default function Countdown() {
  const left = useCountdown(wedding.dateISO);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Check the date instead of treating the hook's initial zeros as married.
  const isMarried =
    mounted && Date.now() >= new Date(wedding.dateISO).getTime();

  return (
    <section
      aria-labelledby="countdown-heading"
      className="
        countdown relative isolate
        px-5 py-12 text-center text-[var(--brown)]
        sm:px-8 sm:py-16
      "
    >
      <div
        className="
          relative mx-auto w-full max-w-[900px]
          rounded-[28px]
          border border-[var(--terracotta)]/25
          bg-[#fffcf6]/95
          px-5 py-10
          shadow-[0_18px_60px_-30px_rgba(61,43,36,0.22)]
          sm:rounded-[36px] sm:px-12 sm:py-12
        "
      >
        {/* Fine stationery border */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-2
            rounded-[21px]
            border border-[var(--terracotta)]/10
            sm:inset-3 sm:rounded-[26px]
          "
        />

        <div className="relative">
          <p
            className="
              m-0
              [font-family:var(--font-dm-sans),sans-serif]
              text-[9px] font-medium uppercase
              leading-relaxed tracking-[0.28em]
              text-[var(--muted)]
              sm:text-[10px] sm:tracking-[0.34em]
            "
          >
            {isMarried ? "Our forever begins" : "We are getting"}
          </p>

          <h2
            id="countdown-heading"
            className="
              m-0 mt-2
              [font-family:var(--font-cormorant),serif]
              text-[clamp(3.5rem,9vw,5rem)]
              font-normal italic leading-[1.1]
              tracking-[-0.035em]
              text-[var(--rust)]
            "
          >
            {isMarried ? "Just married" : "Married"}
          </h2>

          {/* Decorative divider */}
          <div
            aria-hidden="true"
            className="
              mx-auto my-6 flex w-[140px]
              items-center justify-center gap-4
              text-[var(--terracotta)]
              sm:my-7
            "
          >
            <span
              className="
                h-px flex-1
                bg-gradient-to-r
                from-transparent to-[var(--terracotta)]/50
              "
            />

            <span className="text-[10px]">✦</span>

            <span
              className="
                h-px flex-1
                bg-gradient-to-l
                from-transparent to-[var(--terracotta)]/50
              "
            />
          </div>

          {!isMarried && (
            <dl
              aria-label="Time remaining until the wedding"
              className="
                mx-auto grid w-full max-w-[580px]
                grid-cols-4
              "
            >
              {units.map(({ key, label }, index) => (
                <div
                  key={key}
                  className={`
                    flex min-w-0 flex-col
                    items-center justify-center px-1 py-1
                    sm:px-4
                    ${
                      index > 0
                        ? "border-l border-[var(--terracotta)]/20"
                        : ""
                    }
                  `}
                >
                  <dt
                    className="
                      order-2 mt-2
                      [font-family:var(--font-dm-sans),sans-serif]
                      text-[8px] font-medium uppercase
                      tracking-[0.1em] text-[var(--muted)]
                      sm:mt-3 sm:text-[10px] sm:tracking-[0.2em]
                    "
                  >
                    {label}
                  </dt>

                  <dd
                    className="
                      m-0
                      [font-family:var(--font-cormorant),serif]
                      text-[clamp(2.25rem,8vw,4.5rem)]
                      font-normal leading-none
                      tabular-nums text-[var(--rust)]
                    "
                  >
                    {String(left[key]).padStart(2, "0")}
                  </dd>
                </div>
              ))}
            </dl>
          )}

          <p
            className="
              mb-0 mt-7
              [font-family:var(--font-dm-sans),sans-serif]
              text-[9px] font-medium uppercase
              leading-[1.8] tracking-[0.18em]
              text-[var(--muted)]
              sm:mt-8 sm:text-[10px] sm:tracking-[0.24em]
            "
          >
            {wedding.dateLabel}
          </p>
        </div>
      </div>
    </section>
  );
}