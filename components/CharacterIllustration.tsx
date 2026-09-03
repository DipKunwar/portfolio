import React from "react";
import { StarDoodle, SpeechBubble } from "./Doodles";

export const CharacterIllustration = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Speech bubble positioned above character */}
      <div className="absolute -top-10 sm:-top-14 left-2 sm:-left-6 z-20 animate-bounce duration-1000">
        <SpeechBubble />
      </div>

      {/* Floating Star doodle */}
      <div className="absolute -top-4 right-8 sm:right-12 z-20 animate-pulse">
        <StarDoodle className="w-9 h-9 text-amber-400 drop-shadow-[0_0_12px_rgba(251,191,36,0.8)]" />
      </div>

      {/* Little sparkle doodles */}
      <div className="absolute top-12 -right-2 text-white text-xl font-bold animate-ping opacity-75">
        ✦
      </div>
      <div className="absolute bottom-24 -left-4 text-purple-400 text-lg font-bold">
        ✦
      </div>

      {/* Main Character SVG */}
      <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px] aspect-[4/5] drop-shadow-[0_15px_35px_rgba(124,58,237,0.3)] transition-transform duration-300 hover:scale-[1.02]">
        <svg
          viewBox="0 0 400 480"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            {/* Purple hoodie gradient */}
            <linearGradient id="hoodieGrad" x1="120" y1="180" x2="320" y2="460" gradientUnits="userSpaceOnUse">
              <stop stopColor="#9333ea" />
              <stop offset="0.5" stopColor="#7c3aed" />
              <stop offset="1" stopColor="#5b21b6" />
            </linearGradient>
            {/* Skin tone gradient */}
            <linearGradient id="skinGrad" x1="200" y1="120" x2="280" y2="220" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fed7aa" />
              <stop offset="1" stopColor="#fdba74" />
            </linearGradient>
            {/* Hair gradient */}
            <linearGradient id="hairGrad" x1="180" y1="40" x2="340" y2="180" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1e1b4b" />
              <stop offset="0.7" stopColor="#0f172a" />
              <stop offset="1" stopColor="#020617" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#7c3aed" floodOpacity="0.4" />
            </filter>
          </defs>

          {/* Motion marks behind waving hand */}
          <path d="M70 190 C60 175 60 160 75 145" stroke="#f97316" strokeWidth="3" strokeLinecap="round" />
          <path d="M58 200 C48 185 48 170 63 155" stroke="#f97316" strokeWidth="3" strokeLinecap="round" />

          {/* Purple Hoodie Torso */}
          <path
            d="M130 260 C110 320 80 440 60 480 L380 480 C360 440 330 330 310 260 C280 290 170 290 130 260 Z"
            fill="url(#hoodieGrad)"
            stroke="#18181b"
            strokeWidth="6"
          />

          {/* Hoodie details: Kangaroo pocket and zipper / cords */}
          <path
            d="M160 380 C180 360 260 360 280 380 L300 480 L140 480 Z"
            fill="#6d28d9"
            stroke="#18181b"
            strokeWidth="5"
          />
          {/* White cords */}
          <path d="M200 280 Q195 330 205 365" stroke="#f4f4f5" strokeWidth="4.5" strokeLinecap="round" />
          <circle cx="205" cy="368" r="4.5" fill="#f4f4f5" />
          <path d="M235 280 Q240 330 230 365" stroke="#f4f4f5" strokeWidth="4.5" strokeLinecap="round" />
          <circle cx="230" cy="368" r="4.5" fill="#f4f4f5" />

          {/* Neck */}
          <path d="M190 220 L245 220 L245 270 L190 270 Z" fill="url(#skinGrad)" stroke="#18181b" strokeWidth="5" />
          {/* Neck shadow under chin */}
          <path d="M195 225 C210 240 235 240 242 225 L245 245 C230 260 205 260 192 245 Z" fill="#fb923c" opacity="0.6" />

          {/* Face */}
          <path
            d="M185 140 C170 180 185 230 225 235 C270 240 295 190 290 140 C290 115 275 110 235 110 C195 110 190 120 185 140 Z"
            fill="url(#skinGrad)"
            stroke="#18181b"
            strokeWidth="6"
            strokeLinejoin="round"
          />

          {/* Cute Ear */}
          <path
            d="M285 155 C305 155 310 185 288 195 Z"
            fill="url(#skinGrad)"
            stroke="#18181b"
            strokeWidth="5"
          />
          {/* Earring */}
          <circle cx="295" cy="192" r="3" fill="#18181b" />

          {/* Big Stylized Spiky Black Hair */}
          <path
            d="M160 140 C130 110 140 60 185 50 C185 30 220 20 250 35 C280 15 320 25 330 65 C365 70 380 110 360 150 C380 180 345 220 315 200 C310 185 305 160 295 150 C295 130 290 100 260 95 C230 90 205 110 190 125 C175 125 165 130 160 140 Z"
            fill="url(#hairGrad)"
            stroke="#18181b"
            strokeWidth="7"
            strokeLinejoin="round"
          />

          {/* Hair highlights */}
          <path
            d="M200 65 C220 50 245 50 265 60"
            stroke="#6366f1"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M280 48 C305 45 325 60 335 85"
            stroke="#6366f1"
            strokeWidth="4.5"
            strokeLinecap="round"
          />

          {/* Thick expressive eyebrows */}
          <path d="M190 135 Q205 120 220 130" stroke="#18181b" strokeWidth="6" strokeLinecap="round" />
          <path d="M245 130 Q265 125 280 138" stroke="#18181b" strokeWidth="6" strokeLinecap="round" />

          {/* Winking Left Eye (closed wink: playful arch) */}
          <path d="M192 152 Q205 165 220 152" stroke="#18181b" strokeWidth="6" strokeLinecap="round" />

          {/* Big Expressive Open Right Eye */}
          <circle cx="262" cy="150" r="16" fill="white" stroke="#18181b" strokeWidth="5" />
          <circle cx="263" cy="150" r="10" fill="#18181b" />
          <circle cx="260" cy="146" r="4.5" fill="white" />
          <circle cx="266" cy="154" r="2" fill="white" />

          {/* Small nose */}
          <path d="M232 165 C235 172 238 174 242 173" stroke="#18181b" strokeWidth="4" strokeLinecap="round" />

          {/* Big happy open smile */}
          <path
            d="M208 185 C215 210 255 210 265 185 Z"
            fill="#e11d48"
            stroke="#18181b"
            strokeWidth="5"
            strokeLinejoin="round"
          />
          {/* Top teeth */}
          <path d="M212 187 C225 195 248 195 261 187 Z" fill="white" />

          {/* Blushing cheeks */}
          <ellipse cx="190" cy="170" rx="9" ry="5" fill="#f87171" opacity="0.6" />
          <ellipse cx="278" cy="170" rx="9" ry="5" fill="#f87171" opacity="0.6" />

          {/* Raised Arm & Waving Hand */}
          {/* Arm sleeve */}
          <path
            d="M135 270 C110 240 85 190 75 160 C90 145 125 160 145 200 Z"
            fill="url(#hoodieGrad)"
            stroke="#18181b"
            strokeWidth="6"
          />
          {/* Cuff */}
          <ellipse cx="78" cy="155" rx="14" ry="8" fill="#581c87" stroke="#18181b" strokeWidth="5" transform="rotate(-30 78 155)" />

          {/* Waving Hand (Palm & Fingers) */}
          <path
            d="M75 150 C70 135 60 110 65 95 C68 90 76 92 78 100 L82 75 C85 70 94 72 95 80 L98 65 C102 60 110 62 110 70 L112 60 C116 55 125 58 124 68 L118 120 C115 138 105 150 85 152 Z"
            fill="url(#skinGrad)"
            stroke="#18181b"
            strokeWidth="5"
            strokeLinejoin="round"
          />
          {/* Palm creases */}
          <path d="M85 115 C95 120 105 110 110 115" stroke="#fb923c" strokeWidth="3" strokeLinecap="round" />

          {/* Clapperboard / Code Tablet near bottom right */}
          <g transform="translate(270, 260) rotate(14)">
            {/* Main clapperboard body */}
            <rect x="0" y="20" width="85" height="60" rx="8" fill="#18181b" stroke="#3f3f46" strokeWidth="3" />
            {/* Play symbol on clapperboard */}
            <polygon points="36,40 54,50 36,60" fill="white" />
            {/* Top stripes bar */}
            <rect x="0" y="0" width="85" height="18" rx="4" fill="#f4f4f5" stroke="#18181b" strokeWidth="3" />
            <polygon points="12,0 20,0 12,18 4,18" fill="#18181b" />
            <polygon points="32,0 40,0 32,18 24,18" fill="#18181b" />
            <polygon points="52,0 60,0 52,18 44,18" fill="#18181b" />
            <polygon points="72,0 80,0 72,18 64,18" fill="#18181b" />
          </g>
        </svg>
      </div>
    </div>
  );
};
