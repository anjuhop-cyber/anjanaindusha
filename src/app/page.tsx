import { Heart } from "lucide-react";

export default function Page() {
  return (
    <main
      className="
        relative isolate flex min-h-[100svh]
        items-center justify-center overflow-hidden
        bg-[#faf6f3] px-6 py-16 text-center text-[#59464b]
      "
    >
      {/* Soft blush background */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(ellipse_at_10%_15%,rgba(225,183,190,0.3),transparent_50%),radial-gradient(ellipse_at_95%_90%,rgba(230,204,181,0.35),transparent_50%)]
        "
      />

      {/* Decorative arches */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-x-5 inset-y-5
          rounded-t-[48vw] rounded-b-[20px]
          border border-[#bb929a]/25
          sm:inset-x-10 sm:inset-y-8
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-x-7 inset-y-7
          rounded-t-[48vw] rounded-b-[16px]
          border border-[#bb929a]/15
          sm:inset-x-12 sm:inset-y-10
        "
      />

      <div className="relative mx-auto w-full max-w-lg py-10 sm:py-14">
        <p
          className="
            m-0 text-[9px] font-medium uppercase
            tracking-[0.3em] text-[#96737d] sm:text-[10px]
          "
        >
          A celebration of love
        </p>

        <div
          aria-hidden="true"
          className="
            mx-auto my-8 flex items-center
            justify-center gap-4 text-[#ae818d]
          "
        >
          <span className="h-px w-10 bg-[#bb929a]/40" />
          <Heart size={18} strokeWidth={1.2} />
          <span className="h-px w-10 bg-[#bb929a]/40" />
        </div>

        <h1
          className="
            m-0 font-medium leading-[0.9]
            tracking-[-0.04em] text-[#805661]
            [font-family:var(--font-cormorant),serif]
          "
        >
          <span className="block text-[clamp(62px,15vw,100px)]">
            Indusha
          </span>

          <span
            className="
              my-4 block text-[38px] font-normal
              italic text-[#b08a91] sm:text-[46px]
            "
          >
            &amp;
          </span>

          <span className="block text-[clamp(62px,15vw,100px)]">
            Anjana
          </span>
        </h1>

        <p
          className="
            mb-0 mt-8 text-[23px] italic
            leading-relaxed text-[#96737d]
            [font-family:var(--font-cormorant),serif]
            sm:text-[27px]
          "
        >
          With full hearts,
          <br />
          our forever begins.
        </p>

        <div
          aria-hidden="true"
          className="mx-auto my-8 h-12 w-px bg-[#bb929a]/40"
        />

        <div className="mx-auto max-w-xs">
          <p
            className="
              m-0 text-[10px] font-medium uppercase
              tracking-[0.22em] text-[#805661]
            "
          >
            Your invitation awaits
          </p>

          <p
            className="
              mb-0 mt-4 text-[13px]
              leading-7 text-[#8d7b7e] sm:text-sm
            "
          >
            Please open the invitation link shared with you
            to discover the details of our celebration.
          </p>
        </div>

        <p
          className="
            mb-0 mt-10 text-xl italic text-[#a48189]
            [font-family:var(--font-cormorant),serif]
          "
        >
          With love, always.
        </p>
      </div>
    </main>
  );
}