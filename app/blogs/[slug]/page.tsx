import Image from 'next/image';
import Link from 'next/link';
import { MdArrowBack } from 'react-icons/md';
import { blogPosts } from '@/app/blogs/blogPosts'; // Updated to named import match
import Community from '@/features/about_us/Community';

interface Params {
  slug: string;
}

interface PageProps {
  params: Promise<Params>;
}

export default async function BlogPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p: any) => p.id === slug);

  if (!post) {
    return <div className="p-10 font-bold text-red-600">Post not found</div>;
  }

  // Filter out the current post and sort/slice related content
  const relatedPosts = blogPosts
    .filter((p) => p.category !== post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <main>
      <Link
        href="/blogs"
        className="flex h-[40px] w-[85px] cursor-pointer items-center justify-center space-x-1 rounded-[8px] border border-[rgb(1,0,128)] px-[8px] py-[6px] hover:border-white hover:text-[rgb(1,0,128)] md:mt-20 md:ml-20"
      >
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
        {/* Safely injected HTML content to render custom semantic spacing, lists, and videos */}
        <div
          className="space-y-4 text-sm text-[rgb(89,89,92)] md:text-[24px]"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>

      {relatedPosts.length > 0 && (
        <section className="mt-10 bg-[rgb(242,241,232)] pt-10 md:pt-30">
          <h2 className="px-5 pb-5 text-2xl font-bold sm:px-10 md:px-20 md:text-[48px]">
            Most Recent
          </h2>
          <div className="xs:p-10 p-5 md:px-20">
            <ul className="xs:grid-cols-2 grid grid-cols-1 gap-6 md:grid-cols-3">
              {relatedPosts.map((relatedPost: any) => (
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
