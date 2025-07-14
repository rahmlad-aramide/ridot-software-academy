import Image from 'next/image';
import Blog from '@/app/blogs/blog';
import Community from '@/features/about_us/Community';

export default function Page() {
  return (
    <main>
      <div className="relative h-[200px] w-full px-5 pt-5 sm:h-[400px] md:h-[636px] md:px-20 md:pt-20">
        <div className="relative h-full w-full">
          <Image
            className="object-cover"
            src="/inner-blog-image.png"
            alt="inner-blog-img"
            quality={100}
            fill
            sizes="100vw"
            priority
          />
        </div>
      </div>

      <div className="flex flex-col space-y-5 px-5 pt-5 sm:px-10 sm:pt-10 md:px-20 md:pt-10">
        <h2 className="text-2xl font-bold md:text-[48px]">
          Technology Development in Nigeria
        </h2>
        <p className="text-sm text-[rgb(89,89,92)] md:text-[20px]">
          Technology in Nigeria is steadily growing with advancements in various
          sectors such as fintech, e-commerce, and mobile technology.
          Initiatives like tech hubs, incubators, and government support
          programs have fostered a thriving startup ecosystem. Additionally, the
          increased availability of high-speed internet and the rise of mobile
          connectivity have contributed to the expansion of digital services
          across the country. Despite all hurdles in the realm of technology in
          Nigeria, the government still scales in all areas. However, the
          country is still faced with challenges that hinder the continuous
          progress of the state of technology. Challenges such as inadequate
          infrastructure, access to funding, and digital literacy gaps still
          exist. In addition, a lot of tech innovators in Nigeria who are
          willing to improve the country end up discouraged and even give up due
          to the unavailability of resources and amenities, especially
          electricity.
        </p>
      </div>

      <div className="flex flex-col space-y-5 px-5 pt-5 pb-10 sm:px-10 sm:pt-10 sm:pb-15 md:px-20 md:pt-10 md:pb-20">
        <h2 className="text-2xl font-bold md:text-[48px]">
          Brief History About Technology in Nigeria
        </h2>
        <p className="text-sm text-[rgb(89,89,92)] md:text-[20px]">
          Technology in Nigeria has evolved significantly over the years. In the
          early days, technological advancements were mainly driven by the oil
          and gas industry. However, the democratization of the internet in the
          late 20th century opened up new opportunities for innovation. In the
          2000s, mobile telecommunications began to flourish with the widespread
          adoption of mobile phones and the emergence of mobile money services.
          The mid-2000s saw the establishment of tech hubs and incubators, such
          as co-creation Hub (CcHub) and iDEA Hub, which played a crucial role
          in nurturing startups and fostering innovation. In 2010, the Nigerian
          government launched the National Information Technology Development
          Agency (NITDA) to promote the development and regulation of
          information technology in the country. In recent years, Nigeria has
          witnessed a surge in tech startups, particularly in sectors like
          fintech, e-commerce, and agritech. Initiatives like the Nigerian
          Communications Commission’s (NCC) licensing of spectrum bands for
          broadband internet have helped improve internet access and
          connectivity nationwide. Nigeria is still developing in the path of
          technology and we hope to see more wonderful innovations.
        </p>
      </div>

      <div className="bg-[rgb(242,241,232)] pt-10 md:pt-30">
        <h2 className="px-5 text-2xl leading-none font-bold sm:px-10 md:px-20 md:text-[48px] md:leading-[0px]">
          Most Recent
        </h2>
        <Blog limit={3} />
      </div>
      <Community />
    </main>
  );
}
