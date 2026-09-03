import React from "react";

// Top left purple artistic paint splash
export const PurpleSplash = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 320 220"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M-40 -40 C60 -40 180 -20 240 20 C290 55 280 110 210 140 C140 170 80 130 30 180 C-10 220 -30 200 -40 180 Z"
      fill="url(#purple-grad)"
    />
    <defs>
      <linearGradient id="purple-grad" x1="-40" y1="-40" x2="240" y2="180" gradientUnits="userSpaceOnUse">
        <stop stopColor="#7c3aed" stopOpacity="0.9" />
        <stop offset="0.6" stopColor="#6d28d9" stopOpacity="0.8" />
        <stop offset="1" stopColor="#4c1d95" stopOpacity="0.2" />
      </linearGradient>
    </defs>
  </svg>
);

// Crown doodle above DIP
export const CrownDoodle = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 48 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M4 28 L9 8 L20 20 L29 6 L38 20 L44 10 L44 28 Z"
      fill="none"
      stroke="#ccff00"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 29 C15 31 32 30 45 28"
      stroke="#ccff00"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
  </svg>
);

// Curved arrow pointing to DIP KUNWAR
export const ArrowHandDrawn = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 60 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M10 8 C15 28 25 38 42 38"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M32 30 L45 38 L36 46"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Curved arrow pointing down on the left
export const ArrowDownCurved = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 50 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M35 10 C20 18 10 32 15 48"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M6 40 L15 50 L24 42"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Yellow doodle star
export const StarDoodle = ({ className = "", fill = "#facc15" }: { className?: string; fill?: string }) => (
  <svg
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M18 2 L22 13 L33 14 L24 21 L27 32 L18 25 L9 32 L12 21 L3 14 L14 13 Z"
      fill={fill}
      stroke={fill}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

// Neon lime lightning bolt
export const LightningDoodle = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 32 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M18 2 L4 24 L16 24 L12 42 L28 18 L16 18 Z"
      fill="#ccff00"
      stroke="#ccff00"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

// Hand-drawn lime smiley face
export const SmileyDoodle = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle
      cx="22"
      cy="22"
      r="18"
      stroke="#ccff00"
      strokeWidth="2.5"
      strokeDasharray="100 4"
    />
    <circle cx="16" cy="18" r="2.2" fill="#ccff00" />
    <circle cx="28" cy="18" r="2.2" fill="#ccff00" />
    <path
      d="M15 27 C18 32 26 32 29 27"
      stroke="#ccff00"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

// Hand-drawn purple circle loop around "DOPE!"
export const DopeLoop = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 160 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <ellipse
      cx="80"
      cy="35"
      rx="72"
      ry="26"
      stroke="#8b5cf6"
      strokeWidth="3.5"
      strokeLinecap="round"
      transform="rotate(-2 80 35)"
    />
    <path
      d="M20 40 C60 58 130 50 150 25"
      stroke="#a78bfa"
      strokeWidth="2"
      strokeLinecap="round"
      strokeOpacity="0.7"
    />
  </svg>
);

// Purple wavy triple squiggles
export const WavySquiggle = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 100 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M5 15 C15 5 25 25 35 15 C45 5 55 25 65 15 C75 5 85 25 95 15"
      stroke="#8b5cf6"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

// Purple large loop scribbles for skills/about
export const PurpleLoops = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 120 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M30 110 C-10 80 20 20 60 40 C100 60 70 120 45 90 C20 60 80 10 110 50"
      stroke="#8b5cf6"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Cyan speed streaks / dashes
export const CyanStreaks = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 40 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <line x1="8" y1="10" x2="28" y2="18" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="4" y1="26" x2="26" y2="34" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="12" y1="42" x2="32" y2="48" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// Comic Speech Bubble: "LET'S CREATE SOMETHING AWESOME!"
export const SpeechBubble = ({ className = "" }: { className?: string }) => (
  <div className={`relative inline-block ${className}`}>
    <div className="bg-[#38bdf8] text-black font-extrabold px-5 py-2.5 rounded-2xl shadow-lg border-2 border-white/90 text-xs sm:text-sm tracking-wide leading-tight text-center uppercase transform -rotate-2 hover:rotate-0 transition-transform duration-200">
      Let&apos;s Create<br />Something<br />Awesome!
    </div>
    {/* Bubble tail pointing toward the character */}
    <div className="absolute -bottom-2 right-6 w-0 h-0 border-l-[10px] border-l-transparent border-t-[12px] border-t-[#38bdf8] border-r-[4px] border-r-transparent transform -rotate-12" />
  </div>
);

// Cute blue monster doodle mascot at bottom right making peace sign
export const BlueMonster = ({ className = "" }: { className?: string }) => (
  <div className={`relative ${className}`}>
    <svg
      viewBox="0 0 160 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full filter drop-shadow-[0_8px_20px_rgba(56,189,248,0.35)]"
    >
      {/* Monster Body */}
      <path
        d="M30 180 C20 120 20 60 70 50 C120 40 140 100 145 180 Z"
        fill="#38bdf8"
      />
      {/* Texture / shading */}
      <path
        d="M40 180 C32 130 32 75 75 65 C115 55 130 105 135 180"
        stroke="#0284c7"
        strokeWidth="3"
        strokeDasharray="6 6"
      />
      {/* Hand making peace sign */}
      <path
        d="M25 70 C15 50 10 30 18 20 C24 12 32 20 30 35 L38 15 C44 8 52 14 48 30 C45 45 40 60 35 75"
        fill="#38bdf8"
        stroke="#0284c7"
        strokeWidth="2.5"
      />
      {/* Peace fingers outline */}
      <path
        d="M20 22 L26 40 M38 18 L36 40"
        stroke="#0369a1"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Eyes */}
      <circle cx="78" cy="98" r="7" fill="#0b0f19" />
      <circle cx="80" cy="96" r="2.5" fill="white" />
      <circle cx="112" cy="98" r="7" fill="#0b0f19" />
      <circle cx="114" cy="96" r="2.5" fill="white" />
      {/* Cute Open Mouth with Teeth */}
      <path
        d="M82 120 C82 135 110 135 110 120 Z"
        fill="#0b0f19"
      />
      <path
        d="M87 120 L91 125 L95 120 M99 120 L103 125 L107 120"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Blushing cheeks */}
      <ellipse cx="68" cy="110" rx="6" ry="3" fill="#0284c7" opacity="0.6" />
      <ellipse cx="122" cy="110" rx="6" ry="3" fill="#0284c7" opacity="0.6" />
      {/* Little floating heart doodle */}
      <path
        d="M25 8 C20 0 10 5 15 14 L25 22 L35 14 C40 5 30 0 25 8 Z"
        fill="#8b5cf6"
        transform="scale(0.5) translate(40, -10)"
      />
    </svg>
  </div>
);
