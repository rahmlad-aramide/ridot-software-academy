import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { onest } from '@/fonts';

export const metadata: Metadata = {
  title: 'Ridot Software Academy',
  description:
    'Ridot Software Academy: Empowering Future Developers with Cutting-edge Training in Software Development. Explore our comprehensive programs, expert instructors, and hands-on learning to kickstart your career in the world of coding. Join us for a transformative journey in software education.',
  metadataBase: new URL('https://ridot.org'),
  openGraph: {
    type: 'website',
    title: 'Ridot Software Academy',
    description:
      'Ridot Software Academy: Empowering Future Developers with Cutting-edge Training in Software Development. Explore our comprehensive programs, expert instructors, and hands-on learning to kickstart your career in the world of coding. Join us for a transformative journey in software education.',
    images: [
      {
        url: 'https://res.cloudinary.com/dh4rm7b7b/image/upload/v1699979101/Ridot/logo2d_iz0j94.jpg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ridot Software Academy',
    description:
      'Ridot Software Academy: Empowering Future Developers with Cutting-edge Training in Software Development. Explore our comprehensive programs, expert instructors, and hands-on learning to kickstart your career in the world of coding. Join us for a transformative journey in software education.',
    images: [
      'https://res.cloudinary.com/dh4rm7b7b/image/upload/v1699979101/Ridot/logo2d_iz0j94.jpg',
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${onest.variable} font-onest antialiased`}>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '152480291168856');
fbq('track', 'PageView');`}
        </Script>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
