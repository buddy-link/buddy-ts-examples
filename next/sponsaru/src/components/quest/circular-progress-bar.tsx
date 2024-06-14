import { cn } from '@/lib/utils';
import React, { useMemo } from 'react';

interface CircularProgressBarProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  text: string | number;
  className?: string;
  completed?: boolean;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  percentage,
  size = 43,
  strokeWidth = 4,
  text = 100,
  className = '',
  completed = false,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;
  const color = completed ? '#4ade80' : '#EA5455';
  const color2 = completed ? '#78f1a4' : '#FEB692';

  const gradientId = useMemo(() => `gradient-${Math.random()}`, []);

  return (
    <div className="relative flex items-center justify-center">
      <svg width={size} height={size} className={cn('transform rotate-[-90deg]', className)}>
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: color, stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: color2, stopOpacity: 1 }} />
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
          stroke={`url(#${gradientId})`}
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
      <span className={cn('absolute text-sm font-bold text-light-primary', completed && 'text-green-400')}>{text}</span>
    </div>
  );
};

export default CircularProgressBar;
