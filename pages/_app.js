import MainLayout from '@/layouts/main';
import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps })
{
  return (
    <>
      <Head>
        <title>CF Technologies</title>
        <meta name="description" content="Software Development company from London, UK." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
