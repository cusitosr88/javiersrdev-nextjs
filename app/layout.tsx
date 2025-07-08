import dynamic from 'next/dynamic'
import Header from '@/app/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/app/components/Footer'

const ScrollToTop = dynamic(() => import('./components/GotoTop'))

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
          <ScrollToTop/>
          <Footer/>
        </div>
      </body>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1156952395117339"
     crossorigin="anonymous"></script>
    </html>
  )
}
