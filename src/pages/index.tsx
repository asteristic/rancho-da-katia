import Head from 'next/head';

import Header from '../components/header';
import Landing from '../components/landing';
import OurMenu from '../components/menu';
import SimpleTitle from '../components/simpleTitle';

export default function Home() {
  return (
    <>
      <Head>
        <title>Rancho Da Katia</title>
      </Head>
      <Header />
      <Landing />
      <SimpleTitle title="Menu" subTitle="Dishes" />
      <OurMenu />
      <SimpleTitle title="Our History" subTitle="Find Out More" />

    </>
  )
}
