import React from 'react';

interface svgProps {
  className?: string;
}

export default function Svg6({ className }: svgProps) {
  return (
    <svg
      className={className}
      width="68"
      height="56"
      viewBox="0 0 68 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M42.0912 54.3286C31.3615 56.7044 22.6867 56.3341 16.0664 53.2177C9.51165 50.0868 4.78492 44.0518 1.88636 35.1125C-1.0122 26.1732 -0.570338 18.9936 3.21192 13.574C7.05962 8.1397 14.3483 4.23469 25.0778 1.85889C35.8729 -0.531399 44.5478 -0.161105 51.1026 2.96976C57.7072 6.03757 62.4665 12.0654 65.3809 21.0533C68.2952 30.0411 67.8285 37.2522 63.9808 42.6864C60.1828 48.0576 52.8862 51.9383 42.0912 54.3286Z"
        fill="#E1EDF2"
      />
    </svg>
  );
}
