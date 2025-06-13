
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

// pages/_app.js
import '../styles/styles.css'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <>
      <Head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Roboto&family=Poppins:wght@200;300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
