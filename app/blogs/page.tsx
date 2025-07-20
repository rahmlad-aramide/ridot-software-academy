'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import blogPosts from '@/app/blogs/blogPosts';
import Community from '@/features/about_us/Community';

export default function Page() {
  const searchParams = useSearchParams();
  const category = searchParams.get('post');

  const filteredPosts = category
    ? blogPosts.filter(
        (post) => post.category.toLowerCase() === category.toLowerCase(),
      )
    : blogPosts;

  return (
    <main>
      <section className="bg-[#010080] text-white">
        <div className="xs:h-[218px] flex h-[128px] w-full items-center justify-center md:h-[270px]">
          <h1 className="text-center text-[40px] font-bold md:text-6xl">
            Blog
          </h1>
        </div>
      </section>

      <div className="h-full w-full p-4 lg:pt-10 xl:p-20">
        <ul className="xs:grid-cols-2 grid grid-cols-1 gap-6 md:grid-cols-3">
          {filteredPosts.map(({ id, category, image, title, excerpt }) => (
            <li key={id} className="w-full">
              <div className="relative h-[342px] w-full">
                <Image
                  className="rounded-[20px] object-cover"
                  src={image}
                  alt={title}
                  quality={100}
                  fill
                  sizes="100vw"
                  priority
                />
              </div>
              <div className="mt-7 space-y-5">
                <h3 className="text-base font-semibold text-gray-900 md:text-[20px]">
                  {title} {category}
                </h3>
                <p className="text-sm font-medium text-gray-700 md:text-base">
                  {excerpt}
                </p>
                <Link
                  href={`/blogs/${id}`}
                  className="mt-1 inline-block text-sm font-semibold text-[rgb(1,0,128)] hover:underline md:text-base"
                >
                  Read more
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <Community />
    </main>
  );
}
