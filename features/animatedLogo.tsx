import { useEffect, useState } from 'react';
import Image from 'next/image';
import image1 from '@/public/one.png';
import image2 from '@/public/two.png';
import image3 from '@/public/three.png';
import image4 from '@/public/four.png';
import image5 from '@/public/five.png';
import image6 from '@/public/six.png';
import image7 from '@/public/seven.png';
import image8 from '@/public/eight.png';
import image9 from '@/public/nine.png';
import image10 from '@/public/ten.png';
import image11 from '@/public/eleven.png';

export default function AnimatedLogo() {
  const imagesArray = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
  ];

  // Specify which icons should move toward the center
  const movingIconsIndexes = [2, 5, 8]; // image5 and image7 (0-based)

  const [orbitRadius, setOrbitRadius] = useState(13); // default radius
  const [movingIndexes, setMovingIndexes] = useState<number[]>([]);

  // Responsive orbit radius
  useEffect(() => {
    const handleResize = () => {
      setOrbitRadius(window.innerWidth >= 768 ? 13 : 9);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Trigger movement at intervals
  useEffect(() => {
    const interval = setInterval(() => {
      setMovingIndexes(movingIconsIndexes);

      // Return icons after 2 seconds
      setTimeout(() => setMovingIndexes([]), 2000);
    }, 10000); // every 10s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex h-[22rem] w-full items-center justify-center md:w-1/2">
      {/* Orbit container spins */}
      <div className="animate-spin-slow absolute inset-0">
        {imagesArray.map((src, index) => {
          const angle = (360 / imagesArray.length) * index;
          const rad = (angle * Math.PI) / 180;
          const x = orbitRadius * Math.sin(rad);
          const y = -orbitRadius * Math.cos(rad);

          const isMoving = movingIndexes.includes(index);

          return (
            <div
              key={index}
              className="absolute transition-all duration-1000 ease-in-out"
              style={{
                left: '50%',
                top: '50%',
                transform: isMoving
                  ? 'translate(-50%, -50%)' // move to center
                  : `translate(${x}rem, ${y}rem) translate(-50%, -50%)`,
              }}
            >
              <Image
                src={src}
                alt={`Orbit ${index + 1}`}
                width={window.innerWidth >= 768 ? 48 : 32}
                height={window.innerWidth >= 768 ? 48 : 32}
                className="rounded-full shadow-md"
              />
            </div>
          );
        })}
      </div>

      {/* Center logo */}
      <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform">
        <Image
          src="/ridot.png"
          width={200}
          height={200}
          alt="ridot logo"
          className="w-32 md:w-48"
        />
      </div>

      <style jsx>{`
        .animate-spin-slow {
          animation: spin 20s linear infinite;
          transform-origin: center center;
          animation-direction: reverse;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
