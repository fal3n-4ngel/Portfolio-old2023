
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Adi - fal3n.4ngel ',
  description: 'Developer Human Cinephile.',
}

export default function RootLayout({
  
  children,
}: {
  
  children: React.ReactNode
}) {
 
  return (
    <html lang="en" className=' bg-[#121212] dark:bg-[#121212]' >
      <body className={inter.className}>{children}</body>
    </html>
  )
}
