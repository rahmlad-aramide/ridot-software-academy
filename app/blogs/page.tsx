import { Suspense } from 'react';
import FilteredBlog from '@/app/blogs/filteredBlogs';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading blogs...</div>}>
      <FilteredBlog />
    </Suspense>
  );
}
