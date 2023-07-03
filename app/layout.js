import Footer from './components/footer'
import Navbar from './components/navbar'
import './globals.css'
import { Alegreya } from 'next/font/google'

const inter = Alegreya({ subsets: ['latin'],
style:['normal', 'italic'] })

export const metadata = {
  title: 'The Golf Club',
  description: 'the golf club of lebanon',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
