import SucessStories from '@/app/courses/swiper/SucessStories';
import Faqs from '@/features/about_us/Faqs';
import AllCourses from './AllCourses';

export default function Page() {
  return (
    <main>
      <AllCourses />
      <SucessStories />
      <Faqs />
    </main>
  );
}
