import React from "react";

export const AboutCharacter = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={`relative w-full h-full min-h-[280px] sm:min-h-[320px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#bef264] via-[#ccff00] to-[#84cc16] p-4 flex flex-col justify-between border-2 border-[#18181b] shadow-xl select-none ${className}`}
    >
      {/* Background graffiti splatters and brush marks */}
      <svg
        viewBox="0 0 340 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
      >
        <circle cx="280" cy="50" r="12" fill="#18181b" />
        <circle cx="295" cy="35" r="4" fill="#18181b" />
        <circle cx="310" cy="65" r="6" fill="#18181b" />
        <path d="M20 180 Q60 220 10 260" stroke="#18181b" strokeWidth="6" strokeLinecap="round" />
        <path d="M40 240 Q90 280 140 250" stroke="#18181b" strokeWidth="8" strokeLinecap="round" />
        <circle cx="50" cy="270" r="16" fill="#18181b" />
        <circle cx="75" cy="290" r="8" fill="#18181b" />
      </svg>

      {/* Top row: Sticky note on left, Crown doodle on right */}
      <div className="relative z-10 flex items-start justify-between">
        {/* Sticky Note / Yellow Card */}
        <div className="bg-[#fef08a] text-[#18181b] p-3 rounded-lg shadow-md border border-[#ca8a04] transform -rotate-3 hover:rotate-0 transition-transform font-bold text-xs sm:text-sm tracking-wider leading-tight max-w-[140px] uppercase font-mono">
          <span className="block text-black font-extrabold">FOCUS</span>
          <span className="block text-black font-extrabold">DISCIPLINE</span>
          <span className="block text-black font-extrabold">CONSISTENCY</span>
        </div>

        {/* Ink Crown doodle in top-right */}
        <div className="text-black transform rotate-6">
          <svg viewBox="0 0 44 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-8">
            <path
              d="M4 26 L8 8 L18 18 L26 4 L34 18 L40 10 L40 26 Z"
              fill="none"
              stroke="#18181b"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line x1="4" y1="27" x2="40" y2="27" stroke="#18181b" strokeWidth="3.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Main Ink Sketch Portrait of Dip */}
      <div className="relative z-10 w-full flex justify-center items-end mt-2">
        <svg
          viewBox="0 0 280 230"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full max-w-[240px] h-auto drop-shadow-md"
        >
          {/* Black Hoodie Shoulders */}
          <path
            d="M30 230 C45 190 85 170 110 165 C130 180 150 180 170 165 C195 170 235 190 250 230 Z"
            fill="#18181b"
            stroke="#18181b"
            strokeWidth="3"
          />
          {/* White Hoodie strings */}
          <path d="M125 180 L120 220" stroke="white" strokeWidth="3" strokeLinecap="round" />
          <path d="M155 180 L160 220" stroke="white" strokeWidth="3" strokeLinecap="round" />

          {/* Neck with hatching lines */}
          <path d="M120 135 L160 135 L160 175 L120 175 Z" fill="white" stroke="#18181b" strokeWidth="4" />
          <line x1="128" y1="145" x2="152" y2="145" stroke="#18181b" strokeWidth="2" />
          <line x1="130" y1="155" x2="150" y2="155" stroke="#18181b" strokeWidth="2" />

          {/* Face */}
          <path
            d="M105 75 C100 110 115 145 140 148 C165 145 180 110 175 75 C170 50 160 45 140 45 C120 45 110 50 105 75 Z"
            fill="white"
            stroke="#18181b"
            strokeWidth="5"
            strokeLinejoin="round"
          />

          {/* Ears with inner detail */}
          <path d="M98 85 C88 85 88 105 104 110" fill="white" stroke="#18181b" strokeWidth="4" />
          <path d="M182 85 C192 85 192 105 176 110" fill="white" stroke="#18181b" strokeWidth="4" />

          {/* Expressive Manga Spiky Hair */}
          <path
            d="M95 70 C75 55 80 25 110 18 C120 5 145 5 155 12 C175 2 195 10 200 32 C218 35 225 60 210 82 C215 95 195 115 185 102 C185 85 180 70 172 65 C155 55 130 55 118 68 C108 65 102 68 95 70 Z"
            fill="#18181b"
            stroke="#18181b"
            strokeWidth="4"
          />
          {/* Hair spikes overlay */}
          <path d="M110 35 L125 50 L140 32 L150 48 L170 30" stroke="white" strokeWidth="3" strokeLinecap="round" />

          {/* Eyebrows */}
          <path d="M115 72 Q125 65 135 70" stroke="#18181b" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M145 70 Q155 65 165 72" stroke="#18181b" strokeWidth="4.5" strokeLinecap="round" />

          {/* Eyes (Anime ink style) */}
          <ellipse cx="125" cy="85" rx="7" ry="10" fill="#18181b" />
          <circle cx="123" cy="82" r="2.5" fill="white" />
          <ellipse cx="155" cy="85" rx="7" ry="10" fill="#18181b" />
          <circle cx="153" cy="82" r="2.5" fill="white" />

          {/* Nose */}
          <path d="M138 92 L142 98 L138 99" stroke="#18181b" strokeWidth="3" strokeLinecap="round" />

          {/* Wide Confident Grin */}
          <path
            d="M124 108 Q140 126 156 108 Z"
            fill="white"
            stroke="#18181b"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <line x1="126" y1="110" x2="154" y2="110" stroke="#18181b" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
};
