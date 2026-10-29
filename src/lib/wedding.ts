  export const wedding = {
    bride: "Indusha",
    groom: "Anjana",
    initials: "I & A",
    shortDate: "03 · 12 · 2026",

    dateISO: "2026-12-03T10:00:00+05:30",
    dateLabel: "December 03, 2026",
    weekday: "Thursday",

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

  story: {
    startDate: "17.01.2019",
    startDateISO: "2019-01-17",

    opening: "It all started with a simple Instagram search…",

    paragraphs: [
      "Anjana found Indusha, and a beautiful journey began.",

      "Seven years of love, laughter, challenges, and countless memories. Through good times and bad, we helped each other, stood by each other, and grew together.",

      "Indusha showed her love in her own little ways, while Anjana proved that sometimes, actions speak louder than words.",
    ],

    highlight: "Different ways of loving, one heartwarming connection.",

    closing:
      "And now, after seven beautiful years, we're ready to begin our forever.",

    endDate: "03.12.2026",
    endDateISO: "2026-12-03",

    signature: "From one search to forever.",
  },

events: [
  {
    time: "9:30 AM",
    title: "Wedding Ceremony Begins",
    address: "Join us as we begin our special day.",
  },
  {
    time: "9:58 AM",
    title: "Poruwa Ceremony",
    address: "Traditional blessings as we begin our journey together.",
  },
  {
    time: "10:51 AM",
    title: "Marriage Registration",
    address: "Making our forever official.",
  },
  {
    time: "11:00 AM",
    title: "Reception & Lunch",
    address: "Join us for lunch, laughter and celebration.",
  },
  {
    time: "3:30 PM",
    title: "Farewell",
    address: "With love and thanks for sharing our special day.",
  },
],

  gallery: [
    "/images/g1.jpeg",
    "/images/g4.jpeg",
    "/images/g5.jpeg",
  ],

  ceremony: {
    name: "Rongfa Regency (Queens Court)",
    address: "Kosinna Junction, Ganemulla",
    map: "https://maps.app.goo.gl/ui2Af1Jv7dcjKvJq6?g_st=iw",
  },

  homecoming: {
    name: "Hotel Sanara Mandira (Ranasara Hall - Ground Floor)",
    address: "Makola Road, Kiribathgoda",
    map: "https://maps.app.goo.gl/tBtfs5ZNufkGfXm5A?g_st=iw",
  },

  contacts: {
    bride: {
      name: "Indusha",
      phone: "+94760639821",
    },
    groom: {
      name: "Anjana",
      phone: "+94762254848",
    },
  },
} as const;
