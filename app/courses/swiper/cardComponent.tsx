import Image from 'next/image';

type CardProps = {
  name: string;
  content: string;
};

export default function Card({ name, content }: CardProps) {
  return (
    <div className="xs:h-[340px] h-[424px] w-full flex-shrink-0 rounded-[20px] bg-white p-8 shadow-md md:h-[384px] md:max-w-[559px]">
      <div className="relative h-[50px] w-[70px]">
        <Image
          className="object-fit"
          src="/quote.png"
          alt="Quote"
          quality={100}
          fill
          sizes="100vw"
          priority
        />
      </div>
      <p className="xs:text-base px-4 pt-[50px] text-sm">{content}</p>
      <p className="px-4 pt-5 text-xl font-semibold">{name}</p>
    </div>
  );
}
