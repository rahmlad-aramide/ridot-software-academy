import Blog from '@/app/blogs/blog';
import Community from '@/features/about_us/Community';

export default function Page() {
  return (
    <main>
      <section className="bg-[#010080] text-white">
        <div className="flex h-[128px] w-full items-center justify-center md:h-[270px]">
          <h1 className="text-center text-[40px] font-bold md:text-6xl">
           Blog
          </h1>
        </div>
      </section>

      <div>
      <Blog />
      </div>
      <Community />
    </main>
  )
}
