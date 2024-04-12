import './globals.css'
import { Quicksand } from 'next/font/google'

const quicksand = Quicksand({ subsets: ['latin'] })

export const metadata = {
  title: 'Thiago Fernandes | Engenheiro de Software',
  description: 'Portifólio profissional',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen justify-between items-center ${quicksand.className}`}>
        {children}
      </body>
    </html>
  )
}
