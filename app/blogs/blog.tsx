import React from 'react';
import Image from 'next/image';

const blogPosts = [
    {
        image: '/blog-image.png',
        title: 'How to Learn Data Science from scratch',
        content: 'Learning data science is one of the boldest steps you can take in 2025. As technology evolves, the demand for data-driven insights continues to grow, making data science and invaluable skill in the digital space...',
        link: '#',
    },

    {
        image: '/blog-image.png',
        title: 'How to Learn Data Science from scratch',
        content: 'Learning data science is one of the boldest steps you can take in 2025. As technology evolves, the demand for data-driven insights continues to grow, making data science and invaluable skill in the digital space...',
        link: '#',
    },

    {
        image: '/blog-image.png',
        title: 'How to Learn Data Science from scratch',
        content: 'Learning data science is one of the boldest steps you can take in 2025. As technology evolves, the demand for data-driven insights continues to grow, making data science and invaluable skill in the digital space...',
        link: '#',
    },

    {
        image: '/blog-image.png',
        title: 'How to Learn Data Science from scratch',
        content: 'Learning data science is one of the boldest steps you can take in 2025. As technology evolves, the demand for data-driven insights continues to grow, making data science and invaluable skill in the digital space...',
        link: '#',
    },

    {
        image: '/blog-image.png',
        title: 'How to Learn Data Science from scratch',
        content: 'Learning data science is one of the boldest steps you can take in 2025. As technology evolves, the demand for data-driven insights continues to grow, making data science and invaluable skill in the digital space...',
        link: '#',
    },

    {
        image: '/blog-image.png',
        title: 'How to Learn Data Science from scratch',
        content: 'Learning data science is one of the boldest steps you can take in 2025. As technologyevolves, the demand for data-driven insights continues to grow, making data science and invaluable skill in the digital space...',
        link: '#',
    },

    {
        image: '/blog-image.png',
        title: 'How to Learn Data Science from scratch',
        content: 'Learning data science is one of the boldest steps you can take in 2025. As technology evolves, the demand for data-driven insights continues to grow, making data science and invaluable skill in the digital space...',
        link: '#',
    },

     {
        image: '/blog-image.png',
        title: 'How to Learn Data Science from scratch',
        content: 'Learning data science is one of the boldest steps you can take in 2025. As technology evolves, the demand for data-driven insights continues to grow, making data science and invaluable skill in the digital space...',
        link: '#',
    },

     {
        image: '/blog-image.png',
        title: 'How to Learn Data Science from scratch',
        content: 'Learning data science is one of the boldest steps you can take in 2025. As technology evolves, the demand for data-driven insights continues to grow, making data science and invaluable skill in the digital space...',
        link: '#',
    },
]

interface BlogProps {
  limit?: number;
}

export default function Blog({ limit }: BlogProps) {
    const postsToDisplay = limit ? blogPosts.slice(0, limit) : blogPosts;

    return (
        <div className='w-full h-full p-4 lg:pt-10 xl:p-20'>
            <ul className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                {postsToDisplay.map((blog, i) => (
                    <li key={i} className='w-full '>
                        <div className="relative w-full h-[342px]">
                         <Image
                            className="rounded-[20px] object-cover"
                            src={blog.image}
                            alt="blog-img"
                            quality={100}
                            fill sizes="100vw"
                            priority
                        />
                        </div>
                        <div className='space-y-5 mt-7'>
                        <h3 className="text-base md:text-[20px] font-semibold text-gray-900">
                        {blog.title}
                         </h3>
                        <p className="text-sm md:text-base font-medium text-gray-700 ">
                            {blog.content}
                        </p>

                         <a
                            href={blog.link}
                            className="text-[rgb(1,0,128)] text-sm md:text-base font-semibold hover:underline mt-1 inline-block"
                        >
                            Read more
                        </a>
                        </div>
                    </li>
                ))}

            </ul>

        </div>
    )
}