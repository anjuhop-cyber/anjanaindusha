import {
  CalendarDays,
  Download,
  Heart,
  HeartHandshake,
  ScrollText,
  Sparkles,
  Utensils,
} from "lucide-react";

import Reveal from "@/components/ui/Reveal";
import { createCalendarEvent, createCalendarUrl } from "@/lib/calendar";
import { wedding } from "@/lib/wedding";

const eventIcons = [
  Heart,          // Wedding ceremony
  Sparkles,       // Poruwa ceremony
  ScrollText,     // Marriage registration
  Utensils,       // Reception and lunch
  HeartHandshake, // Farewell
];

const eventAnimations = [
  "wedding-float 3s ease-in-out infinite",
  "wedding-heartbeat 2.8s ease-in-out infinite",
  "wedding-sway 2.5s ease-in-out infinite",
  "wedding-dance 2s ease-in-out infinite",
  "wedding-heartbeat 2.8s ease-in-out infinite",
];

export default function Details() {
  const weddingCalendarUrl = createCalendarUrl(
    createCalendarEvent({
      uid: "indusha-anjana-wedding-20261203",
      start: "20261203T040000Z",
      end: "20261203T100000Z",
      summary: `${wedding.bride} & ${wedding.groom} Wedding`,
    }),
  );

  return (
    <section
      id="details"
      aria-labelledby="wedding-day-heading"
      className="
        relative isolate overflow-hidden
        px-5 py-20 text-[#3d2b24]
        sm:px-8 sm:py-24 lg:py-28
        motion-reduce:[&_.wedding-moving-icon]:![animation:none]
      "
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(ellipse_at_center,rgba(255,250,242,0.96)_0%,rgba(255,250,242,0.8)_45%,rgba(255,250,242,0.15)_100%)]
        "
      />

      <div className="mx-auto max-w-4xl">
        <Reveal>
          <header className="text-center">
            <p
              className="
                m-0 text-[10px] font-medium uppercase
                tracking-[0.28em] text-[#8d4937]
                sm:text-xs
              "
            >
              A day to remember
            </p>

            <h2
              id="wedding-day-heading"
              className="
                mb-0 mt-4
                text-[clamp(44px,7vw,76px)]
                font-medium leading-[1.05]
                tracking-[-0.035em] text-[#8d4937]
                [font-family:var(--font-cormorant),serif]
              "
            >
              The Wedding <span className="italic">Day</span>
            </h2>

            <div
              aria-hidden="true"
              className="
                mx-auto my-6 flex items-center
                justify-center gap-4 text-[#b96f52]
              "
            >
              <span className="h-px w-12 bg-[#b96f52]/35" />
              <span className="text-sm">✦</span>
              <span className="h-px w-12 bg-[#b96f52]/35" />
            </div>

            <p
              className="
                m-0 text-lg text-[#77665d]
                [font-family:var(--font-cormorant),serif]
                sm:text-xl
              "
            >
              {wedding.weekday}, {wedding.dateLabel}
            </p>
          </header>
        </Reveal>

        <div className="relative mt-14 sm:mt-20">
          {/* Continuous timeline */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute bottom-8
              left-6 top-6 w-px -translate-x-1/2
              bg-gradient-to-b from-[#b96f52]/20
              via-[#b96f52]/60 to-[#b96f52]/20
              md:left-1/2
            "
          />

          <ol className="relative m-0 list-none p-0">
            {wedding.events.map((event, index) => {
              const EventIcon = eventIcons[index % eventIcons.length];
              const isLeft = index % 2 === 0;

              return (
                <li
                  key={`${event.title}-${event.time}`}
                  className="relative pb-10 last:pb-0 md:pb-8"
                >
                  <Reveal>
                    <div
                      className="
                        grid grid-cols-[48px_minmax(0,1fr)]
                        items-start gap-x-5
                        md:grid-cols-[minmax(0,1fr)_64px_minmax(0,1fr)]
                        md:gap-x-8
                      "
                    >
                      {/* Animated timeline marker */}
                      <div
                        aria-hidden="true"
                        className="
                          relative z-10 col-start-1 row-start-1
                          flex size-12 items-center justify-center
                          rounded-full border border-[#d9b99b]
                          bg-[#fffaf2] text-[#8d4937]
                          shadow-[0_0_0_7px_rgba(255,250,242,0.7)]
                          md:col-start-2 md:mx-auto
                        "
                      >
                        <EventIcon
                          size={21}
                          strokeWidth={1.35}
                          className="wedding-moving-icon"
                          style={{
                            animation:
                              eventAnimations[index % eventAnimations.length],
                            animationDelay: `${index * -0.4}s`,
                            transformOrigin: "center",
                            transformBox: "fill-box",
                          }}
                        />
                      </div>

                      {/* Event information */}
                      <article
                        className={`
                          col-start-2 row-start-1 min-w-0
                          pb-2 text-left
                          ${
                            isLeft
                              ? "md:col-start-1 md:text-right"
                              : "md:col-start-3"
                          }
                        `}
                      >
                        <p
                          className="
                            m-0 text-[30px] font-medium
                            leading-none tracking-[-0.025em]
                            text-[#8d4937]
                            [font-family:var(--font-cormorant),serif]
                            sm:text-[36px]
                          "
                        >
                          {event.time}
                        </p>

                        <h3
                          className="
                            mb-0 mt-3 text-[23px]
                            font-medium leading-tight text-[#3d2b24]
                            [font-family:var(--font-cormorant),serif]
                            sm:text-[28px]
                          "
                        >
                          {event.title}
                        </h3>

                        <span
                          aria-hidden="true"
                          className={`
                            my-4 block h-px w-9 bg-[#b96f52]/45
                            ${isLeft ? "md:ml-auto" : ""}
                          `}
                        />

                        {event.address && (
                          <p
                            className="
                              m-0 text-xs leading-relaxed
                              text-[#77665d] sm:text-[13px]
                            "
                          >
                            {event.address}
                          </p>
                        )}
                      </article>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>

        <Reveal className="mt-14 text-center sm:mt-16">
          <p
            className="
              mb-5 mt-0 text-xl italic text-[#77665d]
              [font-family:var(--font-cormorant),serif]
              sm:text-2xl
            "
          >
            We can’t wait to celebrate with you.
          </p>

          <a
            href={weddingCalendarUrl}
            download="indusha-anjana-wedding.ics"
            className="
              inline-flex min-h-12 max-w-full
              items-center justify-center gap-3
              rounded-full border border-[#8d4937]
              bg-[#8d4937] px-6 py-3
              text-sm font-medium text-[#fffaf2]
              transition-colors duration-200
              hover:border-[#703828] hover:bg-[#703828]
              focus-visible:outline focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-[#8d4937]
            "
          >
            <CalendarDays size={18} strokeWidth={1.5} aria-hidden="true" />

            <span>Add to Calendar</span>

            <Download size={15} strokeWidth={1.5} aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}