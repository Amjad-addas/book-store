import  {ThemeProvider}  from '@/context/ThemeContext'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import style from './page.module.css'
import './globals.css'
import { Chivo, Inter ,Lalezar} from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const lalezar = Lalezar({ subsets: ['arabic'],weight:['400'] })
export const metadata = {
  title: 'Hexa Shope',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
   
    
      <body className={inter.className}>

      <ThemeProvider>
      <div className={style.main}>
        <Navbar/>
        {children}
        <Footer/>
        </div>
      </ThemeProvider>

      </body>

    </html>
  )
}
