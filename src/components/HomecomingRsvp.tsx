"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Minus, Plus } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Orn from "@/components/ui/Orn";

const groom = {
  name: "Anjana",
  phone: "+94762254848",
};

export default function HomecomingRsvp() {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState(1);
  const [attend, setAttend] = useState(true);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const guestName = name.trim();

    if (!guestName) return;

    const message = [
      `Hi ${groom.name}!`,
      "",
      "RSVP for your homecoming reception",
      "",
      `Name: ${guestName}`,
      `Attendance: ${
        attend ? "Joyfully accepts" : "Regretfully declines"
      }`,
      ...(attend ? [`Number of guests (including me): ${guests}`] : []),
      "",
      attend
        ? "Looking forward to celebrating with you!"
        : "Sorry we cannot join you. Wishing you both a wonderful celebration!",
    ].join("\n");

    const phone = groom.phone.replace(/\D/g, "");
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.location.assign(whatsappUrl);
  }

  return (
    <section
      id="homecoming-rsvp"
      aria-labelledby="homecoming-rsvp-heading"
      className="
        rsvp paper relative bg-transparent px-5 py-[125px]
        text-center
        [@media(width<=520px)]:px-[22px]
        [@media(width<=520px)]:py-[100px]
      "
    >
      <Reveal className="mx-auto max-w-[600px]">
        <h2
          id="homecoming-rsvp-heading"
          className="
            m-0 text-[clamp(48px,8vw,88px)]
            font-semibold leading-[0.85] tracking-[-0.03em]
            text-[var(--rust)]
            [font-family:var(--font-cormorant),serif]
            [@media(width<=520px)]:text-[clamp(42px,12vw,58px)]
          "
        >
          WILL YOU JOIN US
        </h2>

        <Orn />

        <p
          className="
            text-[21px] leading-[1.6] text-[var(--muted)]
            [font-family:var(--font-cormorant),serif]
          "
        >
          Your presence is the greatest gift. Please let us know if you
          will be joining us for our homecoming reception.
        </p>
      </Reveal>

      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-[55px] grid max-w-[520px] gap-[22px]"
      >
        <div>
          <label htmlFor="rsvp-name" className="sr-only">
            Your name
          </label>

          <input
            id="rsvp-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            pattern=".*\S.*"
            title="Please enter your name."
            maxLength={100}
            placeholder="Your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="
              w-full min-w-0 rounded-none border-x-0 border-t-0
              border-b border-[var(--line)] bg-transparent
              px-[5px] py-[15px] text-center text-[var(--brown)]
              outline-none
              placeholder:text-[var(--muted)]
              focus:border-[var(--rust)]
            "
          />
        </div>

        <fieldset className="m-0 min-w-0 border-0 p-0">
          <legend className="sr-only">Will you attend?</legend>

          <div className="flex gap-[10px] max-[800px]:flex-col">
            <button
              type="button"
              aria-pressed={attend}
              onClick={() => setAttend(true)}
              className={`
                flex-1 border p-[15px] text-[11px]
                uppercase tracking-[0.12em] transition-colors
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-[var(--rust)]
                ${
                  attend
                    ? "border-[var(--rust)] bg-[var(--rust)] text-white"
                    : "border-[var(--line)] bg-transparent text-[var(--muted)]"
                }
              `}
            >
              Joyfully accepts
            </button>

            <button
              type="button"
              aria-pressed={!attend}
              onClick={() => setAttend(false)}
              className={`
                flex-1 border p-[15px] text-[11px]
                uppercase tracking-[0.12em] transition-colors
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-[var(--rust)]
                ${
                  !attend
                    ? "border-[var(--rust)] bg-[var(--rust)] text-white"
                    : "border-[var(--line)] bg-transparent text-[var(--muted)]"
                }
              `}
            >
              Regretfully declines
            </button>
          </div>
        </fieldset>

        {attend && (
          <div
            role="group"
            aria-labelledby="guest-count-label"
            className="grid gap-4"
          >
            <p
              id="guest-count-label"
              className="
                m-0 text-[9px] uppercase tracking-[0.2em]
                text-[var(--muted)]
              "
            >
              Number of guests, including yourself
            </p>

            <div className="flex items-center justify-center gap-[25px]">
              <button
                type="button"
                aria-label="Remove guest"
                disabled={guests <= 1}
                onClick={() =>
                  setGuests((current) => Math.max(1, current - 1))
                }
                className="
                  grid size-11 place-items-center rounded-full
                  border border-[var(--line)] bg-transparent
                  text-[var(--brown)] transition-colors
                  hover:border-[var(--rust)]
                  disabled:cursor-not-allowed disabled:opacity-35
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-[var(--rust)]
                "
              >
                <Minus size={14} aria-hidden="true" />
              </button>

              <span
                aria-live="polite"
                aria-atomic="true"
                className="
                  min-w-5 text-[26px] text-[var(--brown)]
                  [font-family:var(--font-cormorant),serif]
                "
              >
                {guests}
              </span>

              <button
                type="button"
                aria-label="Add guest"
                disabled={guests >= 10}
                onClick={() =>
                  setGuests((current) => Math.min(10, current + 1))
                }
                className="
                  grid size-11 place-items-center rounded-full
                  border border-[var(--line)] bg-transparent
                  text-[var(--brown)] transition-colors
                  hover:border-[var(--rust)]
                  disabled:cursor-not-allowed disabled:opacity-35
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-[var(--rust)]
                "
              >
                <Plus size={14} aria-hidden="true" />
              </button>
            </div>
          </div>
        )}

        <button
          type="submit"
          className="
            inline-flex min-h-12 items-center justify-center
            gap-2 border-0 bg-[var(--terracotta)] p-4
            text-[10px] uppercase tracking-[0.2em] text-white
            transition-colors duration-200
            hover:bg-[var(--rust)]
            focus-visible:outline-2
            focus-visible:outline-offset-4
            focus-visible:outline-[var(--rust)]
          "
        >
          RSVP via WhatsApp
          <ArrowUpRight size={16} aria-hidden="true" />
        </button>

        <p className="m-0 text-xs leading-6 text-[var(--muted)]">
          WhatsApp will open with your RSVP addressed to {groom.name}.
          Please tap Send in WhatsApp to confirm your response.
        </p>
      </form>
    </section>
  );
}