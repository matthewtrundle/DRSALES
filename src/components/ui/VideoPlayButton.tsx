'use client';

interface VideoPlayButtonProps {
  onClick?: () => void;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function VideoPlayButton({
  onClick,
  label = 'Watch Video',
  size = 'md',
  className = '',
}: VideoPlayButtonProps) {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-20 h-20',
  };

  const iconSizes = {
    sm: 'w-4 h-4 ml-0.5',
    md: 'w-5 h-5 ml-0.5',
    lg: 'w-6 h-6 ml-1',
  };

  return (
    <button
      onClick={onClick}
      className={`group flex flex-col items-center gap-3 ${className}`}
      aria-label={label}
    >
      <div
        className={`${sizeClasses[size]} rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:bg-white group-hover:scale-110 transition-all duration-300`}
      >
        <svg
          className={`${iconSizes[size]} text-primary`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
      {label && (
        <span className="text-white text-sm font-medium tracking-wide uppercase opacity-90 group-hover:opacity-100 transition-opacity">
          {label}
        </span>
      )}
    </button>
  );
}
