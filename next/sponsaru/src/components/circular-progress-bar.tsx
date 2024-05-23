import React from 'react';

interface CircularProgressBarProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  text: string | number;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  percentage,
  size = 43,
  strokeWidth = 4,
  text = 100,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center">
      <svg width={size} height={size} className="transform rotate-[-90deg]">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#EA5455', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: ' #FEB692', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <circle
          className="text-gray-200"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
        />
        <circle
          className="text-orange-500"
          stroke="url(#gradient)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 0.5s ease' }}
        />
      </svg>
      <span className="absolute text-sm font-bold text-light-primary">{text}</span>
    </div>
  );
};

export default CircularProgressBar;
