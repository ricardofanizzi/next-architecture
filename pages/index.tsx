import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>My web</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header></header>

      <main>
        <h1>Hello my new applcation</h1>
      </main>

      <footer></footer>
    </>
  );
};

export default Home;
