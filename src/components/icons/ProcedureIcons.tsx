'use client';

import { SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

// Shared gradient definitions
const GradientDefs = () => (
  <defs>
    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#D4AF37" />
      <stop offset="50%" stopColor="#C9A227" />
      <stop offset="100%" stopColor="#B8960F" />
    </linearGradient>
    <linearGradient id="creamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#FAF6F1" />
      <stop offset="100%" stopColor="#F5EDE4" />
    </linearGradient>
    <linearGradient id="warmGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#F5EDE4" />
      <stop offset="50%" stopColor="#E8DFD4" />
      <stop offset="100%" stopColor="#D4C4B0" />
    </linearGradient>
    <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#C9A227" floodOpacity="0.15"/>
    </filter>
  </defs>
);

// Generic Eye Icon - for cloudy vision / cataracts
export function EyeIcon({ size = 64, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <GradientDefs />
      {/* Outer eye shape */}
      <path
        d="M32 12C18 12 6 32 6 32C6 32 18 52 32 52C46 52 58 32 58 32C58 32 46 12 32 12Z"
        fill="url(#creamGradient)"
        stroke="url(#goldGradient)"
        strokeWidth="2"
        filter="url(#softShadow)"
      />
      {/* Iris */}
      <circle
        cx="32"
        cy="32"
        r="12"
        fill="url(#warmGradient)"
        stroke="url(#goldGradient)"
        strokeWidth="1.5"
      />
      {/* Pupil */}
      <circle cx="32" cy="32" r="5" fill="#C9A227" />
      {/* Highlight */}
      <circle cx="29" cy="29" r="2" fill="#FAF6F1" opacity="0.8" />
      {/* Cloudy overlay suggestion */}
      <circle cx="32" cy="32" r="10" fill="#E8DFD4" opacity="0.3" />
    </svg>
  );
}

// Vision Free Icon - person without glasses
export function VisionFreeIcon({ size = 64, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <GradientDefs />
      {/* Face outline */}
      <ellipse
        cx="32"
        cy="30"
        rx="16"
        ry="20"
        fill="url(#creamGradient)"
        stroke="url(#goldGradient)"
        strokeWidth="2"
        filter="url(#softShadow)"
      />
      {/* Left eye */}
      <ellipse cx="26" cy="28" rx="4" ry="2.5" fill="url(#warmGradient)" stroke="#C9A227" strokeWidth="1" />
      <circle cx="26" cy="28" r="1.5" fill="#C9A227" />
      {/* Right eye */}
      <ellipse cx="38" cy="28" rx="4" ry="2.5" fill="url(#warmGradient)" stroke="#C9A227" strokeWidth="1" />
      <circle cx="38" cy="28" r="1.5" fill="#C9A227" />
      {/* Smile */}
      <path
        d="M26 38C28 41 36 41 38 38"
        stroke="#C9A227"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Sparkle/clarity indicator */}
      <path d="M50 14L52 18L56 16L52 20L54 24L50 20L46 22L50 18L48 14L50 14Z" fill="#C9A227" opacity="0.7" />
      <path d="M10 20L11 22L14 21L11 23L12 26L10 23L7 24L10 22L9 19L10 20Z" fill="#C9A227" opacity="0.5" />
    </svg>
  );
}

// Tear Drop Icon - for dry eye
export function TearDropIcon({ size = 64, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <GradientDefs />
      {/* Eye outline */}
      <path
        d="M32 20C22 20 14 32 14 32C14 32 22 44 32 44C42 44 50 32 50 32C50 32 42 20 32 20Z"
        fill="url(#creamGradient)"
        stroke="url(#goldGradient)"
        strokeWidth="2"
        filter="url(#softShadow)"
      />
      {/* Iris */}
      <circle cx="32" cy="32" r="8" fill="url(#warmGradient)" stroke="#C9A227" strokeWidth="1" />
      {/* Pupil */}
      <circle cx="32" cy="32" r="3" fill="#C9A227" />
      {/* Tear drop */}
      <path
        d="M44 38C44 38 48 44 48 48C48 52 45 55 44 55C43 55 40 52 40 48C40 44 44 38 44 38Z"
        fill="url(#goldGradient)"
        opacity="0.8"
      />
      {/* Tear highlight */}
      <circle cx="43" cy="46" r="1.5" fill="#FAF6F1" opacity="0.6" />
    </svg>
  );
}

// Lens Icon - IOL for cataract surgery
export function LensIcon({ size = 64, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <GradientDefs />
      {/* IOL lens body - circular with haptics */}
      <circle
        cx="32"
        cy="32"
        r="14"
        fill="url(#creamGradient)"
        stroke="url(#goldGradient)"
        strokeWidth="2"
        filter="url(#softShadow)"
      />
      {/* Inner optic zone */}
      <circle
        cx="32"
        cy="32"
        r="8"
        fill="url(#warmGradient)"
        stroke="#C9A227"
        strokeWidth="1"
      />
      {/* Haptic arms */}
      <path
        d="M18 32C14 28 10 26 8 28C6 30 8 36 12 38C16 40 18 38 18 32Z"
        fill="url(#goldGradient)"
        opacity="0.7"
      />
      <path
        d="M46 32C50 28 54 26 56 28C58 30 56 36 52 38C48 40 46 38 46 32Z"
        fill="url(#goldGradient)"
        opacity="0.7"
      />
      {/* Center mark */}
      <circle cx="32" cy="32" r="2" fill="#C9A227" />
    </svg>
  );
}

// Cornea Layers Icon - for corneal transplant
export function CorneaLayersIcon({ size = 64, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <GradientDefs />
      {/* Cross-section view of cornea layers */}
      {/* Epithelium - outer layer */}
      <path
        d="M8 24C16 18 32 16 48 18C56 20 56 24 56 24L56 28C48 22 32 20 16 22C8 24 8 28 8 28L8 24Z"
        fill="url(#goldGradient)"
        opacity="0.9"
        filter="url(#softShadow)"
      />
      {/* Stroma - middle layer */}
      <path
        d="M8 28C16 22 32 20 48 22C56 24 56 28 56 28L56 38C48 32 32 30 16 32C8 34 8 38 8 38L8 28Z"
        fill="url(#creamGradient)"
        stroke="#C9A227"
        strokeWidth="1"
      />
      {/* Endothelium - inner layer */}
      <path
        d="M8 38C16 32 32 30 48 32C56 34 56 38 56 38L56 44C48 40 32 38 16 40C8 42 8 46 8 46L8 38Z"
        fill="url(#warmGradient)"
        stroke="url(#goldGradient)"
        strokeWidth="1.5"
      />
      {/* Layer labels - small dots */}
      <circle cx="60" cy="26" r="2" fill="#C9A227" />
      <circle cx="60" cy="34" r="2" fill="#E8DFD4" stroke="#C9A227" strokeWidth="0.5" />
      <circle cx="60" cy="42" r="2" fill="#D4C4B0" stroke="#C9A227" strokeWidth="0.5" />
    </svg>
  );
}

// Laser Icon - for LASIK/PRK
export function LaserIcon({ size = 64, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <GradientDefs />
      {/* Laser device */}
      <rect
        x="24"
        y="4"
        width="16"
        height="12"
        rx="3"
        fill="url(#warmGradient)"
        stroke="url(#goldGradient)"
        strokeWidth="1.5"
        filter="url(#softShadow)"
      />
      {/* Laser beam */}
      <path
        d="M32 16L32 36"
        stroke="url(#goldGradient)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M32 16L32 36"
        stroke="#FAF6F1"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.5"
      />
      {/* Beam glow */}
      <ellipse cx="32" cy="26" rx="4" ry="10" fill="#C9A227" opacity="0.15" />
      {/* Eye receiving treatment */}
      <path
        d="M32 36C22 36 14 46 14 46C14 46 22 56 32 56C42 56 50 46 50 46C50 46 42 36 32 36Z"
        fill="url(#creamGradient)"
        stroke="url(#goldGradient)"
        strokeWidth="1.5"
      />
      {/* Cornea being reshaped */}
      <circle cx="32" cy="46" r="6" fill="url(#warmGradient)" stroke="#C9A227" strokeWidth="1" />
      <circle cx="32" cy="46" r="2.5" fill="#C9A227" />
      {/* Impact point */}
      <circle cx="32" cy="40" r="3" fill="#C9A227" opacity="0.3" />
    </svg>
  );
}

// Implant Icon - for ICL
export function ImplantIcon({ size = 64, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <GradientDefs />
      {/* Eye cross-section */}
      <ellipse
        cx="32"
        cy="32"
        rx="26"
        ry="20"
        fill="url(#creamGradient)"
        stroke="url(#goldGradient)"
        strokeWidth="2"
        filter="url(#softShadow)"
      />
      {/* Cornea */}
      <path
        d="M6 32C6 32 12 20 32 20C52 20 58 32 58 32"
        stroke="#C9A227"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Iris */}
      <path
        d="M18 32C18 32 22 26 32 26C42 26 46 32 46 32C46 32 42 38 32 38C22 38 18 32 18 32Z"
        fill="url(#warmGradient)"
        stroke="#C9A227"
        strokeWidth="1"
      />
      {/* ICL lens behind iris */}
      <ellipse
        cx="32"
        cy="32"
        rx="10"
        ry="4"
        fill="url(#goldGradient)"
        opacity="0.6"
      />
      {/* Natural lens */}
      <ellipse
        cx="32"
        cy="40"
        rx="8"
        ry="6"
        fill="#F5EDE4"
        stroke="#C9A227"
        strokeWidth="0.5"
        opacity="0.5"
      />
      {/* Pupil */}
      <circle cx="32" cy="32" r="4" fill="#3D3D3D" opacity="0.8" />
      {/* Highlight */}
      <circle cx="30" cy="30" r="1.5" fill="#FAF6F1" opacity="0.6" />
    </svg>
  );
}

// Precision Icon - for surgical precision
export function PrecisionIcon({ size = 64, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <GradientDefs />
      {/* Target circles */}
      <circle
        cx="32"
        cy="32"
        r="26"
        fill="none"
        stroke="url(#goldGradient)"
        strokeWidth="2"
        filter="url(#softShadow)"
      />
      <circle
        cx="32"
        cy="32"
        r="18"
        fill="url(#creamGradient)"
        stroke="url(#goldGradient)"
        strokeWidth="1.5"
      />
      <circle
        cx="32"
        cy="32"
        r="10"
        fill="url(#warmGradient)"
        stroke="#C9A227"
        strokeWidth="1"
      />
      <circle cx="32" cy="32" r="4" fill="url(#goldGradient)" />
      {/* Crosshairs */}
      <line x1="32" y1="2" x2="32" y2="16" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="32" y1="48" x2="32" y2="62" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="2" y1="32" x2="16" y2="32" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="48" y1="32" x2="62" y2="32" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// Export all icons
export const ProcedureIcons = {
  Eye: EyeIcon,
  VisionFree: VisionFreeIcon,
  TearDrop: TearDropIcon,
  Lens: LensIcon,
  CorneaLayers: CorneaLayersIcon,
  Laser: LaserIcon,
  Implant: ImplantIcon,
  Precision: PrecisionIcon,
};

export default ProcedureIcons;
