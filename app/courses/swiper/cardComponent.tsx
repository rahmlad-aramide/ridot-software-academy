import Image from 'next/image';

type CardProps = {
    name: string;
    content: string;
}

export default function Card({ name, content }: CardProps) {
    return (
        <div className="bg-white rounded-[20px] p-8 w-full flex-shrink-0 md:max-w-[559px] h-[424px] xs:h-[340px] md:h-[384px] shadow-md">
<div className="relative w-[70px] h-[50px]">
              <Image
                className="object-cover"
                src="/icon.png"
                alt="icon"
                quality={100}
                fill
                sizes="100vw"
                priority
              />
            </div>
            <p className="text-sm xs:text-base px-4 pt-[50px]">{content}</p>
            <p className="text-xl font-semibold px-4 pt-5">{name}</p>
        </div>
        
    )
}