import Reveal from "@/components/ui/Reveal";
import { wedding } from "@/lib/wedding";

export default function Story() {
  const story = wedding.story;

  return (
    <section
      id="story"
      aria-labelledby="love-story-heading"
      className="
        relative overflow-hidden bg-transparent
        px-6 py-20
        sm:px-10 sm:py-24
        lg:px-16 lg:py-32
      "
    >
      <div className="mx-auto max-w-[860px] text-center">
        {/* Section heading */}
        <Reveal>
          <p
            className="
              m-0 text-[10px] font-medium uppercase
              tracking-[0.3em] text-[var(--muted)]
              sm:text-[11px]
            "
          >
            Indusha &amp; Anjana
          </p>

          <h2
            id="love-story-heading"
            className="
              mb-0 mt-4
              [font-family:var(--font-cormorant),_serif]
              text-[clamp(44px,7vw,80px)]
              font-medium leading-[1.08]
              tracking-[-0.035em] text-[var(--rust)]
            "
          >
            Our Love Story
          </h2>

          <div
            aria-hidden="true"
            className="
              mx-auto mt-8 flex items-center
              justify-center gap-4 text-[var(--terracotta)]
            "
          >
            <span className="h-px w-12 bg-[var(--line)] sm:w-16" />

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-[18px] w-[18px]"
            >
              <path
                d="
                  M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7
                  l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8
                  L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z
                "
              />
            </svg>

            <span className="h-px w-12 bg-[var(--line)] sm:w-16" />
          </div>
        </Reveal>

        {/* The beginning */}
        <Reveal className="mt-12 sm:mt-16">
          <time
            dateTime={story.startDateISO}
            className="
              text-[12px] font-medium tracking-[0.24em]
              text-[var(--terracotta)] sm:text-[13px]
            "
          >
            {story.startDate}
          </time>

          <p
            className="
              mx-auto mb-0 mt-5 max-w-[590px]
              [font-family:var(--font-cormorant),_serif]
              text-[28px] font-medium leading-[1.3]
              text-[var(--brown)]
              sm:text-[36px]
            "
          >
            {story.opening}
          </p>
        </Reveal>

        {/* Story paragraphs */}
        <div className="mx-auto mt-7 max-w-[590px] space-y-6 sm:mt-9">
          {story.paragraphs.map((paragraph) => (
            <Reveal key={paragraph}>
              <p
                className="
                  m-0 text-[14px] leading-[1.95]
                  text-[var(--muted)]
                  sm:text-[15px] sm:leading-[2]
                "
              >
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Featured line */}
        <Reveal className="mx-auto my-10 max-w-[660px] sm:my-14">
          <div className="mx-auto h-px w-14 bg-[var(--line)]" />

          <blockquote
            className="
              mx-0 my-7 px-1
              [font-family:var(--font-cormorant),_serif]
              text-[29px] font-medium italic
              leading-[1.3] tracking-[-0.015em]
              text-[var(--rust)]
              sm:my-9 sm:px-6 sm:text-[40px]
            "
          >
            {story.highlight}
          </blockquote>

          <div className="mx-auto h-px w-14 bg-[var(--line)]" />
        </Reveal>

        {/* The next chapter */}
        <Reveal>
          <p
            className="
              mx-auto my-0 max-w-[470px]
              text-[14px] leading-[1.95]
              text-[var(--muted)]
              sm:text-[15px] sm:leading-[2]
            "
          >
            {story.closing}
          </p>

          <div
            aria-hidden="true"
            className="mx-auto my-8 h-12 w-px bg-[var(--line)]"
          />

          <time
            dateTime={story.endDateISO}
            className="
              block
              [font-family:var(--font-cormorant),_serif]
              text-[32px] font-medium tracking-[0.1em]
              text-[var(--rust)]
              sm:text-[40px]
            "
          >
            {story.endDate}
          </time>

          <p
            className="
              mb-0 mt-3
              [font-family:var(--font-cormorant),_serif]
              text-[23px] italic leading-[1.4]
              text-[var(--terracotta)]
              sm:text-[28px]
            "
          >
            {story.signature}
          </p>
        </Reveal>
      </div>
    </section>
  );
}