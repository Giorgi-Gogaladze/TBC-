'use client'
import './styles/global.css';
import Head from 'next/head';
import Header from '../Components/header/Header';  
import Footer from '../Components/footer/Footer';
import AuthChecker from '../Components/auth-checker/AuthChecker';
import { usePathname } from 'next/navigation';
import { metadata } from './metadata';



export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>
      <body>
        <AuthChecker>
          {pathname !== '/login' && <Header />}
            {children}
          {pathname !== '/login' && <Footer />}
        </AuthChecker>
      </body>
    </html>
  );
}
