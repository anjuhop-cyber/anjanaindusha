import { ArrowUpRight, Heart, Phone } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { wedding } from "@/lib/wedding";

export default function Footer() {
  return (
    <footer
  className="
    relative isolate
    px-[22px] pt-16 pb-8
    sm:px-8 sm:pt-24
    before:pointer-events-none
    before:absolute before:inset-0 before:-z-10
    before:bg-[#f8f2e8]/60
    before:content-['']
  "
>
      <div className="mx-auto max-w-[1000px]">
        {/* Opening divider */}
        <div
          aria-hidden="true"
          className="mb-14 flex items-center justify-center gap-5 sm:mb-16"
        >
          <span className="h-px w-20 bg-[var(--terracotta)]/30 sm:w-32" />

          <Heart
            size={17}
            strokeWidth={1.2}
            className="text-[var(--terracotta)]"
          />

          <span className="h-px w-20 bg-[var(--terracotta)]/30 sm:w-32" />
        </div>

        <Reveal className="text-center">
          <p
            className="
              m-0 text-[12px] uppercase
              tracking-[0.3em] text-[var(--muted)]
            "
          >
            With love
          </p>

          <h2
            className="
              mt-5 mb-0 flex flex-wrap
              items-baseline justify-center gap-x-4 gap-y-1
              text-[clamp(44px,7vw,84px)]
              leading-[1.1] font-medium
              tracking-[-0.035em] text-[var(--rust)]
              [font-family:var(--font-cormorant),serif]
              sm:gap-x-5
            "
          >
            <span>{wedding.bride}</span>

            <span className="text-[0.65em] font-normal italic text-[var(--terracotta)]">
              &amp;
            </span>

            <span>{wedding.groom}</span>
          </h2>

          <p
            className="
              mx-auto mt-6 mb-0 max-w-[420px]
              text-[14px] leading-[1.9] text-[var(--muted)]
              sm:text-[15px]
            "
          >
            We can’t wait to celebrate with you.
            <br />
            Thank you for being part of our story.
          </p>

          <p
            className="
              mt-7 mb-0 text-[11px] font-medium
              tracking-[0.25em] text-[var(--rust)]
            "
          >
            {wedding.shortDate}
          </p>

          {/* Contact links */}
          <div
            className="
              mt-10 flex flex-wrap items-center
              justify-center gap-x-8 gap-y-3
              sm:gap-x-12
            "
          >
            <a
              href={`tel:${wedding.contacts.bride.phone}`}
              aria-label={`Call the bride, ${wedding.contacts.bride.name}`}
              className="
                group inline-flex min-h-11 items-center gap-2.5
                border-b border-[var(--terracotta)]/40
                px-1 py-3 text-[10px] font-medium
                uppercase tracking-[0.16em] text-[var(--rust)]
                transition-colors duration-300
                hover:border-[var(--rust)]
                hover:text-[var(--brown)]
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-[var(--rust)]
              "
            >
              <Phone size={14} strokeWidth={1.4} aria-hidden="true" />

              Call Bride

              <ArrowUpRight
                size={14}
                strokeWidth={1.4}
                aria-hidden="true"
                className="
                  transition-transform duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                  motion-reduce:transform-none
                "
              />
            </a>

            <a
              href={`tel:${wedding.contacts.groom.phone}`}
              aria-label={`Call the groom, ${wedding.contacts.groom.name}`}
              className="
                group inline-flex min-h-11 items-center gap-2.5
                border-b border-[var(--terracotta)]/40
                px-1 py-3 text-[10px] font-medium
                uppercase tracking-[0.16em] text-[var(--rust)]
                transition-colors duration-300
                hover:border-[var(--rust)]
                hover:text-[var(--brown)]
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-[var(--rust)]
              "
            >
              <Phone size={14} strokeWidth={1.4} aria-hidden="true" />

              Call Groom

              <ArrowUpRight
                size={14}
                strokeWidth={1.4}
                aria-hidden="true"
                className="
                  transition-transform duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                  motion-reduce:transform-none
                "
              />
            </a>
          </div>
        </Reveal>

        {/* Closing detail */}
        <div className="mt-16 text-center sm:mt-20">
          <p
            className="
              m-0 text-[24px] italic
              text-[var(--terracotta)]
              [font-family:var(--font-cormorant),serif]
            "
          >
            From one search to forever.
          </p>

          <span
            aria-hidden="true"
            className="
              mx-auto mt-6 block h-8 w-px
              bg-[var(--terracotta)]/35
            "
          />
        </div>
      </div>
    </footer>
  );
}