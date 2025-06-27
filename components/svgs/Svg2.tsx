import React from 'react';

interface svgProps {
  className?: string;
}

export default function Svg2({ className }: svgProps) {
  return (
    <svg
      className={className}
      width="78"
      height="69"
      viewBox="0 0 78 69"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.93776 36.5242C3.05175 31.8122 -0.391201 29.4561 0.130058 26.6865C0.651314 23.917 4.79761 22.5363 13.0901 19.7752L59.8267 4.21358C68.8451 1.21078 73.3542 -0.290647 76.0936 1.58387C78.8328 3.45835 77.8885 7.39915 75.9997 15.2807L66.2114 56.126C64.4746 63.3733 63.6063 66.9969 60.4106 67.9364C57.2149 68.8759 53.772 66.52 46.886 61.8079L9.93776 36.5242Z"
        fill="#FFA8A8"
      />
    </svg>
  );
}
