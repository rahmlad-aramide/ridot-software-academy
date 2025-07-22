
import Image from 'next/image';
import Link from 'next/link';
import { MdArrowBack } from 'react-icons/md';
import blogPosts from '@/app/blogs/blogPosts';
import Community from '@/features/about_us/Community';

interface Params {
  slug: string;
}

interface PageProps {
   params: Promise<Params>;
}

export default async function BlogPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.id === slug);

  if (!post) {
    return <div className="p-10 font-bold text-red-600">Post not found</div>;
  }

  const relatedPosts = blogPosts
    .filter((p) => p.category !== post.category && p.id !== post.id)
    .sort((a, b) => Number(b.id) - Number(a.id))
    .slice(0, 3);

  return (
    <main>
      <Link href="/blogs" className='flex items-center justify-center space-x-1 py-[6px] px-[8px] w-[85px] h-[40px] border border-[rgb(1,0,128)] rounded-[8px] md:ml-20 md:mt-20 cursor-pointer hover:text-[rgb(1,0,128)] hover:border-white'>
         <MdArrowBack className="text-xl" />
    <span>Back</span>
    </Link>
      <div className="xs:h-[400px] relative h-[200px] w-full px-5 pt-3 md:h-[636px] md:px-20 md:pt-10">
        <div className="relative h-full w-full">
          <Image
            className="object-cover"
            src={post.image}
            alt={post.category}
            quality={100}
            fill
            sizes="100vw"
            priority
          />
        </div>
      </div>

      <div className="flex flex-col space-y-5 px-5 pt-5 sm:px-10 sm:pt-10 md:px-20 md:pt-10">
        <h2 className="text-2xl font-bold md:text-[48px]">{post.title}</h2>
        <p className="text-sm whitespace-pre-line text-[rgb(89,89,92)] md:text-[24px]">
          {post.content}
        </p>
      </div>
      <div className="flex flex-col space-y-5 px-5 pt-5 pb-10 sm:px-10 sm:pt-10 sm:pb-15 md:px-20 md:pt-10 md:pb-20">
        <h2 className="text-2xl font-bold md:text-[48px]">
          Brief History About Technology in Nigeria
        </h2>
        <p className="text-sm text-[rgb(89,89,92)] md:text-[24px]">
          {' '}
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

      {relatedPosts.length > 0 && (
        <section className="bg-[rgb(242,241,232)] pt-10 md:pt-30">
          <h2 className="px-5 pb-5 text-2xl font-bold sm:px-10 md:px-20 md:text-[48px]">
            Most Recent
          </h2>
          <div className="xs:p-10 p-5 md:px-20">
            <ul className="xs:grid-cols-2 grid grid-cols-1 gap-6 md:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <li key={relatedPost.id}>
                  <div className="relative h-[342px] w-full">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      className="rounded-[20px] object-cover"
                    />
                  </div>
                  <div className="mt-4 space-y-2">
                    <h3 className="text-lg font-semibold">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-gray-700">
                      {relatedPost.excerpt}
                    </p>
                    <Link
                      href={`/blogs/${relatedPost.id}`}
                      className="font-semibold text-blue-700 hover:underline"
                    >
                      Read more
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <Community />
    </main>
  );
}
