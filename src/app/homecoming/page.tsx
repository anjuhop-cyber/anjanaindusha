"use client";

import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
} from "react";
import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Heart,
  MapPin,
  Minus,
  Music2,
  Pause,
  Plus,
  Sparkles,
} from "lucide-react";
import HomecomingNav from "@/components/HomecomingNav";

const homecoming = {
  bride: "Indusha",
  groom: "Anjana",
  dateISO: "2026-12-06T18:30:00+05:30",
  dateLabel: "Sunday, December 06, 2026",
  time: "6:30 PM onwards",
  venue: "Hotel Sanara Mandira",
  hall: "Ranasara Hall - Ground Floor",
  address: "Makola Road, Kiribathgoda",
  mapUrl: "https://maps.app.goo.gl/tBtfs5ZNufkGfXm5A?g_st=iw",
  phone: "94762254848",
  song: "/audio/wedding.mp3",
  parents: {
    bride: [
      "Mr. C. Gnanarathnam",
      "Mrs. N. M. Suraweera",
    ],
    groom: [
      "Mr. L. S. Gabriel",
      "Mrs. C. P. Cooray",
    ],
  },
};

const serif =
  "[font-family:var(--font-cormorant),Georgia,serif]";

const card = `
  rounded-[24px] border border-[#c9a44c]/30
  bg-[linear-gradient(135deg,#300b19_0%,#1b0710_100%)]
  shadow-[0_18px_50px_rgba(0,0,0,0.25)]
`;

const focus = `
  focus-visible:outline-2
  focus-visible:outline-offset-4
  focus-visible:outline-[#c9a44c]
`;

function calculateTimeLeft() {
  const remaining = Math.max(
    0,
    new Date(homecoming.dateISO).getTime() - Date.now(),
  );

  return [
    Math.floor(remaining / 86400000),
    Math.floor((remaining / 3600000) % 24),
    Math.floor((remaining / 60000) % 60),
    Math.floor((remaining / 1000) % 60),
  ];
}

export default function HomecomingPage() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const [opened, setOpened] = useState(false);
  const [guestName, setGuestName] = useState("");
  const [name, setName] = useState("");
  const [attend, setAttend] = useState(true);
  const [guests, setGuests] = useState(1);
  const [timeLeft, setTimeLeft] = useState<number[] | null>(null);
  const [playing, setPlaying] = useState(false);
  const [musicError, setMusicError] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const invitedName = (params.get("to") ?? "")
      .trim()
      .slice(0, 120);

    setGuestName(invitedName);
    setName(invitedName);

    const update = () => setTimeLeft(calculateTimeLeft());

    update();

    const timer = window.setInterval(update, 1000);
    const audio = audioRef.current;

    return () => {
      window.clearInterval(timer);
      audio?.pause();
    };
  }, []);

  useEffect(() => {
    if (opened) {
      headingRef.current?.focus({ preventScroll: true });
    }
  }, [opened]);

  async function playMusic() {
    const audio = audioRef.current;

    if (!audio) return;

    setMusicError("");
    audio.volume = 0.4;

    try {
      // Called directly from a button click so playback is
      // associated with the guest's interaction.
      await audio.play();
    } catch {
      setMusicError(
        "Music could not start. Tap the music button to try again.",
      );
    }
  }

  function openInvitation() {
    // Start playback before any delayed work.
    void playMusic();
    setOpened(true);
  }

  function toggleMusic() {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      void playMusic();
    } else {
      audio.pause();
      setMusicError("");
    }
  }

  function handleRsvp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const responseName = name.trim();

    if (!responseName) return;

    const message = [
      `Hi ${homecoming.groom}!`,
      "",
      "RSVP - Homecoming of Indusha & Anjana",
      `Date: ${homecoming.dateLabel}`,
      "",
      ...(guestName
        ? [`Invitation for: ${guestName}`]
        : []),
      `Responding name: ${responseName}`,
      `Attendance: ${
        attend ? "Joyfully accepts" : "Regretfully declines"
      }`,
      ...(attend
        ? [`Number attending, including myself: ${guests}`]
        : []),
      "",
      attend
        ? "Looking forward to celebrating with you!"
        : "Wishing you both a wonderful celebration!",
    ].join("\n");

    window.location.assign(
      `https://wa.me/${homecoming.phone}?text=${encodeURIComponent(message)}`,
    );
  }

  function downloadCalendar() {
    const timestamp = new Date()
      .toISOString()
      .replace(/[-:]/g, "")
      .replace(/\.\d{3}Z$/, "Z");

    const calendar = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Anjana and Indusha//Homecoming//EN",
      "CALSCALE:GREGORIAN",
      "BEGIN:VEVENT",
      "UID:homecoming-20261206@anjanaindushawedding.space",
      `DTSTAMP:${timestamp}`,
      "DTSTART:20261206T130000Z",
      "SUMMARY:Indusha & Anjana - Homecoming",
      "LOCATION:Hotel Sanara Mandira\\, Kiribathgoda",
      "DESCRIPTION:Ranasara Hall - Ground Floor. 6:30 PM onwards.",
      "END:VEVENT",
      "END:VCALENDAR",
      "",
    ].join("\r\n");

    const blob = new Blob([calendar], {
      type: "text/calendar;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "indusha-anjana-homecoming.ics";

    document.body.appendChild(link);
    link.click();
    link.remove();

    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    const previousHtmlBackground = html.style.backgroundColor;
    const previousBodyBackground = body.style.backgroundColor;
    const previousBodyMargin = body.style.margin;

    html.style.backgroundColor = "#130406";
    body.style.backgroundColor = "#130406";
    body.style.margin = "0";

    return () => {
      html.style.backgroundColor = previousHtmlBackground;
      body.style.backgroundColor = previousBodyBackground;
      body.style.margin = previousBodyMargin;
    };
  }, []);

  return (
    <main className="min-h-[100svh] w-full bg-[#130406] text-[#f7eedc]">
      {/* Keep this mounted before and after opening. */}
      <audio
        ref={audioRef}
        src={homecoming.song}
        loop
        preload="auto"
        onPlay={() => {
          setPlaying(true);
          setMusicError("");
        }}
        onPause={() => setPlaying(false)}
        onError={() => {
          setPlaying(false);
          setMusicError(
            "Unable to load the song. Please try the music button again.",
          );
        }}
      />

      {!opened ? (
        /* Opening screen */
        <section
          aria-labelledby="opening-heading"
          className="
            relative isolate flex min-h-[100svh]
            items-center justify-center overflow-hidden
            px-5 py-10 sm:px-6
          "
        >
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute inset-0 -z-10
              bg-[radial-gradient(ellipse_at_center,rgba(110,16,32,0.4),transparent_75%)]
            "
          />

          <div
            className={`${card} relative w-full max-w-[460px] overflow-hidden px-6 py-12 text-center sm:px-10 sm:py-14`}
          >
            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute inset-0 opacity-30
                bg-[radial-gradient(circle,rgba(201,164,76,0.2)_1px,transparent_1px)]
                [background-size:20px_20px]
              "
            />

            <div className="relative">
              <div
                aria-hidden="true"
                className="
                  mx-auto mb-7 grid size-16 place-items-center
                  rounded-full border border-[#c9a44c]/40
                  bg-[#c9a44c]/5 text-[#d2b45c]
                "
              >
                <Heart size={26} strokeWidth={1.2} />
              </div>

              <p className="m-0 text-[10px] uppercase leading-6 tracking-[0.23em] text-[#d2b45c]">
                A special invitation for you
              </p>

              <p
                className={`${serif} mb-0 mt-6 break-words text-[25px] leading-snug text-[#ead8b5] sm:text-[29px]`}
              >
                {guestName
                  ? `Dear ${guestName},`
                  : "Dear family & friends,"}
              </p>

              <h1
                id="opening-heading"
                className={`${serif} my-8 text-[clamp(44px,10vw,62px)] font-normal leading-none`}
              >
                {homecoming.bride}

                <span className="my-4 block text-[30px] italic text-[#c9a44c]">
                  &amp;
                </span>

                {homecoming.groom}
              </h1>

              <div
                aria-hidden="true"
                className="mx-auto mb-7 h-px w-16 bg-[#c9a44c]/40"
              />

              <p className="mb-0 text-sm leading-7 text-[#cdb5ba]">
                Invite you to celebrate
                <br />
                their homecoming
              </p>

              <button
                type="button"
                onClick={openInvitation}
                className={`${focus} mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#c9a44c] px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#1b0710] transition-colors hover:bg-[#ddbd68]`}
              >
                Open invitation
                <ArrowUpRight size={17} aria-hidden="true" />
              </button>
            </div>
          </div>
        </section>
      ) : (
        /* Invitation content */
        <div className="px-4 py-12 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-[560px] space-y-6 sm:space-y-8">
            <section
              id="homecoming-top"
              aria-labelledby="homecoming-heading"
              className={`${card} relative scroll-mt-4 overflow-hidden px-6 py-10 text-center sm:px-10 sm:py-12`}
            >
              <div
                aria-hidden="true"
                className="
                  pointer-events-none absolute inset-0 opacity-30
                  bg-[radial-gradient(circle,rgba(201,164,76,0.2)_1px,transparent_1px)]
                  [background-size:20px_20px]
                "
              />

              <div className="relative">
                <div
                  aria-hidden="true"
                  className="mb-7 flex items-center justify-center gap-4 text-[#c9a44c]"
                >
                  <span className="h-px w-12 bg-[#c9a44c]/40" />
                  <Sparkles size={20} strokeWidth={1.3} />
                  <span className="h-px w-12 bg-[#c9a44c]/40" />
                </div>

                <div className="mb-8">
                  <p
                    className={`${serif} m-0 text-[27px] leading-snug sm:text-[34px]`}
                  >
                    {guestName ? (
                      <>
                        Dear{" "}
                        <span className="break-words font-semibold text-[#d2b45c]">
                          {guestName}
                        </span>
                        ,
                      </>
                    ) : (
                      "Dear family & friends,"
                    )}
                  </p>

                  <p className="mb-0 mt-4 text-[10px] uppercase leading-6 tracking-[0.18em] text-[#d6bfc2]">
                    You are warmly invited to
                  </p>
                </div>

                <p className="m-0 text-[10px] uppercase leading-6 tracking-[0.25em] text-[#d2b45c]">
                  The homecoming reception of
                </p>

                <h1
                  ref={headingRef}
                  tabIndex={-1}
                  id="homecoming-heading"
                  className={`${serif} mb-0 mt-7 break-words text-[clamp(46px,10vw,72px)] font-semibold uppercase leading-[1.1] tracking-[-0.035em] outline-none`}
                >
                  <span className="block">{homecoming.bride}</span>

                  <span className="my-5 block text-[36px] font-normal italic leading-none text-[#c9a44c]">
                    &amp;
                  </span>

                  <span className="block">{homecoming.groom}</span>
                </h1>

                <div className="mt-8 inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-[#c9a44c]/35 bg-[#130406]/40 px-4 py-3 text-[11px] leading-relaxed text-[#ead8b5]">
                  <CalendarDays
                    size={15}
                    aria-hidden="true"
                    className="shrink-0 text-[#c9a44c]"
                  />
                  {homecoming.dateLabel}
                </div>

                <p className="mb-0 mt-5 flex items-center justify-center gap-2 text-xs text-[#d6bfc2]">
                  <MapPin
                    size={14}
                    aria-hidden="true"
                    className="shrink-0"
                  />
                  {homecoming.venue}
                </p>
              </div>
            </section>

            {/* Countdown */}
            <section
              id="homecoming-countdown"
              aria-label="Homecoming countdown"
              className={`${card} scroll-mt-4 px-4 py-7 text-center sm:px-8`}
            >
              <p className="m-0 text-[10px] uppercase leading-6 tracking-[0.15em] text-[#c9a44c]">
                Counting moments until celebration
              </p>

              <div className="mt-5 grid grid-cols-4 gap-2 sm:gap-3">
                {["Days", "Hours", "Mins", "Secs"].map(
                  (label, index) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-[#c9a44c]/30 bg-[#130406]/50 px-1 py-4"
                    >
                      <span
                        className={`${serif} block text-[32px] font-semibold italic leading-none sm:text-[38px]`}
                      >
                        {timeLeft
                          ? String(timeLeft[index]).padStart(2, "0")
                          : "--"}
                      </span>

                      <span className="mt-3 block text-[9px] uppercase tracking-[0.08em] text-[#cfb775]">
                        {label}
                      </span>
                    </div>
                  ),
                )}
              </div>

              <button
                type="button"
                onClick={downloadCalendar}
                className={`${focus} mt-5 inline-flex min-h-11 items-center gap-2 rounded px-2 text-[10px] uppercase tracking-[0.12em] text-[#d2b45c] hover:text-[#f7eedc]`}
              >
                <CalendarDays size={15} aria-hidden="true" />
                Add to calendar
                <ArrowUpRight size={14} aria-hidden="true" />
              </button>
            </section>

            {/* Parents */}
            <section
              className={`${card} px-6 py-9 text-center sm:px-10`}
            >
              <Heart
                size={22}
                strokeWidth={1.4}
                aria-hidden="true"
                className="mx-auto mb-5 text-[#c9a44c]"
              />

              <h2
                className={`${serif} m-0 text-[32px] font-normal`}
              >
                With Joyful Hearts
              </h2>

              <div
                className={`${serif} mt-6 space-y-4 text-xl leading-relaxed text-[#ead8d4]`}
              >
                <div>
                  {homecoming.parents.bride.map((parent) => (
                    <p key={parent} className="m-0">
                      {parent}
                    </p>
                  ))}
                </div>

                <p className="m-0 text-sm italic text-[#c9a44c]">
                  together with
                </p>

                <div>
                  {homecoming.parents.groom.map((parent) => (
                    <p key={parent} className="m-0">
                      {parent}
                    </p>
                  ))}
                </div>
              </div>

              <div
                aria-hidden="true"
                className="mx-auto my-6 h-px w-14 bg-[#c9a44c]/35"
              />

              <p className="m-0 text-[13px] leading-7 text-[#cdb5ba]">
                Request the honour of your presence to celebrate the
                homecoming of their beloved children. Join us for an
                evening of love, laughter, and beautiful beginnings.
              </p>
            </section>

            {/* Reception details */}
            <section
              id="homecoming-venue"
              className={`${card} scroll-mt-4 px-6 py-9 sm:px-9`}
            >
                <p className="m-0 text-center text-[10px] uppercase tracking-[0.25em] text-[#c9a44c]">
                The celebration
              </p>

              <h2
                className={`${serif} mb-7 mt-3 text-center text-[34px] font-normal`}
              >
                Homecoming Reception
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CalendarDays
                    size={20}
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-[#c9a44c]"
                  />

                  <div>
                    <p className="m-0 text-[10px] uppercase tracking-widest text-[#c9a44c]">
                      The date
                    </p>
                    <p className={`${serif} mb-0 mt-1 text-xl`}>
                      {homecoming.dateLabel}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock3
                    size={20}
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-[#c9a44c]"
                  />

                  <div>
                    <p className="m-0 text-[10px] uppercase tracking-widest text-[#c9a44c]">
                      The time
                    </p>
                    <p className={`${serif} mb-0 mt-1 text-xl`}>
                      {homecoming.time}
                    </p>
                    <p className="mb-0 mt-1 text-xs text-[#cdb5ba]">
                      Sri Lanka Standard Time
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin
                    size={20}
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-[#c9a44c]"
                  />

                  <div>
                    <p className="m-0 text-[10px] uppercase tracking-widest text-[#c9a44c]">
                      The venue
                    </p>
                    <p className={`${serif} mb-0 mt-1 text-xl`}>
                      {homecoming.venue}
                    </p>
                    <p className="mb-0 mt-1 text-xs leading-6 text-[#cdb5ba]">
                      {homecoming.hall}
                      <br />
                      {homecoming.address}
                    </p>
                  </div>
                </div>
              </div>

              <a
                href={homecoming.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${focus} mt-8 flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#c9a44c]/50 bg-[#c9a44c]/10 px-5 py-3 text-[10px] uppercase tracking-[0.15em] text-[#d2b45c] transition-colors hover:bg-[#c9a44c]/20`}
              >
                Get directions
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </section>

            {/* Homecoming RSVP */}
            <section
              id="homecoming-rsvp"
              aria-labelledby="homecoming-rsvp-heading"
              className={`${card} scroll-mt-4 px-6 py-9 text-center sm:px-10`}
            >
              <p className="m-0 text-[10px] uppercase tracking-[0.25em] text-[#c9a44c]">
                Kindly respond
              </p>

              <h2
                id="homecoming-rsvp-heading"
                className={`${serif} mb-0 mt-3 text-[40px] font-normal leading-tight`}
              >
                Will You Join Us?
              </h2>

              <p className="mt-4 text-[13px] leading-7 text-[#cdb5ba]">
                Your presence is our greatest gift. Let us know if
                you will join our homecoming celebration.
              </p>

              <form
                onSubmit={handleRsvp}
                className="mt-7 grid gap-5"
              >
                <div className="text-left">
                  <label
                    htmlFor="homecoming-rsvp-name"
                    className="text-[10px] uppercase tracking-widest text-[#d2b45c]"
                  >
                    Your name
                  </label>

                  <input
                    id="homecoming-rsvp-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    pattern=".*\S.*"
                    title="Please enter your name."
                    maxLength={120}
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Enter your name"
                    className={`${focus} mt-2 w-full min-w-0 rounded-xl border border-[#c9a44c]/30 bg-[#130406]/50 px-4 py-3 text-base text-[#f7eedc] placeholder:text-[#cdb5ba]/60`}
                  />
                </div>

                <fieldset className="m-0 min-w-0 border-0 p-0">
                  <legend className="sr-only">
                    Will you attend?
                  </legend>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      {
                        value: true,
                        label: "Joyfully accepts",
                      },
                      {
                        value: false,
                        label: "Regretfully declines",
                      },
                    ].map((option) => (
                      <button
                        key={option.label}
                        type="button"
                        aria-pressed={attend === option.value}
                        onClick={() => setAttend(option.value)}
                        className={`${focus} min-h-12 rounded-xl border px-3 py-3 text-[10px] uppercase tracking-wider transition-colors ${
                          attend === option.value
                            ? "border-[#c9a44c] bg-[#c9a44c] text-[#1b0710]"
                            : "border-[#c9a44c]/30 bg-transparent text-[#ead8b5]"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </fieldset>

                {attend && (
                  <div
                    role="group"
                    aria-labelledby="homecoming-guest-count"
                    className="py-2"
                  >
                    <p
                      id="homecoming-guest-count"
                      className="m-0 text-[10px] uppercase leading-6 tracking-wider text-[#cdb5ba]"
                    >
                      Number attending, including yourself
                    </p>

                    <div className="mt-4 flex items-center justify-center gap-6">
                      <button
                        type="button"
                        aria-label="Remove guest"
                        disabled={guests <= 1}
                        onClick={() =>
                          setGuests((value) =>
                            Math.max(1, value - 1),
                          )
                        }
                        className={`${focus} grid size-11 place-items-center rounded-full border border-[#c9a44c]/40 text-[#d2b45c] disabled:cursor-not-allowed disabled:opacity-30`}
                      >
                        <Minus size={16} aria-hidden="true" />
                      </button>

                      <span
                        aria-live="polite"
                        aria-atomic="true"
                        className={`${serif} min-w-7 text-[32px]`}
                      >
                        {guests}
                      </span>

                      <button
                        type="button"
                        aria-label="Add guest"
                        disabled={guests >= 10}
                        onClick={() =>
                          setGuests((value) =>
                            Math.min(10, value + 1),
                          )
                        }
                        className={`${focus} grid size-11 place-items-center rounded-full border border-[#c9a44c]/40 text-[#d2b45c] disabled:cursor-not-allowed disabled:opacity-30`}
                      >
                        <Plus size={16} aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className={`${focus} flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#c9a44c] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#1b0710] transition-colors hover:bg-[#ddbd68]`}
                >
                  RSVP via WhatsApp
                  <ArrowUpRight size={16} aria-hidden="true" />
                </button>

                <p className="m-0 text-xs leading-6 text-[#cdb5ba]">
                  Your response opens in Anjana’s WhatsApp chat.
                  Tap Send in WhatsApp to complete your RSVP.
                </p>
              </form>
            </section>

            <footer className="px-4 pb-4 pt-5 text-center">
              <p
                className={`${serif} m-0 text-[34px] italic text-[#ead8b5]`}
              >
                {homecoming.bride} &amp; {homecoming.groom}
              </p>

              <p className="mb-0 mt-3 text-[9px] uppercase tracking-[0.3em] text-[#c9a44c]">
                With love &amp; gratitude
              </p>
            </footer>
          </div>

          <HomecomingNav />

          {/* Music control */}
          <button
            type="button"
            onClick={toggleMusic}
            aria-label={playing ? "Pause music" : "Play music"}
            aria-pressed={playing}
            className={`${focus} fixed bottom-4 right-4 z-30 grid size-12 place-items-center rounded-full border border-[#c9a44c]/50 bg-[#300b19] text-[#d2b45c] shadow-lg sm:bottom-6 sm:right-6`}
          >
            {playing ? (
              <Pause size={20} aria-hidden="true" />
            ) : (
              <Music2 size={20} aria-hidden="true" />
            )}
          </button>

          {musicError && (
            <p
              role="status"
              className="
                fixed bottom-20 right-4 z-30 max-w-[250px]
                rounded-lg border border-[#c9a44c]/30
                bg-[#300b19] px-4 py-3 text-xs leading-6
                text-[#f7eedc]
              "
            >
              {musicError}
            </p>
          )}
        </div>
      )}
    </main>
  );
}