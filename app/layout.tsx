import type { Metadata } from 'next';
import Header from '@/components/header';
import './globals.css';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'Agent - Platform to search Front-end vacancy',
  description: 'Platform to search Front-end vacancy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
