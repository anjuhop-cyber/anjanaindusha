import Reveal from "@/components/ui/Reveal";
import Orn from "@/components/ui/Orn";
import { wedding } from "@/lib/wedding";

const photoStyles = [
  {
    wrapper: "md:mt-12",
    frame: "rounded-t-[100px] rounded-b-[8px]",
    aspect: "aspect-[4/5]",
  },
  {
    wrapper: "",
    frame: "rounded-t-[160px] rounded-b-[8px]",
    aspect: "aspect-[3/4]",
  },
  {
    wrapper: "md:mt-12",
    frame: "rounded-t-[100px] rounded-b-[8px]",
    aspect: "aspect-[4/5]",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="
        relative overflow-hidden
        px-[22px] py-20
        sm:px-8 sm:py-24
        lg:px-12 lg:py-28
      "
    >
      {/* Heading */}
      <Reveal className="relative flex flex-col items-center text-center">
        <p
          className="
            m-0 text-[10px] font-medium uppercase
            tracking-[0.32em] text-[var(--terracotta)]
          "
        >
          Our memories
        </p>

        <h2
          id="gallery-heading"
          className="
            mt-3 mb-5
            text-[clamp(44px,6vw,72px)]
            leading-[1.05] font-medium
            tracking-[-0.025em] text-[var(--rust)]
            [font-family:var(--font-cormorant),serif]
          "
        >
          Moments to Treasure
        </h2>

        <Orn />

        <p
          className="
            mx-auto mt-5 mb-0 max-w-[340px]
            text-[13px] leading-[1.9]
            text-[var(--muted)]
          "
        >
          A little glimpse of our love,
          <br />
          before the beginning of forever.
        </p>
      </Reveal>

      {/* Three-photo composition */}
      <div
        className="
          mx-auto mt-12 grid max-w-[1100px]
          grid-cols-1 items-start gap-8
          md:mt-16 md:grid-cols-[1fr_1.12fr_1fr]
          md:gap-5 lg:gap-8
        "
      >
        {wedding.gallery.slice(0, 3).map((src, index) => {
          const style = photoStyles[index];

          return (
            <Reveal
              key={src}
              className={`
                mx-auto w-full max-w-[390px]
                md:max-w-none
                ${style.wrapper}
              `}
            >
              <figure className="m-0">
                {/* Fine outer frame */}
                <div
                  className={`
                    border border-[var(--terracotta)]/30
                    p-[7px]
                    ${style.frame}
                  `}
                >
                  <div
                    className={`
                      group relative overflow-hidden
                      bg-[var(--cream)]
                      ${style.frame}
                      ${style.aspect}
                    `}
                  >
                    <img
                      src={src}
                      alt={`${wedding.bride} and ${wedding.groom}, pre-wedding photograph ${index + 1}`}
                      loading="lazy"
                      decoding="async"
                      className="
                        absolute inset-0 block h-full w-full
                        object-cover object-center
                        transition-transform duration-700
                        ease-out
                        [@media(hover:hover)]:group-hover:scale-[1.04]
                        motion-reduce:transition-none
                        motion-reduce:transform-none
                      "
                    />
                  </div>
                </div>

                {/* Small decorative detail */}
                <div
                  aria-hidden="true"
                  className="mt-5 flex items-center justify-center gap-3"
                >
                  <span className="h-px w-7 bg-[var(--terracotta)]/30" />

                  <span className="text-[10px] text-[var(--terracotta)]">
                    ✦
                  </span>

                  <span className="h-px w-7 bg-[var(--terracotta)]/30" />
                </div>
              </figure>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-10 text-center sm:mt-14">
        <p
          className="
            m-0 text-[25px] italic
            text-[var(--rust)]
            [font-family:var(--font-cormorant),serif]
            sm:text-[30px]
          "
        >
          Our favourite place is together.
        </p>
      </Reveal>
    </section>
  );
}