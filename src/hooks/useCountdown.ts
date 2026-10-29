"use client";

import { useEffect, useState } from "react";

export type TimeLeft = { d: string; h: string; m: string; s: string };

const ZERO: TimeLeft = { d: "00", h: "00", m: "00", s: "00" };

export function useCountdown(targetISO: string): TimeLeft {
  const [left, setLeft] = useState<TimeLeft>(ZERO);

  useEffect(() => {
    const tick = () => {
      const remaining = new Date(targetISO).getTime() - Date.now();

      if (remaining <= 0) {
        setLeft(ZERO);
        return;
      }

      setLeft({
        d: String(Math.floor(remaining / 86400000)).padStart(2, "0"),
        h: String(Math.floor(remaining / 3600000) % 24).padStart(2, "0"),
        m: String(Math.floor(remaining / 60000) % 60).padStart(2, "0"),
        s: String(Math.floor(remaining / 1000) % 60).padStart(2, "0"),
      });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [targetISO]);

  return left;
}
