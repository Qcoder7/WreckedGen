import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

// pages/_app.js
import '../styles/styles.css'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-out-cubic',
      once: false,
      mirror: true,
      offset: 100,
      delay: 100,
    });
    
    // Refresh AOS on route changes
    AOS.refresh();
  }, []);

  return (
    <>
      <Head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Roboto&family=Poppins:wght@200;300;400;500;600;700;800&display=swap" 
          rel="stylesheet" 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Wrecked G3N - Premium Services, Tools, and Accounts" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}