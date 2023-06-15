import Header from '@/common/components/header';
import '@/common/styles/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ITech',
  description: 'lorem ipsum',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        <main className='px-[80px]'>{children}</main>
      </body>
    </html>
  );
}
