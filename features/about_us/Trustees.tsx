import React from 'react';

export default function Trustees() {
  return (
    <div className="bg-gradient-to-b from-[#f7f7ff] to-white py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="text-xl font-bold leading-tight text-zinc-950 sm:text-4xl lg:text-5xl">
          Trustees and Advisory Board
        </h2>
        <div className="mt-10 flex flex-col items-center justify-center">
           <div className="max-w-sm rounded-xl bg-white p-8 shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-primary">Prof. Misbaudeen AbdulHammed</h3>
              <p className="mt-2 text-gray-600 font-medium">Lecturer of Biochemistry</p>
              <p className="mt-1 text-gray-500">Dean of studies @ Ridot Software Academy</p>
           </div>
        </div>
      </div>
    </div>
  );
}
