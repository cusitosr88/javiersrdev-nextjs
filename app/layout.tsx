import Header from '@/app/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/app/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'JavierDev Portfolio | Web Developer',
  description: 'Take a closer look at my portfolio, an experienced web developer with expertise in Vue.js, Quasar Framework, Nuxt.js, React and JavaScript.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-slate-800">
          <Header/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  )
}