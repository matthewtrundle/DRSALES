'use client';

interface AbstractBackgroundProps {
  variant?: 'iris' | 'refraction' | 'topography' | 'mesh' | 'grid';
  opacity?: number;
  className?: string;
}

export default function AbstractBackground({
  variant = 'mesh',
  opacity = 0.5,
  className = '',
}: AbstractBackgroundProps) {
  const backgrounds: Record<string, React.ReactNode> = {
    // Abstract iris-inspired concentric circles
    iris: (
      <div className="absolute inset-0 overflow-hidden" style={{ opacity }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border animate-breathe"
              style={{
                width: `${(i + 1) * 100}px`,
                height: `${(i + 1) * 100}px`,
                borderColor: i % 2 === 0 ? 'rgba(12, 140, 233, 0.1)' : 'rgba(220, 160, 46, 0.08)',
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>
    ),

    // Light refraction prismatic effect
    refraction: (
      <div className="absolute inset-0 overflow-hidden" style={{ opacity }}>
        <div
          className="absolute -top-1/2 -left-1/4 w-[150%] h-[200%] rotate-12"
          style={{
            background: `
              linear-gradient(
                135deg,
                transparent 0%,
                rgba(12, 140, 233, 0.03) 20%,
                rgba(100, 200, 255, 0.02) 35%,
                rgba(220, 160, 46, 0.02) 50%,
                rgba(255, 200, 100, 0.02) 65%,
                rgba(12, 140, 233, 0.03) 80%,
                transparent 100%
              )
            `,
          }}
        />
        <div
          className="absolute -top-1/4 -right-1/4 w-[100%] h-[150%] -rotate-45"
          style={{
            background: `
              linear-gradient(
                45deg,
                transparent 0%,
                rgba(220, 160, 46, 0.02) 30%,
                rgba(12, 140, 233, 0.03) 70%,
                transparent 100%
              )
            `,
          }}
        />
      </div>
    ),

    // Topographical contour lines
    topography: (
      <div className="absolute inset-0 overflow-hidden" style={{ opacity }}>
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="topoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(12, 140, 233, 0.1)" />
              <stop offset="100%" stopColor="rgba(12, 140, 233, 0.02)" />
            </linearGradient>
          </defs>
          {[...Array(10)].map((_, i) => (
            <ellipse
              key={i}
              cx={50 + Math.sin(i) * 10}
              cy={50 + Math.cos(i) * 5}
              rx={20 + i * 8}
              ry={15 + i * 6}
              fill="none"
              stroke="url(#topoGrad)"
              strokeWidth="0.2"
              opacity={1 - i * 0.08}
            />
          ))}
        </svg>
      </div>
    ),

    // Gradient mesh
    mesh: (
      <div className="absolute inset-0" style={{ opacity }}>
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(at 20% 30%, rgba(12, 140, 233, 0.08) 0px, transparent 50%),
              radial-gradient(at 80% 20%, rgba(220, 160, 46, 0.06) 0px, transparent 50%),
              radial-gradient(at 40% 80%, rgba(12, 140, 233, 0.05) 0px, transparent 50%),
              radial-gradient(at 90% 70%, rgba(220, 160, 46, 0.04) 0px, transparent 50%)
            `,
          }}
        />
      </div>
    ),

    // Subtle grid pattern
    grid: (
      <div className="absolute inset-0" style={{ opacity: opacity * 0.3 }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(12, 140, 233, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(12, 140, 233, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>
    ),
  };

  return (
    <div className={`pointer-events-none ${className}`}>
      {backgrounds[variant]}
    </div>
  );
}
