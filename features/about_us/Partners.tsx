import React from 'react';

const partners = [
  'ESVO',
  'Wealthyplace',
  'E-digitals Report',
  'Women Techmakers Ilorin',
  'Lola cater foundation',
  'Women Techmakers Kano',
];

export default function Partners() {
  return (
    <div className="bg-white py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-xl font-bold leading-tight text-zinc-950 sm:text-4xl lg:text-5xl">
          Brands We Have Worked With
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {partners.map((partner) => (
            <div
              key={partner}
              className="flex items-center justify-center rounded-lg bg-gray-50 p-6 text-center text-lg font-semibold text-gray-700 shadow-sm transition-all hover:bg-gray-100"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
