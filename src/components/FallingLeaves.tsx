const leaves = [
  { left: 4, size: 18, delay: 0, duration: 16, color: "#b96f52" },
  { left: 11, size: 26, delay: 6, duration: 21, color: "#c98b5f" },
  { left: 19, size: 16, delay: 11, duration: 18, color: "#8d4937" },
  { left: 27, size: 22, delay: 3, duration: 23, color: "#d9a785" },
  { left: 35, size: 14, delay: 14, duration: 17, color: "#b96f52" },
  { left: 43, size: 24, delay: 8, duration: 22, color: "#a8553f" },
  { left: 51, size: 18, delay: 1, duration: 19, color: "#c98b5f" },
  { left: 59, size: 28, delay: 12, duration: 24, color: "#8d4937" },
  { left: 67, size: 16, delay: 5, duration: 18, color: "#d9a785" },
  { left: 75, size: 22, delay: 9, duration: 20, color: "#b96f52" },
  { left: 83, size: 18, delay: 2, duration: 17, color: "#a8553f" },
  { left: 90, size: 26, delay: 13, duration: 22, color: "#c98b5f" },
  { left: 96, size: 14, delay: 7, duration: 19, color: "#8d4937" },
];

export default function FallingLeaves() {
  return (
    <div
      className="leaves fixed inset-0 z-[0] overflow-hidden pointer-events-none motion-reduce:hidden"
      aria-hidden="true"
    >
      {leaves.map((leaf, i) => (
        <svg
          key={i}
          className="leaf absolute top-[-40px] opacity-[0.55] [animation-name:leaf-fall] [animation-timing-function:linear] [animation-iteration-count:infinite]"
          viewBox="0 0 24 24"
          style={{
            left: `${leaf.left}%`,
            width: leaf.size,
            height: leaf.size,
            animationDelay: `-${leaf.delay}s`,
            animationDuration: `${leaf.duration}s`,
            color: leaf.color,
          }}
        >
          <path
            fill="currentColor"
            d="M12 2c5 3 8 7 8 11a8 8 0 0 1-16 0c0-4 3-8 8-11Z"
          />
          <path
            d="M12 5v17"
            stroke="#f4ede1"
            strokeWidth="0.8"
            strokeLinecap="round"
            opacity="0.6"
          />
        </svg>
      ))}
    </div>
  );
}
