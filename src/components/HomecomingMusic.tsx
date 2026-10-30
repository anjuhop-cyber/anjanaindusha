"use client";

import { useRef, useState } from "react";
import MusicButton from "./MusicButton";

export default function HomecomingMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState("");

  async function toggleMusic() {
    const audio = audioRef.current;

    if (!audio) return;

    setError("");

    if (!audio.paused) {
      audio.pause();
      return;
    }

    try {
      audio.volume = 0.4;
      await audio.play();
    } catch {
      setError("Unable to play music. Please try again.");
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/wedding.mp3"
        loop
        preload="none"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onError={() => {
          setPlaying(false);
          setError("Unable to load the song.");
        }}
      />

      <MusicButton playing={playing} onToggle={toggleMusic} />

      {error && (
        <p
          role="status"
          className="
            fixed bottom-[80px] right-4 z-[31]
            max-w-[250px] rounded-lg bg-[#300b19]
            px-4 py-3 text-xs text-[#f7eedc] shadow-lg
          "
        >
          {error}
        </p>
      )}
    </>
  );
}