// import { CalendarDays, MapPin } from "lucide-react";
// import Reveal from "@/components/ui/Reveal";
// import Orn from "@/components/ui/Orn";
// import { createCalendarEvent, createCalendarUrl } from "@/lib/calendar";

// export default function Homecoming() {
//   const calendarUrl = createCalendarUrl(
//     createCalendarEvent({
//       uid: "indusha-anjana-homecoming-20261212",
//       start: "20261212T103000Z",
//       end: "20261212T143000Z",
//       summary: "Indusha & Anjana - Homecoming",
//       location: "The Garden Pavilion\\, Colombo\\, Sri Lanka",
//       description: "Join us to celebrate the homecoming of Indusha and Anjana.",
//     }),
//   );

//   return (
//     <section
//       className="
//         homecoming relative overflow-hidden [background:rgb(247_240_229_/_94%)] text-[#583d30] text-center
//         [@media(width<=520px)]:p-[78px_20px] paper [background:transparent]
//       "
//       id="homecoming"
//     >
//       <div className="homecoming-inner relative z-[1] max-w-[1000px] mx-auto">
//         <Reveal>
//           <p
//             className="
//         eyebrow
//         [background:radial-gradient(_ellipse_at_center,_rgb(255_251_244_/_85%)_0%,_rgb(255_251_244_/_0%)_70%_)]
//         text-[var(--brown)] [text-shadow:0_2px_12px_rgb(0_0_0_/_50%)] absolute top-[17%] left-[50%] z-[2] m-0
//         p-[18px_60px] [transform:translateX(-50%)] whitespace-nowrap text-[clamp(12px,_1.6vw,_16px)]
//         font-[600] tracking-[0.3em] uppercase
//       "
//           >
//             The Celebration Continues
//           </p>

//           <div className="homecoming-monogram [font-family:var(--font-cormorant),_Georgia,_serif] italic text-[#a76e50] tracking-[0.08em] m-[24px_0_12px] text-[28px]">
//             I &amp; A
//           </div>

//           <h2
//             className="
//         homecoming-title m-0 [font-family:var(--font-cormorant),_Georgia,_serif]
//         text-[clamp(2.7rem,_7vw,_5rem)] font-[400] leading-[1.1]
//         [@media(width<=520px)]:text-[clamp(2.5rem,_11vw,_3.5rem)] [&_i]:text-[#a76e50] [&_i]:font-[400]
//       "
//           >
//             The <i>Homecoming</i>
//           </h2>

//           <Orn />

//           <p
//             className="
//         homecoming-intro max-w-[540px] m-[22px_auto_48px] text-[#806b5c]
//         [font-family:var(--font-cormorant),_Georgia,_serif] text-[21px] leading-[1.8]
//         [@media(width<=520px)]:text-[19px] [@media(width<=520px)]:mb-[32px]
//       "
//           >
//             With joyful hearts, we invite you to join us for another beautiful
//             celebration as we begin this new chapter together.
//           </p>
//         </Reveal>

//         <div
//           className="
//         homecoming-card grid grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)_auto_minmax(0,_1fr)] items-stretch
//         gap-[25px] p-[42px_30px] [border:1px_solid_#d8c3ad] [background:rgb(255_252_246_/_70%)]
//         [@media(width<=520px)]:grid-cols-[minmax(0,_1fr)] [@media(width<=520px)]:p-[30px_18px]
//         [@media(520px<width<=800px)]:gap-[18px] [@media(520px<width<=800px)]:p-[30px_20px]
//       "
//         >
//           <Reveal
//             className="
//         homecoming-detail flex min-w-0 flex-col items-center gap-[12px] [&_>_svg]:mb-[4px]
//         [&_>_svg]:text-[#a76e50] [&_.eyebrow]:m-0 [&_h3]:m-0
//         [&_h3]:[font-family:var(--font-cormorant),_Georgia,_serif] [&_h3]:text-[clamp(20px,_2.4vw,_27px)]
//         [&_h3]:font-[500] [@media(width<=520px)]:[&_h3]:text-[25px]
//         [@media(width<=520px)]:[&_h3]:[overflow-wrap:anywhere]
//         [@media(520px<width<=800px)]:[&_h3]:[overflow-wrap:anywhere] [&_p]:m-0 [&_p]:text-[#806b5c]
//         [&_p]:text-[14px] [&_p]:leading-[1.7]
//       "
//           >
//             <CalendarDays size={25} strokeWidth={1.3} />
//             <span className="eyebrow1">The Date</span>
//             <h3>Saturday</h3>
//             <p>12 December 2026</p>
//           </Reveal>

//           <div
//             className="
//         homecoming-divider w-[1px] [background:#d8c3ad] [@media(width<=520px)]:w-[65px]
//         [@media(width<=520px)]:h-[1px] [@media(width<=520px)]:mx-auto
//       "
//           />

//           <Reveal
//             className="
//         homecoming-detail flex min-w-0 flex-col items-center gap-[12px] [&_>_svg]:mb-[4px]
//         [&_>_svg]:text-[#a76e50] [&_.eyebrow]:m-0 [&_h3]:m-0
//         [&_h3]:[font-family:var(--font-cormorant),_Georgia,_serif] [&_h3]:text-[clamp(20px,_2.4vw,_27px)]
//         [&_h3]:font-[500] [@media(width<=520px)]:[&_h3]:text-[25px]
//         [@media(width<=520px)]:[&_h3]:[overflow-wrap:anywhere]
//         [@media(520px<width<=800px)]:[&_h3]:[overflow-wrap:anywhere] [&_p]:m-0 [&_p]:text-[#806b5c]
//         [&_p]:text-[14px] [&_p]:leading-[1.7]
//       "
//           >
//             <span className="homecoming-clock h-[29px] text-[#a76e50] text-[30px] leading-[1]">
//               ◷
//             </span>
//             <span className="eyebrow1">The Time</span>
//             <h3>4:00 PM</h3>
//             <p>Sri Lanka Standard Time</p>
//           </Reveal>

//           <div
//             className="
//         homecoming-divider w-[1px] [background:#d8c3ad] [@media(width<=520px)]:w-[65px]
//         [@media(width<=520px)]:h-[1px] [@media(width<=520px)]:mx-auto
//       "
//           />

//           <Reveal
//             className="
//         homecoming-detail flex min-w-0 flex-col items-center gap-[12px] [&_>_svg]:mb-[4px]
//         [&_>_svg]:text-[#a76e50] [&_.eyebrow]:m-0 [&_h3]:m-0
//         [&_h3]:[font-family:var(--font-cormorant),_Georgia,_serif] [&_h3]:text-[clamp(20px,_2.4vw,_27px)]
//         [&_h3]:font-[500] [@media(width<=520px)]:[&_h3]:text-[25px]
//         [@media(width<=520px)]:[&_h3]:[overflow-wrap:anywhere]
//         [@media(520px<width<=800px)]:[&_h3]:[overflow-wrap:anywhere] [&_p]:m-0 [&_p]:text-[#806b5c]
//         [&_p]:text-[14px] [&_p]:leading-[1.7]
//       "
//           >
//             <MapPin size={25} strokeWidth={1.3} />
//             <span className="eyebrow1">The Venue</span>
//             <h3>The Garden Pavilion</h3>
//             <p>Colombo, Sri Lanka</p>

//             <a
//               href="https://maps.google.com/?q=Colombo,Sri+Lanka"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="homecoming-map text-[#9c6043] text-[12px] [text-decoration:underline] [text-underline-offset:4px]"
//             >
//               View Directions ↗
//             </a>
//           </Reveal>
//         </div>

//         <Reveal>
//           <p
//             className="
//         homecoming-note max-w-[540px] m-[38px_auto_25px] text-[#806b5c]
//         [font-family:var(--font-cormorant),_Georgia,_serif] text-[20px] italic leading-[1.7]
//       "
//           >
//             We would be delighted to celebrate this special occasion with you.
//           </p>

//           <a
//             href={calendarUrl}
//             download="indusha-anjana-homecoming.ics"
//             className="
//         homecoming-calendar inline-flex max-w-full p-[15px_23px] items-center justify-center gap-[10px]
//         [border:1px_solid_#a76e50] [background:transparent] text-[#704a38] text-[12px] tracking-[0.08em]
//         uppercase [transition:background-color_250ms_ease,_color_250ms_ease]
//         [@media(width<=520px)]:p-[14px_16px] [@media(width<=520px)]:text-[10px]
//         [@media(width<=520px)]:tracking-[0.04em] [&:hover]:[background:#8d6048] [&:hover]:text-[#fffaf3]
//       "
//           >
//             <CalendarDays size={18} />
//             Add Homecoming to Calendar
//           </a>
//         </Reveal>

//         <div className="homecoming-bottom-mark [font-family:var(--font-cormorant),_Georgia,_serif] italic text-[#a76e50] tracking-[0.08em] mt-[45px] text-[22px]">
//           I &amp; A
//         </div>
//       </div>
//     </section>
//   );
// }
