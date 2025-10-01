import React from 'react';

interface svgProps {
  className?: string;
}

export default function Svg4({ className }: svgProps) {
  return (
    <svg
      className={className}
      width="61"
      height="51"
      viewBox="0 0 61 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M37.881 48.9397C28.2246 51.0778 20.4174 50.7446 14.4594 47.9399C8.56025 45.1222 4.30631 39.6908 1.69768 31.6457C-0.910952 23.6005 -0.51329 17.1391 2.89065 12.2615C6.35348 7.37085 12.9131 3.85643 22.5694 1.71827C32.2848 -0.432925 40.0919 -0.0996707 45.9911 2.71803C51.935 5.47898 56.2183 10.9039 58.8412 18.9928C61.464 27.0816 61.0439 33.5714 57.5811 38.462C54.163 43.2959 47.5963 46.7885 37.881 48.9397Z"
        fill="#22C55E"
      />
    </svg>
  );
}
