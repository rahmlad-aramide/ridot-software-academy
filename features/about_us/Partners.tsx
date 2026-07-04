import Image from 'next/image';

const partners = [
  {
    id: 1,
    name: 'ESVO',
    logo: '/partners/esvoLogo.jpeg',
  },
  {
    id: 2,
    name: 'Wealthyplace',
    initials: 'W',
  },
  {
    id: 3,
    name: 'E-digitals Report',
    logo: '/partners/edigitalsLogo.jpeg',
  },
  {
    id: 4,
    name: 'Women Techmakers Ilorin',
    initials: 'WTI',
  },
  {
    id: 5,
    name: 'Lola Cater Foundation',
    initials: 'LCF',
  },
  {
    id: 6,
    name: 'Women Techmakers Kano',
    initials: 'WTK',
  },
];

export default function Partners() {
  return (
    <div className="bg-white py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-xl leading-tight font-bold text-zinc-950 sm:text-4xl lg:text-5xl">
          Brands We Have Worked With
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-4 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex flex-col items-center justify-center gap-2 rounded-lg bg-gray-50 p-6 text-center text-lg font-semibold text-gray-700 shadow-sm transition-all hover:bg-gray-100"
            >
              {partner.logo ? (
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-contain"
                />
              ) : (
                <div className="bg-primary flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-white">
                  {partner.initials || partner.name.slice(0, 2).toUpperCase()}
                </div>
              )}
              <span className="text-lg font-semibold text-gray-700">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
