import React from 'react';

interface svgProps {
  className?: string;
}

export default function Svg1({ className }: svgProps) {
  return (
    <svg
      className={className}
      width="64"
      height="53"
      viewBox="0 0 64 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M48.7611 4.93756C53.442 5.90903 57.1047 8.91494 58.3126 12.7763L62.9195 27.5025C64.0859 31.2312 62.7856 35.1944 59.4984 37.9296L45.8157 49.315C42.5285 52.0503 37.7417 53.1522 33.2216 52.2141L15.3697 48.5091C10.6888 47.5377 7.02607 44.5318 5.81813 40.6704L1.21133 25.9442C0.0448879 22.2155 1.34516 18.2524 4.63235 15.5171L18.3151 4.13166C21.6023 1.39639 26.3891 0.294493 30.9092 1.23259L48.7611 4.93756Z"
        fill="#1BCAFF"
      />
    </svg>
  );
}
