import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/footer'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html>
      <body className={inter.className}>
        <div className="container">
          <Navbar/>
            {children}
          <Footer/>
        </div>
      </body>
    </html>
  )
}
