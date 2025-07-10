import Faqs from '@/features/about_us/Faqs';
import ContactInfo from '@/app/contact/ContactInfo';
import Form from '@/app/contact/Form';

export default function Page() {
  return (
    <main>
      <section className="bg-[#010080] text-white">
        <div className="flex h-[128px] w-full items-center justify-center sm:h-[218px] md:h-[270px]">
          <h1 className="text-center text-[40px] font-bold md:text-6xl">
            Contact Us
          </h1>
        </div>
      </section>

      <div className="mt-10 flex w-full flex-col items-center justify-center gap-6 px-5 sm:mt-20 md:mt-20 sm:flex-row md:flex-row">
        <Form />
        <div className="flex max-w-xl flex-1 flex-col items-start">
          <iframe
            className="mb-4 h-[346px] w-full rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d252164.69368035524!2d7.4514432!3d9.0570752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1752084010145!5m2!1sen!2sng"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <ContactInfo />
        </div>
      </div>

      <div>
        <Faqs />
      </div>
    </main>
  );
}
