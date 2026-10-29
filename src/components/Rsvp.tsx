"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Orn from "@/components/ui/Orn";

export default function Rsvp() {
  const [guests, setGuests] = useState(1);
  const [attend, setAttend] = useState(true);

  return (
    <section
      className="
        rsvp [&_h2]:m-0 [&_h2]:text-[var(--rust)] [&_h2]:font-[600] [&_h2]:text-[clamp(48px,_8vw,_88px)]
        [&_h2]:leading-[0.85] [&_h2]:[font-family:var(--font-cormorant),_serif] [&_h2]:tracking-[-0.03em]
        [@media(width<=520px)]:[&_h2]:text-[clamp(42px,_12vw,_58px)] relative p-[125px_20px] text-center
        [@media(width<=520px)]:p-[100px_22px] [&_>_div:first-child]:max-w-[600px]
        [&_>_div:first-child]:m-auto [&_>_div_p]:text-[var(--muted)]
        [&_>_div_p]:[font-family:var(--font-cormorant),_serif] [&_>_div_p]:text-[21px]
        [&_>_div_p]:leading-[1.6] [&_form]:grid [&_form]:max-w-[520px] [&_form]:m-[55px_auto_0]
        [&_form]:gap-[22px] [&_input]:w-full [&_input]:min-w-0 [&_input]:p-[15px_5px] [&_input]:border-x-0
        [&_input]:border-t-0 [&_input]:[border-bottom:1px_solid_var(--line)] [&_input]:rounded-none
        [&_input]:[outline:0] [&_input]:[background:transparent] [&_input]:text-[var(--brown)]
        [&_input]:text-center [&_input:focus]:[border-bottom-color:var(--rust)] [&_label]:text-[var(--muted)]
        [&_label]:text-[9px] [&_label]:tracking-[0.2em] [&_label]:uppercase paper [background:transparent]
      "
      id="rsvp"
    >
      <Reveal>
        <h2>WILL YOU JOIN US</h2>
        <Orn />

        <p>
          Your presence is the greatest gift. Please let us know if you will be
          joining us in Colombo.
        </p>
      </Reveal>

      <form
        onSubmit={(event) => {
          event.preventDefault();

          alert(
            `Thank you! Your RSVP has been received.\nAttendance: ${
              attend ? "Accepts" : "Declines"
            }\nGuests: ${guests}`,
          );
        }}
      >
        <input required placeholder="Your name" />

        <div
          className="
        choice flex gap-[10px] [@media(width<=800px)]:flex-col [&_button]:[flex:1] [&_button]:p-[15px]
        [&_button]:[border:1px_solid_var(--line)] [&_button]:[background:transparent]
        [&_button]:text-[var(--muted)] [&_button]:text-[11px] [&_button]:tracking-[0.12em]
        [&_button]:uppercase [&_button.active]:[border-color:var(--rust)]
        [&_button.active]:[background:var(--rust)] [&_button.active]:text-[white]
      "
        >
          <button
            type="button"
            className={attend ? "active" : ""}
            onClick={() => setAttend(true)}
          >
            Joyfully accepts
          </button>

          <button
            type="button"
            className={!attend ? "active" : ""}
            onClick={() => setAttend(false)}
          >
            Regretfully declines
          </button>
        </div>

        <label>Number of guests</label>

        <div
          className="
        counter flex items-center justify-center gap-[25px] [&_span]:min-w-[20px]
        [&_span]:[font-family:var(--font-cormorant),_serif] [&_span]:text-[23px] [&_button]:grid
        [&_button]:w-[34px] [&_button]:h-[34px] [&_button]:[place-items:center]
        [&_button]:[border:1px_solid_var(--line)] [&_button]:rounded-[50%]
        [&_button]:[background:transparent] [&_button]:text-[var(--brown)] [&_svg]:w-[13px] [&_svg]:h-[13px]
      "
        >
          <button
            type="button"
            aria-label="Remove guest"
            onClick={() => setGuests(Math.max(1, guests - 1))}
          >
            <Minus />
          </button>

          <span>{guests}</span>

          <button
            type="button"
            aria-label="Add guest"
            onClick={() => setGuests(Math.min(10, guests + 1))}
          >
            <Plus />
          </button>
        </div>

        <button
          className="
        submit p-[16px] [border:0] [background:var(--terracotta)] text-[white] text-[10px] tracking-[0.2em]
        uppercase [transition:background-color_200ms_ease] [&:hover]:[background:var(--rust)]
      "
          type="submit"
        >
          Send our RSVP
        </button>
      </form>
    </section>
  );
}
