"use client";

import { Music2 } from "lucide-react";

export default function MusicButton({
  playing,
  onToggle,
}: {
  playing: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      className="
        music fixed z-[30] right-[24px] bottom-[24px] grid w-[48px] h-[48px] [place-items:center]
        [border:1px_solid_var(--line)] rounded-[50%] [background:var(--paper)] text-[var(--rust)]
        [box-shadow:0_5px_20px_rgb(61_43_36_/_10%)] [@media(width<=520px)]:right-[16px]
        [@media(width<=520px)]:bottom-[16px] [@media(width<=520px)]:w-[44px] [@media(width<=520px)]:h-[44px]
        [&_svg]:w-[20px] [&_svg]:h-[20px]
      "
      onClick={onToggle}
      aria-label="Toggle music"
    >
      <Music2
        className={playing ? "spin [animation:spin_3s_linear_infinite]" : ""}
      />
    </button>
  );
}
