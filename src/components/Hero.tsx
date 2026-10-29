import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { wedding } from "@/lib/wedding";

export default function Hero() {
  return (
<section
  className="
    hero relative isolate flex min-h-svh
    items-center overflow-hidden
    px-5 pb-16 pt-8 text-[var(--brown)]
    sm:px-8 sm:pb-20
    min-[901px]:min-h-[calc(100svh-110px)]
    lg:px-10 lg:py-8
    xl:px-16
  "
>
      {/* Soft wash over the existing botanical background */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(ellipse_at_center,rgba(255,252,246,0.55)_0%,rgba(248,243,233,0.2)_65%,transparent_100%)]
        "
      />

      <div
        className="
          mx-auto grid w-full max-w-[1120px] min-w-0
          grid-cols-1 items-center gap-10
          sm:gap-12
          lg:grid-cols-[minmax(0,1fr)_minmax(0,0.94fr)]
          lg:gap-14
          xl:gap-20
        "
      >
        {/* Invitation */}
        <Reveal className="relative mx-auto w-full min-w-0 max-w-[510px]">
          <div
            className="
              relative isolate overflow-hidden rounded-[24px]
              border border-white/70 bg-[#fffcf6]/95
              px-6 py-10 text-center
              shadow-[0_18px_65px_-25px_rgba(61,43,36,0.2)]
              sm:rounded-[30px] sm:px-12 sm:py-12
              lg:px-10
              xl:px-12
            "
          >
            {/* Fine stationery border */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute inset-3 -z-10
                rounded-[16px] border border-[#b96f52]/15
                sm:inset-4 sm:rounded-[20px]
              "
            />

            {/* Monogram crest */}
            <div
              aria-hidden="true"
              className="
                relative mx-auto flex h-[68px] w-[54px]
                items-center justify-center rounded-[50%]
                border border-[#b96f52]/45
              "
            >
              <div
                className="
                  absolute inset-[4px] rounded-[50%]
                  border border-[#b96f52]/20
                "
              />

              <span
                className="
                  relative
                  [font-family:var(--font-cormorant),serif]
                  text-[22px] italic leading-none
                  tracking-[-0.06em] text-[var(--rust)]
                "
              >
                {wedding.initials}
              </span>
            </div>

            <p
              className="
                mx-auto mb-0 mt-7 max-w-[280px]
                [font-family:var(--font-dm-sans),sans-serif]
                text-[9px] font-medium uppercase
                leading-[1.9] tracking-[0.26em]
                text-[var(--rust)]
                sm:text-[10px] sm:tracking-[0.3em]
              "
            >
              Together with our families
            </p>

            {/* Couple names */}
            <h1
              className="
                m-0 mt-7 flex min-w-0 flex-col items-center
                [font-family:var(--font-cormorant),serif]
                font-normal tracking-[-0.045em]
                text-[var(--rust)]
              "
            >
              <span
                className="
                  block max-w-full break-words
                  text-[clamp(3rem,15vw,4.75rem)] leading-[1.05]
                  sm:text-[5.5rem]
                  lg:text-[clamp(4rem,6.5vw,5.5rem)]
                "
              >
                {wedding.bride}
              </span>

              <span
                className="
                  my-2 block text-[25px] italic
                  leading-none tracking-normal
                  text-[var(--terracotta)]
                  sm:my-3 sm:text-[28px]
                "
              >
                and
              </span>

              <span
                className="
                  block max-w-full break-words
                  text-[clamp(3rem,15vw,4.75rem)] leading-[1.05]
                  sm:text-[5.5rem]
                  lg:text-[clamp(4rem,6.5vw,5.5rem)]
                "
              >
                {wedding.groom}
              </span>
            </h1>

            <p
              className="
                mb-0 mt-8
                [font-family:var(--font-cormorant),serif]
                text-[12px] font-medium uppercase
                leading-[1.95] tracking-[0.16em]
                text-[#66554a]
                sm:mt-9 sm:text-[14px]
              "
            >
              Request the honour of your presence
              <br />
              at the celebration of our marriage
            </p>

            {/* Decorative divider */}
            <div
              aria-hidden="true"
              className="
                mx-auto my-7 flex w-[160px]
                items-center gap-4
                sm:my-8
              "
            >
              <span
                className="
                  h-px flex-1
                  bg-gradient-to-r from-transparent to-[#b96f52]/55
                "
              />

              <span
                className="
                  h-[5px] w-[5px] rotate-45
                  border border-[var(--terracotta)]
                "
              />

              <span
                className="
                  h-px flex-1
                  bg-gradient-to-l from-transparent to-[#b96f52]/55
                "
              />
            </div>

            {/* Wedding date */}
            <div>
              <p
                className="
                  m-0
                  [font-family:var(--font-dm-sans),sans-serif]
                  text-[9px] font-medium uppercase
                  tracking-[0.3em] text-[var(--muted)]
                  sm:text-[10px]
                "
              >
                {wedding.weekday}
              </p>

              <p
                className="
                  mb-0 mt-2
                  [font-family:var(--font-cormorant),serif]
                  text-[24px] font-medium leading-tight
                  text-[var(--rust)]
                  sm:text-[28px]
                "
              >
                {wedding.dateLabel}
              </p>
            </div>

            <div
              className="
                mt-6 grid grid-cols-1 gap-4
                sm:grid-cols-2 sm:gap-5
              "
            >
              <div className="min-w-0">
                <p
                  className="
                    m-0
                    [font-family:var(--font-cormorant),serif]
                    text-[17px] italic leading-tight
                    text-[var(--terracotta)]
                  "
                >
                  Daughter of
                </p>

                <p
                  className="
                    mb-0 mt-1.5
                    [font-family:var(--font-cormorant),serif]
                    text-[15px] leading-[1.45]
                    text-[#59483d]
                  "
                >
                  {wedding.parents.bride.map((parent, index) => (
                    <span key={parent} className="block">
                      {index > 0 && "and "}
                      {parent}
                    </span>
                  ))}
                </p>
              </div>

              <div className="min-w-0">
                <p
                  className="
                    m-0
                    [font-family:var(--font-cormorant),serif]
                    text-[17px] italic leading-tight
                    text-[var(--terracotta)]
                  "
                >
                  Son of
                </p>

                <p
                  className="
                    mb-0 mt-1.5
                    [font-family:var(--font-cormorant),serif]
                    text-[15px] leading-[1.45]
                    text-[#59483d]
                  "
                >
                  {wedding.parents.groom.map((parent, index) => (
                    <span key={parent} className="block">
                      {index > 0 && "and "}
                      {parent}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Couple photograph */}
        <Reveal
          className="
            relative mx-auto w-full min-w-0
            max-w-[460px] lg:max-w-none
          "
        >
          <figure className="m-0">
            <div
              className="
                relative isolate aspect-[4/5] overflow-hidden
                rounded-t-[50%] rounded-b-[14px]
                bg-[var(--cream)]
                shadow-[0_24px_65px_-28px_rgba(61,43,36,0.35)]
              "
            >
              <Image
                src="/images/hero5.jpeg"
                alt={`${wedding.bride} and ${wedding.groom} together`}
                fill
                priority
                sizes="
                  (min-width: 1280px) 500px,
                  (min-width: 1024px) 44vw,
                  (min-width: 640px) 460px,
                  calc(100vw - 40px)
                "
                className="object-cover object-[50%_60%]"
              />

              {/* Gentle warmth */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none absolute inset-0
                  bg-gradient-to-t
                  from-[#3d2b24]/15 via-transparent to-[#b96f52]/5
                "
              />

              {/* Inset arch border */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none absolute inset-[10px]
                  rounded-t-[50%] rounded-b-[7px]
                  border border-[#e8c49b]/65
                  sm:inset-[13px]
                "
              />
            </div>

            <figcaption
              className="
                mt-5 text-center
                [font-family:var(--font-cormorant),serif]
                text-[19px] italic tracking-[0.02em]
                text-[var(--rust)]
                sm:mt-6 sm:text-[22px]
              "
            >
              The beginning of our forever
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
