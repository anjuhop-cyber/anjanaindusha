import { ArrowUpRight, MapPin } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export type LocationData = {
  name: string;
  address: string;
  map: string;
};

function VenueSketch() {
  return (
    <svg
      viewBox="0 0 440 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto block h-auto w-full max-w-[390px]"
      aria-hidden="true"
    >
      <g
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Ground */}
        <path d="M25 244H415M47 249H393" opacity=".5" />

        {/* Pavilion roof */}
        <path d="M86 109L220 40L354 109Z" />
        <path d="M75 116H365L354 109H86Z" />
        <path d="M104 104L220 47L336 104" opacity=".45" />

        {/* Roof details */}
        <path
          d="
            M131 104L220 51L309 104
            M166 104L220 51L274 104
            M201 104L220 51L239 104
          "
          opacity=".35"
        />
        <path d="M220 40V25M215 30H225" />
        <circle cx="220" cy="22" r="3" />

        {/* Building */}
        <path d="M101 123H339V231H101Z" />
        <path d="M94 117H346V123H94Z" />

        {/* Columns */}
        {[108, 158, 270, 320].map((x) => (
          <g key={x}>
            <path d={`M${x} 130H${x + 12}V222H${x}Z`} />

            <path
              d={`M${x - 3} 124H${x + 15}V130H${x - 3}Z`}
            />

            <path
              d={`M${x - 3} 222H${x + 15}V230H${x - 3}Z`}
            />

            <path
              d={`M${x + 4} 135V217M${x + 8} 135V217`}
              opacity=".3"
            />
          </g>
        ))}

        {/* Arched entrance */}
        <path d="M184 230V167C184 119 256 119 256 167V230" />
        <path d="M191 230V167C191 129 249 129 249 167V230" />

        <path
          d="M220 141V230M191 180H249"
          opacity=".65"
        />

        {/* Side windows */}
        <path d="M128 203V165C128 148 150 148 150 165V203Z" />
        <path d="M139 154V203M128 178H150" opacity=".65" />

        <path d="M290 203V165C290 148 312 148 312 165V203Z" />
        <path d="M301 154V203M290 178H312" opacity=".65" />

        {/* Steps */}
        <path d="M95 231H345V237H95ZM85 237H355V244H85Z" />

        {/* Garden trees */}
        <path d="M57 237V149M383 237V149" />

        <path
          d="
            M57 130
            C41 150 34 174 39 194
            C42 207 50 215 57 218
            C65 214 73 207 75 194
            C79 174 71 149 57 130Z
          "
        />

        <path
          d="
            M383 130
            C367 150 360 174 365 194
            C368 207 376 215 383 218
            C391 214 399 207 401 194
            C405 174 397 149 383 130Z
          "
        />

        <path
          d="
            M57 166L47 182
            M57 183L67 196
            M383 166L373 182
            M383 183L393 196
          "
          opacity=".45"
        />

        {/* Shrubs */}
        <path
          d="
            M76 237
            C68 225 77 216 85 222
            C85 209 103 209 104 222
          "
        />

        <path
          d="
            M336 222
            C339 209 355 210 355 223
            C365 215 373 228 364 237
          "
        />

        {/* Architectural texture */}
        <path
          d="
            M176 194L181 189
            M176 204L181 199
            M176 214L181 209
            M259 194L264 189
            M259 204L264 199
            M259 214L264 209
          "
          opacity=".35"
        />
      </g>
    </svg>
  );
}

export default function LocationCard({
  title,
  data,
}: {
  title: string;
  data: LocationData;
}) {
  const mapQuery = encodeURIComponent(
    `${data.name}, ${data.address}, Sri Lanka`,
  );

  return (
    <div
      className="
        mx-auto grid w-full max-w-[1120px]
        items-center gap-10
        lg:grid-cols-[0.85fr_1.15fr] lg:gap-14
      "
    >
      {/* Venue sketch and details */}
      <Reveal className="relative mx-auto w-full max-w-[440px]">
        <div className="px-5 text-[var(--terracotta)]">
          <VenueSketch />
        </div>

        {/* Transparent venue details */}
        <article className="relative px-6 pt-6 pb-3 sm:px-9 sm:pt-8">
          <div className="flex items-start gap-4 sm:gap-5">
            <span
              className="
                mt-1 flex size-12 shrink-0
                items-center justify-center rounded-full
                border border-[#c58b62]/70
                text-[var(--rust)]
                sm:size-14
              "
            >
              <MapPin
                size={24}
                strokeWidth={1.2}
                aria-hidden="true"
              />
            </span>

            <div className="min-w-0 text-left">
              <p
                className="
                  m-0 text-[25px] leading-tight
                  text-[var(--terracotta)] italic
                  [font-family:var(--font-cormorant),serif]
                "
              >
                {title}
              </p>

              <h3
                className="
                  mt-3 mb-0 text-[23px]
                  leading-[1.3] font-medium
                  tracking-[0.035em] text-[var(--rust)]
                  [font-family:var(--font-cormorant),serif]
                  sm:text-[27px]
                "
              >
                {data.name}
              </h3>

              <p
                className="
                  mt-4 mb-0 text-[12px]
                  leading-[1.85] text-[var(--muted)]
                  sm:text-[13px]
                "
              >
                {data.address}
              </p>
            </div>
          </div>
        </article>
      </Reveal>

      {/* Map */}
      <Reveal className="min-w-0">
        <div
          className="
            relative overflow-hidden rounded-[18px]
            border border-[#d4ad8a]/60 bg-[#ede5d8]
            p-[6px]
            shadow-[0_18px_45px_-25px_rgba(85,49,29,0.4)]
          "
        >
          <div
            className="
              relative h-[290px] overflow-hidden
              rounded-[12px]
              sm:h-[360px] lg:h-[390px]
            "
          >
            <iframe
              title={`Location of ${data.name}`}
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

        <div className="mt-5 flex justify-center">
          <a
            href={data.map}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group inline-flex min-h-12 items-center
              justify-center gap-3 rounded-full
              bg-[var(--rust)] px-7 py-3.5
              text-[11px] font-medium uppercase
              tracking-[0.15em] text-[#fff8ed]
              shadow-[0_8px_20px_-10px_rgba(100,49,29,0.5)]
              transition-colors duration-300
              hover:bg-[var(--brown)]
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-[var(--rust)]
            "
          >
            <MapPin
              size={15}
              strokeWidth={1.5}
              aria-hidden="true"
            />

            Open in Maps

            <ArrowUpRight
              size={16}
              strokeWidth={1.5}
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
    </div>
  );
}