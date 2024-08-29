import Head from 'next/head';
import Loader from '../components/Loader';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Loader Example</title>
        <meta name="description" content="Loader example with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1></h1>
        <Loader />
      </main>
    </div>
  );
}
