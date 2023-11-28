import type { Metadata } from 'next'
import './globals.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'


export const metadata: Metadata = {
  title: 'ayanfedara',
  description: 'My Boss',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen overflow-auto bg-body-black w-full relative">
        <div className="body_overlay" />
        <NavBar />
        <main className='relative z-10 mt-5 mb-5 sm:mb-8 sm:mt-8'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
