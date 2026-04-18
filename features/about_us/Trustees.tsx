import React from 'react';

export default function Trustees() {
  return (
    <div className="bg-gradient-to-b from-[#f7f7ff] to-white py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <h2 className="text-xl leading-tight font-bold text-zinc-950 sm:text-4xl lg:text-5xl">
          Trustees and Advisory Board
        </h2>
        <div className="mt-10 flex flex-col items-center justify-center">
          <div className="max-w-sm rounded-xl border border-gray-100 bg-white p-8 shadow-md">
            <h3 className="text-primary text-xl font-bold">
              Prof. Misbaudeen AbdulHammed
            </h3>
            <p className="mt-2 font-medium text-gray-600">
              Lecturer of Biochemistry
            </p>
            <p className="mt-1 text-gray-500">
              Dean of studies @ Ridot Software Academy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
