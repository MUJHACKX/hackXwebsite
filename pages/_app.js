import '../styles/globals.css';
import { DefaultSeo } from 'next-seo';
//components

import Layout from '../components/Layout';
import Transition from '../components/Transition';
import Head from 'next/head';
//router
import { useRouter } from 'next/router'

//framer motion

import { AnimatePresence, motion } from 'framer-motion'


function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" /> {/* Add viewport meta tag */}
      </Head>
      <Layout>
        <DefaultSeo
          additionalMetaTags={
            [
              {
                name: 'keywords',
                content: 'muj, mujhackx, hackx, hack, x, hack-x, muj hack-x, hackathon, muj hackathon, scse, mujhack-x, manipal university jaipur, manipal, university, jaipur, mahe, unstop, threeway, oracle, oracle academy, aws, azure, casio'
              }
            ]
          }
          title={
            'MUJ HACKX'
          }
          description={
            "Join MUJHackX and let your world-changing ideas shine bright , compete at a global hackathon with a prize pool of 200,000 rupees."
          }
          openGraph={{
            type: 'website',
            locale: 'en_IE',
            url: 'https://mujhackx.com/',
            siteName: 'MUJ HACKX',
          }}
          twitter={{
            handle: '@handle',
            site: '@site',
            cardType: 'summary_large_image',
          }}
        />
        <AnimatePresence mode='wait' >
          <motion.div key={router.route} className='h-full'>
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
