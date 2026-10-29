"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Heart,
  MapPin,
  Sparkles,
} from "lucide-react";

import Reveal from "@/components/ui/Reveal";
import { createCalendarEvent, createCalendarUrl } from "@/lib/calendar";
import { wedding } from "@/lib/wedding";

const homecoming = {
  dateISO: "2026-12-06T16:00:00+05:30",
  dateLabel: "Saturday, December 06, 2026",
  time: "6:30 PM onwards",
  venue: "Hotel Sanara Mandira (Ranasara Hall - Ground Floor)",
  address: "Makola Road, Kiribathgoda",
  mapUrl: "https://maps.app.goo.gl/tBtfs5ZNufkGfXm5A?g_st=iw",
};

const countdownLabels = ["Days", "Hours", "Mins", "Secs"];

function calculateTimeLeft() {
  const remaining = Math.max(
    0,
    new Date(homecoming.dateISO).getTime() - Date.now(),
  );

  return [
    Math.floor(remaining / 86400000),
    Math.floor((remaining / 3600000) % 24),
    Math.floor((remaining / 60000) % 60),
    Math.floor((remaining / 1000) % 60),
  ];
}

const cardClass = `
  relative overflow-hidden rounded-[24px]
  border border-[#c9a44c]/30
  bg-[linear-gradient(135deg,#300b19_0%,#1b0710_100%)]
  shadow-[0_18px_50px_rgba(0,0,0,0.25)]
`;

const serifClass =
  "[font-family:var(--font-cormorant),Georgia,serif]";

export default function Homecoming() {
  const [timeLeft, setTimeLeft] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const update = () => setTimeLeft(calculateTimeLeft());

    update();

    const timer = window.setInterval(update, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const calendarUrl = createCalendarUrl(
    createCalendarEvent({
      uid: "indusha-anjana-homecoming-20261206",
      start: "20261206T103000Z",
      end: "20261206T143000Z",
      summary: `${wedding.bride} & ${wedding.groom} — Homecoming`,
      location: "Hotel Sanara Mandira (Ranasara Hall - Ground Floor)\\, Makola Road, Kiribathgoda",
      description: "Join us to celebrate our homecoming.",
    }),
  );

  return (
    <section
      id="homecoming"
      aria-labelledby="homecoming-heading"
      className="
        relative isolate overflow-hidden
        bg-[#130406] px-4 py-16 text-[#f7eedc]
        sm:px-6 sm:py-24
      "
    >
      {/* Subtle gold pattern */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(circle,rgba(201,164,76,0.13)_1px,transparent_1px)]
          [background-size:42px_42px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(ellipse_at_top,rgba(110,16,32,0.22),transparent_70%)]
        "
      />

      <div className="mx-auto max-w-[560px] space-y-6 sm:space-y-8">
        {/* Main invitation */}
        <Reveal
          className={`${cardClass} px-6 py-10 text-center sm:px-10 sm:py-12`}
        >
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute inset-0 opacity-40
              bg-[radial-gradient(circle,rgba(201,164,76,0.18)_1px,transparent_1px)]
              [background-size:16px_16px]
            "
          />

          <div className="relative">
            <div
              aria-hidden="true"
              className="
                mb-6 flex items-center justify-center
                gap-4 text-[#c9a44c]
              "
            >
              <span className="h-px w-12 bg-[#c9a44c]/40" />
              <Sparkles size={20} strokeWidth={1.3} />
              <span className="h-px w-12 bg-[#c9a44c]/40" />
            </div>

            <p
              className="
                m-0 text-[9px] font-medium uppercase
                leading-relaxed tracking-[0.25em] text-[#d2b45c]
                sm:text-[11px] sm:tracking-[0.32em]
              "
            >
              The homecoming reception of
            </p>

            <h2
              id="homecoming-heading"
              className={`
                mb-0 mt-7 break-words
                text-[clamp(46px,10vw,72px)]
                font-semibold uppercase leading-[1.1]
                tracking-[-0.035em]
                ${serifClass}
              `}
            >
              <span className="block">{wedding.bride}</span>

              <span
                className="
                  my-5 block text-[36px]
                  font-normal italic leading-none text-[#c9a44c]
                "
              >
                &amp;
              </span>

              <span className="block">{wedding.groom}</span>
            </h2>

            <div
              className="
                mx-auto mt-8 inline-flex max-w-full
                items-center justify-center gap-2
                rounded-full border border-[#c9a44c]/35
                bg-[#130406]/40 px-4 py-3
                text-[11px] leading-relaxed text-[#ead8b5]
                sm:text-xs
              "
            >
              <CalendarDays
                size={15}
                aria-hidden="true"
                className="shrink-0 text-[#c9a44c]"
              />
              <span>{homecoming.dateLabel}</span>
            </div>

            <p
              className="
                mb-0 mt-5 flex items-center
                justify-center gap-2 text-xs text-[#d6bfc2]
              "
            >
              <MapPin
                size={14}
                aria-hidden="true"
                className="shrink-0 text-[#c9a44c]"
              />
              {homecoming.venue}
            </p>
          </div>
        </Reveal>

        {/* Countdown */}
        <Reveal className={`${cardClass} px-4 py-7 text-center sm:px-8`}>
          <p
            className="
              m-0 text-[9px] uppercase
              leading-relaxed tracking-[0.18em] text-[#c9a44c]
              sm:text-[10px]
            "
          >
            ✦ Counting moments until celebration ✦
          </p>

          <div className="mt-5 grid grid-cols-4 gap-2 sm:gap-3">
            {timeLeft.map((value, index) => (
              <div
                key={countdownLabels[index]}
                className="
                  rounded-[16px] border border-[#c9a44c]/30
                  bg-[#130406]/50 px-1 py-4
                "
              >
                <span
                  className={`
                    block text-[30px] font-semibold
                    italic leading-none sm:text-[38px]
                    ${serifClass}
                  `}
                >
                  {String(value).padStart(2, "0")}
                </span>

                <span
                  className="
                    mt-3 block text-[8px] uppercase
                    tracking-[0.08em] text-[#cfb775]
                    sm:text-[9px]
                  "
                >
                  {countdownLabels[index]}
                </span>
              </div>
            ))}
          </div>

          <a
            href={calendarUrl}
            download="indusha-anjana-homecoming.ics"
            className="
              mt-5 inline-flex min-h-11
              items-center justify-center gap-2
              rounded px-2 text-[10px] uppercase
              tracking-[0.12em] text-[#d2b45c]
              transition-colors hover:text-[#f7eedc]
              focus-visible:outline focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-[#c9a44c]
            "
          >
            <CalendarDays size={15} aria-hidden="true" />
            Add to Calendar
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </Reveal>

        {/* Invitation wording */}
        <Reveal className={`${cardClass} px-6 py-9 text-center sm:px-10`}>
          <div
            aria-hidden="true"
            className="
              mx-auto mb-5 flex size-10
              items-center justify-center rounded-full
              border border-[#c9a44c]/30
              bg-[#6e1020]/35 text-[#c9a44c]
            "
          >
            <Heart size={17} strokeWidth={1.4} />
          </div>

          <h3 className={`m-0 text-[30px] font-normal ${serifClass}`}>
            With Joyful Hearts
          </h3>

          <div
            className={`
              mt-5 space-y-3 text-lg
              leading-relaxed text-[#ead8d4]
              ${serifClass}
            `}
          >
            <p className="m-0">{wedding.parents.bride[0]}</p>

            <p className="m-0 text-sm italic text-[#c9a44c]">
              together with
            </p>

            <p className="m-0">{wedding.parents.groom[0]}</p>
          </div>

          <div
            aria-hidden="true"
            className="mx-auto my-6 h-px w-14 bg-[#c9a44c]/35"
          />

          <p className="m-0 text-[13px] leading-7 text-[#cdb5ba]">
            Request the honour of your presence to celebrate
            the homecoming of their beloved children.
            Join us for an evening of love, laughter,
            and beautiful beginnings.
          </p>
        </Reveal>

        {/* Reception details */}
        <Reveal className={`${cardClass} px-6 py-9 sm:px-9`}>
          <p
            className="
              m-0 text-center text-[9px] uppercase
              tracking-[0.25em] text-[#c9a44c]
            "
          >
            The celebration
          </p>

          <h3
            className={`
              mb-7 mt-3 text-center text-[32px]
              font-normal leading-tight ${serifClass}
            `}
          >
            Homecoming Reception
          </h3>

          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <CalendarDays
                size={19}
                strokeWidth={1.3}
                aria-hidden="true"
                className="mt-1 shrink-0 text-[#c9a44c]"
              />

              <div>
                <p className="m-0 text-[9px] uppercase tracking-[0.18em] text-[#c9a44c]">
                  The date
                </p>
                <p className={`mb-0 mt-1 text-xl ${serifClass}`}>
                  {homecoming.dateLabel}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock3
                size={19}
                strokeWidth={1.3}
                aria-hidden="true"
                className="mt-1 shrink-0 text-[#c9a44c]"
              />

              <div>
                <p className="m-0 text-[9px] uppercase tracking-[0.18em] text-[#c9a44c]">
                  The time
                </p>
                <p className={`mb-0 mt-1 text-xl ${serifClass}`}>
                  {homecoming.time}
                </p>
                <p className="mb-0 mt-1 text-[11px] text-[#cdb5ba]">
                  Sri Lanka Standard Time
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin
                size={19}
                strokeWidth={1.3}
                aria-hidden="true"
                className="mt-1 shrink-0 text-[#c9a44c]"
              />

              <div>
                <p className="m-0 text-[9px] uppercase tracking-[0.18em] text-[#c9a44c]">
                  The venue
                </p>
                <p className={`mb-0 mt-1 text-xl ${serifClass}`}>
                  {homecoming.venue}
                </p>
                <p className="mb-0 mt-1 text-[11px] text-[#cdb5ba]">
                  {homecoming.address}
                </p>
              </div>
            </div>
          </div>

          <a
            href={homecoming.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-8 flex min-h-12 items-center
              justify-center gap-2 rounded-full
              border border-[#c9a44c]/50
              bg-[#c9a44c]/10 px-5 py-3
              text-[10px] uppercase tracking-[0.15em]
              text-[#d2b45c] transition-colors
              hover:bg-[#c9a44c]/20
              focus-visible:outline focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-[#c9a44c]
            "
          >
            Get Directions
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </Reveal>

        {/* Closing signature */}
        <Reveal className="px-4 pb-2 pt-5 text-center">
          <p
            className={`
              m-0 text-[32px] italic text-[#ead8b5]
              ${serifClass}
            `}
          >
            {wedding.bride} &amp; {wedding.groom}
          </p>

          <p
            className="
              mb-0 mt-3 text-[9px] uppercase
              tracking-[0.3em] text-[#c9a44c]
            "
          >
            With love &amp; gratitude
          </p>
        </Reveal>
      </div>
    </section>
  );
}
