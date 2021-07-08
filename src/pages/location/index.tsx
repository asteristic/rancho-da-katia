import Head from 'next/head';

import Header from '../../components/header';
import ImageTitle from '../../components/imageTilte';
import LocationComponent from '../../components/location';
import Contact from '../../components/contact';
import Footer from '../../components/footer';

export default function Location() {
  return (
    <>
      <Head>
        <title>Rancho Da Katia | Menu</title>
      </Head>
      <Header />
      <ImageTitle 
        title={'Testeful'} 
        subTitle={'Dishes'} 
        backgroundImage={'menu/menu-02.jpg'}
      />
      <LocationComponent />
      <Contact />
      <Footer />
    </>
  )
}