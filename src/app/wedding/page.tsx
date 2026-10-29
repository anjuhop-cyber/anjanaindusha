"use client";

import { useRef, useState } from "react";

import Entrance from "@/components/Entrance";
import Nav from "@/components/Nav";
import MusicButton from "@/components/MusicButton";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Story from "@/components/Story";
import Details from "@/components/Details";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Rsvp from "@/components/Rsvp";
import Footer from "@/components/Footer";
import FallingLeaves from "@/components/FallingLeaves";

export default function Page() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [entered, setEntered] = useState(false);
  const [music, setMusic] = useState(false);

  async function playMusic() {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.35;

    try {
      await audio.play();
    } catch {
      setMusic(false);
    }
  }

  function handleOpen() {
    setEntered(true);
    void playMusic();
  }

  function toggleMusic() {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      void playMusic();
    } else {
      audio.pause();
    }
  }

  return (
    <>
      {/* Keep audio mounted when the entrance opens */}
      <audio
        ref={audioRef}
        src="/audio/wedding.mp3"
        loop
        preload="none"
        onPlay={() => setMusic(true)}
        onPause={() => setMusic(false)}
        onError={() => setMusic(false)}
      />

      {!entered ? (
        <Entrance onOpen={handleOpen} />
      ) : (
        <div
          id="top"
          className="
            invitation-page relative isolate
            min-h-[100svh] w-full max-w-full
          "
        >
          <div
            aria-hidden="true"
            className="
              fixed-background pointer-events-none
              fixed inset-0 z-[-1]
              bg-[var(--paper)]
              bg-[url('/images/wedding-background.jpg')]
              bg-cover bg-center bg-no-repeat
            "
          />

          <FallingLeaves />

          <Nav />

          <MusicButton
            playing={music}
            onToggle={toggleMusic}
          />

          <main
            className="
              invitation-content relative z-[1]
              min-h-[100svh] w-full max-w-full
              min-[901px]:pt-[110px]
              [&_.paper]:bg-transparent
              [&_.hero]:bg-transparent
              [&_.story]:bg-transparent
              [&_.gallery]:bg-transparent
              [&_.rsvp]:bg-transparent
            "
          >
            <Hero />
            <Countdown />
            <Story />
            <Details />
            <Gallery />
            <Location />
            <Rsvp />
            <Footer />
          </main>
        </div>
      )}
    </>
  );
}