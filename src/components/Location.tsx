import LocationCard from "@/components/LocationCard";
import Orn from "@/components/ui/Orn";
import Reveal from "@/components/ui/Reveal";
import { wedding } from "@/lib/wedding";

export default function Location() {
  return (
    <section
      id="location"
      aria-labelledby="location-heading"
      className="
        relative isolate scroll-mt-24
        px-[22px] py-20
        sm:px-8 sm:py-24
        lg:px-12 lg:py-28
      "
    >
      <Reveal className="mb-10 text-center sm:mb-14">
        <p
          className="
            m-0 text-[10px] font-medium uppercase
            tracking-[0.35em] text-[var(--terracotta)]
            sm:text-[11px]
          "
        >
          How to find us
        </p>

        <h2
          id="location-heading"
          className="
            mt-3 mb-5
            text-[clamp(42px,6.5vw,72px)]
            leading-[1.05] font-medium
            tracking-[-0.025em] text-[var(--rust)]
            [font-family:var(--font-cormorant),serif]
          "
        >
          The Location
        </h2>

        <Orn />
      </Reveal>

      <LocationCard
        title="Wedding Ceremony"
        data={wedding.ceremony}
      />
    </section>
  );
}