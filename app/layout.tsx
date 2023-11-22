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
      <body className="h-screen bg-body-green w-full relative">
        <div className="bg-body-pattern absolute top-0 left-0 w-full h-full bg-cover mix-blend-multiply opacity-70 bg-no-repeat" />
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
