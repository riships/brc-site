import React from "react";

export function ComplexityDiagram() {
  return (
    <div className="relative w-full select-none">
      {/* 16:9 Seamlessly Blended Vector Canvas */}
      <div className="relative w-full aspect-[16/9] flex items-center justify-center">
        <svg
          viewBox="0 0 560 315"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Background Construction Grid */}
          <g opacity="0.3">
            <line x1="40" y1="55" x2="520" y2="55" stroke="#d4d4d8" strokeWidth="0.5" />
            <line x1="40" y1="105" x2="520" y2="105" stroke="#d4d4d8" strokeWidth="0.5" />
            <line x1="40" y1="155" x2="520" y2="155" stroke="#d4d4d8" strokeWidth="0.5" />
            <line x1="40" y1="205" x2="520" y2="205" stroke="#d4d4d8" strokeWidth="0.5" />
            <line x1="40" y1="255" x2="520" y2="255" stroke="#d4d4d8" strokeWidth="0.5" />

            <line x1="140" y1="35" x2="140" y2="275" stroke="#d4d4d8" strokeWidth="0.5" strokeDasharray="3 3" />
            <line x1="240" y1="35" x2="240" y2="275" stroke="#d4d4d8" strokeWidth="0.5" strokeDasharray="3 3" />
            <line x1="320" y1="35" x2="320" y2="275" stroke="#d4d4d8" strokeWidth="0.5" strokeDasharray="3 3" />
            <line x1="420" y1="35" x2="420" y2="275" stroke="#d4d4d8" strokeWidth="0.5" strokeDasharray="3 3" />
          </g>

          {/* Construction Registration Crosshairs */}
          <g stroke="#a1a1aa" strokeWidth="0.75">
            <path d="M 35 35 L 45 35 M 40 30 L 40 40" />
            <path d="M 515 35 L 525 35 M 520 30 L 520 40" />
            <path d="M 35 275 L 45 275 M 40 270 L 40 280" />
            <path d="M 515 275 L 525 275 M 520 270 L 520 280" />
          </g>

          {/* ======================================================== */}
          {/* LEFT SIDE: ENTANGLED COMPLEXITY                          */}
          {/* ======================================================== */}
          <g id="entangled-complexity">
            {/* Primary Overlapping Crossing Paths */}
            <path
              d="M 55 90 L 110 65 L 165 125 L 205 85 L 240 105"
              stroke="#71717a"
              strokeWidth="1.1"
              strokeLinejoin="round"
            />
            <path
              d="M 65 185 L 110 65 L 145 195 L 200 155 L 240 155"
              stroke="#18181b"
              strokeWidth="1.25"
              strokeLinejoin="round"
            />
            <path
              d="M 85 230 L 165 125 L 180 220 L 240 205"
              stroke="#52525b"
              strokeWidth="1.1"
              strokeLinejoin="round"
            />

            {/* Secondary Interdependent Connectors */}
            <path
              d="M 55 90 L 145 195"
              stroke="#a1a1aa"
              strokeWidth="1.0"
              strokeLinejoin="round"
            />
            <path
              d="M 65 185 L 85 230"
              stroke="#a1a1aa"
              strokeWidth="1.0"
              strokeLinejoin="round"
            />

            {/* Subtle Dotted Cross-Coupling Ties */}
            <line x1="55" y1="90" x2="200" y2="155" stroke="#a1a1aa" strokeWidth="0.9" strokeDasharray="3 3" />
            <line x1="205" y1="85" x2="180" y2="220" stroke="#a1a1aa" strokeWidth="0.9" strokeDasharray="3 3" />
            <line x1="65" y1="185" x2="205" y2="85" stroke="#d4d4d8" strokeWidth="0.75" strokeDasharray="2 2" />

            {/* The 9 Intentional Network Nodes */}
            <circle cx="55" cy="90" r="3.2" fill="#71717a" />
            <circle cx="110" cy="65" r="3.5" fill="#18181b" />
            <circle cx="65" cy="185" r="3.0" fill="#71717a" />
            <circle cx="85" cy="230" r="2.8" fill="#a1a1aa" />
            <circle cx="145" cy="195" r="3.5" fill="#18181b" />
            <circle cx="165" cy="125" r="3.8" fill="#18181b" />
            <circle cx="180" cy="220" r="3.0" fill="#71717a" />
            <circle cx="205" cy="85" r="3.2" fill="#52525b" />
            <circle cx="200" cy="155" r="3.5" fill="#18181b" />

            {/* Converged Gateway Feeders into BRC Core */}
            <circle cx="240" cy="105" r="3.5" fill="#18181b" />
            <circle cx="240" cy="155" r="3.5" fill="#18181b" />
            <circle cx="240" cy="205" r="3.5" fill="#18181b" />
          </g>

          {/* ======================================================== */}
          {/* CENTER: BRC CORE ARCHITECTURAL MODULE                    */}
          {/* ======================================================== */}
          <g id="brc-core">
            {/* Outer Structural Module */}
            <rect
              x="252"
              y="65"
              width="56"
              height="180"
              rx="3"
              fill="#ffffff"
              stroke="#18181b"
              strokeWidth="1.5"
            />
            {/* Inner Precision Inset Border */}
            <rect
              x="256"
              y="69"
              width="48"
              height="172"
              rx="1.5"
              fill="#fafaf9"
              stroke="#e4e4e7"
              strokeWidth="0.75"
            />

            {/* Input Gate Lines */}
            <line x1="240" y1="105" x2="252" y2="105" stroke="#18181b" strokeWidth="1.5" />
            <line x1="240" y1="155" x2="252" y2="155" stroke="#18181b" strokeWidth="1.5" />
            <line x1="240" y1="205" x2="252" y2="205" stroke="#18181b" strokeWidth="1.5" />

            {/* Internal BRC Synthesis Circuit Geometry */}
            <line x1="264" y1="155" x2="296" y2="155" stroke="#18181b" strokeWidth="2" strokeLinecap="round" />
            <circle cx="264" cy="155" r="3" stroke="#18181b" strokeWidth="1.5" fill="#ffffff" />
            <circle cx="264" cy="155" r="1.2" fill="#18181b" />

            {/* Upper Branch (to 105) */}
            <path
              d="M 276 155 L 284 105 L 296 105"
              stroke="#18181b"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="296" cy="105" r="3" stroke="#18181b" strokeWidth="1.5" fill="#ffffff" />
            <circle cx="296" cy="105" r="1.2" fill="#18181b" />

            {/* Middle Node (155) */}
            <circle cx="296" cy="155" r="3" stroke="#18181b" strokeWidth="1.5" fill="#ffffff" />
            <circle cx="296" cy="155" r="1.2" fill="#18181b" />

            {/* Lower Branch (to 205) */}
            <path
              d="M 276 155 L 284 205 L 296 205"
              stroke="#18181b"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="296" cy="205" r="3" stroke="#18181b" strokeWidth="1.5" fill="#ffffff" />
            <circle cx="296" cy="205" r="1.2" fill="#18181b" />

            {/* Output Feeder Conduit Lines */}
            <line x1="296" y1="105" x2="308" y2="105" stroke="#18181b" strokeWidth="1.75" />
            <line x1="296" y1="155" x2="308" y2="155" stroke="#18181b" strokeWidth="1.75" />
            <line x1="296" y1="205" x2="308" y2="205" stroke="#18181b" strokeWidth="1.75" />

            {/* Top Label Inside Module */}
            <text
              x="280"
              y="85"
              fontSize="7"
              fontFamily="monospace"
              fill="#18181b"
              fontWeight="bold"
              letterSpacing="0.08em"
              textAnchor="middle"
            >
              BRC CORE
            </text>

            {/* Bottom Label Inside Module */}
            <text
              x="280"
              y="230"
              fontSize="6"
              fontFamily="monospace"
              fill="#71717a"
              letterSpacing="0.1em"
              textAnchor="middle"
            >
              SYNTHESIS
            </text>
          </g>

          {/* ======================================================== */}
          {/* RIGHT SIDE: SIMPLIFIED ARCHITECTURE (3 Clean Highways)   */}
          {/* ======================================================== */}
          <g id="simplified-architecture">
            {/* Output Line 01 */}
            <line x1="308" y1="105" x2="495" y2="105" stroke="#18181b" strokeWidth="2.0" />
            {/* Output Line 02 */}
            <line x1="308" y1="155" x2="495" y2="155" stroke="#18181b" strokeWidth="2.0" />
            {/* Output Line 03 */}
            <line x1="308" y1="205" x2="495" y2="205" stroke="#18181b" strokeWidth="2.0" />

            {/* Line 01 Structured Nodes */}
            <circle cx="370" cy="105" r="4.0" fill="#ffffff" stroke="#18181b" strokeWidth="1.75" />
            <circle cx="370" cy="105" r="1.5" fill="#18181b" />
            <circle cx="430" cy="105" r="4.0" fill="#ffffff" stroke="#18181b" strokeWidth="1.75" />
            <circle cx="430" cy="105" r="1.5" fill="#18181b" />
            <circle cx="495" cy="105" r="5.0" fill="#18181b" />

            {/* Line 02 Structured Nodes */}
            <circle cx="370" cy="155" r="4.0" fill="#ffffff" stroke="#18181b" strokeWidth="1.75" />
            <circle cx="370" cy="155" r="1.5" fill="#18181b" />
            <circle cx="430" cy="155" r="4.0" fill="#ffffff" stroke="#18181b" strokeWidth="1.75" />
            <circle cx="430" cy="155" r="1.5" fill="#18181b" />
            <circle cx="495" cy="155" r="5.0" fill="#18181b" />

            {/* Line 03 Structured Nodes */}
            <circle cx="370" cy="205" r="4.0" fill="#ffffff" stroke="#18181b" strokeWidth="1.75" />
            <circle cx="370" cy="205" r="1.5" fill="#18181b" />
            <circle cx="430" cy="205" r="4.0" fill="#ffffff" stroke="#18181b" strokeWidth="1.75" />
            <circle cx="430" cy="205" r="1.5" fill="#18181b" />
            <circle cx="495" cy="205" r="5.0" fill="#18181b" />

            {/* Disciplined Vertical Alignment Ties */}
            <line x1="370" y1="115" x2="370" y2="145" stroke="#a1a1aa" strokeWidth="0.9" strokeDasharray="2 2" />
            <line x1="370" y1="165" x2="370" y2="195" stroke="#a1a1aa" strokeWidth="0.9" strokeDasharray="2 2" />
            <line x1="430" y1="115" x2="430" y2="145" stroke="#a1a1aa" strokeWidth="0.9" strokeDasharray="2 2" />
            <line x1="430" y1="165" x2="430" y2="195" stroke="#a1a1aa" strokeWidth="0.9" strokeDasharray="2 2" />

            {/* Output Endpoint Markers */}
            <text x="515" y="108" fontSize="8.5" fontFamily="monospace" fill="#18181b" fontWeight="bold">01</text>
            <text x="515" y="158" fontSize="8.5" fontFamily="monospace" fill="#18181b" fontWeight="bold">02</text>
            <text x="515" y="208" fontSize="8.5" fontFamily="monospace" fill="#18181b" fontWeight="bold">03</text>
          </g>
        </svg>
      </div>
    </div>
  );
}
