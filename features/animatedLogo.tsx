'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import image1 from '@/public/node.png';
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
    image6,
    image5,
    image7,
    image8,
    image9,
    image10,
    image11,
  ];

  const [orbitRadius, setOrbitRadius] = useState(13);
  const [movingIndexes, setMovingIndexes] = useState<number[]>([]);
  const [iconSize, setIconSize] = useState(32);
  const [rotation, setRotation] = useState(0);


  useEffect(() => {
    const handleResize = () => {
      setOrbitRadius(window.innerWidth >= 768 ? 13 : 9);
      setIconSize(window.innerWidth >= 768 ? 48 : 32);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
  const getRandomIndexes = () => {
    const start = Math.floor(Math.random() * imagesArray.length);
    return [
      start,
      (start + 3) % imagesArray.length,
      (start + 6) % imagesArray.length,
    ];
  };

  const interval = setInterval(() => {
    setMovingIndexes(getRandomIndexes());
    setTimeout(() => setMovingIndexes([]), 2000);
  }, 10000);

  return () => clearInterval(interval);
}, [imagesArray.length]);

useEffect(() => {
  const interval = setInterval(() => {
    setRotation((prev) => (prev + 1) % 360);
  }, 50); // ~20s for full rotation (360 * 55ms ≈ 20s)
  return () => clearInterval(interval);
}, []);

  return (
    <div className="relative flex h-[22rem] w-full items-center justify-center md:w-1/2">
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
              className="absolute transition-all duration-1000 ease-out"
              style={{
                left: '50%',
                top: '50%',
                transform: isMoving
                  ? 'translate(-50%, -50%)'
                  : `translate(${x}rem, ${y}rem) translate(-50%, -50%) rotate(${- rotation + angle}deg)`,
                willChange: 'transform',
              }}
            >
              <Image
                src={src}
                alt={`Orbit ${index + 1}`}
                width={iconSize}
                height={iconSize}
                className="rounded-md shadow-md"
              />
            </div>
          );
        })}
      </div>

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
