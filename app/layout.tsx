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
        <div className="bg-body-pattern fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-cover opacity-50 z-0 bg-no-repeat" />
        <NavBar />
        <main className='relative z-10 mt-8 mb-8'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
