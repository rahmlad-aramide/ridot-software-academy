import Faqs from '@/features/about_us/Faqs';
import ContactInfo from '@/app/contact/ContactInfo';
import Form from '@/app/contact/Form';

export default function Page() {
  return (
    <main>
      <section className="bg-[#010080] text-white">
        <div className="xs:h-[218px] flex h-[128px] w-full items-center justify-center md:h-[270px]">
          <h1 className="text-center text-[40px] font-bold md:text-6xl">
            Contact Us
          </h1>
        </div>
      </section>

      <div className="xs:mt-20 xs:flex-row mt-10 flex w-full flex-col items-center justify-center gap-6 px-5 md:mt-20 md:flex-row">
        <Form />
        <div className="flex w-full flex-1 flex-col items-start md:max-w-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.46310731795!2d3.1191424086628525!3d6.5483693716861335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1752302904643!5m2!1sen!2sng"
            className="mb-4 h-[346px] w-full rounded-lg"
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
