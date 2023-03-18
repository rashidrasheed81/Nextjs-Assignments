import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import './globals.css'

export const metadata = {
  title: 'myresume',
  description: 'Generated by create next app',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body>
      <Header/>
        {children}
        <Footer/>

        </body>
    </html>
  )
}
