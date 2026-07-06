// Two-panel inline SVG illustrating axial myopia: light focusing in front of
// the retina in an elongated eye vs. focusing on the retina with treatment.
export default function AxialMyopiaDiagram() {
  return (
    <div className="max-w-4xl mx-auto bg-cream rounded-lg p-6 md:p-10">
      <svg
        viewBox="0 0 800 340"
        role="img"
        aria-labelledby="axial-myopia-title axial-myopia-desc"
        className="w-full h-auto"
      >
        <title id="axial-myopia-title">How axial myopia works</title>
        <desc id="axial-myopia-desc">
          Diagram comparing a myopic eye that has grown too long, where light
          focuses in front of the retina and vision is blurry, with a treated
          eye where light lands directly on the retina and vision is clear.
        </desc>

        {/* ===== Panel A: Without treatment ===== */}
        <g>
          <text x="190" y="28" textAnchor="middle" fontSize="13" letterSpacing="2.5" fill="#3D3D3D" fontWeight="600" style={{ textTransform: 'uppercase' }}>
            WITHOUT TREATMENT
          </text>

          {/* Elongated eyeball */}
          <ellipse cx="205" cy="150" rx="150" ry="95" fill="#FFFFFF" stroke="#3D3D3D" strokeWidth="2" />
          {/* Cornea bulge */}
          <path d="M 62 118 Q 38 150 62 182" fill="none" stroke="#3D3D3D" strokeWidth="2" />
          {/* Lens */}
          <ellipse cx="92" cy="150" rx="14" ry="34" fill="#F0EDE8" stroke="#3D3D3D" strokeWidth="1.5" />
          {/* Retina (back inner arc) */}
          <path d="M 320 85 Q 362 150 320 215" fill="none" stroke="#3D3D3D" strokeWidth="5" strokeLinecap="round" />

          {/* Light rays converging IN FRONT of retina */}
          <line x1="10" y1="120" x2="92" y2="128" stroke="#C9A96E" strokeWidth="2" />
          <line x1="10" y1="150" x2="92" y2="150" stroke="#C9A96E" strokeWidth="2" />
          <line x1="10" y1="180" x2="92" y2="172" stroke="#C9A96E" strokeWidth="2" />
          <line x1="92" y1="128" x2="255" y2="150" stroke="#C9A96E" strokeWidth="2" />
          <line x1="92" y1="150" x2="255" y2="150" stroke="#C9A96E" strokeWidth="2" />
          <line x1="92" y1="172" x2="255" y2="150" stroke="#C9A96E" strokeWidth="2" />
          {/* Focal point before the retina */}
          <circle cx="255" cy="150" r="5" fill="#C9A96E" />
          {/* Diverging dashed overshoot = blur on retina */}
          <line x1="255" y1="150" x2="330" y2="118" stroke="#C9A96E" strokeWidth="2" strokeDasharray="4 4" />
          <line x1="255" y1="150" x2="336" y2="150" stroke="#C9A96E" strokeWidth="2" strokeDasharray="4 4" />
          <line x1="255" y1="150" x2="330" y2="182" stroke="#C9A96E" strokeWidth="2" strokeDasharray="4 4" />

          {/* Label pointing to the focal point */}
          <line x1="255" y1="150" x2="228" y2="238" stroke="#8C8578" strokeWidth="1" />
          <text x="205" y="256" textAnchor="middle" fontSize="12" fill="#3D3D3D">
            Light focuses here — in front of the retina
          </text>

          {/* Axial length arrow */}
          <line x1="60" y1="282" x2="352" y2="282" stroke="#8C8578" strokeWidth="1.5" markerStart="url(#arrowL)" markerEnd="url(#arrowR)" />
          <text x="205" y="304" textAnchor="middle" fontSize="12" fill="#8C8578">
            Eye too long (axial length)
          </text>
          <text x="205" y="328" textAnchor="middle" fontSize="13" fill="#3D3D3D" fontStyle="italic">
            Distance vision is blurry
          </text>
        </g>

        {/* ===== Panel B: With myopia control ===== */}
        <g>
          <text x="600" y="28" textAnchor="middle" fontSize="13" letterSpacing="2.5" fill="#C9A96E" fontWeight="600" style={{ textTransform: 'uppercase' }}>
            WITH MYOPIA CONTROL
          </text>

          {/* Normal-length eyeball */}
          <ellipse cx="600" cy="150" rx="118" ry="95" fill="#FFFFFF" stroke="#3D3D3D" strokeWidth="2" />
          {/* Cornea bulge */}
          <path d="M 488 118 Q 464 150 488 182" fill="none" stroke="#3D3D3D" strokeWidth="2" />
          {/* Treatment cue: defocus lens / drops arc in front of eye */}
          <path d="M 462 105 Q 432 150 462 195" fill="none" stroke="#C9A96E" strokeWidth="3" strokeLinecap="round" />
          {/* Lens */}
          <ellipse cx="518" cy="150" rx="14" ry="34" fill="#F0EDE8" stroke="#3D3D3D" strokeWidth="1.5" />
          {/* Retina with gold accent */}
          <path d="M 683 85 Q 725 150 683 215" fill="none" stroke="#3D3D3D" strokeWidth="5" strokeLinecap="round" />
          <path d="M 690 92 Q 730 150 690 208" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" opacity="0.7" />

          {/* Light rays converging ON the retina */}
          <line x1="436" y1="120" x2="518" y2="128" stroke="#C9A96E" strokeWidth="2" />
          <line x1="436" y1="150" x2="518" y2="150" stroke="#C9A96E" strokeWidth="2" />
          <line x1="436" y1="180" x2="518" y2="172" stroke="#C9A96E" strokeWidth="2" />
          <line x1="518" y1="128" x2="700" y2="150" stroke="#C9A96E" strokeWidth="2" />
          <line x1="518" y1="150" x2="700" y2="150" stroke="#C9A96E" strokeWidth="2" />
          <line x1="518" y1="172" x2="700" y2="150" stroke="#C9A96E" strokeWidth="2" />
          {/* Focal point ON retina */}
          <circle cx="700" cy="150" r="5" fill="#C9A96E" />

          {/* Treatment label */}
          <line x1="446" y1="112" x2="428" y2="70" stroke="#8C8578" strokeWidth="1" />
          <text x="440" y="58" textAnchor="middle" fontSize="12" fill="#3D3D3D">
            Defocus lenses / dilute atropine drops
          </text>

          {/* Focal label */}
          <line x1="700" y1="150" x2="672" y2="238" stroke="#8C8578" strokeWidth="1" />
          <text x="620" y="256" textAnchor="middle" fontSize="12" fill="#3D3D3D">
            Light lands where it should — on the retina
          </text>

          <text x="600" y="328" textAnchor="middle" fontSize="13" fill="#3D3D3D" fontStyle="italic">
            Treatment slows the eye&apos;s growth — vision stays clear
          </text>
        </g>

        <defs>
          <marker id="arrowR" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M 0 0 L 8 4 L 0 8 z" fill="#8C8578" />
          </marker>
          <marker id="arrowL" markerWidth="8" markerHeight="8" refX="2" refY="4" orient="auto-start-reverse">
            <path d="M 0 0 L 8 4 L 0 8 z" fill="#8C8578" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}
