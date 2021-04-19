import Head from 'next/head';

import Header from '../components/header';
import Landing from '../components/landing';

export default function Home() {
  return (
    <>
      <Head>
        <title>Rancho Da Katia</title>
      </Head>
      <Header />
      <Landing />

    </>
  )
}
