// type CalendarEventOptions = {
//   uid: string;
//   start: string;
//   end: string;
//   summary: string;
//   location?: string;
//   description?: string;
// };

// /**
//  * Escape text used in calendar properties.
//  * Pass normal text without manually escaping commas.
//  */
// function escapeCalendarText(value: string): string {
//   return value
//     .replace(/\\/g, "\\\\")
//     .replace(/\r\n|\r|\n/g, "\\n")
//     .replace(/;/g, "\\;")
//     .replace(/,/g, "\\,");
// }

// /**
//  * Create a UTC timestamp: YYYYMMDDTHHmmssZ.
//  */
// function createTimestamp(): string {
//   return new Date()
//     .toISOString()
//     .replace(/[-:]/g, "")
//     .replace(/\.\d{3}Z$/, "Z");
// }

// /**
//  * Fold long lines without splitting UTF-8 characters.
//  */
// function foldCalendarLine(line: string): string {
//   const encoder = new TextEncoder();
//   const lines: string[] = [];

//   let currentLine = "";
//   let currentBytes = 0;

//   for (const character of line) {
//     const characterBytes = encoder.encode(character).length;

//     if (currentBytes + characterBytes > 75) {
//       lines.push(currentLine);
//       currentLine = " ";
//       currentBytes = 1;
//     }

//     currentLine += character;
//     currentBytes += characterBytes;
//   }

//   lines.push(currentLine);

//   return lines.join("\r\n");
// }

// /**
//  * Convert calendar lines into a downloadable .ics URL.
//  */
// export function createCalendarUrl(lines: string[]): string {
//   const calendar = `${lines.map(foldCalendarLine).join("\r\n")}\r\n`;

//   return `data:text/calendar;charset=utf-8,${encodeURIComponent(calendar)}`;
// }

// /**
//  * Create a calendar containing one event.
//  *
//  * Supply start and end as UTC values:
//  * December 3, 2026, 9:30 AM in Sri Lanka = 20261203T040000Z.
//  */
// export function createCalendarEvent({
//   uid,
//   start,
//   end,
//   summary,
//   location,
//   description,
// }: CalendarEventOptions): string[] {
//   return [
//     "BEGIN:VCALENDAR",
//     "VERSION:2.0",
//     "PRODID:-//Invitation//Wedding Invitation//EN",
//     "CALSCALE:GREGORIAN",
//     "METHOD:PUBLISH",
//     "BEGIN:VEVENT",
//     `UID:${escapeCalendarText(uid)}`,
//     `DTSTAMP:${createTimestamp()}`,
//     `DTSTART:${start}`,
//     `DTEND:${end}`,
//     `SUMMARY:${escapeCalendarText(summary)}`,
//     ...(location
//       ? [`LOCATION:${escapeCalendarText(location)}`]
//       : []),
//     ...(description
//       ? [`DESCRIPTION:${escapeCalendarText(description)}`]
//       : []),
//     "END:VEVENT",
//     "END:VCALENDAR",
//   ];
// }


type CalendarEventOptions = {
  uid: string;
  start: string;
  end: string;
  summary: string;
  location?: string;
  description?: string;
};

/**
 * Fixed calendar metadata timestamp.
 * Update this when publishing revised event details.
 * It does not control the event date or time.
 */
const CALENDAR_TIMESTAMP = "20261029T000000Z";

/**
 * Escape text used in calendar properties.
 * Pass normal text without manually escaping commas.
 */
function escapeCalendarText(value: string): string {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\r\n|\r|\n/g, "\\n")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,");
}

/**
 * Fold lines at 75 bytes without splitting UTF-8 characters.
 */
function foldCalendarLine(line: string): string {
  const encoder = new TextEncoder();
  const lines: string[] = [];

  let currentLine = "";
  let currentBytes = 0;

  for (const character of line) {
    const characterBytes = encoder.encode(character).length;

    if (currentBytes + characterBytes > 75) {
      lines.push(currentLine);

      // Continuation lines begin with one space.
      currentLine = " ";
      currentBytes = 1;
    }

    currentLine += character;
    currentBytes += characterBytes;
  }

  lines.push(currentLine);

  return lines.join("\r\n");
}

/**
 * Convert calendar lines into a downloadable .ics URL.
 */
export function createCalendarUrl(lines: string[]): string {
  const calendar = `${lines.map(foldCalendarLine).join("\r\n")}\r\n`;

  return `data:text/calendar;charset=utf-8,${encodeURIComponent(calendar)}`;
}

/**
 * Create a calendar containing one event.
 *
 * Supply start and end as UTC values.
 * Example: December 3, 2026, 9:30 AM in Sri Lanka
 * becomes "20261203T040000Z".
 */
export function createCalendarEvent({
  uid,
  start,
  end,
  summary,
  location,
  description,
}: CalendarEventOptions): string[] {
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//ArayumLK//Wedding Invitation//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${escapeCalendarText(uid)}`,
    `DTSTAMP:${CALENDAR_TIMESTAMP}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `SUMMARY:${escapeCalendarText(summary)}`,
    ...(location
      ? [`LOCATION:${escapeCalendarText(location)}`]
      : []),
    ...(description
      ? [`DESCRIPTION:${escapeCalendarText(description)}`]
      : []),
    "END:VEVENT",
    "END:VCALENDAR",
  ];
}