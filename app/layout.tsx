import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { onest } from '@/fonts';

export const metadata: Metadata = {
  title:
    'Ridot Software Academy | Tech Training for Women & Teenagers in Data Analytics, Web Development & Digital Marketing',
  description:
    'Ridot Software Academy empowers women and teenagers with in-demand tech skills including data science, data analytics, web development, and digital marketing. Start your tech journey today.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${onest.variable} font-onest antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
